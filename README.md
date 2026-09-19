# Piyush Asthana — Portfolio

A personal developer site built with **React**, **Tailwind CSS**, and a **FastAPI** contact API that delivers messages to Gmail.

## Stack

- Frontend: React 19, Vite 8, Tailwind CSS 4, Framer Motion
- Backend: Python FastAPI, Gmail SMTP (App Password)

## Frontend

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build
npm run preview
```

Copy `.env.example` to `.env` if you need a production API URL:

| Variable | Description |
|---|---|
| `VITE_API_URL` | Public FastAPI origin (leave empty in local Vite; `/api` is proxied) |
| `VITE_GITHUB_TOKEN` | Optional GitHub token for higher rate limits |

## Contact API

The form posts to `POST /api/contact`. The API validates input, applies a honeypot + IP rate limit, and sends email over Gmail SMTP. Credentials stay on the server.

### 1. Gmail App Password

1. Turn on 2-Step Verification on `piyushasthana444@gmail.com`.
2. Create an [App Password](https://myaccount.google.com/apppasswords).
3. Copy `backend/.env.example` to `backend/.env` and set:

```bash
GMAIL_ADDRESS=piyushasthana444@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
MAIL_TO=piyushasthana444@gmail.com
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

### 2. Run locally

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Health check: [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health)

### 3. Tests

```bash
cd backend
source .venv/bin/activate
PYTHONPATH=. pytest -q
```

## Production (always-on API)

Use a **paid** web service so the API does not sleep (Render Starter, Railway, Fly.io, or similar). Free tiers often spin down and contact would fail until the instance wakes.

### Render

`render.yaml` describes a Python web service from `backend/`.

1. Create a Render account and a new Blueprint from this repo.
2. Set secret env vars: `GMAIL_ADDRESS`, `GMAIL_APP_PASSWORD`, `CORS_ORIGINS` (your live frontend origin, e.g. `https://your-site.vercel.app`).
3. Choose a **Starter** (or higher) plan so the process stays up 24/7.
4. After deploy, set `VITE_API_URL` on the frontend host to `https://<your-service>.onrender.com` and rebuild.

Health: `GET https://<your-service>.onrender.com/health`

## Project layout

```
src/                 React app
backend/app/        FastAPI application
backend/tests/      API tests
render.yaml          Render Blueprint
```
