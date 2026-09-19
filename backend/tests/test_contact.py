from unittest.mock import AsyncMock, patch

from fastapi.testclient import TestClient

from app.config import get_settings
from app.main import app
from app.rate_limit import limiter


def setup_function() -> None:
    get_settings.cache_clear()
    limiter._hits.clear()
    app.dependency_overrides.clear()


client = TestClient(app)


def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_validation_rejects_short_message():
    response = client.post(
        "/api/contact",
        json={
            "name": "Ada",
            "email": "ada@example.com",
            "subject": "Hello there",
            "message": "short",
        },
    )
    assert response.status_code == 422
    body = response.json()
    assert body["success"] is False


def test_honeypot_skips_email():
    with patch("app.main.send_contact_email", new_callable=AsyncMock) as send:
        response = client.post(
            "/api/contact",
            json={
                "name": "Ada Lovelace",
                "email": "ada@example.com",
                "subject": "Hello there",
                "message": "This is a real looking message.",
                "website": "https://spam.test",
            },
        )
    assert response.status_code == 200
    assert response.json()["success"] is True
    send.assert_not_called()


def test_missing_mail_config_returns_503():
    response = client.post(
        "/api/contact",
        json={
            "name": "Ada Lovelace",
            "email": "ada@example.com",
            "subject": "Hello there",
            "message": "This is a real looking message.",
        },
    )
    assert response.status_code == 503
    assert response.json()["success"] is False


def test_successful_send():
    settings = get_settings().model_copy(
        update={
            "gmail_address": "piyushasthana444@gmail.com",
            "gmail_app_password": "fake-app-password",
        }
    )
    app.dependency_overrides[get_settings] = lambda: settings

    with patch("app.main.send_contact_email", new_callable=AsyncMock) as send:
        response = client.post(
            "/api/contact",
            json={
                "name": "Ada Lovelace",
                "email": "ada@example.com",
                "subject": "Hello there",
                "message": "This is a real looking message.",
            },
        )

    assert response.status_code == 200
    assert response.json()["success"] is True
    send.assert_awaited_once()
