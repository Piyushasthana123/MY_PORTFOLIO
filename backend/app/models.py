import re

from pydantic import BaseModel, EmailStr, Field, field_validator

URL_IN_NAME = re.compile(r"https?://|www\.", re.IGNORECASE)


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(min_length=3, max_length=150)
    message: str = Field(min_length=10, max_length=5000)
    website: str = Field(default="", max_length=200)

    @field_validator("name", "subject", "message", "website", mode="before")
    @classmethod
    def strip_text(cls, value: object) -> object:
        if isinstance(value, str):
            return value.strip()
        return value

    @field_validator("name")
    @classmethod
    def name_without_urls(cls, value: str) -> str:
        if URL_IN_NAME.search(value):
            raise ValueError("Name looks invalid")
        return value


class ContactResponse(BaseModel):
    success: bool
    message: str
