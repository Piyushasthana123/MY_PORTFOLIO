# Piyush Asthana — Developer Portfolio

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS**, and **FastAPI**. The portfolio showcases projects, skills, and personal information, with a fully functional contact form powered by a FastAPI backend and Gmail SMTP.

---

## 🚀 Live Portfolio

**Portfolio:** `https://your-portfolio-url.com`

> Replace the URL above with your deployed portfolio URL.

---

## ✨ Features

* 🎨 Modern and responsive UI
* 🌙 Dark / Light mode
* ⚡ Fast Vite-powered frontend
* 🎬 Smooth animations with Framer Motion
* 📱 Mobile, tablet, and desktop responsive design
* 🧑‍💻 Projects and skills showcase
* 📩 Functional contact form
* 🐍 FastAPI backend
* 📧 Gmail SMTP email delivery
* 🛡️ Honeypot protection
* ⏱️ IP-based rate limiting
* 🔐 Environment-based configuration
* 🧪 Backend API tests
* ☁️ Production-ready deployment

---

# 🛠️ Tech Stack

## Frontend

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| React 19       | UI development                |
| Vite 8         | Development and build tooling |
| Tailwind CSS 4 | Styling                       |
| Framer Motion  | Animations                    |
| JavaScript     | Application logic             |

## Backend

| Technology | Purpose             |
| ---------- | ------------------- |
| Python     | Backend development |
| FastAPI    | REST API            |
| Gmail SMTP | Email delivery      |
| Pytest     | API testing         |

## Deployment

| Service | Purpose                 |
| ------- | ----------------------- |
| Vercel  | Frontend hosting        |
| Render  | FastAPI backend hosting |
| Gmail   | Contact email delivery  |

---

# 📁 Project Structure

```text
portfolio/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── ...
│
├── backend/
│   ├── app/
│   │   └── main.py
│   │
│   ├── tests/
│   ├── requirements.txt
│   └── .env.example
│
├── public/
├── .env.example
├── render.yaml
├── package.json
└── README.md
```

---

# ⚡ Getting Started

## Prerequisites

Install the following before starting:

* Node.js
* npm
* Python 3.10+
* Git

Check your installed versions:

```bash
node --version
npm --version
python3 --version
git --version
```

---

# 💻 Frontend Setup

## 1. Clone the Repository

```bash
git clone https://github.com/Piyushasthana123/your-repository.git
cd your-repository
```

## 2. Install Frontend Dependencies

```bash
npm install
```

## 3. Configure Frontend Environment

Copy the example environment file:

```bash
cp .env.example .env
```

For local development, the API URL can remain empty if Vite is configured to proxy `/api` requests:

```env
VITE_API_URL=
```

Optional GitHub token:

```env
VITE_GITHUB_TOKEN=your_github_token
```

> Never put private secrets in frontend variables. Any variable beginning with `VITE_` can be exposed to the browser.

## 4. Start Frontend

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# 🐍 Backend Setup — FastAPI

The backend handles the portfolio contact form and sends submitted messages to Gmail.

The backend runs separately from the React frontend.

---

## 1. Open the Backend Directory

From the project root:

```bash
cd backend
```

---

## 2. Create a Python Virtual Environment

### macOS / Linux

```bash
python3 -m venv .venv
```

### Windows

```bash
python -m venv .venv
```

---

## 3. Activate the Virtual Environment

### macOS / Linux

```bash
source .venv/bin/activate
```

### Windows CMD

```cmd
.venv\Scripts\activate
```

### Windows PowerShell

```powershell
.venv\Scripts\Activate.ps1
```

After activation, your terminal should show something similar to:

```text
(.venv)
```

---

## 4. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

# 📧 Configure Gmail SMTP

The contact API uses a Gmail **App Password**.

## Step 1 — Enable 2-Step Verification

Enable 2-Step Verification for the Gmail account used by the backend.

## Step 2 — Generate an App Password

Create a Gmail App Password from your Google Account security settings.

Copy the generated password.

## Step 3 — Create Backend `.env`

Inside the `backend` directory:

```bash
cp .env.example .env
```

Configure:

```env
GMAIL_ADDRESS=piyushasthana444@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
MAIL_TO=piyushasthana444@gmail.com

CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

### Important

Do **not** commit the `.env` file.

Your `.gitignore` should contain:

```gitignore
.env
.venv/
__pycache__/
.pytest_cache/
```

---

# ▶️ Run FastAPI Backend Locally

Make sure you are inside the `backend` directory and the virtual environment is active.

```bash
cd backend
source .venv/bin/activate
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload --port 8000
```

The backend will run at:

```text
http://127.0.0.1:8000
```

---

# ❤️ Backend Health Check

Open:

```text
http://127.0.0.1:8000/health
```

You can also open the FastAPI Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

The Swagger UI allows you to test the API manually.

---

# 📩 Contact API

The contact form sends requests to:

```http
POST /api/contact
```

Example request flow:

```text
React Contact Form
       │
       │ POST /api/contact
       ▼
    FastAPI
       │
       ├── Validate input
       ├── Honeypot check
       ├── Rate-limit check
       │
       ▼
   Gmail SMTP
       │
       ▼
  Piyush's Gmail
```

---

# 🧪 Run Backend Tests

From the `backend` directory:

```bash
source .venv/bin/activate
```

Run:

```bash
PYTHONPATH=. pytest -q
```

A successful test run confirms that the API functionality is working as expected.

---

# 🔄 Run Frontend + Backend Together

You need **two terminal windows** during local development.

### Terminal 1 — Frontend

From the project root:

```bash
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

### Terminal 2 — Backend

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload --port 8000
```

Backend:

```text
http://127.0.0.1:8000
```

Now open:

```text
http://localhost:5173
```

and test the contact form.

---

# 🌐 Production Deployment

The recommended production architecture is:

```text
                  INTERNET
                     │
                     ▼
          ┌────────────────────┐
          │       Vercel       │
          │   React Frontend   │
          └─────────┬──────────┘
                    │
                    │ HTTPS
                    │
                    ▼
          ┌────────────────────┐
          │      Render        │
          │   FastAPI Backend  │
          └─────────┬──────────┘
                    │
                    │ SMTP
                    ▼
          ┌────────────────────┐
          │       Gmail        │
          │ Contact Messages   │
          └────────────────────┘
```

---

# 🚀 Deploy FastAPI Backend to Render

## Step 1 — Push the Project to GitHub

Make sure your latest code is pushed:

```bash
git add .
git commit -m "Prepare portfolio for production"
git push origin main
```

Make sure `.env` is **not** included in the repository.

---

## Step 2 — Create a Render Service

Go to Render and create a new **Web Service**.

Connect your GitHub repository.

If the repository contains both frontend and backend, configure Render to use:

```text
Root Directory:
backend
```

---

## Step 3 — Configure Backend Build Command

Use:

```bash
pip install -r requirements.txt
```

---

## Step 4 — Configure Start Command

Use:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

Render provides the `$PORT` environment variable automatically.

---

## Step 5 — Select Python Environment

Use the Python version supported by your project.

If your project contains a Python version configuration file, make sure it matches the version used locally.

---

# 🔐 Add Render Environment Variables

In Render:

**Dashboard → Your Service → Environment → Environment Variables**

Add:

```env
GMAIL_ADDRESS=piyushasthana444@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
MAIL_TO=piyushasthana444@gmail.com
CORS_ORIGINS=https://your-portfolio.vercel.app
```

Do not put these secrets inside your GitHub repository.

---

# 🚀 Deploy the Backend

Click:

```text
Deploy
```

Render will:

```text
GitHub Repository
       ↓
Install Python dependencies
       ↓
Start FastAPI
       ↓
Expose public HTTPS URL
```

Your backend URL will look similar to:

```text
https://your-portfolio-api.onrender.com
```

---

# ❤️ Test the Production Backend

Open:

```text
https://your-portfolio-api.onrender.com/health
```

Also check:

```text
https://your-portfolio-api.onrender.com/docs
```

If both endpoints work, the FastAPI deployment is running successfully.

---

# 🌐 Deploy React Frontend to Vercel

## Step 1 — Import Repository

Create a new project on Vercel and import your GitHub repository.

If your React application is located in the repository root, use the root directory.

---

## Step 2 — Configure Build Settings

Typical Vite settings:

```text
Framework:
Vite

Build Command:
npm run build

Output Directory:
dist

Install Command:
npm install
```

---

# 🔑 Configure Vercel Environment Variables

Go to:

```text
Vercel Dashboard
→ Project
→ Settings
→ Environment Variables
```

Add:

```env
VITE_API_URL=https://your-portfolio-api.onrender.com
```

If GitHub API functionality requires a token:

```env
VITE_GITHUB_TOKEN=your_github_token
```

> Remember that `VITE_*` variables are available to the frontend. Do not store Gmail credentials here.

---

# 🚀 Deploy Frontend

Click:

```text
Deploy
```

Vercel will:

```text
GitHub Repository
       ↓
