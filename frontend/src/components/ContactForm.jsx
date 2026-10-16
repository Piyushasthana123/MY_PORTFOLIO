import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import {
  submitContactForm,
  validateContactForm,
} from "../services/contactService";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      await submitContactForm(formData);
      setStatus("success");
      setStatusMessage("Thanks — your message is in my inbox. I’ll reply when I can.");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error.message || "The message didn’t send. Please try again in a moment."
      );
    }
  };

  const fieldClass = (hasError) =>
    `form-control w-full rounded-xl px-4 py-3 text-sm ${hasError ? "border-[var(--error-text)]" : ""}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-heading">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(errors.name)}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-[var(--error-text)]" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-heading">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@email.com"
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(errors.email)}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-[var(--error-text)]" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-heading">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What’s this about?"
          maxLength={150}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClass(errors.subject)}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-[var(--error-text)]" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-heading">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder="A few sentences about the idea, the timeline, or just a hello."
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass(errors.message)} resize-y min-h-[140px]`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-[var(--error-text)]" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {status === "success" && (
        <div className="alert-success flex items-start gap-3 rounded-xl p-4 text-sm" role="status">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          {statusMessage}
        </div>
      )}

      {status === "error" && (
        <div className="alert-error flex items-start gap-3 rounded-xl p-4 text-sm" role="alert">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
