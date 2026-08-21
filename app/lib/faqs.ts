/**
 * Homepage FAQ content. Kept in one place so the rendered accordion and the
 * FAQPage JSON-LD can never drift apart — Google penalises structured data
 * that does not match visible page content.
 */

export type Faq = { question: string; answer: string };

export const faqs: readonly Faq[] = [
  {
    question: "What is an agentic AI platform?",
    answer:
      "An agentic AI platform lets software agents do more than answer questions: they reason over a goal, call tools and systems, take actions, and complete multi-step work with human oversight. Where a chatbot returns text, an agent updates the CRM, places the call, verifies the document, or routes the lead. Indus AI is an agentic AI platform built for enterprise workflows in customer operations, financial services, sales, and internal automation.",
  },
  {
    question: "How is agentic AI different from a chatbot or an LLM API?",
    answer:
      "A chatbot responds inside a conversation. An LLM API returns a completion. An agentic system plans a sequence of steps, uses tools and business systems to execute them, checks its own progress, and escalates to a human when it should. The engineering difference is everything around the model: orchestration, integrations, state, guardrails, observability, and handoff — which is what an enterprise agentic AI platform provides.",
  },
  {
    question: "What products does Indus AI offer?",
    answer:
      "Four. IndusLabs is our enterprise voice AI platform for multilingual voice agents. Agentic AI SM handles multi-agent orchestration and autonomous workflow execution. FinoLabs covers financial operations and BFSI workflows including lending, collections, and verification. The Marketing Automation Agent manages lead capture, qualification, follow-up, and CRM handoff.",
  },
  {
    question: "What is multi-agent orchestration?",
    answer:
      "Multi-agent orchestration coordinates several specialised AI agents on one process — for example, one agent qualifies an inbound lead, another checks eligibility against internal systems, and a third schedules the follow-up call. The orchestration layer decides which agent runs when, passes context between them, enforces business rules, and keeps an auditable record of every action taken.",
  },
  {
    question: "Can AI agents integrate with our existing CRM and telephony stack?",
    answer:
      "Yes. Agents are designed to run on top of your existing systems rather than replace them, connecting to telephony, CRM, ERP, finance systems, ticketing, and internal tools so automation fits the stack you already operate.",
  },
  {
    question: "Which languages do the voice agents support?",
    answer:
      "Our voice agents are built multilingual-first for Indian enterprises, covering major Indian languages alongside English, including code-mixed conversation where customers switch languages mid-call.",
  },
  {
    question: "How do you keep humans in control of autonomous agents?",
    answer:
      "Through approvals, escalation paths, confidence thresholds, and handoff to human teams at defined points in a workflow. Every action an agent takes is logged and reviewable, so operations teams can audit what happened, adjust the rules, and expand autonomy only where the results justify it.",
  },
  {
    question: "How does Indus AI handle data security and deployment?",
    answer:
      "Deployment models are chosen per engagement, including options for enterprises with data residency or on-premise requirements. Encryption in transit, access controls, and audit logging are standard. For regulated deployments we work through your security review directly — contact us for our current certification status and sub-processor list.",
  },
  {
    question: "How long does a deployment take?",
    answer:
      "It depends almost entirely on integration scope rather than on the AI. Most enterprises start with one scoped workflow — a single call type, a single lead source, a single collections journey — prove the outcome, then expand. We size the first workflow with you during the technical scoping call.",
  },
  {
    question: "How do we get started with Indus AI?",
    answer:
      "Send an enquiry through the contact form or book a technical call. We will walk through your workflow, identify which product fits, and outline what a scoped first deployment would involve.",
  },
];
