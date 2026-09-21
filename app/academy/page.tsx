import type { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ReadyToTransform from "../components/sections/ReadyToTransform";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { pageMetadata } from "../lib/metadata";
import { academy } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Indus AI Academy — Enterprise AI Training, Upskilling & Advisory",
  description:
    "Corporate AI certifications, hands-on agentic AI engineering cohorts, and executive advisory from Indus AI Pvt Ltd and IIT Delhi alumni.",
  path: "/academy",
  keywords: [
    "Indus AI Academy",
    "corporate AI training India",
    "enterprise agentic AI certification",
    "AI upskilling for teams",
    "executive AI strategy advisory",
  ],
});

const tracks = [
  {
    tag: "Engineering Track",
    title: "Agentic AI Engineering & Production Systems",
    description:
      "Deep technical cohort for software developers and data engineers to build, test, and deploy production multi-agent architectures.",
    badgeColor: "bg-cyan-50 border-cyan-200 text-cyan-900",
    modules: [
      "Sub-second real-time voice pipeline architecture & SIP/PSTN",
      "Deterministic guardrails, policy verification & zero-hallucination execution",
      "Multi-agent task orchestration, tool calling & MCP integration",
      "Production telemetry, latency heatmaps & tamper-proof audit trails",
    ],
    ctaText: "Enroll in Engineering Cohort",
    ctaHref: academy.url,
  },
  {
    tag: "Operations Track",
    title: "Enterprise Workflow Automation & Human Governance",
    description:
      "Designed for operations leaders, product managers, and process architects transforming manual procedures into autonomous agentic flows.",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
    modules: [
      "Mapping customer service, sales, and debt collection workflows to AI agents",
      "Designing human-in-the-loop escalation paths & confidence scoring",
      "Bi-directional CRM & core banking synchronization (Salesforce, Zoho, Finacle)",
      "Regulatory compliance guardrails (RBI, DPDP, SOC 2, ISO 27001)",
    ],
    ctaText: "Explore Operations Track",
    ctaHref: academy.url,
  },
  {
    tag: "Executive Advisory",
    title: "Executive AI Strategy & Enterprise Roadmaps",
    description:
      "Strategic consulting and roadmap alignment sessions for CXOs, VPs, and enterprise decision-makers evaluating generative & agentic AI.",
    badgeColor: "bg-violet-50 border-violet-200 text-violet-900",
    modules: [
      "Rigorous ROI modeling and total cost of ownership analysis",
      "Evaluating build vs. buy vs. partner architectural decisions",
      "Data residency, private cloud VPCs, and on-premise governance",
      "Structuring cross-functional enterprise AI centers of excellence (CoE)",
    ],
    ctaText: "Book Executive Advisory",
    ctaHref: "https://calendly.com/hello-induslabs/30min",
  },
];

const highlights = [
  {
    title: "IIT Delhi Leadership",
    description:
      "Curriculum designed and guided by Vivek Gupta and senior AI researchers with deep enterprise software backgrounds.",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    iconBg: "bg-cyan-50 border-cyan-200/80",
  },
  {
    title: "Real Production Capstones",
    description:
      "Participants build real agentic systems on enterprise codebases rather than trivial toy examples or slide-only theory.",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    iconBg: "bg-emerald-50 border-emerald-200/80",
  },
  {
    title: "Dedicated Team Cohorts",
    description:
      "Custom private cohorts tailored to your enterprise's tech stack, security policies, and target industry workflows.",
    icon: (
      <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    iconBg: "bg-violet-50 border-violet-200/80",
  },
  {
    title: "Industry Certification",
    description:
      "Verifiable credentials backed by Indus AI Pvt Ltd, validating real hands-on competency in autonomous AI system design.",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    iconBg: "bg-amber-50 border-amber-200/80",
  },
];

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">
        {/* Compact Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-28 pb-14 md:pt-32 md:pb-18">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-emerald-900">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Corporate AI Upskilling &bull; Executive Advisory
              </span>
              <h1 className="mb-4 font-raleway text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Enterprise AI Upskilling &amp; Agentic Certifications
              </h1>
              <p className="mx-auto mb-7 max-w-2xl font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                {academy.name} equips engineering teams, operations leadership, and executives with practical,
                production-grade capabilities to design, evaluate, and orchestrate autonomous AI systems.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Button
                  href={academy.url}
                  target="_blank"
                  rel="noopener"
                  size="md"
                  className="rounded-full shadow-sm"
                >
                  Visit Academy Portal &rarr;
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="md"
                  className="rounded-full border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400"
                >
                  Inquire for Corporate Cohort
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Tracks Grid */}
        <section className="py-14 md:py-18 bg-white border-t border-slate-100">
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
                Tailored Curricula
              </span>
              <h2 className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Specialized Learning &amp; Advisory Tracks
              </h2>
              <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Programs calibrated for different organizational functions, from deep hands-on code development
                to high-level executive investment strategy.
              </p>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-3">
              {tracks.map((track) => (
                <div
                  key={track.title}
                  className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  <div>
                    <span
                      className={`mb-3 inline-block rounded-full border px-3 py-0.5 font-raleway text-xs font-semibold ${track.badgeColor}`}
                    >
                      {track.tag}
                    </span>
                    <h3 className="mb-2.5 font-raleway text-lg font-bold text-slate-900">
                      {track.title}
                    </h3>
                    <p className="mb-5 font-raleway text-xs leading-relaxed text-slate-600">
                      {track.description}
                    </p>

                    <div className="border-t border-slate-100 pt-4 mb-6">
                      <h4 className="mb-2.5 font-raleway text-xs font-bold uppercase tracking-wider text-slate-500">
                        Curriculum Highlights
                      </h4>
                      <ul className="space-y-2">
                        {track.modules.map((m) => (
                          <li
                            key={m}
                            className="flex items-start gap-2 text-xs text-slate-700 font-raleway"
                          >
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                            <span className="leading-snug">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    href={track.ctaHref}
                    target={track.ctaHref.startsWith("http") ? "_blank" : undefined}
                    rel={track.ctaHref.startsWith("http") ? "noopener" : undefined}
                    size="sm"
                    className="w-full rounded-full shadow-xs"
                  >
                    {track.ctaText}
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Highlights Section */}
        <section className="border-t border-slate-200/80 bg-slate-50/50 py-14 md:py-18">
          <Container>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-cyan-900">
                Program Differentiators
              </span>
              <h2 className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Why Enterprise Teams Train with Indus AI
              </h2>
              <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                We build and operate autonomous agentic software every day. Our training is grounded in real
                production telemetry, failure modes, and deterministic engineering.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"
                >
                  <div
                    className={`mb-3.5 flex h-9 w-9 items-center justify-center rounded-lg border ${item.iconBg}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mb-1.5 font-raleway text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="font-raleway text-xs leading-relaxed text-slate-600">
                    {item.description}
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
          { name: "Academy", path: "/academy" },
        ])}
      />
    </>
  );
}
