import Link from "next/link";
import Container from "../ui/Container";

const aboutHighlights = [
  {
    title: "Autonomous Action Over Chat",
    description:
      "We engineer production AI software that mutates CRM records, executes telephone calls, and verifies compliance rather than generating advisory text.",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "bg-cyan-50 border-cyan-200/80",
  },
  {
    title: "IIT Delhi Leadership",
    description:
      "Founded in 2023 by Vivek Gupta, alumnus of the Indian Institute of Technology Delhi, bringing deep enterprise systems engineering rigor.",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    iconBg: "bg-emerald-50 border-emerald-200/80",
  },
  {
    title: "Global HQ & Regional Offices",
    description:
      "Global Headquarters at Logix Cyber Park, Sector 62, Noida, with active engineering and operations offices in Bengaluru, Mumbai, and New York.",
    icon: (
      <svg className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    iconBg: "bg-violet-50 border-violet-200/80",
  },
  {
    title: "Dedicated Product Divisions",
    description:
      "IndusLabs (Voice AI OS), FinoLabs (BFSI Operations), Agentic AI Suite (Multi-Agent Workflows), and Indus AI Academy (Enterprise Upskilling).",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    iconBg: "bg-amber-50 border-amber-200/80",
  },
];

export default function HomeAboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-14 md:py-18"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            Parent Organization &bull; Corporate Background
          </span>
          <h2
            id="about-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            About Indus AI
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            An Indian enterprise software company developing production agentic AI systems that
            run mission-critical operations for regulated, high-volume businesses.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {aboutHighlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="mb-1 font-raleway text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="font-raleway text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 font-raleway text-xs font-bold text-[#0284c7] hover:underline"
          >
            Read Our Full Company Story &amp; Leadership Principles &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
