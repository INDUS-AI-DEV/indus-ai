import type { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import ReadyToTransform from "../components/sections/ReadyToTransform";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Indus AI — Enterprise Agentic AI Company",
  description:
    "Indus AI Pvt Ltd builds enterprise agentic AI products for voice, lead management, financial operations, and autonomous workflow execution. IndusLabs and FinoLabs are its specialized divisions.",
  path: "/about",
  keywords: [
    "Indus AI Pvt Ltd",
    "enterprise agentic AI company",
    "AI agent company India",
    "Vivek Gupta IIT Delhi Indus AI",
  ],
});

const stats = [
  { value: "4", label: "Core Products" },
  { value: "29+", label: "Regional Languages" },
  { value: "<500ms", label: "Voice Latency" },
  { value: "100%", label: "India Data Sovereignty" },
];

const principles = [
  {
    number: "01",
    title: "Product-Led Reliability",
    description:
      "We build robust, repeatable enterprise AI software instead of brittle custom scripts, fragile wrappers, or services-only offerings.",
  },
  {
    number: "02",
    title: "Workflow-First Architecture",
    description:
      "Our agents are engineered around messy, real-world operational flows across customer service, digital lending, debt collections, and sales ops.",
  },
  {
    number: "03",
    title: "Zero-Hallucination Guardrails",
    description:
      "Deterministic policy enforcement, multi-step rule validation, and human-in-the-loop review ensure that AI agents never execute unauthorized business actions.",
  },
  {
    number: "04",
    title: "Autonomous Action Over Chat",
    description:
      "We build systems that can reason, invoke APIs, mutate CRM records, schedule calls, and solve customer problems rather than just generating advisory text.",
  },
];

const productsList = [
  {
    name: "IndusLabs",
    domain: "induslabs.io",
    href: "https://induslabs.io",
    role: "Voice AI Operating System",
    desc: "Multilingual voice agents with sub-500ms latency, native SIP telephony, and emotion-aware speech synthesis in 29+ languages.",
    tagColor: "bg-cyan-50 border-cyan-200 text-cyan-900",
  },
  {
    name: "FinoLabs",
    domain: "finolabs.ai",
    href: "https://finolabs.ai",
    role: "BFSI & Lending Operations AI",
    desc: "Autonomous debt recovery, digital loan lead scoring, and borrower KYC verification with RBI regulatory compliance.",
    tagColor: "bg-amber-50 border-amber-200 text-amber-900",
  },
  {
    name: "Agentic AI Suite",
    domain: "indusai.app/products",
    href: "/products",
    role: "Multi-Agent Orchestration",
    desc: "Autonomous multi-agent execution coordinating complex business logic, third-party API mutations, and enterprise tools.",
    tagColor: "bg-violet-50 border-violet-200 text-violet-900",
  },
  {
    name: "Indus AI Academy",
    domain: "indusai.academy",
    href: "https://indusai.academy",
    role: "Corporate AI Upskilling & Advisory",
    desc: "Executive AI advisory, hands-on agent development certifications, and corporate upskilling cohorts.",
    tagColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
  },
];

