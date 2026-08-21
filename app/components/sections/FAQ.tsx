"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "../ui/Container";
import { faqs } from "../../lib/faqs";

/**
 * Answers stay mounted and are collapsed with a grid-rows transition rather
 * than unmounted, so the copy is always present in the HTML for crawlers and
 * matches the FAQPage structured data rendered on the homepage.
 */
function FaqItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border bg-white transition-shadow duration-300 ${
        isOpen ? "border-gray-200 shadow-md" : "border-gray-100 shadow-sm hover:shadow-md"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-answer`}
          id={`${id}-question`}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left font-raleway text-lg font-semibold text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C514C] focus-visible:ring-offset-2"
        >
          <span>{question}</span>
          <svg
            className={`h-6 w-6 flex-shrink-0 text-gray-500 transition-transform duration-300 motion-reduce:transition-none ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>

      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 font-raleway leading-relaxed text-gray-600">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-gradient-to-b from-white to-blue-50/20 py-20"
    >
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 font-raleway text-sm font-medium text-blue-700">
            Agentic AI, explained
          </span>
          <h2
            id="faq-heading"
            className="mb-4 font-raleway text-4xl font-bold text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="font-raleway text-lg leading-relaxed text-gray-600">
            What an agentic AI platform is, how it differs from a chatbot, and
            what it takes to deploy AI agents on real enterprise workflows.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              id={`faq-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 font-raleway text-gray-600">
            Still have questions about deploying AI agents in your workflows?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#2C514C] px-6 py-3 font-raleway text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#132A22]"
          >
            Send us an enquiry
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