npm install
       ↓
npm run build
       ↓
Generate dist/
       ↓
Deploy React application
       ↓
Public HTTPS URL
```

Your portfolio URL will look similar to:

```text
https://your-portfolio.vercel.app
```

---

# 🔗 Connect Vercel Frontend with Render Backend

After getting the Vercel domain, update the Render environment variable:

```env
CORS_ORIGINS=https://your-portfolio.vercel.app
```

Then redeploy/restart the Render service.

On Vercel, make sure:

```env
VITE_API_URL=https://your-portfolio-api.onrender.com
```

Then redeploy the frontend so the new environment variable is included in the production build.

---

# 🧪 Final Production Testing

After both deployments are complete, test the complete flow.

### 1. Open Portfolio

```text
https://your-portfolio.vercel.app
```

### 2. Open Backend Health

```text
https://your-portfolio-api.onrender.com/health
```

### 3. Test Contact Form

Fill in:

```text
Name
Email
Message
```

Submit the form.

### 4. Verify Gmail

Check:

```text
piyushasthana444@gmail.com
```

The submitted contact message should arrive there.

---

# 🔧 Production Troubleshooting

## Contact Form Not Working

Check:

```text
VITE_API_URL
```

Make sure it points to the deployed FastAPI backend.

Example:

```env
VITE_API_URL=https://your-portfolio-api.onrender.com
```

---

## CORS Error

Make sure Render contains the exact frontend origin:

```env
CORS_ORIGINS=https://your-portfolio.vercel.app
```

Do not add unnecessary paths such as:

```text
https://your-portfolio.vercel.app/contact
```

Use the origin only.

---

## Gmail Email Not Sending

Check Render environment variables:

```env
GMAIL_ADDRESS
GMAIL_APP_PASSWORD
MAIL_TO
```

Also verify that the Gmail App Password is correct.

---

## Backend Not Starting

Check the Render logs.

The start command should be:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

---

## Frontend Changes Not Appearing

After changing frontend environment variables, create a new deployment.

```bash
npm run build
```

Then redeploy through Vercel.

---

# 🔒 Security

The application follows these basic security practices:

### Server-Side Gmail Credentials

Gmail credentials exist only on the backend.

### Honeypot Protection

A hidden form field helps identify basic automated submissions.

### Rate Limiting

IP-based rate limiting helps reduce spam and excessive requests.

### CORS

Only configured frontend origins are allowed to communicate with the API.

### Environment Variables

Secrets are stored through environment variables rather than committed to GitHub.

---

# 📦 Production Build

Before deploying, test the frontend production build locally:

```bash
npm run build
```

Preview it:

```bash
npm run preview
```

For the backend:

```bash
cd backend
source .venv/bin/activate
PYTHONPATH=. pytest -q
```

Recommended final checklist:

```text
☑ Frontend build succeeds
☑ Backend tests pass
☑ /health endpoint works
☑ /docs endpoint works
☑ Gmail credentials configured
☑ CORS configured
☑ VITE_API_URL configured
☑ .env is not committed
☑ Contact form tested
☑ Production deployment tested
```

---

# 👨‍💻 Author

## Piyush Asthana

**Full Stack Developer | Python Developer | AI/ML Enthusiast**

Computer Science Engineering student interested in building modern web applications, backend systems, APIs, and AI-powered solutions.

### Tech Interests

* Python
* FastAPI
* React
* JavaScript
* Next.js
* Tailwind CSS
* Data Structures & Algorithms
* Data Analytics
* AI / Machine Learning
* REST APIs
* Git & GitHub

---

# 🔗 Connect With Me

* **GitHub:** `https://github.com/Piyushasthana123`
* **LinkedIn:** `https://linkedin.com/in/piyush-asthana-6ba93334a`

---

# 📌 Future Improvements

* [ ] Project filtering and search
* [ ] Blog section
* [ ] Downloadable resume
* [ ] Analytics
* [ ] GitHub Actions CI/CD
* [ ] Production monitoring
* [ ] Database-backed contact management
* [ ] Automated deployment pipeline

---

# 📄 License

This project is created and maintained by **Piyush Asthana**.

You are welcome to explore the project and use it as inspiration for your own portfolio.

---

⭐ **If you find this project useful, consider giving the repository a star!**
