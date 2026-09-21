"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
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
      className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
        isOpen
          ? "border-slate-300 shadow-md ring-1 ring-slate-200"
          : "border-slate-200/80 shadow-2xs hover:border-slate-300 hover:shadow-xs"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-answer`}
          id={`${id}-question`}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-raleway text-sm font-bold text-slate-900 transition-colors sm:text-base focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2C514C] focus-visible:ring-offset-2"
        >
          <span>{question}</span>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
              isOpen ? "rotate-180 bg-slate-100 text-slate-900" : "bg-slate-50 text-slate-500"
            }`}
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
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
          <p className="px-5 pb-5 font-raleway text-xs leading-relaxed text-slate-600 sm:text-sm">
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
      className="border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/40 to-slate-50 py-14 md:py-18"
    >
      <Container>
        {/* Compact Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-blue-900">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Enterprise FAQ &bull; AEO Answer Hub
          </span>
          <h2
            id="faq-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Understand how an enterprise agentic AI platform operates, how it differs from traditional
            conversational bots, and what is required to deploy autonomous agents in production.
          </p>
        </div>

        {/* Accordion list at 80% Scale */}
        <div className="mx-auto max-w-3xl space-y-2.5">
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

        {/* Bottom Contact Prompt */}
        <div className="mt-10 text-center">
          <p className="mb-4 font-raleway text-sm text-slate-600">
            Have technical questions about your enterprise stack or architecture?
          </p>
          <Button href="/contact" size="md">
            Send us an enquiry
          </Button>
        </div>
      </Container>
    </section>
  );
}
