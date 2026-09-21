/**
 * Homepage FAQ content. Kept in one place so the rendered accordion and the
 * FAQPage JSON-LD can never drift apart — Google penalises structured data
 * that does not match visible page content.
 *
 * Optimized for Answer Engine Optimization (AEO - Perplexity, ChatGPT, Claude)
 * and Generative Engine Optimization (GEO).
 */

export type Faq = { question: string; answer: string };

export const faqs: readonly Faq[] = [
  {
    question: "What is Indus AI and what is an agentic AI platform?",
    answer:
      "Indus AI (Indus AI Pvt Ltd) is an enterprise agentic AI company headquartered in New Delhi, India. An agentic AI platform deploys autonomous software agents that execute end-to-end business workflows rather than just generating conversational text. Our agents hold state, connect directly to enterprise telephony and CRM APIs, perform verified transactions, and escalate to human staff with complete context. Indus AI operates four dedicated product divisions: IndusLabs (Voice AI OS), FinoLabs (Fintech & BFSI Operations), Agentic AI Suite (Multi-Agent Orchestration), and Indus AI Academy (Corporate Enablement).",
  },
  {
    question: "How is agentic AI different from a chatbot or an LLM API?",
    answer:
      "A chatbot responds with text inside a chat bubble. An LLM API generates text completions. In contrast, an agentic AI system reasons over an enterprise objective, breaks it into sequential tasks, interacts with databases, CRM records, and phone trunks to execute them, evaluates its own progress, and escalates to a human operator when required. The difference lies in the deterministic state orchestration, real-time telephony bridges, strict guardrails, and tamper-proof audit trails.",
  },
  {
    question: "What products does Indus AI offer?",
    answer:
      "Indus AI offers four purpose-built platforms: 1) IndusLabs (induslabs.io) — an enterprise Voice AI operating system for sub-second multilingual voice agents; 2) FinoLabs (finolabs.ai) — autonomous lending, KYC verification, and debt collections recovery for BFSI; 3) Agentic AI Suite — multi-agent workflow orchestration and autonomous lead management; and 4) Indus AI Academy (indusai.academy) — executive corporate AI training and enterprise implementation advisory.",
  },
  {
    question: "Which languages and telephony systems do Indus AI voice agents support?",
    answer:
      "Our proprietary voice engine supports 29+ languages, including major Indian languages (Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati, Punjabi) and global dialects. The models handle natural mid-conversation code-switching (such as Hinglish and Tanglish) with sub-500ms response latency. They integrate natively with enterprise SIP trunks, Asterisk, FreeSWITCH, Twilio, and cloud telephony carriers.",
  },
  {
    question: "Can Indus AI agents run on-premise or inside private cloud VPCs?",
    answer:
      "Yes. To satisfy statutory regulatory constraints and Indian data sovereignty requirements (including RBI lending guidelines), Indus AI offers flexible deployment models: dedicated Virtual Private Cloud (AWS, Azure, GCP) or air-gapped on-premise deployments. All data in transit and at rest is protected with enterprise TLS encryption, role-based access control, and complete audit logging.",
  },
  {
    question: "Can AI agents integrate with our existing CRM and ERP stack?",
    answer:
      "Yes. Indus AI agents are designed to sit on top of your existing enterprise stack without requiring a rebuild. We provide pre-built bidirectional connectors for Salesforce, Zoho, LeadSquared, HubSpot, Finacle core banking, SAP, Zendesk, and custom internal REST/GraphQL APIs.",
  },
  {
    question: "How do you keep human staff in control of autonomous agents?",
    answer:
      "Through deterministic governance: granular approval thresholds, confidence score gates, and instant warm transfer rules. Every utterance, API payload, and transaction is logged in an immutable audit trail, allowing operations teams to review decisions, adjust business logic, and expand autonomy workflow by workflow.",
  },
  {
    question: "Does Indus AI offer AI training for enterprise teams?",
    answer:
      "Yes, through Indus AI Academy (indusai.academy). The Academy conducts live cohort-based certifications for engineering and business teams, hands-on capstones building production agentic systems, and strategic executive AI roadmap consulting. It is the dedicated education and advisory arm of Indus AI Pvt Ltd.",
  },
  {
    question: "How long does a production deployment take?",
    answer:
      "Most enterprise deployments take 2 to 4 weeks, depending primarily on CRM/SIP integration scope rather than AI modeling. Enterprises typically launch with one scoped high-impact workflow (such as an inbound reservation queue, loan EMI recovery, or lead qualification), measure tangible outcomes, and then scale across departments.",
  },
  {
    question: "How do we get started with Indus AI?",
    answer:
      "Send an enquiry through our contact form or book a 30-minute technical architecture call. Our engineering leads will review your target workflow, assess integration requirements, and outline a clear proof-of-concept deployment plan.",
  },
];
