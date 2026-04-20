import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ReadyToTransform from "../components/sections/ReadyToTransform";

const functionalUseCases = [
  {
    id: "customer-operations",
    title: "Customer Operations",
    description:
      "Automate support, service, booking, onboarding, and customer communication across voice and workflow layers.",
    productFit: "Best fit: IndusLabs + Agentic AI SM",
    workflows: [
      "Voice-led support automation",
      "Appointment and booking flows",
      "Customer onboarding journeys",
      "Escalation and human handoff",
    ],
  },
  {
    id: "financial-workflows",
    title: "Financial Workflows",
    description:
      "Deploy AI for lending, collections, customer verification, repayment communication, and servicing operations.",
    productFit: "Best fit: FinoLabs + IndusLabs",
    workflows: [
      "Collections and recovery workflows",
      "Loan servicing and reminders",
      "Customer verification and compliance support",
      "BFSI operations automation",
    ],
  },
  {
    id: "revenue-operations",
    title: "Revenue Operations",
    description:
      "Manage inbound and outbound leads with automated qualification, scoring, nurturing, CRM updates, and sales handoff.",
    productFit: "Best fit: Marketing Automation Agent + IndusLabs",
    workflows: [
      "Lead capture and enrichment",
      "Qualification and scoring",
      "Follow-up and nurture journeys",
      "CRM routing and sales handoff",
    ],
  },
  {
    id: "enterprise-automation",
    title: "Enterprise Automation",
    description:
      "Go beyond conversations with agentic systems that coordinate tools, execute tasks, and automate complex internal workflows.",
    productFit: "Best fit: Agentic AI SM",
    workflows: [
      "Task orchestration across tools",
      "Operations workflow execution",
      "Cross-functional process automation",
      "Observability and control loops",
    ],
  },
];

const industries = [
  {
    title: "Banking & Finance",
    description:
      "Collections, servicing, onboarding, verification, and customer communication for BFSI teams.",
  },
  {
    title: "Hospitality",
    description:
      "Reservation flows, guest communication, concierge automation, and service operations.",
  },
  {
    title: "Healthcare",
    description:
      "Appointment coordination, reminders, patient servicing, and operational follow-ups.",
  },
  {
    title: "Retail & Commerce",
    description:
      "Order updates, post-purchase support, customer retention, and operations automation.",
  },
  {
    title: "Automotive",
    description:
      "Lead qualification, test-drive scheduling, service bookings, and after-sales engagement.",
  },
  {
    title: "Enterprise Operations",
    description:
      "Internal workflow automation for support desks, operations teams, and business process owners.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 font-raleway">
              Use Cases and Solutions
            </span>
            <h1 className="mb-6 text-5xl font-bold text-gray-900 font-raleway md:text-6xl">
              Agentic AI Products for High-Impact Enterprise Workflows
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 font-raleway">
              Our products map to repeatable workflows across customer
              operations, revenue operations, financial servicing, and
              autonomous business automation. This is where product capability
              meets production use case.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/products" size="lg" className="font-raleway">
                Explore Product Suite
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

      <section className="py-20">
        <Container>
          <div className="mb-14 max-w-3xl">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-raleway">
              Functional Use Cases
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-raleway">
              We focus on workflows where productized agentic systems can drive
              measurable operational outcomes.
            </p>
          </div>
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            {functionalUseCases.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900 font-raleway">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600 font-raleway">
                  {item.description}
                </p>
                <div className="mb-6 inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-sm text-white font-raleway">
                  {item.productFit}
                </div>
                <ul className="mt-auto space-y-3 border-t border-gray-100 pt-5">
                  {item.workflows.map((workflow) => (
                    <li
                      key={workflow}
                      className="flex items-start gap-3 text-sm text-gray-700 font-raleway"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{workflow}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="industry-deployments" className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-raleway">
              Industry Deployments
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-raleway">
              Our products are designed to adapt to regulated, service-heavy,
              and workflow-rich environments across multiple industries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900 font-raleway">
                  {industry.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 font-raleway">
                  {industry.description}
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
