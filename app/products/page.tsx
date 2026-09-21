import type { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ReadyToTransform from "../components/sections/ReadyToTransform";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema, productSuiteSchema } from "../lib/schema";
import { pageMetadata } from "../lib/metadata";
import AcademyCallout from "../components/sections/AcademyCallout";
import { products, siteConfig } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "AI Agent Products — Voice, Workflows, Finance, Leads",
  description:
    "Enterprise AI agent products on one platform: IndusLabs voice AI OS, FinoLabs for BFSI operations, Agentic AI Suite for multi-agent orchestration, and Marketing Automation Agent.",
  path: "/products",
  keywords: [
    "enterprise AI agent products",
    "agentic AI platform",
    "multi-agent orchestration platform",
    "AI voice agent platform",
    "AI agents for BFSI",
  ],
});

const platformCapabilities = [
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

const deploymentBenefits = [
  {
    title: "Production-Ready Architecture",
    description:
      "Engineered with deterministic safety rails, fallback mechanisms, sub-second latency, and 99.9% uptime SLAs for mission-critical operations.",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Modular Product Design",
    description:
      "Adopt an individual product for a focused workflow (voice, debt collections, lead scoring) or combine multiple products into a unified automation stack.",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Integration Layer",
    description:
      "Connect telephony SIP trunks, core banking (Finacle), CRMs (Salesforce, Zoho, LeadSquared), support tools, and internal microservices into one AI operating layer.",
    icon: (
      <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Operational Control & Governance",
    description:
      "Keep enterprise teams in control with explicit confidence thresholds, deterministic policy guardrails, escalation paths, and warm human handoff.",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">
        {/* Compact Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-28 pb-14 md:pt-32 md:pb-18">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-cyan-900">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Enterprise Product Suite &bull; Autonomous AI
              </span>
              <h1 className="mb-4 font-raleway text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Enterprise Agentic AI Products Built for Production
              </h1>
              <p className="mx-auto mb-7 max-w-2xl font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Indus AI develops specialized agent products for multilingual voice, financial operations,
                lead lifecycle management, and multi-agent business orchestration.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Button href="#products" size="md" className="rounded-full shadow-sm">
                  Explore Products
                </Button>
                <Button
                  href="https://calendly.com/hello-induslabs/30min"
                  target="_blank"
                  rel="noopener"
                  variant="secondary"
                  size="md"
                  className="rounded-full border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400"
                >
                  Book Technical Demo
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Product Cards Section */}
        <section id="products" className="py-14 md:py-18 bg-white border-t border-slate-100">
          <Container>
            <div className="grid gap-6">
              {products.map((product) => (
                <article
                  key={product.id}
                  id={product.id}
                  className="grid gap-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md lg:grid-cols-[1.1fr_0.9fr] lg:p-7"
                >
                  <div>
                    <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-0.5 font-raleway text-xs font-semibold text-slate-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        {product.domain}
                      </span>
                      <span className="font-raleway text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                        {product.category}
                      </span>
                    </div>
                    <h2 className="mb-2 font-raleway text-2xl font-extrabold text-slate-900">
                      {product.name}
                    </h2>
                    <p className="mb-4 font-raleway text-sm leading-relaxed text-slate-600">
                      {product.description}
                    </p>
                    <div className="mb-5 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3 font-raleway text-xs leading-relaxed text-slate-700">
                      <span className="font-bold text-slate-900">Best fit for:</span> {product.forTeams}
                    </div>

                    {product.external ? (
                      <Button
                        href={product.url}
                        target="_blank"
                        rel="noopener"
                        size="sm"
                        className="rounded-full shadow-sm"
                      >
                        Visit {product.domain} &rarr;
                      </Button>
                    ) : (
                      <Button href="/contact" size="sm" className="rounded-full shadow-sm">
                        Enquire about {product.name}
                      </Button>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/40 p-4.5 lg:p-5">
                    <h3 className="mb-3 font-raleway text-sm font-bold text-slate-900">
                      Core Workflows &amp; Operations
                    </h3>
                    <ul className="space-y-2.5">
                      {product.workflows.map((workflow) => (
                        <li
                          key={workflow}
                          className="flex items-start gap-2.5 text-xs text-slate-700 font-raleway"
                        >
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                          <span className="leading-snug">{workflow}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            {/* Academy Callout */}
            <AcademyCallout />

            <p className="mx-auto mt-10 max-w-2xl text-center font-raleway text-xs leading-relaxed text-slate-500">
              IndusLabs, FinoLabs, and Agentic AI Suite are enterprise products of {siteConfig.legalName}.
              Indus AI Academy operates as its corporate training and consulting division.
            </p>
          </Container>
        </section>

        {/* Platform Section (Light Themed) */}
        <section
          id="platform"
          aria-labelledby="platform-heading"
          className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-white via-slate-50/60 to-white py-14 md:py-18"
        >
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-cyan-900">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Common Architecture Layer
              </span>
              <h2
                id="platform-heading"
                className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
              >
                Shared Platform Capabilities
              </h2>
              <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                All Indus AI products are powered by a shared foundation of real-time voice, deterministic
                action guardrails, bi-directional CRM sync, and comprehensive compliance observability.
              </p>
            </div>

            <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
              {platformCapabilities.map((cap) => (
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

        {/* Built for Enterprise Deployment */}
        <section className="py-14 md:py-18 bg-white">
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
                Rigorous Execution &bull; Zero Hallucination
              </span>
              <h2 className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Built for Enterprise Deployment
              </h2>
              <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Designed for reliable deployment across customer support, revenue ops, lending servicing,
                and internal operations teams requiring high compliance and security.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {deploymentBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-white shadow-xs">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-raleway text-base font-bold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="font-raleway text-xs leading-relaxed text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Standard Light CTA */}
        <ReadyToTransform />
      </main>
      <Footer />
      <JsonLd
        data={[
          productSuiteSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ]}
      />
    </>
  );
}
