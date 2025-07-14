import Container from "../ui/Container";

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Transform your business with expert AI guidance",
    image: "/images/services/consulting.jpg",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    benefits: [
      "Comprehensive AI readiness assessment",
      "Strategic roadmap development",
      "Technology stack optimization",
      "ROI analysis and projections",
      "Risk mitigation strategies",
    ],
  },
  {
    title: "Custom AI Development",
    description: "Build powerful, tailored AI solutions",
    image: "/services/development.jpg",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    benefits: [
      "Custom ML model development",
      "API and system integration",
      "Scalable architecture design",
      "Performance optimization",
      "Continuous deployment support",
    ],
  },
  {
    title: "AI Implementation",
    description: "Seamlessly deploy AI in your workflow",
    image: "/services/implementation.jpg",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
    benefits: [
      "Seamless system integration",
      "Team training and onboarding",
      "Process optimization",
      "Performance monitoring",
      "Ongoing technical support",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="pb-24 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-xl bg-black/5 flex items-center justify-center text-gray-900 mb-8 group-hover:text-[#2C514C] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-raleway">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 font-raleway">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start text-gray-600 font-raleway"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
