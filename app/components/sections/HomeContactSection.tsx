import Container from "../ui/Container";
import EnquiryForm from "../forms/EnquiryForm";
import Button from "../ui/Button";

export default function HomeContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-14 md:py-18"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-cyan-900">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Direct Engagement &bull; Solutions Engineering
          </span>
          <h2
            id="contact-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Connect with Our Solutions Team
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Discuss integrations, telephony SIP trunks, or custom agent logic. Reach our solutions desk
            or submit a scoped project inquiry below.
          </p>
        </div>

        {/* 2-Column Grid: Form + Direct Contact Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          {/* Form Container */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-7">
            <h3 className="mb-1 font-raleway text-lg font-bold text-slate-900">
              Send a Scoped Enquiry
            </h3>
            <p className="mb-5 font-raleway text-xs text-slate-600">
              Our engineering team responds within 24 business hours.
            </p>
            <EnquiryForm />
          </div>

          {/* Direct Sidebar Cards */}
          <div className="space-y-4">
            {/* Phone & WhatsApp Card */}
            <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-5 shadow-xs">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <h4 className="font-raleway text-sm font-bold text-slate-900">
                  Direct Phone &amp; WhatsApp
                </h4>
              </div>
              <p className="mb-2 font-raleway text-xs text-slate-600">
                Direct access to our senior engineering desk:
              </p>
              <div>
                <a
                  href="tel:+918105870564"
                  className="font-raleway text-sm font-bold text-slate-900 hover:text-emerald-700"
                >
                  +91-810-587-0564
                </a>
              </div>
              <div className="mt-1">
                <a
                  href="https://wa.me/918105870564"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 font-raleway text-xs font-semibold text-emerald-800 hover:underline"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </div>

            {/* Email Channels */}
            <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-5 shadow-xs">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-200/80 text-slate-800">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <h4 className="font-raleway text-sm font-bold text-slate-900">
                  Direct Inboxes
                </h4>
              </div>
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

            {/* Book Demo Link */}
            <div className="rounded-xl border border-blue-200/80 bg-blue-50/40 p-5 shadow-xs">
              <h4 className="mb-1.5 font-raleway text-sm font-bold text-slate-900">
                Prefer a Live Architecture Walkthrough?
              </h4>
              <p className="mb-3 font-raleway text-xs text-slate-600">
                Pick a 30-minute slot on Calendly with an AI solutions architect.
              </p>
              <Button
                href="https://calendly.com/hello-induslabs/30min"
                target="_blank"
                rel="noopener"
                size="sm"
                className="w-full rounded-full shadow-xs"
              >
                Schedule Technical Call &rarr;
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
