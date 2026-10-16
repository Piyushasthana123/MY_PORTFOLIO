from email.message import EmailMessage
from html import escape
import logging

import aiosmtplib
import certifi
import httpx

from app.config import Settings

logger = logging.getLogger("portfolio.email")


def build_email_content(payload):
    safe_name = escape(payload.name)
    safe_email = escape(str(payload.email))
    safe_subject = escape(payload.subject)
    safe_message = escape(payload.message).replace("\n", "<br />")

    text_body = (
        f"New portfolio message\n\n"
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n"
        f"Subject: {payload.subject}\n\n"
        f"{payload.message}\n"
    )

    html_body = f"""
    <html>
      <body style="font-family: Georgia, serif; color: #1a1714; line-height: 1.6;">
        <p style="margin: 0 0 16px; color: #6a635b; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;">
          Portfolio contact
        </p>
        <h1 style="font-size: 22px; font-weight: normal; margin: 0 0 20px;">{safe_subject}</h1>
        <p><strong>Name:</strong> {safe_name}</p>
        <p><strong>Email:</strong> {safe_email}</p>
        <p style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #ece6db;">
          {safe_message}
        </p>
      </body>
    </html>
    """
    return text_body, html_body


def build_email(payload, settings: Settings) -> EmailMessage:
    text_body, html_body = build_email_content(payload)
    message = EmailMessage()
    message["From"] = f"Portfolio <{settings.gmail_address}>"
    message["To"] = settings.mail_to
    message["Reply-To"] = str(payload.email)
    message["Subject"] = f"Portfolio: {payload.subject}"
    message.set_content(text_body)
    message.add_alternative(html_body, subtype="html")
    return message


async def send_via_resend(payload, settings: Settings) -> None:
    text_body, html_body = build_email_content(payload)
    async with httpx.AsyncClient(timeout=15.0) as client:
        res = await client.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {settings.resend_api_key}",
                "Content-Type": "application/json",
            },
            json={
                "from": "Portfolio Contact <onboarding@resend.dev>",
                "to": [settings.mail_to],
                "reply_to": str(payload.email),
                "subject": f"Portfolio: {payload.subject}",
                "text": text_body,
                "html": html_body,
            },
        )
        if not res.is_success:
            logger.error("Resend API failed: %s", res.text)
            raise RuntimeError(f"Resend API error: {res.text}")


async def send_via_web3forms(payload, settings: Settings) -> None:
    async with httpx.AsyncClient(timeout=15.0) as client:
        res = await client.post(
            "https://api.web3forms.com/submit",
            json={
                "access_key": settings.web3forms_access_key,
                "name": payload.name,
                "email": str(payload.email),
                "subject": f"Portfolio: {payload.subject}",
                "message": payload.message,
                "from_name": f"{payload.name} (Portfolio)",
                "replyto": str(payload.email),
            },
        )
        if not res.is_success:
            logger.error("Web3Forms API failed: %s", res.text)
            raise RuntimeError(f"Web3Forms API error: {res.text}")
        data = res.json()
        if not data.get("success"):
            raise RuntimeError(f"Web3Forms failed: {data.get('message')}")


async def send_contact_email(payload, settings: Settings) -> None:
    if not settings.mail_configured:
        raise RuntimeError("Email is not configured on the server.")

    # 1. Resend API (HTTPS Port 443 - works on Render Free Tier)
    if settings.resend_api_key:
        await send_via_resend(payload, settings)
        return

    # 2. Web3Forms API (HTTPS Port 443 - works on Render Free Tier)
    if settings.web3forms_access_key:
        await send_via_web3forms(payload, settings)
        return

    # 3. Gmail SMTP (requires unblocked SMTP port 587)
    message = build_email(payload, settings)
    await aiosmtplib.send(
        message,
        hostname=settings.smtp_host,
        port=settings.smtp_port,
        username=settings.gmail_address,
        password=settings.gmail_app_password,
        start_tls=True,
        cert_bundle=certifi.where(),
    )
