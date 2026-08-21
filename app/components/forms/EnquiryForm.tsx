"use client";

import { useId, useState } from "react";
import {
  PRODUCT_INTERESTS,
  validateEnquiry,
  type EnquiryInput,
  type FieldErrors,
} from "../../lib/enquiry";

const EMPTY: EnquiryInput = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "",
  message: "",
  website: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm() {
  const formId = useId();
  const [values, setValues] = useState<EnquiryInput>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const fieldId = (name: string) => `${formId}-${name}`;
  const errorId = (name: string) => `${formId}-${name}-error`;

  function update(name: keyof EnquiryInput, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const validationErrors = validateEnquiry(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setFormError("Please check the highlighted fields and try again.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!response.ok) {
        setErrors(data.fieldErrors ?? {});
        setFormError(
          data.error ??
            "We could not send your enquiry. Please email info@indusai.app."
        );
        setStatus("error");
        return;
      }

      setValues(EMPTY);
      setErrors({});
      setStatus("sent");
    } catch {
      setFormError(
        "We could not reach the server. Please check your connection, or email info@indusai.app."
      );
      setStatus("error");
    }
  }

  const inputClass = (name: keyof EnquiryInput) =>
    `w-full rounded-lg border px-4 py-3 font-raleway text-gray-900 outline-none transition-all focus:ring-2 focus:ring-[#2C514C] focus:border-transparent ${
      errors[name] ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
    }`;

  if (status === "sent") {
    return (
      <div
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
        role="status"
      >
        <h3 className="mb-3 font-raleway text-2xl font-bold text-gray-900">
          Enquiry received
        </h3>
        <p className="mx-auto mb-6 max-w-md font-raleway leading-relaxed text-gray-700">
          Thanks — it is with our team now, and we typically reply within one
          business day. If it is urgent, email{" "}
          <a
            href="mailto:info@indusai.app"
            className="font-semibold underline underline-offset-2"
          >
            info@indusai.app
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-full border border-emerald-300 px-5 py-2 font-raleway text-sm font-bold text-emerald-900 transition-colors hover:bg-emerald-100"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={fieldId("website")}>Website</label>
        <input
          id={fieldId("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor={fieldId("name")}
            className="mb-2 block font-raleway text-sm font-medium text-gray-900"
          >
            Your name <span className="text-red-600">*</span>
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={inputClass("name")}
            placeholder="Priya Menon"
          />
          {errors.name && (
            <p id={errorId("name")} className="mt-2 font-raleway text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={fieldId("email")}
            className="mb-2 block font-raleway text-sm font-medium text-gray-900"
          >
            Work email <span className="text-red-600">*</span>
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId("email") : undefined}
            className={inputClass("email")}
            placeholder="priya@company.com"
          />
          {errors.email && (
            <p id={errorId("email")} className="mt-2 font-raleway text-sm text-red-700">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={fieldId("company")}
            className="mb-2 block font-raleway text-sm font-medium text-gray-900"
          >
            Company <span className="text-red-600">*</span>
          </label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            autoComplete="organization"
            required
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? errorId("company") : undefined}
            className={inputClass("company")}
            placeholder="Company name"
          />
          {errors.company && (
            <p id={errorId("company")} className="mt-2 font-raleway text-sm text-red-700">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={fieldId("phone")}
            className="mb-2 block font-raleway text-sm font-medium text-gray-900"
          >
            Phone <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            className={inputClass("phone")}
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p id={errorId("phone")} className="mt-2 font-raleway text-sm text-red-700">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor={fieldId("interest")}
          className="mb-2 block font-raleway text-sm font-medium text-gray-900"
        >
          What are you interested in? <span className="text-red-600">*</span>
        </label>
        <select
          id={fieldId("interest")}
          name="interest"
          required
          value={values.interest}
          onChange={(event) => update("interest", event.target.value)}
          aria-invalid={Boolean(errors.interest)}
          aria-describedby={errors.interest ? errorId("interest") : undefined}
          className={inputClass("interest")}
        >
          <option value="">Select an option</option>
          {PRODUCT_INTERESTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.interest && (
          <p id={errorId("interest")} className="mt-2 font-raleway text-sm text-red-700">
            {errors.interest}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor={fieldId("message")}
          className="mb-2 block font-raleway text-sm font-medium text-gray-900"
        >
          Which workflow do you want to automate?{" "}
          <span className="text-red-600">*</span>
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          required
          value={values.message}
            onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errorId("message") : undefined}
          className={inputClass("message")}
          placeholder="E.g. we run ~8,000 outbound collections calls a month across three languages and want to automate the first contact attempt, with handoff to our agents for anything sensitive."
        />
        {errors.message && (
          <p id={errorId("message")} className="mt-2 font-raleway text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div aria-live="polite" className="min-h-6">
        {formError && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 font-raleway text-sm text-red-800">
            {formError}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-w-40 cursor-pointer items-center justify-center rounded-full bg-[#2C514C] px-8 py-3 font-raleway font-bold text-white transition-all hover:bg-[#132A22] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p className="font-raleway text-sm text-gray-500">
          We reply within one business day. No newsletter, no sales sequence.
        </p>
      </div>
    </form>
  );
}
