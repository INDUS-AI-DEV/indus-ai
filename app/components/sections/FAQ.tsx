"use client";

import Container from "../ui/Container";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question:
      "What is Indus AI, and how is it different from other AI companies?",
    answer:
      "IndusAI is an enterprise agentic AI product company. Instead of positioning ourselves only as a solutions vendor, we are building a product suite for voice automation, financial workflows, and autonomous enterprise systems that can be deployed across real business operations.",
  },
  {
    question: "What products does Indus AI offer?",
    answer:
      "Our product suite includes IndusLabs for enterprise voice AI, Marketing Automation Agent for lead management and qualification, FinoLabs for financial operations and BFSI workflows, and Agentic AI SM for broader autonomous workflow execution and multi-agent orchestration.",
  },
  {
    question: "Why should businesses choose Indus AI for AI deployment?",
    answer:
      "Businesses choose IndusAI because we focus on production workflows, not just prototypes. Our products are built for enterprise deployment, with integrations, observability, multilingual capability, and workflow automation that can support real business operations at scale.",
  },
  {
    question: "Can SMEs adopt IndusAI products without a large internal AI team?",
    answer:
      "Absolutely! Our mission is to make AI accessible to SMEs by offering affordable, high-impact solutions that optimize processes, improve decision-making, and enhance customer experiences—without the need for an in-house AI team.",
  },
  {
    question: "How does IndusAI improve customer support?",
    answer:
      "IndusAI improves customer support through voice agents, workflow automation, multilingual servicing, and human handoff controls. Teams can automate repetitive conversations while keeping escalation paths, oversight, and customer experience quality intact.",
  },
  {
    question: "What industries can benefit from IndusAI products?",
    answer:
      "Our products are relevant anywhere enterprises need scalable automation for conversations, workflows, and operational actions. Strong fits include banking and finance, hospitality, healthcare, retail and commerce, automotive, and broader enterprise operations.",
  },
  {
    question: "How does Indus AI ensure data security and privacy?",
    answer:
      "We prioritize data sovereignty and offer on-premise deployment, meaning businesses can keep sensitive information within their own infrastructure. For cloud solutions, we implement end-to-end encryption and enterprise-grade security to safeguard user data.",
  },
  {
    question: "Can I integrate Indus AI products into my existing system?",
    answer:
      "Yes. Our products are designed to connect with telephony, CRM, ERP, finance systems, and internal business tools so enterprises can deploy automation without rebuilding their existing operating stack.",
  },
  {
    question: "What’s the future of AI at Indus AI?",
    answer:
      "We are expanding from voice-first deployments into a broader agentic AI product ecosystem that supports enterprise workflows, financial operations, and autonomous systems with stronger execution, observability, and control.",
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
            Everything you need to know about our products, platform, and deployment model. Can't find the answer you're looking for? 
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
