"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface Props {
  includeOrganization?: boolean;
  includeInquiryType?: boolean;
}

export default function ContactForm({ includeOrganization, includeInquiryType }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name) newErrors.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email address.";
    if (!message) newErrors.message = "Enter a message.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("submitting");
    // Placeholder submit — wire up to a real endpoint (e.g. an API route or form service).
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl2 border border-border bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="text-blue" size={32} />
        <p className="font-medium text-dark-blue">Message sent.</p>
        <p className="text-[14px] text-body">We'll get back to you as soon as we can.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Name" name="name" error={errors.name} required />
      <Field label="Email" name="email" type="email" error={errors.email} required />
      {includeOrganization && <Field label="Organization" name="organization" />}
      {includeInquiryType && (
        <div>
          <label htmlFor="inquiryType" className="mb-1.5 block text-[14px] font-medium text-dark-blue">
            Type of Inquiry
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-dark-blue outline-none focus:border-blue"
          >
            <option>General question</option>
            <option>Workshop booking</option>
            <option>Partnership</option>
            <option>Oil donation</option>
            <option>Volunteering</option>
          </select>
        </div>
      )}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-[14px] font-medium text-dark-blue">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-dark-blue outline-none focus:border-blue ${
            errors.message ? "border-red-400" : "border-border"
          }`}
        />
        {errors.message && <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-dark-blue disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[14px] font-medium text-dark-blue">
        {label}
        {required && <span className="text-blue"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-dark-blue outline-none focus:border-blue ${
          error ? "border-red-400" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-[13px] text-red-500">{error}</p>}
    </div>
  );
}
