/**
 * Shared enquiry validation. Imported by both the form component and the API
 * route so the client and server can never disagree about what is valid —
 * the server check is the authoritative one.
 */

export const PRODUCT_INTERESTS = [
  "Not sure yet — help me choose",
  "IndusLabs — voice AI agents",
  "Agentic AI SM — workflow orchestration",
  "FinoLabs — financial operations",
  "Marketing Automation Agent — lead management",
  "Indus AI Academy — AI training and upskilling",
  "Partnership or something else",
] as const;

export type ProductInterest = (typeof PRODUCT_INTERESTS)[number];

export type EnquiryInput = {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
  /** Honeypot. Real users never see this field, so it must arrive empty. */
  website?: string;
};

export type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Free inboxes are allowed — plenty of founders write from Gmail — but we
 * block addresses that are obviously not deliverable.
 */
export function validateEnquiry(input: EnquiryInput): FieldErrors {
  const errors: FieldErrors = {};

  const name = input.name?.trim() ?? "";
  if (name.length < 2) {
    errors.name = "Please enter your name.";
  } else if (name.length > 100) {
    errors.name = "Please keep your name under 100 characters.";
  }

  const email = input.email?.trim() ?? "";
  if (!email) {
    errors.email = "Please enter your email so we can reply.";
  } else if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    errors.email = "That email address does not look right.";
  }

  const company = input.company?.trim() ?? "";
  if (company.length < 2) {
    errors.company = "Please tell us which company you are with.";
  } else if (company.length > 150) {
    errors.company = "Please keep the company name under 150 characters.";
  }

  const phone = input.phone?.trim() ?? "";
  if (phone && !/^[+\d][\d\s()-]{6,19}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  }

  const interest = input.interest?.trim() ?? "";
  if (!interest) {
    errors.interest = "Please choose what you are interested in.";
  } else if (!PRODUCT_INTERESTS.includes(interest as ProductInterest)) {
    errors.interest = "Please choose one of the listed options.";
  }

  const message = input.message?.trim() ?? "";
  if (message.length < 20) {
    errors.message =
      "Please describe the workflow you want to automate — 20 characters or more.";
  } else if (message.length > 4000) {
    errors.message = "Please keep your message under 4000 characters.";
  }

  return errors;
}
