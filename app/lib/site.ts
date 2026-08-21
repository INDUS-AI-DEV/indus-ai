/**
 * Single source of truth for site-wide SEO, brand, and entity data.
 *
 * Indus AI Pvt Ltd is the parent company. IndusLabs, FinoLabs, Agentic AI SM
 * and the Marketing Automation Agent are its products; two of them live on
 * their own domains. Search engines only understand that relationship if we
 * declare it, which is what `organizationSchema` below does.
 */

export const siteConfig = {
  name: "Indus AI",
  legalName: "Indus AI Pvt Ltd",
  url: "https://indusai.app",
  locale: "en_IN",
  description:
    "Indus AI is an enterprise agentic AI platform. Deploy AI agents that run real business workflows across customer operations, financial services, lead management, and internal automation.",
  tagline: "The agentic AI platform for enterprise workflows",
  email: "info@indusai.app",
  demoUrl: "https://calendly.com/hello-induslabs/30min",
  dashboardUrl: "https://playground.induslabs.io",
  social: {
    linkedin: "https://www.linkedin.com/company/indus-ai/",
    twitter: "https://twitter.com/indusai_app",
    youtube: "https://youtube.com/@indusai",
  },
} as const;

export const products = [
  {
    id: "induslabs",
    name: "IndusLabs",
    domain: "induslabs.io",
    url: "https://induslabs.io",
    external: true,
    category: "Enterprise Voice AI Agents",
    shortDescription:
      "Build and deploy multilingual voice agents for support, sales, collections, booking, onboarding, and customer operations.",
    description:
      "A production-grade platform for multilingual voice agents across support, collections, booking, onboarding, and customer operations.",
    forTeams:
      "Customer operations, support, sales, hospitality, BFSI, and service teams",
    features: [
      "Real-time voice agents",
      "Multilingual conversations",
      "Telephony and CRM integrations",
      "Analytics and workflow automation",
    ],
    workflows: [
      "Inbound and outbound voice automation",
      "Multilingual customer conversations",
      "Telephony and CRM-connected flows",
      "Escalation, analytics, and workflow automation",
    ],
  },
  {
    id: "agentic-ai-sm",
    name: "Agentic AI SM",
    domain: "Multi-agent orchestration",
    url: "/products#agentic-ai-sm",
    external: false,
    category: "Autonomous Agent Systems",
    shortDescription:
      "Orchestrate AI agents that reason, use tools, and execute multi-step business workflows beyond chat and voice.",
    description:
      "An enterprise system for orchestrating AI agents that reason, act, use tools, and automate multi-step business workflows across your existing stack.",
    forTeams:
      "Operations, internal platform, enterprise transformation, and workflow owners",
    features: [
      "Multi-agent orchestration",
      "Workflow execution",
      "Tool use and business actions",
      "Enterprise-grade observability",
    ],
    workflows: [
      "Multi-agent orchestration",
      "Tool use and task execution",
      "Cross-system workflow automation",
      "Observability, review, and operational control",
    ],
  },
  {
    id: "finolabs",
    name: "FinoLabs",
    domain: "finolabs.ai",
    url: "https://finolabs.ai",
    external: true,
    category: "AI Agents for Financial Operations",
    shortDescription:
      "Purpose-built AI workflows for lending, collections, servicing, verification, and process automation in BFSI.",
    description:
      "Purpose-built financial workflow automation for lending, collections, servicing, verification, and regulated customer operations.",
    forTeams:
      "BFSI, lending, collections, servicing, verification, and operations teams",
    features: [
      "Loan servicing and collections",
      "Financial customer support",
      "Verification and compliance workflows",
      "Automation for operations teams",
    ],
    workflows: [
      "Loan servicing and repayment journeys",
      "Collections and recovery workflows",
      "Customer verification and KYC support",
      "Finance operations automation and oversight",
    ],
  },
  {
    id: "marketing-automation-agent",
    name: "Marketing Automation Agent",
    domain: "Lead management AI",
    url: "/products#marketing-automation-agent",
    external: false,
    category: "AI Agents for Lead Management",
    shortDescription:
      "Automate lead capture, qualification, follow-up, and CRM handoff so sales teams focus on high-intent opportunities.",
    description:
      "An AI agent for managing inbound and outbound leads, qualifying prospects, routing high-intent opportunities, and keeping sales teams focused on conversion-ready conversations.",
    forTeams:
      "Sales, marketing, growth, customer acquisition, CRM, and revenue operations teams",
    features: [
      "Inbound and outbound lead handling",
      "Qualification and scoring",
      "Automated follow-up workflows",
      "CRM routing and sales handoff",
    ],
    workflows: [
      "Lead capture and enrichment",
      "Lead qualification and scoring",
      "Automated follow-up and nurturing",
      "CRM updates, routing, and sales handoff",
    ],
  },
] as const;

export type Product = (typeof products)[number];

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
