import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { academy } from "../../lib/site";

const academyTracks = [
  {
    tag: "Engineering Track",
    title: "Agentic AI Architecture & Deployment",
    description:
      "Deep technical cohorts for developers building sub-second voice agents, multi-agent MCP orchestration, and zero-hallucination guardrails.",
    badgeColor: "bg-cyan-50 border-cyan-200 text-cyan-900",
  },
  {
    tag: "Operations Track",
    title: "Workflow Automation & Governance",
    description:
      "For operations leaders and product managers automating complex procedures across customer service, lending collections, and sales.",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
  },
  {
    tag: "Executive Advisory",
    title: "Executive AI Strategy & Roadmaps",
    description:
      "Strategic roadmap design for CXOs: evaluating build vs. buy, enterprise ROI modeling, data sovereignty, and AI Center of Excellence.",
    badgeColor: "bg-violet-50 border-violet-200 text-violet-900",
  },
];

export default function HomeAcademySection() {
  return (
    <section
      id="academy"
      aria-labelledby="academy-heading"
      className="scroll-mt-20 border-t border-slate-200/80 bg-slate-50/50 py-14 md:py-18"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-emerald-900">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Corporate Upskilling &bull; Executive Advisory
          </span>
          <h2
            id="academy-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            {academy.name}
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Equipping enterprise teams, developers, and leadership to build, evaluate, and orchestrate
            production-grade autonomous AI systems.
          </p>
        </div>

        {/* 3 Tracks Grid */}
        <div className="grid items-stretch gap-4 md:grid-cols-3">
          {academyTracks.map((track) => (
            <div
              key={track.tag}
              className="flex h-full flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                <span
                  className={`mb-3 inline-block rounded-full border px-2.5 py-0.5 font-raleway text-xs font-semibold ${track.badgeColor}`}
                >
                  {track.tag}
                </span>
                <h3 className="mb-2 font-raleway text-base font-bold text-slate-900">
                  {track.title}
                </h3>
                <p className="font-raleway text-xs leading-relaxed text-slate-600">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-emerald-200/90 bg-gradient-to-r from-emerald-50/50 via-white to-cyan-50/30 p-5 shadow-xs">
          <div>
            <h4 className="font-raleway text-sm font-bold text-slate-900">
              Tailored Corporate Cohorts Available
            </h4>
            <p className="font-raleway text-xs text-slate-600">
              Custom curriculums tailored to your company&apos;s tech stack, security policies, and target workflows.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-4 py-2 font-raleway text-xs font-bold text-emerald-900 shadow-xs transition-colors hover:bg-emerald-50"
            >
              View All Tracks
            </Link>
            <Button
              href={academy.url}
              target="_blank"
              rel="noopener"
              size="sm"
              className="rounded-full shadow-xs"
            >
              Explore Academy Portal &rarr;
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
