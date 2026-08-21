import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/site";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: string;
};

/** `/testing` is an internal harness and is deliberately excluded. */
const routes: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
  { path: "/demo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/demo/medibot", priority: 0.6, changeFrequency: "monthly" },
  { path: "/demo/loanbot", priority: 0.6, changeFrequency: "monthly" },
  { path: "/demo/hotelbot", priority: 0.6, changeFrequency: "monthly" },
  { path: "/demo/ramcharitmanas", priority: 0.6, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.6, changeFrequency: "monthly" },
  {
    path: "/blog/agentic-ai",
    priority: 0.6,
    changeFrequency: "yearly",
    lastModified: "2025-08-14",
  },
  {
    path: "/blog/aws-enterprise-ai-agents",
    priority: 0.6,
    changeFrequency: "yearly",
    lastModified: "2025-08-14",
  },
  {
    path: "/blog/ai-agents-today",
    priority: 0.6,
    changeFrequency: "yearly",
    lastModified: "2025-08-14",
  },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified ? new Date(route.lastModified) : buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
