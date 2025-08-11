"use client";
import { useState } from "react";
import Container from "../ui/Container";

const industries = [
  {
    title: "Hospitality",
    subtitle: "Elevate Guest Experience",
    description: "24/7 multilingual support for hotels, resorts, and travel services with seamless booking and guest services",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    benefits: [
      "24/7 Room Booking & Reservations",
      "Multilingual Guest Support",
      "Concierge Services Automation",
      "Dining & Amenities Booking",
      "Feedback & Review Collection"
    ],
    metrics: { primary: "50%", secondary: "Faster Bookings" },
    color: "from-amber-500 to-yellow-500"
  },
  {
    title: "Banking & Finance",
    subtitle: "Secure & Compliant CX",
    description: "Enterprise-grade voice AI with SOC2, PCI-DSS compliance for financial institutions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    benefits: [
      "Secure Customer Verification",
      "Account Balance & Transaction Queries",
      "Loan Application Processing",
      "Loan Recovery System",
      "Fraud Detection Support",
      "Personalized Product Recommendations"
    ],
    metrics: { primary: "89%", secondary: "First-Call Resolution" },
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "D2C & FMCG",
    subtitle: "Scale Customer Love",
    description: "Boost retention and optimize supply chains with intelligent automation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    benefits: [
      "Order Status & Tracking",
      "Return & Exchange Processing",
      "Supply Chain Communication",
      "Inventory Management Alerts",
      "Customer Feedback Collection"
    ],
    metrics: { primary: "3x", secondary: "Higher Customer LTV" },
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Healthcare",
    subtitle: "Patient-First Care",
    description: "HIPAA-compliant voice AI for appointment scheduling and patient support",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    benefits: [
      "Appointment Scheduling",
      "Prescription Reminders",
      "Insurance Verification",
      "Symptom Pre-screening",
      "Post-care Follow-ups"
    ],
    metrics: { primary: "40%", secondary: "Reduced No-shows" },
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Automotive",
    subtitle: "Drive Sales & Service Excellence",
    description: "24/7 lead qualification, service automation, and customer engagement for dealerships and OEMs",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    benefits: [
      "24/7 Test Drive Scheduling",
      "Automated Service Appointments",
      "Lead Qualification & Follow-up",
      "After-sales Support Automation",
      "Logistics Communication"
    ],
    metrics: { primary: "65%", secondary: "Faster Service Bookings" },
    color: "from-blue-500 to-cyan-500"
  }
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Reorder industries to put Automotive at the end
  const reorderedIndustries = [...industries];
  const automotiveIndex = reorderedIndustries.findIndex(ind => ind.title === 'Automotive');
  if (automotiveIndex > -1) {
    const [automotive] = reorderedIndustries.splice(automotiveIndex, 1);
    reorderedIndustries.push(automotive);
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-raleway">
            Voice AI Solutions,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Purpose-Built
            </span>{' '}
            for Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-raleway">
            Our AI voice agents are customized to meet the unique needs of your business, 
            delivering exceptional customer experiences across multiple languages.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reorderedIndustries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-gray-700 group-hover:text-white group-hover:bg-transparent transition-all duration-300">
                    {industry.icon}
                  </div>
                </div>
                
                {/* Floating metrics badge */}
                <div className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-xs font-bold text-gray-900">{industry.metrics.primary}</div>
                  <div className="text-xs text-gray-500">{industry.metrics.secondary}</div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-raleway group-hover:text-gray-800">
                  {industry.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-3 font-raleway">
                  {industry.subtitle}
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed font-raleway">
                  {industry.description}
                </p>
                
                {/* Benefits list - shown on hover */}
                <div className={`transition-all duration-300 ${hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <ul className="space-y-2 mb-4">
                    {industry.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start text-xs text-gray-600 font-raleway">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <button className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 font-raleway ${
                  hoveredCard === index 
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-lg` 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-raleway">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-gray-600 mb-6 font-raleway">
              Join 20+ enterprises already using IndusAI to automate conversations and boost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/indusai-app/meet" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-raleway inline-block">
                Request Industry Demo
              </a>
              <a href="/case-studies" className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-raleway inline-block">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
