import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Image from "next/image";
import ReadyToTransform from "../components/sections/ReadyToTransform";
import ServicesSection from "../components/sections/ServicesSection";

const expertise = [
  {
    area: "Machine Learning",
    description:
      "Advanced algorithms for predictive analytics and pattern recognition",
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
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks"],
  },
  {
    area: "Deep Learning",
    description: "State-of-the-art neural networks for complex problem solving",
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
          d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
        />
      </svg>
    ),
    tools: ["CNNs", "RNNs", "Transformers", "GANs"],
  },
  {
    area: "Natural Language Processing",
    description: "Advanced text analysis and language understanding systems",
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
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    tools: ["BERT", "GPT", "NLTK", "spaCy"],
  },
  {
    area: "Computer Vision",
    description: "Advanced image and video processing solutions",
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
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    tools: ["OpenCV", "TensorFlow Vision", "PyTorch Vision", "MediaPipe"],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-[0.03] pointer-events-none" />
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-gray-900 mb-8 text-center font-raleway">
              Expert AI Services for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 font-raleway">
              From strategy to implementation, we provide end-to-end AI services
              that transform businesses and drive innovation.
            </p>
            <div className="flex justify-center gap-4 flex-wrap whitespace-nowrap">
              <Button size="lg">
                <a href="https://calendly.com/indusai-app/meet">
                  Schedule Consultation
                </a>
              </Button>
              <Button variant="secondary" size="lg">
                <a href="https://www.linkedin.com/company/indus-ai/">
                  View Case Studies
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <ServicesSection />

      {/* Technical Expertise Section */}
      <section className="pb-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-raleway">
              Our Technical Expertise
            </h2>
            <p className="text-gray-600 font-raleway">
              Leveraging cutting-edge technologies to deliver innovative AI
              solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item) => (
              <div
                key={item.area}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-black/5 flex items-center justify-center text-gray-900 group-hover:text-[#2C514C] transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-raleway">
                      {item.area}
                    </h3>
                    <p className="text-gray-600 mb-4 font-raleway">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 group-hover:bg-blue-50 group-hover:text-[#2C514C] transition-colors font-raleway"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#2C514C] text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 font-raleway">
              Our Service Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-raleway px-4">
              We follow a structured approach to ensure successful
              implementation of AI solutions for your business.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10 hidden lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description:
                    "We begin by understanding your business needs and analyzing your current systems. This involves identifying areas of improvement, understanding your target audience, and defining project goals.",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description:
                    "Our team creates a comprehensive implementation strategy tailored to your goals. This includes defining project timelines, allocating resources, and outlining key performance indicators.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description:
                    "We execute the strategy with continuous monitoring and adjustments. This phase involves the actual deployment of the solution, ensuring it meets the project requirements and is aligned with your business objectives.",
                },
                {
                  step: "04",
                  title: "Optimization & Support",
                  description:
                    "Ongoing optimization and support to ensure long-term success. This includes post-implementation review, identifying areas for improvement, and providing ongoing maintenance and support to ensure the solution continues to meet your evolving business needs.",
                },
              ].map((phase, index) => (
                <div
                  key={phase.step}
                  className={`relative flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:[&>div]:order-1"
                  }`}
                >
                  <div className="text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-4">
                      <span className="text-4xl font-bold text-white/20 font-raleway">
                        {phase.step}
                      </span>
                      <h3 className="text-2xl font-semibold font-raleway">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-base lg:text-lg text-gray-400 font-raleway">
                      {phase.description}
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] w-full max-w-lg mx-auto rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <Image
                      src={`/images/services/process-${phase.step}.png`}
                      alt={phase.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ReadyToTransform />

      <Footer />
    </main>
  );
}
