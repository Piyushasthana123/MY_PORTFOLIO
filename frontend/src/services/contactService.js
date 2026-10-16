const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm({ name, email, subject, message }) {
  const errors = {};

  if (!name?.trim()) {
    errors.name = "Name is required";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!email?.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!subject?.trim()) {
    errors.subject = "Subject is required";
  } else if (subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  }

  if (!message?.trim()) {
    errors.message = "Message is required";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

function parseApiError(payload, fallback) {
  if (!payload || typeof payload !== "object") return fallback;

  if (typeof payload.message === "string" && payload.message) {
    return payload.message;
  }

  if (typeof payload.detail === "string" && payload.detail) {
    return payload.detail;
  }

  if (Array.isArray(payload.detail) && payload.detail[0]?.msg) {
    return payload.detail[0].msg;
  }

  return fallback;
}

export async function submitContactForm(formData) {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      website: formData.website || "",
    }),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      parseApiError(payload, "Failed to send message. Please try again.")
    );
  }

  return payload;
}
