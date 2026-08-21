import Link from "next/link";
import Container from "../ui/Container";

/**
 * Replaces the previous testimonial carousel and logo marquee. Every claim
 * here describes how the platform is built and deployed — nothing is
 * attributed to a customer that has not given permission, and no outcome
 * metric appears without a source.
 */
const pillars = [
  {
    title: "Deployment flexibility",
    body: "Cloud, private cloud, or on-premise options for enterprises with data residency and regulatory constraints. The deployment model is chosen per engagement, not forced by the product.",
  },
  {
    title: "Integration layer",
    body: "AI agents run on top of the systems you already operate — telephony, CRM, ERP, core banking, ticketing, and internal tools — instead of asking you to rebuild around them.",
  },
  {
    title: "Human-in-the-loop control",
    body: "Approvals, confidence thresholds, escalation rules, and defined handoff points. Autonomy expands workflow by workflow, as results justify it.",
  },
  {
    title: "Observability and audit",
    body: "Every conversation, decision, and action an agent takes is logged and reviewable, so operations teams can audit outcomes and tune the rules that produced them.",
  },
  {
    title: "Multilingual by default",
    body: "Built for Indian enterprises first: major Indian languages alongside English, including customers who switch language mid-conversation.",
  },
  {
    title: "Built for security review",
    body: "Encryption in transit, access controls, and audit logging as standard. We work through enterprise security questionnaires directly — ask us for current certification status and our sub-processor list.",
  },
];

export default function EnterpriseTrust() {
  return (
    <section
      id="enterprise"
      aria-labelledby="enterprise-heading"
      className="bg-slate-50 py-24"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 font-raleway text-sm font-medium text-slate-700">
            Enterprise readiness
          </span>
          <h2
            id="enterprise-heading"
            className="mb-6 font-raleway text-4xl font-bold text-gray-900 md:text-5xl"
          >
            Built for enterprise deployment, not demos
          </h2>
          <p className="font-raleway text-lg leading-relaxed text-gray-600">
            Getting an AI agent to work once is a prototype. Getting it to run
            every day inside a regulated enterprise — integrated, observable,
            and under human control — is the part we build for.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 font-raleway text-xl font-bold text-gray-900">
                {pillar.title}
              </h3>
              <p className="font-raleway text-sm leading-relaxed text-gray-600">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <p className="mx-auto mb-6 max-w-2xl font-raleway leading-relaxed text-gray-600">
            Evaluating agentic AI for a specific workflow? Tell us what the
            workflow is and we will tell you honestly whether it is a fit, and
            what a scoped first deployment would involve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#2C514C] px-6 py-3 font-raleway text-sm font-bold text-white transition-colors hover:bg-[#132A22]"
            >
              Send an enquiry
            </Link>
            <Link
              href="/demo"
              className="rounded-full border border-gray-300 px-6 py-3 font-raleway text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Try a live voice demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
