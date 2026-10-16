from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_DIR = Path(__file__).resolve().parent.parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=(
            BACKEND_DIR / ".env",
            Path(".env"),
        ),
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=False,
    )

    app_name: str = "Piyush Portfolio API"
    environment: str = "development"
    cors_origins: str = "*"
    gmail_address: str = ""
    gmail_app_password: str = ""
    mail_to: str = "piyushasthana444@gmail.com"
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    resend_api_key: str = ""
    web3forms_access_key: str = ""
    rate_limit_requests: int = 5
    rate_limit_window_seconds: int = 900

    @property
    def origin_list(self) -> list[str]:
        if not self.cors_origins or self.cors_origins.strip() == "*":
            return ["*"]
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    @property
    def mail_configured(self) -> bool:
        if bool(self.resend_api_key or self.web3forms_access_key):
            return True
        is_placeholder = "your_" in self.gmail_app_password.lower() or "example" in self.gmail_app_password.lower()
        return bool(self.gmail_address and self.gmail_app_password and not is_placeholder)


@lru_cache
def get_settings() -> Settings:
    return Settings()
