import Container from "../ui/Container";

/**
 * Long-form explainer targeting "what is an agentic AI platform" and
 * "AI agents for enterprise workflows". The four steps are a genuine
 * sequence — an agent runs them in this order on every task — so they are
 * numbered.
 */
const steps = [
  {
    title: "Understand the request",
    body: "The agent interprets what a customer said on a call, what a lead submitted, or what an internal trigger fired — across languages, channels, and messy real-world phrasing.",
  },
  {
    title: "Plan the work",
    body: "It breaks the goal into steps, checks business rules and eligibility, and decides which systems it needs to touch. Where several agents are involved, the orchestration layer sequences them and passes context between them.",
  },
  {
    title: "Take the action",
    body: "This is the part a chatbot cannot do. The agent places the call, updates the CRM record, verifies the document, schedules the appointment, or routes the case — executing inside your systems rather than describing what should happen.",
  },
  {
    title: "Report and hand off",
    body: "Every action is logged for audit. When confidence is low, the rules say so, or a customer asks for a person, the agent escalates with full context instead of guessing.",
  },
];

export default function AgenticExplainer() {
  return (
    <section
      id="how-agentic-ai-works"
      aria-labelledby="agentic-heading"
      className="border-y border-gray-100 bg-white py-24"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 font-raleway text-sm font-medium text-blue-900">
              How it works
            </span>
            <h2
              id="agentic-heading"
              className="mb-6 font-raleway text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
            >
              What an agentic AI platform actually does
            </h2>
            <p className="mb-5 font-raleway text-lg leading-relaxed text-gray-600">
              Most enterprise AI stops at conversation. An agentic system
              completes the work. It reasons over a goal, calls the tools and
              systems that goal depends on, takes the action, and knows when to
              bring a human in.
            </p>
            <p className="font-raleway text-lg leading-relaxed text-gray-600">
              That difference is not the model — it is everything built around
              it. Orchestration across multiple agents, connections into
              telephony, CRM and finance systems, guardrails that hold in
              regulated workflows, and observability detailed enough for an
              operations team to trust what ran overnight.
            </p>
          </div>

          <ol className="grid gap-px rounded-2xl border border-gray-200 bg-gray-200">
            {steps.map((step, index) => (
              <li key={step.title} className="bg-white p-6 first:rounded-t-2xl last:rounded-b-2xl md:p-8">
                <div className="flex gap-5">
                  <span
                    className="font-raleway text-sm font-bold text-emerald-600 tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 font-raleway text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="font-raleway leading-relaxed text-gray-600">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
