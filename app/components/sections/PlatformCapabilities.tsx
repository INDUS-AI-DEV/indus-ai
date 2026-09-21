import Container from "../ui/Container";

const capabilities = [
  {
    title: "Real-Time Voice AI OS",
    description:
      "Homegrown speech models delivering human-like conversational cadence, sub-500ms latency, and direct SIP/PSTN telephony integrations.",
    iconBg: "bg-cyan-50 border-cyan-200/80",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    title: "Lead Management Engine",
    description:
      "Autonomous inbound qualification, scoring, and follow-ups across voice calls, WhatsApp, and web forms within 60 seconds.",
    iconBg: "bg-emerald-50 border-emerald-200/80",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Autonomous Workflows",
    description:
      "Agentic logic that triggers APIs, updates CRM records, coordinates KYC verification, and executes business processes.",
    iconBg: "bg-violet-50 border-violet-200/80",
    icon: (
      <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "29+ Languages & Code-Switching",
    description:
      "Native fluency across Indian regional languages (Hindi, Tamil, Telugu, Marathi, Kannada) and mid-call mixed-mode code-switching.",
    iconBg: "bg-amber-50 border-amber-200/80",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "Enterprise Integrations",
    description:
      "Native pre-built bridges for Salesforce, Zoho, LeadSquared, Finacle core banking, telephony SIP trunks, and REST backends.",
    iconBg: "bg-cyan-50 border-cyan-200/80",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "CRM & Sales Routing",
    description:
      "Automated lead enrichment, stage transitions, rep calendar scheduling, and structured CRM synchronization.",
    iconBg: "bg-emerald-50 border-emerald-200/80",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Full Observability & Audit",
    description:
      "Tamper-proof telemetry, conversational sentiment logs, latency heatmaps, and complete operational audit trails for compliance.",
    iconBg: "bg-violet-50 border-violet-200/80",
    icon: (
      <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "VPC & On-Premise Hosting",
    description:
      "Air-gapped deployment, private cloud VPCs, and dedicated instances ensuring strict Indian data sovereignty and RBI alignment.",
    iconBg: "bg-amber-50 border-amber-200/80",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function PlatformCapabilities() {
  return (
    <section
      id="platform-capabilities"
      aria-labelledby="platform-heading"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white py-14 md:py-18"
    >
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-32 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Compact Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-cyan-900">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Core Agentic Architecture &bull; GEO Ready
          </span>
          <h2
            id="platform-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            One platform, multiple agentic capabilities
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Our unified core combines high-throughput voice processing, deterministic
            action frameworks, seamless CRM integration, and human governance across all products.
          </p>
        </div>

        {/* 8 Capabilities Grid at Compact 80% Scale */}
        <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group relative flex h-full flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                <div
                  className={`mb-3.5 flex h-9 w-9 items-center justify-center rounded-lg border ${cap.iconBg} transition-transform duration-300 group-hover:scale-105`}
                >
                  {cap.icon}
                </div>
                <h3 className="mb-2 font-raleway text-base font-bold text-slate-900 transition-colors group-hover:text-cyan-950">
                  {cap.title}
                </h3>
                <p className="font-raleway text-xs leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

