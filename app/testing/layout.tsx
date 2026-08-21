import type { Metadata } from "next";

/**
 * Internal voice-agent test harness. Kept out of the index and the sitemap —
 * it is not a public page.
 */
export const metadata: Metadata = {
  title: "Internal testing",
  robots: { index: false, follow: false, nocache: true },
};

export default function TestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
