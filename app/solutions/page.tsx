import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/FooterNew";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Image from "next/image";
import ReadyToTransform from "../components/sections/ReadyToTransform";

const features = [
  {
    name: 'Contextual Conversations',
    description: 'Advanced NLP for natural, human-like interactions',
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    name: '22+ Languages',
    description: 'Support for Indian & global languages',
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    name: 'Scalable Self-Service',
    description: 'Handle millions of queries with ease',
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: '24×7 Availability',
    description: 'Always on, always ready to assist',
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: '75% Cost Savings',
    description: 'Significant reduction in operations cost',
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Custom Bot Personality',
    description: 'Aligned with your brand tone',
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Advanced Analytics',
    description: 'Sentiment analysis and performance tracking',
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: "AI-Powered Voicebot Solutions",
    description:
      "Transform customer interactions with our advanced voicebot technology that delivers natural, human-like conversations 24/7.",
    icon: (
      <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    features: [
      "Natural Language Understanding",
      "Multi-turn Dialog Management",
      "Seamless IVR Integration",
      "Real-time Analytics",
      "Omnichannel Deployment"
    ],
    benefits: [
      "Reduce call center costs by up to 60%",
      "Handle 10,000+ concurrent calls",
      "99.9% uptime guarantee",
      "Customizable brand voice"
    ]
  },
  {
    title: "Intelligent Chatbot Platform",
    description:
      "Deploy AI chatbots that understand context, learn from interactions, and provide instant, accurate responses.",
    icon: (
      <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    features: [
      "Contextual Conversations",
      "Multi-intent Recognition",
      "Seamless Handoff to Agents",
      "Sentiment Analysis",
      "Knowledge Base Integration"
    ],
    benefits: [
      "Handle 80% of routine inquiries automatically",
      "30% increase in customer satisfaction",
      "24/7 customer support",
      "Reduced response time to seconds"
    ]
  },
  {
    title: "Multilingual AI Solutions",
    description:
      "Break language barriers with our AI that understands and responds in 22+ languages with native proficiency.",
    icon: (
      <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    features: [
      "22+ Language Support",
      "Dialect Recognition",
      "Real-time Translation",
      "Cultural Nuance Understanding",
      "Accent Adaptation"
    ],
    benefits: [
      "Expand to global markets instantly",
      "95% accuracy in language understanding",
      "Localized customer experiences",
      "Reduced need for multilingual staff"
    ]
  },
  {
    title: "Conversational AI for Enterprise",
    description:
      "Enterprise-grade AI solutions that integrate with your existing systems and scale with your business needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-indigo-600"
      >
        <rect x="3" y="21" width="18" height="3" />
        <rect x="6" y="17" width="3" height="4" />
        <rect x="15" y="17" width="3" height="4" />
        <rect x="3" y="7" width="18" height="10" />
        <line x1="3" y1="7" x2="12" y2="2" />
        <line x1="21" y1="7" x2="12" y2="2" />
      </svg>
    ),
    features: [
      "Custom AI Model Training",
      "Enterprise Security & Compliance",
      "CRM & ERP Integration",
      "Advanced Analytics Dashboard",
      "Dedicated Support Team"
    ],
    benefits: [
      "End-to-end encryption",
      "SLA-backed performance",
      "Custom integration support",
      "Dedicated account management"
    ]
  },
  {
    title: "AI-Powered Analytics & Insights",
    description:
      "Transform customer interactions into actionable insights with our advanced analytics platform.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-indigo-600"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    features: [
      "Conversation Analytics",
      "Customer Sentiment Analysis",
      "Trend Identification",
      "Custom Reporting",
      "Predictive Analytics"
    ],
    benefits: [
      "Improve customer experience",
      "Identify business opportunities",
      "Make data-driven decisions",
      "Real-time performance tracking"
    ]
  },
  {
    title: "Omnichannel AI Engagement",
    description:
      "Deliver consistent, personalized experiences across all customer touchpoints with our unified AI platform.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-indigo-600"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
      </svg>
    ),
    features: [
      "Cross-channel Context Retention",
      "Unified Customer View",
      "Seamless Channel Switching",
      "Consistent Brand Voice",
      "Centralized Management"
    ],
    benefits: [
      "45% higher customer retention",
      "Unified customer journey",
      "Reduced operational complexity",
      "Faster resolution times"
    ]
  }
];

const industries = [
  {
    name: "Healthcare",
    description: "Enhancing patient care with AI-powered virtual assistants",
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    solutions: [
      "Appointment Scheduling & Reminders",
      "Medication Adherence Support",
      "Symptom Checking & Triage",
      "Health Education & Guidance",
      "HIPAA-compliant Communication"
    ]
  },
  {
    name: "Banking & Finance",
    description: "Securely automate financial services with AI",
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    solutions: [
      "Account Balance & Transaction Queries",
      "Fraud Detection & Alerts",
      "Loan Application Assistance",
      "Personal Finance Management",
      "KYC & Identity Verification"
    ]
  },
  {
    name: "E-commerce & Retail",
    description: "Deliver personalized shopping experiences at scale",
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    solutions: [
      "Product Recommendations",
      "Order Tracking & Support",
      "Personalized Promotions",
      "Inventory & Stock Inquiries",
      "Returns & Refunds Processing"
    ]
  },
  {
    name: "Retail",
    description: "Enhancing customer experience and operations",
    icon: (
      <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="pt-24">
      <main>
        

        {/* Solutions Grid */}
        <section id="solutions" className="py-12 bg-white">
          
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Solutions</span>
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Comprehensive AI solutions designed to transform your business operations and customer experience.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="px-6">
                    {solution.icon}
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {solution.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">{solution.description}</p>
                      
                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
                        <ul className="mt-2 space-y-2">
                          {solution.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h4 className="text-sm font-medium text-gray-900">Business Benefits:</h4>
                      <ul className="mt-3 space-y-2">
                        {solution.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <ReadyToTransform />
      </main>
      </div>
      <Footer />
    </div>
  );
}
