import logging
from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException, Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.config import Settings, get_settings
from app.email_service import send_contact_email
from app.models import ContactRequest, ContactResponse
from app.rate_limit import enforce_rate_limit

logger = logging.getLogger("portfolio.api")
logging.basicConfig(level=logging.INFO)


@asynccontextmanager
async def lifespan(_app: FastAPI):
    settings = get_settings()
    if not settings.mail_configured:
        logger.warning(
            "GMAIL_ADDRESS / GMAIL_APP_PASSWORD are missing. Contact submissions will fail until they are set."
        )
    yield


app = FastAPI(
    title="Piyush Asthana Portfolio API",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url=None,
)


settings_bootstrap = get_settings()
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings_bootstrap.origin_list,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Accept"],
    max_age=600,
)


@app.exception_handler(RequestValidationError)
async def validation_handler(_request: Request, exc: RequestValidationError):
    first = exc.errors()[0] if exc.errors() else {}
    loc = first.get("loc", [])
    field = loc[-1] if loc else "form"
    msg = first.get("msg", "Invalid input")
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "success": False,
            "message": f"{field}: {msg}",
            "errors": exc.errors(),
        },
    )


@app.exception_handler(HTTPException)
async def http_handler(_request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"success": False, "message": exc.detail},
        headers=exc.headers,
    )


@app.get("/health")
async def health(settings: Settings = Depends(get_settings)):
    return {
        "status": "ok",
        "mail_configured": settings.mail_configured,
        "environment": settings.environment,
    }


@app.post("/api/contact", response_model=ContactResponse)
async def contact(
    payload: ContactRequest,
    request: Request,
    settings: Settings = Depends(get_settings),
):
    enforce_rate_limit(request, settings)

    if payload.website:
        logger.info("Dropped contact submission (honeypot).")
        return ContactResponse(
            success=True,
            message="Thanks — your message is on its way.",
        )

    if not settings.mail_configured:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="The contact service is not configured yet. Please email me directly.",
        )

    try:
        await send_contact_email(payload, settings)
    except Exception:
        logger.exception("Failed to send contact email")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="The message could not be delivered. Please try again or email me directly.",
        ) from None

    logger.info("Contact email sent from %s", payload.email)
    return ContactResponse(
        success=True,
        message="Thanks — your message is in my inbox.",
    )
