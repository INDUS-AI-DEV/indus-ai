import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Multilingual Voice AI Demo — Ramcharitmanas",
  description:
    "A multilingual Indian-language voice agent answering questions in real time, demonstrating Indus AI multilingual conversation handling.",
  path: "/demo/ramcharitmanas",
  keywords: ["multilingual voice AI", "Hindi voice AI agent", "Indian language AI agent"],
});

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
