import Container from "../ui/Container";

const productCards = [
  {
    id: "induslabs",
    name: "IndusLabs",
    domain: "induslabs.io",
    url: "https://induslabs.io",
    external: true,
    category: "Voice AI Operating System",
    shortDescription:
      "Production-grade multilingual voice agents with sub-500ms latency, native SIP/PSTN telephony integrations, and homegrown emotion-aware speech models in 29+ languages.",
    features: [
      "Sub-second real-time conversational voice",
      "29+ Indian & global regional languages",
      "Native SIP trunks, Asterisk & CRM sync",
      "Deterministic guardrails & analytics",
    ],
    theme: {
      cardStyle: {
        backgroundColor: "#f4faff",
        backgroundImage:
          "radial-gradient(circle at 85% 15%, rgba(0, 195, 255, 0.12), transparent 50%), radial-gradient(circle at 15% 85%, rgba(106, 95, 255, 0.08), transparent 55%)",
      },
      borderColor:
        "border-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,195,255,0.18)]",
      badgeClass: "bg-cyan-50 border border-cyan-200 text-cyan-900",
      categoryClass: "text-[#0284c7]",
      titleClass: "text-slate-900",
      descriptionClass: "text-slate-600",
      borderTClass: "border-cyan-100",
      featureTextClass: "text-slate-700",
      bulletClass: "bg-[#00c3ff] shadow-[0_0_6px_#00c3ff]",
      buttonClass:
        "text-[#041015] font-bold shadow-md shadow-cyan-950/10 hover:shadow-[0_0_20px_rgba(0,195,255,0.35)] hover:scale-[1.01]",
      buttonStyle: {
        backgroundImage: "linear-gradient(135deg, #00c3ff 0%, #6a5fff 100%)",
      },
      buttonText: "Explore IndusLabs",
      isComingSoon: false,
    },
  },
  {
    id: "finolabs",
    name: "FinoLabs",
    domain: "finolabs.ai",
    url: "https://finolabs.ai",
    external: true,
    category: "Fintech & Lending Operations AI",
    shortDescription:
      "Purpose-built financial AI workflows for digital loan lead qualification, borrower KYC verification, automated EMI repayment reminders, and compliant debt recovery.",
    features: [
      "70% lower debt recovery operating costs",
      "Borrower support in 30+ regional dialects",
      "Automated lead underwriting & KYC sync",
      "SOC 2, ISO 27001 & statutory compliance",
    ],
    theme: {
      cardStyle: {
        backgroundColor: "#fafaf9",
        backgroundImage:
          "linear-gradient(to right, rgba(8, 5, 3, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 5, 3, 0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      },
      borderColor: "border-[#dad7d0] hover:border-[#99948a] hover:shadow-xl",
      badgeClass: "bg-[#ecebe7] border border-[#dad7d0] text-[#080503]",
      categoryClass: "text-[#57534e]",
      titleClass: "text-[#080503]",
      descriptionClass: "text-[#44403c]",
      borderTClass: "border-[#dad7d0]",
      featureTextClass: "text-[#292524]",
      bulletClass: "bg-[#080503]",
      buttonClass:
        "bg-[#080503] text-[#fafaf9] hover:bg-[#231f1c] shadow-sm hover:shadow-md",
      buttonStyle: {},
      buttonText: "Explore FinoLabs",
      isComingSoon: false,
    },
  },
  {
    id: "indusai-academy",
    name: "Indus AI Academy",
    domain: "indusai.academy",
    url: "https://indusai.academy",
    external: true,
    category: "Corporate AI Training & Advisory",
    shortDescription:
      "Live cohort-based certifications for engineering and business teams, hands-on workflow capstones, and strategic enterprise advisory to deploy production AI agents.",
    features: [
      "Live cohort-led, never pre-recorded",
      "Role-based tracks for all business units",
      "Hands-on capstones on real production stacks",
      "Executive AI roadmap & advisory consulting",
    ],
    theme: {
      cardStyle: {
        backgroundColor: "#f4f8f6",
        backgroundImage:
          "linear-gradient(to right, rgba(42, 82, 74, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 82, 74, 0.04) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      },
      borderColor:
        "border-emerald-200 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
      badgeClass: "bg-emerald-50 border border-emerald-200 text-emerald-950",
      categoryClass: "text-[#047857]",
      titleClass: "text-[#0b1916]",
      descriptionClass: "text-[#2d4a43]",
      borderTClass: "border-emerald-100",
      featureTextClass: "text-[#0b1916]",
      bulletClass: "bg-[#f0a43a] shadow-[0_0_6px_#f0a43a]",
      buttonClass:
        "bg-[#f0a43a] text-[#0b1916] font-bold hover:bg-[#f6b95f] shadow-sm hover:shadow-md hover:scale-[1.01]",
      buttonStyle: {},
      buttonText: "Explore Academy",
      isComingSoon: false,
    },
  },
  {
    id: "agentic-suite",
    name: "Agentic AI Suite",
    domain: "Coming Soon",
    url: "/products#agentic-ai-sm",
    external: false,
    category: "Multi-Agent Automation Suite",
    shortDescription:
      "Autonomous multi-agent orchestration and marketing automation agents engineered to reason, invoke tools, update CRMs, and execute business workflows end-to-end.",
    features: [
      "Multi-agent task orchestration (Agentic SM)",
      "Automated lead capture & scoring agent",
      "Autonomous tool use & business actions",
      "Enterprise audit, control & governance",
    ],
    theme: {
      cardStyle: {
        backgroundColor: "#faf8ff",
        backgroundImage:
          "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.10), transparent 60%)",
      },
      borderColor:
        "border-violet-200 hover:border-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.18)]",
      badgeClass: "bg-violet-50 border border-violet-200 text-violet-900",
      categoryClass: "text-[#7c3aed]",
      titleClass: "text-slate-900",
      descriptionClass: "text-slate-600",
      borderTClass: "border-violet-100",
      featureTextClass: "text-slate-700",
      bulletClass: "bg-[#8b5cf6] shadow-[0_0_6px_#8b5cf6]",
      buttonClass:
        "border border-violet-300 bg-white text-violet-900 font-semibold hover:bg-violet-600 hover:text-white hover:border-violet-600 shadow-sm transition-all duration-300",
      buttonStyle: {},
      buttonText: "Coming Soon • Explore",
      isComingSoon: true,
    },
  },
];

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-20 bg-white py-14 md:py-18"
    >
      <Container>
        {/* Compact Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-emerald-950">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Specialized Product Ecosystem
          </span>
          <h2
            id="products-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Four purpose-built products on one enterprise platform
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Each Indus AI product solves a specific set of operational workflows on dedicated
            infrastructure — all sharing unified enterprise governance, telemetry, and security.
          </p>
        </div>

        {/* 4 Cards Grid at Compact 80% Scale */}
        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {productCards.map((product) => (
            <article
              key={product.id}
              className={`group flex h-full flex-col rounded-2xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${product.theme.borderColor}`}
              style={product.theme.cardStyle}
            >
              {/* Top badge */}
              <div className="mb-4 flex items-center justify-end">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-raleway text-[11px] font-semibold leading-snug ${product.theme.badgeClass}`}
                >
                  {product.theme.isComingSoon && (
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-600 animate-pulse" />
                  )}
                  {product.domain}
                </span>
              </div>

              {/* Category */}
              <p
                className={`mb-1 font-raleway text-xs font-bold uppercase tracking-wider ${product.theme.categoryClass}`}
              >
                {product.category}
              </p>

              {/* Product Name */}
              <h3
                className={`mb-3 font-raleway text-xl font-bold leading-tight ${product.theme.titleClass}`}
              >
                {product.name}
              </h3>

              {/* Short Description */}
              <p
                className={`mb-5 min-h-[4.75rem] font-raleway text-xs leading-relaxed ${product.theme.descriptionClass}`}
              >
                {product.shortDescription}
              </p>

              {/* Features list */}
              <ul
                className={`mb-6 space-y-2 border-t pt-4 ${product.theme.borderTClass}`}
              >
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 font-raleway text-xs ${product.theme.featureTextClass}`}
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${product.theme.bulletClass}`}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Button */}
              <a
                href={product.url}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener" : undefined}
                className={`mt-auto inline-flex min-h-10 w-full items-center justify-center rounded-full px-4 py-2 text-center font-raleway text-xs font-bold transition-all duration-300 ${product.theme.buttonClass}`}
                style={product.theme.buttonStyle}
              >
                {product.theme.buttonText}
                {product.external ? (
                  <span className="sr-only"> (opens {product.domain})</span>
                ) : null}
              </a>
            </article>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center font-raleway text-xs leading-relaxed text-slate-500">
          IndusLabs, FinoLabs, Agentic AI SM, and Marketing Automation Agent are products of
          Indus AI Pvt Ltd. Indus AI Academy is its specialized workforce AI training and advisory division.
        </p>
      </Container>
    </section>
  );
}
