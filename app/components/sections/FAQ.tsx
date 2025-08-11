"use client";

import Container from "../ui/Container";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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
      "We offer comprehensive AI solutions including personalized Large Language Models designed for enterprises and government organizations, providing on-premise and cloud AI deployment at a fraction of the cost. Our intelligent AI agents provide chat and voice-based customer support, helping businesses automate and enhance customer interactions with human-like accuracy.",
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
    question: "How does IndusAI improve customer support?",
    answer:
      "IndusAI provides instant, context-aware responses through chat and voice AI, reducing wait times and enhancing user experience. Whether it's handling FAQs, assisting with orders, or escalating complex queries to human agents, IndusAI ensures seamless customer interactions—24/7.",
  },
  {
    question: "What industries can benefit from IndusAI solutions?",
    answer:
      "Our AI solutions cater to a wide range of industries, including: E-commerce & Retail – AI-driven customer support and product recommendations. Banking & Finance – Secure AI models for fraud detection and customer service. Healthcare – AI assistants for patient queries and medical data processing. Government & Enterprises – On-premise AI for secure and large-scale operations. Automotive – 24/7 lead qualification and service automation. D2C & FMCG – Supply chain optimization and customer engagement.",
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

const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void 
}) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 mb-4 transition-all duration-300 hover:shadow-md"
      initial={false}
      animate={{ 
        backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
        borderColor: isOpen ? '#e2e8f0' : '#f1f5f9'
      }}
    >
      <motion.button
        className="flex justify-between items-center w-full p-6 text-left cursor-pointer"
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <motion.span 
          className="ml-4 text-gray-500"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown size={24} />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { 
                opacity: { duration: 0.3 },
                height: { duration: 0.3 }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                opacity: { duration: 0.2 },
                height: { duration: 0.2 }
              }
            }}
            className="px-6 pb-6 -mt-2"
          >
            <div className="prose prose-indigo text-gray-600">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/20">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
              Need Help?
            </span>
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about our AI solutions. Can't find the answer you're looking for? 
            <a href="/contact" className="text-blue-600 hover:underline font-medium ml-1">Contact our team</a>.
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            Contact Support
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
