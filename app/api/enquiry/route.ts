import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateEnquiry, type EnquiryInput } from "../../lib/enquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO_EMAIL = process.env.ENQUIRY_TO_EMAIL || "info@indusai.app";
const FROM_EMAIL =
  process.env.ENQUIRY_FROM_EMAIL || "Indus AI Website <enquiries@indusai.app>";

/**
 * Best-effort throttle. Serverless instances are not shared, so this stops
 * a single client hammering one instance rather than acting as a global
 * rate limiter — the honeypot and validation do the rest.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const window = (recentSubmissions.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (window.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(key, window);
    return true;
  }

  window.push(now);
  recentSubmissions.set(key, window);

  // Keep the map from growing without bound on a long-lived instance.
  if (recentSubmissions.size > 500) {
    for (const [mapKey, timestamps] of recentSubmissions) {
      if (timestamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        recentSubmissions.delete(mapKey);
      }
    }
  }

  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Enquiry form: RESEND_API_KEY is not set");
    return NextResponse.json(
      {
        error:
          "The enquiry form is not configured right now. Please email info@indusai.app.",
      },
      { status: 503 }
    );
  }

  let payload: EnquiryInput;
  try {
    payload = (await request.json()) as EnquiryInput;
  } catch {
    return NextResponse.json(
      { error: "We could not read that submission. Please try again." },
      { status: 400 }
    );
  }

  // Honeypot: a hidden field only a bot would fill in. Return success so
  // bots do not learn what tripped them.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const fieldErrors = validateEnquiry(payload);
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", fieldErrors },
      { status: 400 }
    );
  }

  const clientKey =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        error:
          "That is a few enquiries in quick succession. Please wait a minute, or email info@indusai.app.",
      },
      { status: 429 }
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const company = payload.company.trim();
  const phone = payload.phone?.trim() || "Not provided";
  const interest = payload.interest.trim();
  const message = payload.message.trim();
  const submittedAt = new Date().toISOString();

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["Phone", phone],
    ["Interested in", interest],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <table style="border-collapse:collapse;margin-bottom:20px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#666">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(
                value
              )}</strong></td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin:0 0 8px">Message</h3>
      <p style="white-space:pre-wrap;margin:0 0 24px">${escapeHtml(message)}</p>
      <p style="color:#888;font-size:12px;margin:0">
        Submitted ${submittedAt} via indusai.app/contact. Reply directly to this
        email to respond to ${escapeHtml(name)}.
      </p>
    </div>
  `;

  const text = [
    "New website enquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
    "",
    `Submitted ${submittedAt} via indusai.app/contact`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Enquiry — ${company} (${interest.split("—")[0].trim()})`,
      html,
      text,
    });

    if (error) {
      console.error("Enquiry form: Resend rejected the send", error);
      return NextResponse.json(
        {
          error:
            "We could not send your enquiry just now. Please email info@indusai.app and we will pick it up.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry form: unexpected failure", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong on our side. Please email info@indusai.app and we will pick it up.",
      },
      { status: 500 }
    );
  }
}
