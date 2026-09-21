import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import ReadyToTransform from "../components/sections/ReadyToTransform";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog & Insights — Enterprise Agentic AI and Automation",
  description:
    "Practical architectural analyses on autonomous AI agents, enterprise orchestration, speech models, and deploying production AI inside real operations.",
  path: "/blog",
  keywords: [
    "agentic AI blog",
    "enterprise AI agents",
    "autonomous AI systems",
    "AI automation insights",
  ],
});

const blogPosts = [
  {
    title: "Agentic AI: The Future of Enterprise Work Is Here",
    excerpt:
      "Explore how autonomous AI agents are moving beyond reactive chat to proactive, goal-driven execution — mutating CRM records, triggering telephony, and automating multi-step operational pipelines.",
    href: "/blog/agentic-ai",
    date: "August 14, 2025",
    isoDate: "2025-08-14",
    readTime: "12 min read",
    category: "Core Architecture",
    badgeColor: "bg-cyan-50 border-cyan-200 text-cyan-900",
    gradient: "from-cyan-500/10 via-blue-500/5 to-slate-50",
    accentColor: "text-cyan-600",
    icon: (
      <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Deploying AI Agents at Enterprise Scale with AWS",
    excerpt:
      "A comprehensive guide to building, securing, and scaling production-ready agent systems using AWS VPC isolation, Bedrock guardrails, and deterministic API execution.",
    href: "/blog/aws-enterprise-ai-agents",
    date: "August 14, 2025",
    isoDate: "2025-08-14",
    readTime: "15 min read",
    category: "Cloud & Security",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-900",
    gradient: "from-amber-500/10 via-orange-500/5 to-slate-50",
    accentColor: "text-amber-600",
    icon: (
      <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Beyond the Hype: Real AI Agents Operating Today",
    excerpt:
      "Discover practical, high-impact AI agents delivering measurable ROI across debt collections, 24/7 multilingual hotel concierge, and 60-second automotive lead qualification.",
    href: "/blog/ai-agents-today",
    date: "August 14, 2025",
    isoDate: "2025-08-14",
    readTime: "10 min read",
    category: "Real Deployments",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
    gradient: "from-emerald-500/10 via-teal-500/5 to-slate-50",
    accentColor: "text-emerald-600",
    icon: (
      <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function BlogPage() {
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
                Technical Insights &bull; Engineering Perspectives
              </span>
              <h1 className="mb-4 font-raleway text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Insights on Agentic AI &amp; Enterprise Automation
              </h1>
              <p className="mx-auto max-w-2xl font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
                Engineering deep-dives, operational frameworks, and architecture blueprints for deploying
                autonomous AI agents inside production enterprise workflows.
              </p>
            </div>
          </Container>
        </section>

        {/* Blog Post Cards Grid */}
        <section className="py-14 md:py-18 bg-white border-t border-slate-100">
          <Container>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.href}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                >
                  {/* Decorative Banner */}
                  <div
                    className={`relative flex h-40 w-full items-center justify-center bg-gradient-to-br ${post.gradient} border-b border-slate-100 p-6`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/60 bg-white/80 shadow-xs backdrop-blur-xs transition-transform duration-300 group-hover:scale-110">
                      {post.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-raleway text-xs font-semibold ${post.badgeColor}`}
                        >
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-raleway">
                          <span>&bull;</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h2 className="mb-2.5 font-raleway text-lg font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                        <Link href={post.href}>{post.title}</Link>
                      </h2>

                      <p className="mb-4 font-raleway text-xs leading-relaxed text-slate-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-3.5 flex items-center justify-between">
                      <time
                        dateTime={post.isoDate}
                        className="font-raleway text-[11px] text-slate-500"
                      >
                        {post.date}
                      </time>
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
          </Container>
        </section>

        {/* Standard Light CTA */}
        <ReadyToTransform />
      </main>
      <Footer />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}