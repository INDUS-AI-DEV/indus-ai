"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const BOTS = [
  {
    name: "HotelBot",
    slug: "hotelbot",
    image: "/images/bot.png",
    description: "AI-powered hotel management assistant for guest engagement, booking, and support.",
    category: "Hospitality",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: "MediBot",
    slug: "medibot",
    image: "/images/MedibotBackground.jpg",
    description: "Healthcare virtual assistant for patient queries, appointment scheduling, and support.",
    category: "Healthcare",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: "LoanBot",
    slug: "loanbot",
    image: "/images/solutions/machine-learning.webp",
    description: "Smart loan assistant for eligibility checks, application guidance, and status updates.",
    category: "Finance",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  },
  {
    name: "EduBot",
    slug: "edubot",
    image: "/images/solutions/nlp.webp",
    description: "AI tutor for instant answers, study help, and personalized learning support.",
    category: "Education",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    name: "RetailBot",
    slug: "retailbot",
    image: "/images/solutions/computer-vision.webp",
    description: "Retail assistant for product recommendations, order tracking, and customer support.",
    category: "Retail",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    name: "TravelBot",
    slug: "travelbot",
    image: "/images/Hotel2.png",
    description: "Travel planner for itinerary suggestions, booking, and real-time assistance.",
    category: "Travel",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    )
  },
  {
    name: "HRBot",
    slug: "hrbot",
    image: "/images/solutions/vivone-ai.png",
    description: "HR assistant for employee queries, onboarding, and leave management.",
    category: "Human Resources",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: "SupportBot",
    slug: "supportbot",
    image: "/images/support/welltested_ai.png",
    description: "Customer support bot for instant troubleshooting and ticketing.",
    category: "Customer Support",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
];


export default function DemoBotsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-raleway">
              Experience Our AI Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-raleway max-w-3xl mx-auto">
              Discover the power of AI with our interactive demo bots. Each solution is designed to transform your business operations with intelligent automation.
            </p>
          </div>
        </Container>
      </section>

      {/* Bots Grid Section */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {BOTS.map((bot) => (
              <div
                key={bot.slug}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 group-hover:text-[#2C514C] group-hover:bg-[#2C514C]/5 transition-all duration-300">
                    {bot.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-raleway">
                    {bot.category}
                  </span>
                </div>

                {/* Bot Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <Image
                      src={bot.image}
                      alt={`${bot.name} preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-raleway">
                    {bot.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-raleway">
                    {bot.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link href={`/demo/${bot.slug}`} className="block">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full group-hover:bg-[#132A22] transition-all duration-300"
                  >
                    Try {bot.name}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-raleway">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-raleway">
              Schedule a personalized demo to see how our AI solutions can be tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <a href="https://calendly.com/indusai-app/meet" className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Demo
                </a>
              </Button>
              <Button variant="secondary" size="lg">
                <a href="https://www.linkedin.com/company/indus-ai/" className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
