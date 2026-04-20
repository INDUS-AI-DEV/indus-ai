import Container from "../ui/Container";

const capabilities = [
  {
    title: "Voice Agents",
    description:
      "Real-time voice systems for support, collections, booking, onboarding, and customer operations.",
  },
  {
    title: "Lead Management",
    description:
      "Capture, qualify, score, nurture, and route leads across marketing, sales, and CRM workflows.",
  },
  {
    title: "Autonomous Workflows",
    description:
      "Agentic workflows that execute tasks, trigger actions, and move work across systems without manual handoffs.",
  },
  {
    title: "Multilingual Intelligence",
    description:
      "Deploy across Indian and global languages with context-aware conversational handling.",
  },
  {
    title: "Enterprise Integrations",
    description:
      "Connect telephony, CRM, finance systems, internal tools, and business applications into one operating layer.",
  },
  {
    title: "CRM Routing",
    description:
      "Update records, route prospects, trigger follow-ups, and hand qualified opportunities to sales teams.",
  },
  {
    title: "Analytics & Observability",
    description:
      "Track conversations, actions, outcomes, and performance with enterprise-grade monitoring.",
  },
  {
    title: "Human Handoff & Control",
    description:
      "Keep teams in control with escalation paths, approvals, review layers, and operational safeguards.",
  },
];

export default function PlatformCapabilities() {
  return (
    <section id="platform" className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 font-raleway">
            Platform Capabilities
          </span>
          <h2 className="mb-6 text-4xl font-bold font-raleway md:text-5xl">
            One Platform, Multiple Agentic Capabilities
          </h2>
          <p className="text-lg leading-relaxed text-slate-300 font-raleway">
            Our platform supports real-time voice, task execution, enterprise
            integrations, human oversight, and measurable operational
            intelligence across multiple AI products.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-3 text-xl font-semibold font-raleway">
                {capability.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 font-raleway">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
