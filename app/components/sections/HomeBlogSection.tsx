import Link from "next/link";
import Container from "../ui/Container";

const featuredPosts = [
  {
    title: "Agentic AI: The Future of Enterprise Work Is Here",
    excerpt:
      "How autonomous AI agents are moving beyond chat to goal-driven execution — triggering telephony, validating policies, and mutating CRM records.",
    href: "/blog/agentic-ai",
    category: "Architecture",
    badgeColor: "bg-cyan-50 border-cyan-200 text-cyan-900",
    date: "Aug 2025",
    readTime: "12 min read",
    icon: (
      <svg className="h-5 w-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-cyan-500/10 via-blue-500/5 to-slate-50",
  },
  {
    title: "Deploying AI Agents at Enterprise Scale with AWS",
    excerpt:
      "A comprehensive architectural blueprint for building, securing, and scaling production-ready agent systems using AWS VPC isolation and Bedrock.",
    href: "/blog/aws-enterprise-ai-agents",
    category: "Cloud & Security",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-900",
    date: "Aug 2025",
    readTime: "15 min read",
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    gradient: "from-amber-500/10 via-orange-500/5 to-slate-50",
  },
  {
    title: "Beyond the Hype: Real AI Agents Operating Today",
    excerpt:
      "Discover practical AI agents delivering measurable ROI across debt collections, 24/7 hotel concierge, and 60-second automotive lead qualification.",
    href: "/blog/ai-agents-today",
    category: "Deployments",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
    date: "Aug 2025",
    readTime: "10 min read",
    icon: (
      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-emerald-500/10 via-teal-500/5 to-slate-50",
  },
];

export default function HomeBlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="scroll-mt-20 border-t border-slate-200/80 bg-slate-50/50 py-14 md:py-18"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-violet-900">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
            Engineering Insights &bull; Technical Blueprints
          </span>
          <h2
            id="blog-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Latest Insights &amp; Publications
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Architectural frameworks, production telemetry analyses, and deployment patterns from our
            core AI engineering team.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.href}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              {/* Decorative Accent Banner */}
              <div
                className={`flex h-24 w-full items-center justify-center bg-gradient-to-br ${post.gradient} border-b border-slate-100`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/60 bg-white shadow-xs">
                  {post.icon}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="mb-2.5 flex items-center justify-between text-xs font-raleway">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-semibold ${post.badgeColor}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-[11px]">{post.readTime}</span>
                  </div>
                  <h3 className="mb-2 font-raleway text-sm font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                    <Link href={post.href}>{post.title}</Link>
                  </h3>
                  <p className="font-raleway text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3">
                  <Link
                    href={post.href}
                    className="font-raleway text-xs font-bold text-[#0284c7] hover:underline"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Explore All Link */}
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 font-raleway text-xs font-bold text-slate-800 shadow-xs transition-colors hover:bg-slate-50 hover:border-slate-400"
          >
            Explore All Engineering Articles &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
