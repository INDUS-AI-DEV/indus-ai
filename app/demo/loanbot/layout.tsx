import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Loan Recovery Voice AI Demo — LoanBot",
  description:
    "Hear an AI collections agent handle a loan recovery conversation — eligibility, repayment journeys, and escalation, running live in your browser.",
  path: "/demo/loanbot",
  keywords: ["AI collections agent", "loan recovery voice AI", "AI agent for lending"],
});

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
