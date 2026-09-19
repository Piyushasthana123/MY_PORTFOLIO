from email.message import EmailMessage
from html import escape

import aiosmtplib

from app.config import Settings


def build_email(payload, settings: Settings) -> EmailMessage:
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

    message = EmailMessage()
    message["From"] = f"Portfolio <{settings.gmail_address}>"
    message["To"] = settings.mail_to
    message["Reply-To"] = str(payload.email)
    message["Subject"] = f"Portfolio: {payload.subject}"
    message.set_content(text_body)
    message.add_alternative(html_body, subtype="html")
    return message


async def send_contact_email(payload, settings: Settings) -> None:
    if not settings.mail_configured:
        raise RuntimeError("Email is not configured on the server.")

    message = build_email(payload, settings)
    await aiosmtplib.send(
        message,
        hostname=settings.smtp_host,
        port=settings.smtp_port,
        username=settings.gmail_address,
        password=settings.gmail_app_password,
        start_tls=True,
    )
