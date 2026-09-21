import Container from "../ui/Container";
import Button from "../ui/Button";

const pillars = [
  {
    title: "Deployment Flexibility & Sovereignty",
    body: "Deploy on AWS, Azure, Google Cloud, private VPC, or fully air-gapped on-premise for enterprises with strict Indian data residency and sovereignty requirements.",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Enterprise Integration Layer",
    body: "Agents operate natively inside your existing software stack — SIP telephony trunks, Salesforce, Zoho, LeadSquared, ERPs, and internal core databases.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Human-in-the-Loop Governance",
    body: "Multi-level approvals, confidence scoring thresholds, and deterministic escalation policies ensure agents never guess in high-stakes regulated situations.",
    icon: (
      <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Tamper-Proof Audit & Observability",
    body: "Every single audio utterance, tool call, API payload, and state transition is captured in immutable audit logs for compliance, review, and model tuning.",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "29+ Languages by Default",
    body: "Built for India and global multi-region scale: fluent conversational comprehension across Hindi, Tamil, Telugu, Marathi, Kannada, English, and more.",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Security & Regulatory Compliance",
    body: "End-to-end TLS encryption, fine-grained RBAC, PII masking, and support for enterprise security questionnaires, SOC 2, and ISO 27001 readiness.",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function EnterpriseTrust() {
  return (
    <section
      id="enterprise"
      aria-labelledby="enterprise-heading"
      className="border-t border-slate-200/80 bg-slate-50/60 py-14 md:py-18"
    >
      <Container>
        {/* Compact Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            Enterprise Readiness &bull; GEO &amp; Compliance
          </span>
          <h2
            id="enterprise-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Built for enterprise deployment, not demos
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Getting an AI model to answer a question is trivial. Getting autonomous agents
            to execute everyday operations inside a regulated enterprise — integrated, observable,
            and under strict human control — is what Indus AI is engineered for.
          </p>
        </div>

        {/* 6 Trust Pillars Grid at Compact 80% Scale */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="mb-1.5 font-raleway text-base font-bold text-slate-900 sm:text-lg">
                  {pillar.title}
                </h3>
                <p className="font-raleway text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Compact Callout Card */}
        <div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-xs md:p-8">
          <h3 className="mb-2 font-raleway text-lg font-bold text-slate-900 sm:text-xl">
            Evaluating agentic AI for a mission-critical workflow?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl font-raleway text-xs leading-relaxed text-slate-600 sm:text-sm">
            Tell us about your target workflow and tech stack. Our engineers will provide
            an honest evaluation of feasibility, integration prerequisites, and scoped timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="md">
              Send an enterprise enquiry
            </Button>
            <Button
              href="https://induslabs.io"
              target="_blank"
              rel="noopener"
              variant="secondary"
              size="md"
            >
              Try live voice demo
              <span className="sr-only"> (opens induslabs.io)</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
