import type { Metadata } from "next";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ReadyToTransform from "../components/sections/ReadyToTransform";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema, productSuiteSchema } from "../lib/schema";
import { pageMetadata } from "../lib/metadata";
import { products, siteConfig } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "AI Agent Products — Voice, Workflows, Finance, Leads",
  description:
    "Four enterprise AI agent products on one platform: IndusLabs voice AI, Agentic AI SM multi-agent orchestration, FinoLabs for BFSI workflows, and the Marketing Automation Agent for lead management.",
  path: "/products",
  keywords: [
    "enterprise AI agent products",
    "agentic AI platform",
    "multi-agent orchestration platform",
    "AI voice agent platform",
    "AI agents for BFSI",
  ],
});

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
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-white">

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
                href="https://calendly.com/hello-induslabs/30min"
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
            {products.map((product) => (
              <article
                key={product.id}
                id={product.id}
                className="grid gap-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm md:p-8 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
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
                  <p className="mb-6 rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm leading-relaxed text-gray-700 font-raleway">
                    <span className="font-semibold text-gray-900">Best fit for:</span>{" "}
                    {product.forTeams}
                  </p>

                  {product.external ? (
                    <Button
                      href={product.url}
                      target="_blank"
                      rel="noopener"
                      size="sm"
                      className="font-raleway"
                    >
                      Visit {product.domain}
                    </Button>
                  ) : (
                    <Button href="/contact" size="sm" className="font-raleway">
                      Enquire about {product.name}
                    </Button>
                  )}
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
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-gray-500 font-raleway">
            IndusLabs, FinoLabs, Agentic AI SM and the Marketing Automation
            Agent are products of {siteConfig.legalName}.
          </p>
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
      </main>
      <Footer />
      <JsonLd
        data={[
          productSuiteSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ]}
      />
    </>
  );
}
