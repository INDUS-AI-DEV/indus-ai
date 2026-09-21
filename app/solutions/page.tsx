import type { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ReadyToTransform from "../components/sections/ReadyToTransform";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Use Cases — AI Agents for Enterprise Workflows",
  description:
    "Where enterprise AI agents fit: customer operations, financial workflows, revenue operations, and internal automation — mapped to the Indus AI products that run them.",
  path: "/solutions",
  keywords: [
    "AI agents for customer operations",
    "AI workflow automation use cases",
    "enterprise automation with AI agents",
    "AI agents for financial operations",
  ],
});

const functionalUseCases = [
  {
    id: "customer-operations",
    title: "Customer Operations",
    description:
      "Automate tier-1 and tier-2 support, voice booking concierge, customer onboarding, and multilingual dispute handling with sub-second response times.",
    productFit: "IndusLabs + Agentic AI Suite",
    badgeColor: "bg-cyan-50 border-cyan-200 text-cyan-900",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    workflows: [
      "Sub-500ms voice-led support resolution in 29+ languages",
      "Interactive appointment, reservation, and booking flows",
      "Automated document collection and identity onboarding",
      "Real-time confidence scoring and warm human handoff",
    ],
  },
  {
    id: "financial-workflows",
    title: "Financial Workflows & BFSI",
    description:
      "Deploy regulatory-compliant AI workflows for digital lending lead scoring, borrower KYC verification, repayment reminders, and debt recovery.",
    productFit: "FinoLabs + IndusLabs",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-900",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    workflows: [
      "70% lower operational costs across early and late delinquency recovery",
      "Borrower follow-ups across 30+ regional dialects and mixed code-switching",
      "Automated underwriting document extraction and KYC verification",
      "Strict alignment with RBI fair practice codes, SOC 2, and ISO 27001",
    ],
  },
  {
    id: "revenue-operations",
    title: "Revenue Operations & Lead Lifecycle",
    description:
      "Engage inbound and outbound prospects within 60 seconds across voice, WhatsApp, and email — enriching CRM data and scheduling rep demos.",
    productFit: "Marketing Automation Agent + IndusLabs",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    workflows: [
      "Instant inbound qualification and scoring within 60 seconds",
      "Omnichannel follow-up sequences across telephony and WhatsApp",
      "Automated lead enrichment, intent classification, and CRM updates",
      "Direct calendar scheduling with sales engineering representatives",
    ],
  },
  {
    id: "enterprise-automation",
    title: "Autonomous Enterprise Automation",
    description:
      "Move beyond static chatbots with deterministic agents that reason, validate policies, invoke internal APIs, and execute complex business logic.",
    productFit: "Agentic AI Suite",
    badgeColor: "bg-violet-50 border-violet-200 text-violet-900",
    icon: (
      <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    workflows: [
      "Multi-agent task orchestration across distributed microservices",
      "Zero-hallucination policy execution and rule enforcement",
      "Bi-directional synchronization across ERPs, CRMs, and billing stacks",
      "Comprehensive telemetry, latency heatmaps, and tamper-proof audit trails",
    ],
  },
];

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Compliant debt recovery, loan lead qualification, EMI reminder schedules, and borrower verification.",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    iconBg: "bg-amber-50 border-amber-200/80",
  },
  {
    title: "Hospitality & Travel",
    description:
      "24/7 multilingual conversational voice agents for room reservations, concierge services, and dining coordination.",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    iconBg: "bg-cyan-50 border-cyan-200/80",
  },
  {
    title: "Healthcare & Telehealth",
    description:
      "Patient appointment scheduling, pre-consultation intake, prescription reminders, and clinic routing.",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    iconBg: "bg-emerald-50 border-emerald-200/80",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Post-purchase order updates, returns verification, automated refund workflows, and personalized re-orders.",
    icon: (
      <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    iconBg: "bg-violet-50 border-violet-200/80",
  },
  {
    title: "Dealerships & Automotive",
    description:
      "Instant buyer response within 60 seconds, test drive calendar booking, and service maintenance coordination.",
    icon: (
      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    iconBg: "bg-blue-50 border-blue-200/80",
  },
  {
    title: "Enterprise IT & Shared Services",
    description:
      "Internal helpdesk routing, employee access verification, payroll query resolution, and workflow coordination.",
    icon: (
      <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: "bg-slate-100 border-slate-200/80",
  },
];

export default function SolutionsPage() {
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
                Proven Operational Impact &bull; Real Enterprise Use Cases
              </span>
              <h1 className="mb-4 font-raleway text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Agentic AI Products for High-Impact Workflows
              </h1>
              <p className="mx-auto mb-7 max-w-2xl font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Our specialized products map to repeatable, high-volume operations across customer support,
                revenue growth, debt collections, and enterprise workflow execution.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Button href="/products" size="md" className="rounded-full shadow-sm">
                  Explore Product Suite
                </Button>
                <Button
                  href="https://calendly.com/hello-induslabs/30min"
                  target="_blank"
                  rel="noopener"
                  variant="secondary"
                  size="md"
                  className="rounded-full border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400"
                >
                  Schedule Solution Walkthrough
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Functional Use Cases Grid */}
        <section className="py-14 md:py-18 bg-white border-t border-slate-100">
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
                Functional Capabilities
              </span>
              <h2 className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Functional Use Cases
              </h2>
              <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Targeted automation where autonomous agentic systems drive measurable reductions in latency,
                overhead, and error rates.
              </p>
            </div>

            <div className="grid items-stretch gap-6 md:grid-cols-2">
              {functionalUseCases.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50">
                        {item.icon}
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-0.5 font-raleway text-xs font-semibold ${item.badgeColor}`}
                      >
                        {item.productFit}
                      </span>
                    </div>

                    <h3 className="mb-2 font-raleway text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mb-5 font-raleway text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <h4 className="mb-2.5 font-raleway text-xs font-bold uppercase tracking-wider text-slate-500">
                      Standard Executed Workflows
                    </h4>
                    <ul className="space-y-2">
                      {item.workflows.map((workflow) => (
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
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Industry Deployments Section */}
        <section
          id="industry-deployments"
          className="border-t border-slate-200/80 bg-slate-50/50 py-14 md:py-18"
        >
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-emerald-900">
                Vertical Specialization
              </span>
              <h2 className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Industry Deployments
              </h2>
              <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Pre-configured domain adapters for regulated, service-heavy, and high-volume sectors.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div
                    className={`mb-3.5 flex h-9 w-9 items-center justify-center rounded-lg border ${industry.iconBg}`}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="mb-1.5 font-raleway text-base font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="font-raleway text-xs leading-relaxed text-slate-600">
                    {industry.description}
                  </p>
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
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Use Cases", path: "/solutions" },
        ])}
      />
    </>
  );
}
