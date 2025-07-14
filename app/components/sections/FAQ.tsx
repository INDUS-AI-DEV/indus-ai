"use client";

import Container from "../ui/Container";
import { useState } from "react";

const faqs = [
  {
    question:
      "What is Indus AI, and how is it different from other AI companies?",
    answer:
      "Indus AI is not just another AI company—we specialize in personalized and secure AI solutions that are cost-effective and enterprise-ready. From custom LLMs to AI-powered customer support, we ensure that businesses of all sizes can harness AI without the complexity or high costs.",
  },
  {
    question: "What products does Indus AI offer?",
    answer:
      "We currently offer two flagship AI solutions: Vijaya AI – A personalized LLM designed for enterprises and government organizations, providing on-premise and cloud AI deployment at a fraction of the cost. Vivone AI – An intelligent AI agent for chat and voice-based customer support, helping businesses automate and enhance customer interactions.",
  },
  {
    question: "Why should businesses choose Indus AI for AI deployment?",
    answer:
      "Tailored AI models – No one-size-fits-all; we fine-tune AI for your specific needs. Secure & Scalable – Deploy AI on-premise or in the cloud with full data control. Cost Savings – Achieve up to 70% cost reduction compared to traditional AI solutions. Enterprise-Ready – We build AI solutions that seamlessly integrate into your existing business workflows.",
  },
  {
    question: "Can SMEs afford AI solutions from Indus AI?",
    answer:
      "Absolutely! Our mission is to make AI accessible to SMEs by offering affordable, high-impact solutions that optimize processes, improve decision-making, and enhance customer experiences—without the need for an in-house AI team.",
  },
  {
    question: "How does Vivone AI improve customer support?",
    answer:
      "Vivone AI provides instant, context-aware responses through chat and voice AI, reducing wait times and enhancing user experience. Whether it’s handling FAQs, assisting with orders, or escalating complex queries to human agents, Vivone AI ensures seamless customer interactions—24/7.",
  },
  {
    question: "What industries can benefit from Vijaya AI and Vivone AI?",
    answer:
      "Our AI solutions cater to a wide range of industries, including: E-commerce & Retail – AI-driven customer support and product recommendations. Banking & Finance – Secure AI models for fraud detection and customer service. Healthcare – AI assistants for patient queries and medical data processing. Government & Enterprises – On-premise AI for secure and large-scale operations.",
  },
  {
    question: "How does Indus AI ensure data security and privacy?",
    answer:
      "We prioritize data sovereignty and offer on-premise deployment, meaning businesses can keep sensitive information within their own infrastructure. For cloud solutions, we implement end-to-end encryption and enterprise-grade security to safeguard user data.",
  },
  {
    question: "Can I integrate Indus AI products into my existing system?",
    answer:
      "Yes! Our AI solutions are designed to be plug-and-play, with APIs and SDKs that easily integrate into your CRM, ERP, or customer service platforms.",
  },
  {
    question: "What’s the future of AI at Indus AI?",
    answer:
      "We’re constantly innovating! Future plans include AI-powered business insights, multilingual AI agents, and hyper-personalized AI solutions for even more industries. Stay tuned as we shape the future of AI adoption!",
  },
  {
    question: "How can I get started with Indus AI?",
    answer:
      "Simple! Reach out to us at info@indusai.app or visit www.indusai.app to schedule a free AI consultation. Let’s build the future of AI together!",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.05]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 w-full flex items-center justify-between text-left font-raleway"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span
          className={`ml-6 flex-shrink-0 text-gray-900/40 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.25 10.75L12 14.25L8.75 10.75"
            ></path>
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 pb-6"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <p className="text-gray-900/60 leading-relaxed font-raleway">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-32 bg-white border-t border-gray-200 font-raleway">
      <Container>
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 font-raleway">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-900/60 text-lg font-raleway">
            Get answers to common questions about our AI solutions and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
