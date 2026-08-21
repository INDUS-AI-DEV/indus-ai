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
    "Tell us the enterprise workflow you want to automate with AI agents. Send an enquiry or book a technical call with the Indus AI team.",
  path: "/contact",
  keywords: [
    "contact Indus AI",
    "enterprise AI agent consultation",
    "agentic AI platform demo",
  ],
});

export default function Contact() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 font-raleway text-5xl font-bold text-balance text-gray-900">
                Talk to the team building your AI agents
              </h1>
              <p className="font-raleway text-xl leading-relaxed text-gray-600">
                Tell us which workflow you want to automate. We will tell you
                which product fits, whether it is a good fit at all, and what a
                scoped first deployment involves.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-20" aria-labelledby="enquiry-heading">
          <Container>
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
                <h2
                  id="enquiry-heading"
                  className="mb-2 font-raleway text-3xl font-bold text-gray-900"
                >
                  Send an enquiry
                </h2>
                <p className="mb-8 font-raleway leading-relaxed text-gray-600">
                  Fields marked with an asterisk are required. Everything you
                  send goes straight to our team inbox.
                </p>
                <EnquiryForm />
              </div>

              <aside className="space-y-6">
                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                  <h2 className="mb-4 font-raleway text-lg font-bold text-gray-900">
                    Prefer email?
                  </h2>
                  <p className="mb-2 font-raleway text-sm leading-relaxed text-gray-600">
                    Write to us directly and we will route it to the right team.
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-raleway font-semibold text-[#2C514C] underline underline-offset-2"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                  <h2 className="mb-4 font-raleway text-lg font-bold text-gray-900">
                    Want to hear an agent first?
                  </h2>
                  <p className="mb-3 font-raleway text-sm leading-relaxed text-gray-600">
                    Our live voice demos run in the browser — no signup, no
                    calendar invite.
                  </p>
                  <a
                    href="https://induslabs.io"
                    target="_blank"
                    rel="noopener"
                    className="font-raleway font-semibold text-[#2C514C] underline underline-offset-2"
                  >
                    Try a live voice demo
                    <span className="sr-only"> (opens induslabs.io)</span>
                  </a>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6">
                  <h2 className="mb-4 font-raleway text-lg font-bold text-gray-900">
                    Careers
                  </h2>
                  <p className="mb-3 font-raleway text-sm leading-relaxed text-gray-600">
                    Applying for a role? Those go to a different inbox.
                  </p>
                  <a
                    href="/careers"
                    className="font-raleway font-semibold text-[#2C514C] underline underline-offset-2"
                  >
                    See open positions
                  </a>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section
          className="border-t border-gray-100 bg-slate-50 py-20"
          aria-labelledby="booking-heading"
        >
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2
                id="booking-heading"
                className="mb-4 font-raleway text-3xl font-bold text-gray-900"
              >
                Or book a technical call directly
              </h2>
              <p className="font-raleway leading-relaxed text-gray-600">
                Thirty minutes with someone who can answer integration and
                deployment questions. If the scheduler below does not load,{" "}
                <a
                  href={siteConfig.demoUrl}
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-[#2C514C] underline underline-offset-2"
                >
                  open it in a new tab
                </a>
                .
              </p>
            </div>

            <div
              className="calendly-inline-widget mx-auto min-w-[320px] max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white"
              data-url={siteConfig.demoUrl}
              style={{ height: 700 }}
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
