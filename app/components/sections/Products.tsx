import Container from "../ui/Container";
import Button from "../ui/Button";

const products = [
  {
    id: "induslabs",
    name: "IndusLabs",
    domain: "induslabs.io",
    category: "Enterprise Voice AI Platform",
    description:
      "Build and deploy multilingual voice agents for support, sales, collections, booking, onboarding, and customer operations.",
    features: [
      "Real-time voice agents",
      "Multilingual conversations",
      "Telephony and CRM integrations",
      "Analytics and workflow automation",
    ],
  },
  {
    id: "finolabs",
    name: "FinoLabs",
    domain: "finolabs.io",
    category: "AI for Financial Operations",
    description:
      "Purpose-built AI workflows for lending, collections, financial servicing, customer verification, and process automation in BFSI.",
    features: [
      "Loan servicing and collections",
      "Financial customer support",
      "Verification and compliance workflows",
      "Automation for operations teams",
    ],
  },
  {
    id: "agentic-ai-sm",
    name: "Agentic AI SM",
    domain: "Auto Socials",
    category: "Auto Socials",
    description:
      "Deploy agentic systems that can reason, act, coordinate across tools, and automate complex business workflows beyond chat and voice.",
    features: [
      "Multi-agent orchestration",
      "Workflow execution",
      "Tool use and business actions",
      "Enterprise-grade observability",
    ],
  },
  {
    id: "marketing-automation-agent",
    name: "Marketing Automation Agent",
    domain: "Lead Management AI",
    category: "AI Agent for Lead Management",
    description:
      "Automate lead capture, qualification, follow-up, and CRM handoff so sales teams can focus on high-intent opportunities.",
    features: [
      "Inbound and outbound lead handling",
      "Qualification and scoring",
      "Automated follow-up workflows",
      "CRM routing and sales handoff",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900 font-raleway">
            Our Products
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 font-raleway md:text-5xl">
            A Product Suite for Agentic Enterprise Automation
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 font-raleway">
            From conversational AI and lead management to financial workflows
            and autonomous enterprise agents, our products are built to help
            businesses automate operations, customer engagement, and
            decision-making at scale.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500 font-raleway">
                  0{index + 1}
                </span>
                <span className="max-w-[70%] rounded-full bg-slate-900 px-3 py-1 text-right text-xs font-medium leading-snug text-white font-raleway">
                  {product.domain}
                </span>
              </div>

              <p className="mb-2 text-sm font-semibold text-blue-700 font-raleway">
                {product.category}
              </p>
              <h3 className="mb-4 min-h-[4rem] text-2xl font-bold leading-tight text-gray-900 font-raleway">
                {product.name}
              </h3>

              <p className="mb-6 min-h-[6.5rem] text-sm leading-relaxed text-gray-600 font-raleway">
                {product.description}
              </p>

              <ul className="mb-8 space-y-3 border-t border-gray-100 pt-5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700 font-raleway"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={`/products#${product.id}`}
                variant="secondary"
                size="sm"
                className="mt-auto min-h-11 w-full whitespace-normal text-center leading-snug font-raleway"
              >
                Explore {product.name}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
