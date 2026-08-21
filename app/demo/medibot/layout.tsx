import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Healthcare Voice AI Demo — MediBot",
  description:
    "Talk live to a healthcare AI voice agent. Patient queries, appointment scheduling, and follow-up handled by an Indus AI agent in your browser.",
  path: "/demo/medibot",
  keywords: ["healthcare AI voice agent", "medical appointment AI agent", "AI voice agent demo"],
});

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
