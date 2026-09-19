from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=False,
    )

    app_name: str = "Piyush Portfolio API"
    environment: str = "development"
    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173"
    gmail_address: str = ""
    gmail_app_password: str = ""
    mail_to: str = "piyushasthana444@gmail.com"
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    rate_limit_requests: int = 5
    rate_limit_window_seconds: int = 900

    @property
    def origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    @property
    def mail_configured(self) -> bool:
        return bool(self.gmail_address and self.gmail_app_password)


@lru_cache
def get_settings() -> Settings:
    return Settings()
