import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/Footer";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Image from "next/image";
import ReadyToTransform from "../components/sections/ReadyToTransform";
const solutions = [
  // {
  //   title: "Machine Learning & AI",
  //   description:
  //     "Custom machine learning solutions tailored to your business needs",
  //   image: "/images/solutions/machine-learning.webp",
  //   features: [
  //     "Predictive Analytics",
  //     "Pattern Recognition",
  //     "Anomaly Detection",
  //     "Deep Learning Models",
  //     "Computer Vision",
  //     "Neural Networks",
  //   ],
  //   benefits: [
  //     "Increase operational efficiency by 300%",
  //     "Reduce manual errors by 95%",
  //     "Cut operational costs by 50%",
  //     "Accelerate decision-making process",
  //   ],
  //   useCase: {
  //     title: "Global Manufacturing Company",
  //     description:
  //       "Implemented predictive maintenance system that reduced downtime by 75% and maintenance costs by 50%.",
  //   },
  // },
  // {
  //   title: "Natural Language Processing",
  //   description: "Transform how you process and understand text data",
  //   image: "/images/solutions/nlp.webp",
  //   features: [
  //     "Text Classification",
  //     "Sentiment Analysis",
  //     "Named Entity Recognition",
  //     "Language Translation",
  //     "Text Summarization",
  //     "Chatbot Development",
  //   ],
  //   benefits: [
  //     "Automate customer service operations",
  //     "Process documents 10x faster",
  //     "Improve customer satisfaction by 60%",
  //     "Real-time language translation",
  //   ],
  //   useCase: {
  //     title: "International Bank",
  //     description:
  //       "Deployed AI-powered customer service system that handles 80% of inquiries automatically.",
  //   },
  // },
  // {
  //   title: "Computer Vision",
  //   description:
  //     "See your business through the lens of artificial intelligence",
  //   image: "/images/solutions/computer-vision.webp",
  //   features: [
  //     "Object Detection",
  //     "Image Classification",
  //     "Facial Recognition",
  //     "Video Analysis",
  //     "Quality Control",
  //     "Visual Search",
  //   ],
  //   benefits: [
  //     "Automate visual inspection tasks",
  //     "Enhance security systems",
  //     "Improve product quality",
  //     "Real-time monitoring",
  //   ],
  //   useCase: {
  //     title: "Retail Chain",
  //     description:
  //       "Implemented visual search system that increased online sales conversion by 45%.",
  //   },
  // },
  {
    title: "Vijaya AI – Secure & Personalized LLMs for Enterprises",
    description:
      "Vijaya AI is a cutting-edge Large Language Model (LLM) solution designed to help enterprises and government organizations deploy custom AI models tailored to their data. With on-premise and cloud options, it ensures data security, cost efficiency (up to 70% savings), and seamless AI adoption for businesses looking to leverage generative AI.",
    image: "/images/solutions/vijaya-ai.png",
    features: [
      "Custom AI Models",
      "On-Premise and Cloud Options",
      "Data Security",
      "Cost Efficiency",
      "Seamless AI Adoption",
    ],
    benefits: [
      "Up to 70% cost savings",
      "Enhanced data security",
      "Tailored solutions for enterprises",
      "Improved operational efficiency",
    ],
    useCase: {
      title: "Enterprise Deployment",
      description:
        "Implemented custom LLMs for various enterprises, ensuring data security and cost efficiency.",
    },
  },
  {
    title: "VivOne AI– Intelligent Chat & Voice AI",
    description:
      "Our AI Agent is a next-gen customer support solution that offers real-time chat and voice assistance, automating interactions with human-like accuracy. Designed for businesses across industries, it enhances customer experiences by providing instant, context-aware responses, reducing operational costs, and improving support efficiency.",
    image: "/images/solutions/vivone-ai.png",
    features: [
      "Real-time Chat Assistance",
      "Voice Interaction",
      "Context-aware Responses",
      "Human-like Accuracy",
      "Operational Cost Reduction",
    ],
    benefits: [
      "Enhanced customer experience",
      "Instant support",
      "Improved support efficiency",
      "Adaptable for various enterprises",
    ],
    useCase: {
      title: "Customer Support Automation",
      description:
        "Deployed AI Agent for customer support, automating interactions and improving response times.",
    },
  },
];

const industries = [
  {
    name: "Healthcare",
    description: "Improving patient care and operational efficiency with AI",
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
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    ),
    solutions: [
      "Diagnostic Assistance",
      "Patient Monitoring",
      "Resource Optimization",
    ],
  },
  {
    name: "Finance",
    description: "Transforming financial services with intelligent automation",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    solutions: ["Risk Assessment", "Fraud Detection", "Trading Analytics"],
  },
  {
    name: "Manufacturing",
    description: "Optimizing production and quality control processes",
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
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    solutions: [
      "Predictive Maintenance",
      "Quality Control",
      "Supply Chain Optimization",
    ],
  },
  {
    name: "Retail",
    description: "Enhancing customer experience and operations",
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
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    solutions: [
      "Inventory Management",
      "Customer Analytics",
      "Personalization",
    ],
  },
];

export default function Solutions() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-raleway">
              AI Solutions for Every Industry
            </h1>
            <p className="text-xl text-gray-600 mb-12 font-raleway">
              Transform your business with our cutting-edge AI solutions. We
              combine industry expertise with advanced technology to deliver
              measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                <a href="https://calendly.com/indusai-app/meet">
                  Schedule Demo
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

      {/* Solutions Section */}
      {solutions.map((solution, index) => (
        <section
          key={solution.title}
          className={`pb-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={index % 2 === 0 ? "" : "order-2"}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-raleway">
                  {solution.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 font-raleway">
                  {solution.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-raleway">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-gray-600 font-raleway"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mr-3"
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
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-raleway">
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center text-gray-600 font-raleway"
                        >
                          <svg
                            className="w-5 h-5 text-[#2C514C] mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-raleway">
                    Case Study: {solution.useCase.title}
                  </h3>
                  <p className="text-gray-600 font-raleway">
                    {solution.useCase.description}
                  </p>
                </div>
              </div>

              <div className={index % 2 === 0 ? "" : "order-1"}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2C514C] to-[#729F99] rounded-3xl blur-3xl opacity-20" />
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={1000}
                    height={1000}
                    className="relative rounded-3xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Industries Section */}
      <section className="pb-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-raleway">
              Industries We Serve
            </h2>
            <p className="text-gray-600 font-raleway">
              Our AI solutions are tailored for various industries, each with
              its unique challenges and opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-black/5 flex items-center justify-center text-gray-900 group-hover:text-[#2C514C] transition-colors">
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-raleway">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 mb-4 font-raleway">
                      {industry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution) => (
                        <span
                          key={solution}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 group-hover:bg-blue-50 group-hover:text-[#2C514C] transition-colors font-raleway"
                        >
                          {solution}
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
      <ReadyToTransform />
      <Footer />
    </main>
  );
}
