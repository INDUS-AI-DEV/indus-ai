import Container from "../ui/Container";
import Button from "../ui/Button";
import HeroVisual from "./HeroVisual";

/**
 * Server-rendered: the H1 and body copy ship as plain HTML so they are the
 * LCP candidate and are visible to crawlers without JavaScript. Only
 * HeroVisual is a client component.
 */
const metrics = [
  { value: "4", label: "Products in the suite", tone: "text-blue-600" },
  { value: "22+", label: "Languages supported", tone: "text-emerald-600" },
  { value: "24/7", label: "Autonomous operation", tone: "text-violet-600" },
  { value: "On-prem", label: "Deployment option", tone: "text-amber-600" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 pt-28 pb-20">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
              <span className="font-raleway text-sm font-medium text-blue-900">
                Enterprise agentic AI, deployed in production
              </span>
            </div>

            <h1 className="mb-6 font-raleway text-4xl font-bold leading-tight tracking-tight text-balance text-gray-900 md:text-6xl">
              The{" "}
              <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                agentic AI platform
              </span>{" "}
              for enterprise workflows
            </h1>

            <p className="mb-6 font-raleway text-xl leading-relaxed text-gray-700">
              Indus AI builds AI agents that do the work, not just the talking —
              reasoning over a goal, acting inside your telephony, CRM and
              finance systems, and escalating to your team when they should.
            </p>

            <p className="mb-8 font-raleway text-lg leading-relaxed text-gray-600">
              Deploy multilingual voice agents, lead management automation,
              financial operations workflows, and multi-agent orchestration from
              one enterprise AI platform.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-gray-100 bg-white/70 p-4 text-center backdrop-blur-sm"
                >
                  <div
                    className={`font-raleway text-2xl font-bold tabular-nums ${metric.tone}`}
                  >
                    {metric.value}
                  </div>
                  <div className="font-raleway text-sm text-gray-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="#products" size="lg" className="font-raleway">
                Explore the products
              </Button>
              <Button
                href="/demo"
                variant="secondary"
                size="lg"
                className="font-raleway"
              >
                Try a live voice demo
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
