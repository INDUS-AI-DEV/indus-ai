import Container from "../ui/Container";

const pipelineStages = [
  {
    step: "01",
    tag: "Perceive & Ingest",
    title: "Multilingual Ingestion Across Channels",
    body: "Captures inputs from live voice calls (in 29+ languages with mid-call code-switching like Hinglish), CRM triggers, and lead forms — parsing messy, real-world phrasing accurately.",
    icon: (
      <svg className="h-5 w-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    step: "02",
    tag: "Reason & Verify",
    title: "Deterministic Guardrails & Policy Checks",
    body: "Evaluates business rules, credit guidelines, KYC requirements, and compliance guardrails before initiating any task, eliminating hallucinations and unauthorized actions.",
    icon: (
      <svg className="h-5 w-5 text-[#2C514C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "03",
    tag: "Execute & Transact",
    title: "Autonomous Action Across Enterprise APIs",
    body: "Executes telephony dialing, CRM record mutations, calendar bookings, and payment recovery inside your actual software rather than just generating advisory text.",
    icon: (
      <svg className="h-5 w-5 text-[#6a5fff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "04",
    tag: "Audit & Handoff",
    title: "Tamper-Proof Audit & Human Warm Transfer",
    body: "Logs every conversation and API call in an immutable audit trail. If confidence drops below threshold or rules require, transfers to human reps with complete context.",
    icon: (
      <svg className="h-5 w-5 text-[#f0a43a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function AgenticExplainer() {
  return (
    <section
      id="platform"
      aria-labelledby="agentic-heading"
      className="scroll-mt-20 border-y border-slate-200/80 bg-slate-50/50 py-14 md:py-18"
    >
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          {/* Left Context & AEO Comparison Block */}
          <div className="lg:sticky lg:top-24">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              How Agentic AI Works &bull; AEO Architecture
            </span>

            <h2
              id="agentic-heading"
              className="mb-3.5 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              What is an agentic AI platform?
            </h2>

            <p className="mb-3.5 font-raleway text-sm leading-relaxed text-slate-700 sm:text-base">
              Traditional enterprise chatbots stop at dialogue. An <strong>agentic AI platform</strong>{" "}
              completes the work. It reasons over business goals, plans multi-step execution paths,
              calls tools across enterprise APIs, and executes outcomes inside production software.
            </p>

            {/* Direct AEO Quick Comparison Card */}
            <div className="mb-5 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Difference: Chatbots vs. Indus AI Agents
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-100">
                  <span className="block font-bold text-slate-800">Legacy Chatbots:</span>
                  <span className="text-slate-600">Passive text replies, no tool access, halts at conversation, prone to hallucinations.</span>
                </div>
                <div className="rounded-lg bg-emerald-50/80 p-2.5 border border-emerald-200/70">
                  <span className="block font-bold text-emerald-950">Indus AI Agents:</span>
                  <span className="text-emerald-900">Active tool execution, stateful orchestration, telephony &amp; CRM sync, verified guardrails.</span>
                </div>
              </div>
            </div>

            {/* Architecture Badges */}
            <div className="grid grid-cols-2 gap-2">
              {[
                "Deterministic State Machines",
                "Sub-500ms Audio Pipelines",
                "Bidirectional SIP & CRM Sync",
                "Human-in-the-Loop Safeguards",
              ].map((pill) => (
                <div
                  key={pill}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 shadow-2xs"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span className="font-raleway text-[11px] font-semibold text-slate-800 truncate">
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Pipeline Steps (Compact 80% Scale) */}
          <div className="space-y-3">
            {pipelineStages.map((stage) => (
              <div
                key={stage.step}
                className="group relative rounded-xl border border-slate-200/90 bg-white p-4.5 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:shadow-md sm:p-5"
              >
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 shadow-2xs group-hover:scale-105 transition-transform">
                    {stage.icon}
                  </div>

                  <div className="flex-1">
                    <div className="mb-0.5 flex items-center justify-between gap-2">
                      <span className="font-raleway text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {stage.tag}
                      </span>
                      <span className="font-raleway text-[10px] font-bold tabular-nums text-slate-400">
                        STAGE {stage.step}
                      </span>
                    </div>

                    <h3 className="mb-1 font-raleway text-base font-bold text-slate-900 sm:text-lg">
                      {stage.title}
                    </h3>

                    <p className="font-raleway text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {stage.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
