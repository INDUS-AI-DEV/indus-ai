"use client";
import Container from '../ui/Container';
import FloatingElements3D from './FloatingElements3D';
import { useState } from 'react';

const testimonials = [
  {
    quote: "IndusAI's voice agents have revolutionized our customer service. We've achieved 89% first-call resolution and reduced operational costs by 45%. The ROI was evident within the first quarter.",
    author: "Rajesh Kumar",
    role: "Chief Technology Officer",
    company: "HDFC Bank",
    industry: "Banking & Finance",
    metrics: "95% FCR, 45% Cost Reduction",
    avatar: "/images/avatars/rajesh-kumar.jpg",
    companyLogo: "/images/logos/hdfc.png"
  },
  {
    quote: "The automotive-specific AI agents understand our dealership needs perfectly. From test drive scheduling to service appointments, everything is automated. Our customer satisfaction scores have increased by 35%.",
    author: "Priya Sharma",
    role: "General Manager",
    company: "Maruti Suzuki Dealership",
    industry: "Automotive",
    metrics: "35% Higher CSAT, 24/7 Availability",
    avatar: "/images/avatars/priya-sharma.jpg",
    companyLogo: "/images/logos/maruti.png"
  },
  {
    quote: "As a D2C brand, customer support costs were eating into our margins. IndusAI's solution handles 80% of our customer queries automatically, allowing us to scale without proportionally increasing support staff.",
    author: "Arjun Patel",
    role: "Founder & CEO",
    company: "BoAt Lifestyle",
    industry: "D2C & FMCG",
    metrics: "80% Query Automation, 3x Customer LTV",
    avatar: "/images/avatars/arjun-patel.jpg",
    companyLogo: "/images/logos/boat.png"
  }
]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <FloatingElements3D />
      </div>
      
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
            <span className="text-sm font-medium text-blue-200 font-raleway">
              ⭐ Customer Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-raleway">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              India's Leading
            </span>{" "}
            Enterprises
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-raleway">
            See how enterprises across industries are achieving measurable results with IndusAI's voice automation platform.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">
                    <span className="text-xs font-medium text-blue-200 font-raleway">
                      {testimonials[activeTestimonial].industry}
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 rounded-full border border-green-400/30">
                    <span className="text-xs font-medium text-green-200 font-raleway">
                      {testimonials[activeTestimonial].metrics}
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-raleway">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[activeTestimonial].author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg font-raleway">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-blue-200 font-raleway">
                      {testimonials[activeTestimonial].role}
                    </div>
                    <div className="text-blue-300 font-medium font-raleway">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2 font-raleway">
                      {testimonials[activeTestimonial].metrics.split(',')[0]}
                    </div>
                    <div className="text-blue-200 font-raleway">
                      {testimonials[activeTestimonial].metrics.split(',')[1]?.trim() || 'Improvement'}
                    </div>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce">
                  <div className="text-2xl font-bold text-gray-900 font-raleway">20+</div>
                  <div className="text-xs text-gray-600 font-raleway">Enterprises</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce delay-500">
                  <div className="text-2xl font-bold text-gray-900 font-raleway">24/7</div>
                  <div className="text-xs text-gray-600 font-raleway">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-blue-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "22+", label: "Enterprise Clients" },
            { number: "95%", label: "Avg. FCR Rate" },
            { number: "45%", label: "Cost Reduction" },
            { number: "24/7", label: "AI Availability" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2 font-raleway">
                {stat.number}
              </div>
              <div className="text-blue-200 font-raleway">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}