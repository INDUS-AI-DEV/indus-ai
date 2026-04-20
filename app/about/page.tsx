import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import ReadyToTransform from "../components/sections/ReadyToTransform";

const stats = [
  { value: "4", label: "Core Products" },
  { value: "22+", label: "Language Coverage" },
  { value: "24/7", label: "Autonomous Ops" },
  { value: "Enterprise", label: "Deployment Focus" },
];

const principles = [
  {
    title: "Product-Led Thinking",
    description:
      "We build repeatable enterprise AI products instead of one-off demo experiences or services-only offerings.",
  },
  {
    title: "Workflow-First Design",
    description:
      "Our systems are designed around real operational workflows in support, growth, finance, service, and enterprise operations.",
  },
  {
    title: "Enterprise Readiness",
    description:
      "We focus on integrations, oversight, control, deployment flexibility, and business outcomes from day one.",
  },
  {
    title: "Agentic Systems, Not Just Interfaces",
    description:
      "We are building systems that can reason, act, coordinate across tools, and automate complex business processes.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-slate-50 to-white pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 font-raleway">
              About IndusAI
            </span>
            <h1 className="mb-6 text-5xl font-bold text-gray-900 font-raleway md:text-6xl">
              Building Enterprise Agentic AI Products for Real-World Operations
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 font-raleway">
              IndusAI is evolving from a voice-AI-first company into a broader
              enterprise agentic AI product company. We build products for
              voice, lead management, financial operations, and autonomous
              workflow execution across modern enterprise teams.
            </p>

            <div className="grid gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-2 text-3xl font-bold text-blue-700 font-raleway">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-raleway">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-700 font-raleway">
                Our Mission
              </p>
              <h2 className="mb-5 text-4xl font-bold text-gray-900 font-raleway">
                Move enterprises from manual workflows to agentic execution
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-gray-600 font-raleway">
                We believe the next generation of enterprise software will not
                just surface information. It will act. That means voice systems
                that can operate in real time, finance workflows that can
                execute reliably, and autonomous agents that can coordinate work
                across business tools.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 font-raleway">
                Our focus is on practical, production-oriented AI products that
                deliver measurable value in customer operations, financial
                servicing, growth operations, and enterprise automation.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-slate-950 p-8 text-white shadow-sm">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-200 font-raleway">
                What We Are Building
              </p>
              <h3 className="mb-5 text-3xl font-bold font-raleway">
                A product ecosystem for voice, lead management, finance, and
                autonomous workflows
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed text-slate-200 font-raleway">
                <li>IndusLabs for multilingual enterprise voice AI.</li>
                <li>
                  Marketing Automation Agent for lead management and
                  qualification.
                </li>
                <li>FinoLabs for BFSI and financial workflow automation.</li>
                <li>
                  Agentic AI SM for broader enterprise orchestration and
                  multi-step business execution.
                </li>
                <li>
                  A shared platform layer for integrations, analytics,
                  observability, and human control.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-raleway">
              How We Build
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-raleway">
              The company is increasingly shaped around enterprise product
              thinking, operational rigor, and real deployment outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900 font-raleway">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 font-raleway">
                  {principle.description}
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
