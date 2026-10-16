import asyncio
import sys
from app.config import get_settings
from app.email_service import build_email, send_contact_email
from app.models import ContactRequest


async def main():
    settings = get_settings()
    print("=" * 60)
    print("Checking Portfolio Email Delivery Configuration...")
    print(f"Gmail Address: {settings.gmail_address}")
    print(f"Recipient (MAIL_TO): {settings.mail_to}")
    if settings.resend_api_key:
        print("Provider: Resend API (HTTPS Port 443 - Cloud Safe)")
    elif settings.web3forms_access_key:
        print("Provider: Web3Forms API (HTTPS Port 443 - Cloud Safe)")
    else:
        print(f"Provider: Gmail SMTP ({settings.smtp_host}:{settings.smtp_port})")

    if not settings.mail_configured:
        print("\n❌ GMAIL_APP_PASSWORD abhi configured nahi hai (ya default placeholder hai).")
        print("Kripya 'backend/.env' me apna 16-character Google App Password set karein:")
        print("https://myaccount.google.com/apppasswords")
        print("=" * 60)
        sys.exit(1)

    print("\nSending test verification email to your inbox...")
    test_payload = ContactRequest(
        name="Portfolio Verification Bot",
        email=settings.gmail_address,
        subject="Verification Test - Portfolio Contact Form",
        message="Hello Piyush! This is a verification test to confirm your FastAPI contact service is working and delivering emails directly to your Gmail.",
    )

    try:
        await send_contact_email(test_payload, settings)
        print("✅ SUCCESS! Test email aapke Gmail inbox me successfully deliver ho gaya hai.")
        print("Ab website se koi bhi message bhejega to direct aapke email par aayega!")
    except Exception as e:
        print(f"\n❌ Error sending email: {e}")
        print("\nAgar authentication error hai, to check karein ki Google App Password sahi hai ya nahi.")
    print("=" * 60)


if __name__ == "__main__":
    asyncio.run(main())
