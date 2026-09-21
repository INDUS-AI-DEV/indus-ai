import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import EnquiryForm from "../components/forms/EnquiryForm";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { pageMetadata } from "../lib/metadata";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact — Talk to the Indus AI Team",
  description:
    "Schedule a technical call or send an inquiry to the Indus AI engineering team for enterprise voice, digital lending, or multi-agent orchestration deployments.",
  path: "/contact",
  keywords: [
    "contact Indus AI",
    "enterprise AI agent consultation",
    "agentic AI platform demo",
    "IndusLabs contact",
    "FinoLabs contact",
  ],
});

export default function Contact() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">
        {/* Compact Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-28 pb-12 md:pt-32 md:pb-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-cyan-900">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Enterprise Engagement &bull; Direct Engineering Access
              </span>
              <h1 className="mb-4 font-raleway text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Talk to the Team Building Your AI Agents
              </h1>
              <p className="mx-auto max-w-2xl font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Tell us which business workflow you want to automate. We will scope the integration,
                demonstrate live voice and action capabilities, and provide an initial deployment roadmap.
              </p>
            </div>
          </Container>
        </section>

        {/* Form and Sidebar Section */}
        <section className="pb-14 md:pb-18 bg-white" aria-labelledby="enquiry-heading">
          <Container>
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.35fr_0.85fr]">
              {/* Form Container */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
                <h2
                  id="enquiry-heading"
                  className="mb-1.5 font-raleway text-2xl font-extrabold text-slate-900"
                >
                  Send a Scoped Enquiry
                </h2>
                <p className="mb-6 font-raleway text-xs leading-relaxed text-slate-600">
                  Required fields are marked with an asterisk. Our solution architects respond within 24 business hours.
                </p>
                <EnquiryForm />
              </div>

              {/* Sidebar Cards */}
              <aside className="space-y-4">
                {/* Direct Phone & WhatsApp */}
                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-5 shadow-xs">
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <h3 className="font-raleway text-sm font-bold text-slate-900">
                      Direct Phone &amp; WhatsApp
                    </h3>
                  </div>
                  <p className="mb-2 font-raleway text-xs text-slate-600">
                    Reach our leadership and solutions desk immediately:
                  </p>
                  <div className="space-y-1">
                    <div>
                      <a
                        href="tel:+918105870564"
                        className="font-raleway text-sm font-bold text-slate-900 hover:text-emerald-700"
                      >
                        +91-810-587-0564
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://wa.me/918105870564"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1 font-raleway text-xs font-semibold text-emerald-800 hover:underline"
                      >
                        <span>Chat on WhatsApp &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-5 shadow-xs">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200/80 text-slate-800">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <h3 className="font-raleway text-sm font-bold text-slate-900">
                      Direct Emails
                    </h3>
                  </div>
                  <p className="mb-2 font-raleway text-xs text-slate-600">
                    Routing to engineering and customer architecture:
                  </p>
                  <div className="space-y-1 font-raleway text-xs">
                    <div>
                      <a
                        href="mailto:hello@induslabs.io"
                        className="font-semibold text-[#0284c7] hover:underline"
                      >
                        hello@induslabs.io
                      </a>{" "}
                      <span className="text-slate-400">&bull; Primary</span>
                    </div>
                    <div>
                      <a
                        href="mailto:info@indusai.app"
                        className="font-semibold text-[#0284c7] hover:underline"
                      >
                        info@indusai.app
                      </a>{" "}
                      <span className="text-slate-400">&bull; Corporate</span>
                    </div>
                  </div>
                </div>

                {/* Corporate Offices */}
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-5 shadow-xs">
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200/80 text-slate-800">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
                    <h3 className="font-raleway text-sm font-bold text-slate-900">
                      Global &amp; Regional Offices
                    </h3>
                  </div>
                  <div className="space-y-2.5 font-raleway text-xs text-slate-600">
                    <div>
                      <p className="font-bold text-slate-900">Noida (Global HQ):</p>
                      <p className="text-[11px] leading-snug">
                        7th Floor, Logix Cyber Park, B-Tower, Sector 62, Noida, UP 201301
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Bengaluru:</p>
                      <p className="text-[11px] leading-snug">
                        51/4, Najappa Layout, Adugodi, Bengaluru, KA 560030
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Mumbai &bull; New York:</p>
                      <p className="text-[11px] leading-snug">
                        Rock Garden, Dahisar West, Mumbai &bull; 742 W 28th St, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live Voice Demo Link */}
                <div className="rounded-xl border border-cyan-200/80 bg-cyan-50/40 p-5 shadow-xs">
                  <h3 className="mb-1.5 font-raleway text-sm font-bold text-slate-900">
                    Try Live Voice Demo
                  </h3>
                  <p className="mb-3 font-raleway text-xs text-slate-600">
                    Interact directly with sub-500ms voice agents inside your browser — no form required.
                  </p>
                  <a
                    href="https://induslabs.io"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 font-raleway text-xs font-bold text-[#0284c7] hover:underline"
                  >
                    Open IndusLabs Live Demo &rarr;
                  </a>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Calendly Scheduler Section */}
        <section
          className="border-t border-slate-200/80 bg-slate-50/50 py-14 md:py-18"
          aria-labelledby="booking-heading"
        >
          <Container>
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <span className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
                Direct Technical Calendar
              </span>
              <h2
                id="booking-heading"
                className="mb-2 font-raleway text-2xl font-extrabold text-slate-900 sm:text-3xl"
              >
                Or Book a Technical Call Directly
              </h2>
              <p className="font-raleway text-xs leading-relaxed text-slate-600 sm:text-sm">
                30 minutes with a solutions architect to discuss integrations, SIP trunks, or custom agent logic. If the scheduler does not load,{" "}
                <a
                  href={siteConfig.demoUrl}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-[#0284c7] underline underline-offset-2"
                >
                  open Calendly in a new tab
                </a>
                .
              </p>
            </div>

            <div
              className="calendly-inline-widget mx-auto min-w-[320px] max-w-4xl overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm"
              data-url={siteConfig.demoUrl}
              style={{ height: 680 }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </Container>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
