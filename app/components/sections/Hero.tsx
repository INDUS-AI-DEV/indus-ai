import Container from "../ui/Container";
import Button from "../ui/Button";
import HeroVisual from "./HeroVisual";

/**
 * Server-rendered: H1 and value propositions ship as plain HTML for optimal LCP,
 * semantic SEO indexing, and direct Answer Engine Optimization (AEO).
 */
const metrics = [
  { value: "4", label: "Specialized platforms", tone: "text-[#2C514C]" },
  { value: "29+", label: "Regional languages", tone: "text-[#0284c7]" },
  { value: "<500ms", label: "Voice audio latency", tone: "text-[#0d9488]" },
  { value: "On-Prem", label: "VPC & Cloud deployment", tone: "text-slate-800" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-24 pb-12 md:pt-28 md:pb-16">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Left Hero Content */}
          <div className="lg:w-[58%]">
            {/* Direct Positioning Badge (SEO/GEO) */}
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1 shadow-2xs backdrop-blur-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-raleway text-xs font-semibold uppercase tracking-wider text-emerald-950">
                Enterprise Agentic AI Platform &bull; Made in India for Global Scale
              </span>
            </div>

            {/* Direct, Plain-English H1 (SEO / AEO) */}
            <h1 className="mb-3.5 font-raleway text-3xl font-extrabold leading-[1.15] tracking-tight text-balance text-slate-900 sm:text-4xl lg:text-5xl">
              Autonomous AI agents that execute{" "}
              <span className="bg-gradient-to-r from-[#2C514C] via-[#0284c7] to-[#0f766e] bg-clip-text text-transparent">
                real enterprise operations
              </span>
            </h1>

            {/* Crystal-clear value proposition answering "Who we are & What we do" */}
            <p className="mb-3 font-raleway text-base leading-relaxed text-slate-700 sm:text-lg">
              Indus AI deploys specialized, autonomous AI agents that do the actual work —
              speaking natively to customers in 29+ languages, recovering debt for lenders,
              qualifying sales pipeline, and running multi-step workflows across telephony, CRM, and banking core.
            </p>

            <p className="mb-4 font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
              Not passive chatbots that just answer questions. Our agents hold state, call tools,
              trigger transactions, and escalate with context when human judgment is needed.
            </p>

            {/* Direct Product Ecosystem Quick-Bar (Instant Clarity) */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
              <span className="font-bold text-slate-900">Ecosystem:</span>
              <a
                href="https://induslabs.io"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50/80 px-3 py-1 font-raleway text-xs font-semibold text-cyan-900 transition-colors hover:bg-cyan-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#00c3ff]" />
                IndusLabs Voice OS
              </a>
              <a
                href="https://finolabs.ai"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#dad7d0] bg-[#fafaf9] px-3 py-1 font-raleway text-xs font-semibold text-[#080503] transition-colors hover:bg-[#ecebe7]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#080503]" />
                FinoLabs BFSI AI
              </a>
              <a
                href="https://indusai.academy"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1 font-raleway text-xs font-semibold text-emerald-900 transition-colors hover:bg-emerald-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#f0a43a]" />
                Indus AI Academy
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50/80 px-3 py-1 font-raleway text-xs font-semibold text-violet-900 transition-colors hover:bg-violet-100"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                Agentic AI Suite
              </a>
            </div>

            {/* Compact 80% Scale Enterprise Metrics */}
            <div className="mb-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-slate-200/80 bg-white/90 p-2.5 text-center shadow-2xs backdrop-blur-xs"
                >
                  <div
                    className={`font-raleway text-xl font-extrabold tracking-tight tabular-nums sm:text-2xl ${metric.tone}`}
                  >
                    {metric.value}
                  </div>
                  <div className="mt-0.5 font-raleway text-[11px] font-medium text-slate-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#products" size="md">
                Explore product suite
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

          {/* Right Hero Visual (80% scaled down to eliminate screen clipping) */}
          <div className="relative flex w-full justify-center lg:w-[42%] lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
