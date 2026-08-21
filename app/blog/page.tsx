import type { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { pageMetadata } from "../lib/metadata";
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = pageMetadata({
  title: "Blog — Agentic AI and Enterprise Automation",
  description:
    "Practical writing on agentic AI, autonomous agents, and deploying AI automation inside enterprise workflows, from the Indus AI team.",
  path: "/blog",
  keywords: [
    "agentic AI blog",
    "enterprise AI agents",
    "AI automation insights",
  ],
});

const blogPosts = [
  {
    title: 'Agentic AI: The Future of Work Is Here',
    excerpt: 'Explore how AI agents are transforming industries by moving from reactive automation to proactive, goal-driven execution.',
    href: '/blog/agentic-ai',
    date: 'August 14, 2025',
    isoDate: '2025-08-14',
    readTime: '12 min read',
    category: 'AI Technology'
  },
  {
    title: 'Deploying AI Agents at Enterprise Scale with AWS',
    excerpt: 'A comprehensive guide to building, securing, and scaling production-ready AI agents using AWS services.',
    href: '/blog/aws-enterprise-ai-agents',
    date: 'August 14, 2025',
    isoDate: '2025-08-14',
    readTime: '15 min read',
    category: 'Enterprise Solutions'
  },
  {
    title: 'Beyond the Hype: Real AI Agents You Can Use Today',
    excerpt: 'Discover practical, high-impact AI agents available in 2025 that are transforming businesses and workflows.',
    href: '/blog/ai-agents-today',
    date: 'August 14, 2025',
    isoDate: '2025-08-14',
    readTime: '10 min read',
    category: 'AI Applications'
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-white pt-24 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Insights & Updates
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            The latest in AI technology, enterprise solutions, and industry trends.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.href} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full bg-gray-100 rounded-2xl overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-gray-300">
                      {post.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-4 flex items-center gap-x-4 text-xs">
                    <span className="text-green-700 bg-green-50 px-3 py-1.5 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <time dateTime={post.isoDate}>
                        {post.date}
                      </time>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-green-700">
                      <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                  <div className="mt-4">
                    <Link 
                      href={post.href} 
                      className="text-sm font-medium text-green-700 hover:text-green-800 flex items-center"
                    >
                      Read more
                      <svg className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-gray-200 bg-slate-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Working on an agentic AI deployment?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-gray-600">
            We are happy to talk through the architecture even if you are early.
            Tell us what workflow you are trying to automate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#2C514C] px-6 py-3 font-bold text-white transition-colors hover:bg-[#132A22]"
          >
            Send an enquiry
          </Link>
        </div>
      </div>
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