export default function AboutPage() {
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
                About Indus AI &bull; Parent Organization
              </span>
              <h1 className="mb-4 font-raleway text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Building Enterprise Agentic AI for Real-World Operations
              </h1>
              <p className="mx-auto mb-8 max-w-2xl font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Indus AI is an enterprise agentic AI company based in India. We develop autonomous systems
                that execute complex operations across voice, digital lending, lead routing, and business workflow orchestration.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-1 font-raleway text-2xl font-extrabold text-slate-900 sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="font-raleway text-xs font-medium text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Mission & Product Ecosystem Section */}
        <section className="py-14 md:py-18 bg-white border-t border-slate-100">
          <Container>
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
                  Our Mission
                </span>
                <h2 className="mb-3.5 font-raleway text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Transition enterprises from manual procedures to autonomous agentic execution
                </h2>
                <p className="mb-4 font-raleway text-sm leading-relaxed text-slate-600">
                  The next generation of enterprise software will not simply surface information or generate text.
                  It will act. That means voice systems that converse naturally with sub-500ms latency, financial
                  workflows that execute compliant collections, and autonomous multi-agent systems that coordinate
                  across legacy CRMs and ERPs without human bottleneck.
                </p>
                <p className="font-raleway text-sm leading-relaxed text-slate-600">
                  Our focus is on production-grade, highly audited AI products that deliver demonstrable operational
                  ROI for enterprise teams in banking, hospitality, automotive, and high-growth services.
                </p>
              </div>

              {/* Ecosystem Card (Light Themed) */}
              <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50/80 via-white to-cyan-50/20 p-6 shadow-sm sm:p-7">
                <span className="mb-2.5 inline-block font-raleway text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                  Product Architecture
                </span>
                <h3 className="mb-4 font-raleway text-xl font-bold text-slate-900">
                  A Unified Multi-Product AI Ecosystem
                </h3>
                <div className="space-y-3">
                  {productsList.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener" : undefined}
                      className="group block rounded-xl border border-slate-100 bg-white p-3.5 transition-all duration-300 hover:border-slate-300 hover:shadow-sm"
                    >
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="font-raleway text-sm font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                          {item.name}
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-raleway text-[11px] font-semibold ${item.tagColor}`}
                        >
                          {item.role}
                        </span>
                      </div>
                      <p className="font-raleway text-xs leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* How We Build Principles */}
        <section className="border-t border-slate-200/80 bg-slate-50/50 py-14 md:py-18">
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-violet-900">
                Core Engineering Philosophy
              </span>
              <h2 className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                How We Build
              </h2>
              <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Engineered with enterprise product discipline, strict operational guardrails, and measurable business impact.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50 font-raleway text-sm font-extrabold text-slate-800">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-raleway text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="font-raleway text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Corporate Entity Details Section */}
        <section
          id="company"
          aria-labelledby="company-heading"
          className="border-t border-slate-200/80 bg-white py-14 md:py-18"
        >
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-slate-800">
                Corporate Entity Details
              </div>
              <h2
                id="company-heading"
                className="mb-4 font-raleway text-2xl font-extrabold text-slate-900 sm:text-3xl"
              >
                About Indus AI Pvt Ltd
              </h2>
              <p className="mb-3.5 font-raleway text-sm leading-relaxed text-slate-600">
                <strong className="text-slate-900">Indus AI Pvt Ltd</strong> is an enterprise software organization
                headquartered in India, founded in 2023 by <strong className="text-slate-900">Vivek Gupta</strong>, an
                alumnus of the Indian Institute of Technology Delhi (IIT Delhi). We build production-grade agentic AI products
                that enterprise teams deploy directly inside their mission-critical business workflows.
              </p>
              <p className="mb-3.5 font-raleway text-sm leading-relaxed text-slate-600">
                Our technology is strictly enterprise B2B. We do not publish consumer chatbots. Our offerings
                operate across specialized divisions: <strong className="text-slate-900">IndusLabs</strong> for
                real-time multilingual voice AI OS, <strong className="text-slate-900">FinoLabs</strong> for BFSI
                and lending lifecycle automation, <strong className="text-slate-900">Agentic AI Suite</strong> for
                deterministic business process execution, and <strong className="text-slate-900">Indus AI Academy</strong> for
                corporate upskilling and advisory.
              </p>
              <p className="font-raleway text-sm leading-relaxed text-slate-600">
                Global Headquarters is located at <strong className="text-slate-900">Logix Cyber Park, Sector 62, Noida</strong>,
                with regional hubs in <strong className="text-slate-900">Bengaluru (Adugodi)</strong>, <strong className="text-slate-900">Mumbai (Dahisar West)</strong>,
                and <strong className="text-slate-900">New York (28th Street)</strong>. Direct inquiries:{" "}
                <a
                  href="mailto:hello@induslabs.io"
                  className="font-semibold text-[#0284c7] underline underline-offset-2"
                >
                  hello@induslabs.io
                </a>{" "}
                or phone{" "}
                <a
                  href="tel:+918105870564"
                  className="font-semibold text-slate-900 underline underline-offset-2"
                >
                  +91-810-587-0564
                </a>
                .
              </p>
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
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
