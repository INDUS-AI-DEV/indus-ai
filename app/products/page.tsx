import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ReadyToTransform from "../components/sections/ReadyToTransform";

const products = [
  {
    id: "induslabs",
    name: "IndusLabs",
    domain: "induslabs.io",
    category: "Enterprise Voice AI Platform",
    description:
      "A production-grade product for multilingual voice agents across support, collections, booking, onboarding, and customer operations.",
    forTeams: "Customer operations, support, sales, hospitality, BFSI, service teams",
    workflows: [
      "Inbound and outbound voice automation",
      "Multilingual customer conversations",
      "Telephony and CRM-connected flows",
      "Escalation, analytics, and workflow automation",
    ],
  },
  {
    id: "finolabs",
    name: "FinoLabs",
    domain: "finolabs.io",
    category: "AI for Financial Operations",
    description:
      "Purpose-built financial workflow automation for lending, collections, servicing, verification, and regulated customer operations.",
    forTeams: "BFSI, lending, collections, servicing, verification, ops teams",
    workflows: [
      "Loan servicing and repayment journeys",
      "Collections and recovery workflows",
      "Customer verification and KYC support",
      "Finance operations automation and oversight",
    ],
  },
  {
    id: "agentic-ai-sm",
    name: "Agentic AI SM",
    domain: "Auto Socials",
    category: "Auto Socials",
    description:
      "A broader enterprise system for orchestrating agents that reason, act, use tools, and automate multi-step business workflows.",
    forTeams: "Operations, internal platforms, enterprise transformation, workflow owners",
    workflows: [
      "Multi-agent orchestration",
      "Tool use and task execution",
      "Cross-system workflow automation",
      "Observability, review, and operational control",
    ],
  },
  {
    id: "marketing-automation-agent",
    name: "Marketing Automation Agent",
    domain: "Lead Management AI",
    category: "AI Agent for Lead Management",
    description:
      "An AI agent for managing inbound and outbound leads, qualifying prospects, routing high-intent opportunities, and keeping sales teams focused on conversion-ready conversations.",
    forTeams: "Sales, marketing, growth, customer acquisition, CRM, and revenue operations teams",
    workflows: [
      "Lead capture and enrichment",
      "Lead qualification and scoring",
      "Automated follow-up and nurturing",
      "CRM updates, routing, and sales handoff",
    ],
  },
];

const capabilities = [
  "Voice agents",
  "Lead management automation",
  "Autonomous workflow execution",
  "Multilingual intelligence",
  "Enterprise integrations",
  "CRM routing and handoff",
  "Analytics and observability",
  "Human-in-the-loop controls",
];

const deploymentBenefits = [
  {
    title: "Production-Ready Architecture",
    description:
      "Built for enterprise deployment with reliability, governance, and operational visibility in mind.",
  },
  {
    title: "Modular Product Design",
    description:
      "Adopt one product for a focused workflow or combine multiple products into a larger automation stack.",
  },
  {
    title: "Enterprise Integration Layer",
    description:
      "Connect telephony, CRM, finance systems, support tools, and internal software into one AI operating layer.",
  },
  {
    title: "Operational Control",
    description:
      "Keep teams in control with approvals, handoff logic, escalation, and performance monitoring.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 font-raleway">
              Product Suite
            </span>
            <h1 className="mb-6 text-5xl font-bold text-gray-900 font-raleway md:text-6xl">
              Enterprise Agentic AI Products Built for Production Workflows
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 font-raleway">
              IndusAI offers a product suite for voice, lead management,
              financial operations, and autonomous business automation. Each
              product is designed for repeatable enterprise workflows,
              measurable outcomes, and real-world deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#products" size="lg" className="font-raleway">
                Explore Products
              </Button>
              <Button
                href="https://calendly.com/indusai-app/meet"
                variant="secondary"
                size="lg"
                className="font-raleway"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section id="products" className="py-20">
        <Container>
          <div className="grid gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className="grid gap-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm md:p-8 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500 font-raleway">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white font-raleway">
                      {product.domain}
                    </span>
                  </div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-700 font-raleway">
                    {product.category}
                  </p>
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 font-raleway">
                    {product.name}
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600 font-raleway">
                    {product.description}
                  </p>
                  <p className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm leading-relaxed text-gray-700 font-raleway">
                    <span className="font-semibold text-gray-900">Best fit for:</span>{" "}
                    {product.forTeams}
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900 font-raleway">
                    Core workflows
                  </h3>
                  <ul className="space-y-3">
                    {product.workflows.map((workflow) => (
                      <li
                        key={workflow}
                        className="flex items-start gap-3 border-b border-gray-100 pb-3 text-sm text-gray-700 last:border-b-0 last:pb-0 font-raleway"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        <span>{workflow}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="platform" className="bg-slate-950 py-20 text-white">
        <Container>
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold font-raleway">
              Shared Platform Capabilities
            </h2>
            <p className="text-lg leading-relaxed text-slate-300 font-raleway">
              These products are built on a common enterprise platform for
              execution, integrations, observability, and workflow control.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 font-raleway"
              >
                {capability}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-slate-50">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-raleway">
              Built for Enterprise Deployment
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-raleway">
              The product suite is designed for repeatable deployment across
              support, sales, finance, service, and operations teams that need
              control, integration, and measurable impact.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {deploymentBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900 font-raleway">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 font-raleway">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ReadyToTransform />
      <Footer />
    </main>
  );
}
