import Container from "../ui/Container";
import Button from "../ui/Button";

const useCases = [
  {
    title: "Banking & Financial Services",
    badge: "Powered by FinoLabs",
    badgeHref: "https://finolabs.ai",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
    subtitle: "Collections, Lending & Verification",
    description:
      "Automate high-volume loan lead qualification, secure borrower verification, EMI repayment reminders, and compliant debt recovery.",
    benefits: [
      "70% lower debt recovery operational costs",
      "Multilingual borrower calls in 30+ dialects",
      "SOC 2, ISO 27001 & RBI compliance guardrails",
    ],
    ctaText: "Explore FinoLabs",
    ctaHref: "https://finolabs.ai",
    external: true,
  },
  {
    title: "Hospitality & Travel",
    badge: "Powered by IndusLabs",
    badgeHref: "https://induslabs.io",
    badgeColor: "bg-cyan-50 text-cyan-900 border-cyan-200",
    subtitle: "24/7 Multilingual Voice Concierge",
    description:
      "Deploy real-time conversational voice agents for room reservations, concierge assistance, dining bookings, and guest service coordination.",
    benefits: [
      "Sub-500ms conversational audio latency",
      "Homegrown speech models in 29+ languages",
      "Direct integration with property management systems",
    ],
    ctaText: "Explore IndusLabs",
    ctaHref: "https://induslabs.io",
    external: true,
  },
  {
    title: "Dealerships & Automotive",
    badge: "Powered by IndusLabs & Agentic AI",
    badgeHref: "https://calendly.com/hello-induslabs/30min",
    badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
    subtitle: "Test Drive & Service Booking",
    description:
      "Engage inbound car buyers instantly, qualify financing preferences, schedule test drives, and trigger routine service maintenance reminders.",
    benefits: [
      "Automated 24/7 test drive scheduling",
      "Instant lead follow-up within 60 seconds",
      "Two-way sync with Dealer Management Systems (DMS)",
    ],
    ctaText: "Schedule Automotive Demo",
    ctaHref: "https://calendly.com/hello-induslabs/30min",
    external: true,
  },
  {
    title: "Sales & Revenue Operations",
    badge: "Powered by Marketing Agent",
    badgeHref: "/products#marketing-automation-agent",
    badgeColor: "bg-emerald-50 text-emerald-900 border-emerald-200",
    subtitle: "Autonomous Lead Capture & Scoring",
    description:
      "Qualify leads across inbound forms, outbound phone campaigns, and messaging — scoring intent and handing hot deals directly to sales reps.",
    benefits: [
      "Sub-minute inbound response and discovery calls",
      "Automated lead enrichment and CRM hygiene",
      "Native sync with Salesforce, HubSpot, and LeadSquared",
    ],
    ctaText: "Enquire About Sales Agents",
    ctaHref: "/contact",
    external: false,
  },
  {
    title: "Healthcare & Diagnostics",
    badge: "Powered by IndusLabs Voice",
    badgeHref: "/contact",
    badgeColor: "bg-rose-50 text-rose-900 border-rose-200",
    subtitle: "Patient Coordination & Scheduling",
    description:
      "Automate patient appointment booking, doctor availability queries, lab report delivery status, and post-treatment follow-up check-ins.",
    benefits: [
      "Multilingual patient triage across regional dialects",
      "Automated prescription reminders and calendar updates",
      "HIPAA-conscious workflows and secure EHR handoffs",
    ],
    ctaText: "Discuss Healthcare Deployment",
    ctaHref: "/contact",
    external: false,
  },
  {
    title: "Enterprise Workforce Enablement",
    badge: "Powered by Indus AI Academy",
    badgeHref: "https://indusai.academy",
    badgeColor: "bg-emerald-50 text-emerald-900 border-emerald-200",
    subtitle: "Corporate AI Upskilling & Advisory",
    description:
      "Live cohort-based AI certifications for teams, real-world workflow capstones, and executive AI roadmap advisory for leadership.",
    benefits: [
      "Role-based tracks for engineering and business teams",
      "Hands-on capstones building production agentic systems",
      "Strategic enterprise AI roadmaps and consulting",
    ],
    ctaText: "Explore Academy",
    ctaHref: "https://indusai.academy",
    external: true,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/70 py-14 md:py-18"
    >
      <Container>
        {/* Compact Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Industry Deployments &bull; Enterprise SEO
          </span>
          <h2
            id="use-cases-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Deployed across high-impact enterprise use cases
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Indus AI delivers specialized, production-tested agentic workflows across
            financial services, hospitality, automotive, sales growth, healthcare, and enterprise upskilling.
          </p>
        </div>

        {/* 6 Industry Cards Grid at Compact 80% Scale */}
        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
            >
              <div>
                {/* Product Badge */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <a
                    href={item.badgeHref}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener" : undefined}
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-raleway text-[11px] font-semibold transition-opacity hover:opacity-85 ${item.badgeColor}`}
                  >
                    {item.badge}
                  </a>
                </div>

                <h3 className="mb-1 font-raleway text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mb-2.5 font-raleway text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {item.subtitle}
                </p>

                <p className="mb-4 min-h-[3.75rem] font-raleway text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>

                {/* Benefits List */}
                <ul className="mb-6 space-y-2 border-t border-slate-100 pt-4">
                  {item.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 font-raleway text-xs leading-relaxed text-slate-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2C514C]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button
                href={item.ctaHref}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener" : undefined}
                variant="secondary"
                size="sm"
                className="w-full text-center"
              >
                {item.ctaText}
                {item.external ? (
                  <span className="sr-only"> (opens external link)</span>
                ) : null}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Product-Fit Callout Card at Compact 80% Scale */}
        <div className="mt-12 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 p-6 text-center shadow-xs md:p-8">
          <span className="mb-2.5 inline-block rounded-full bg-emerald-100/80 px-3 py-0.5 font-raleway text-xs font-bold uppercase tracking-wider text-emerald-900">
            Tailored Deployment Architecture
          </span>
          <h3 className="mb-3 font-raleway text-xl font-bold text-slate-900 sm:text-2xl">
            Need a product-fit architecture walkthrough?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl font-raleway text-xs leading-relaxed text-slate-600 sm:text-sm">
            We help enterprise engineering and operations leaders map the right product,
            telephony infrastructure, CRM connectivity, and compliance model for their exact workflow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href="https://calendly.com/hello-induslabs/30min"
              target="_blank"
              rel="noopener"
              size="md"
            >
              Book architecture session
              <span className="sr-only"> (opens Calendly)</span>
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Send an enquiry
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
