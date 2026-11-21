"use client";

import { Plus } from "lucide-react";
import Schema from "@/components/Schema";
import type { FAQItem } from "@/constants/faq";

interface FAQSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  schemaId?: string;
  darkTheme?: boolean;
}

export default function FAQSection({
  eyebrow = "Frequently Asked Questions",
  title = "Answers to Common Questions",
  subtitle = "",
  faqs,
  schemaId = "faq-section-schema",
  darkTheme = false,
}: FAQSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby={`${schemaId}-title`}
      className={`py-16 sm:py-20 ${darkTheme ? "bg-[#24231F] text-[#FAF9F5]" : "bg-[#FAF9F5] text-[#24231F]"}`}
    >
      <Schema id={schemaId} data={faqSchema} />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 md:grid-cols-[0.75fr_1.25fr] md:gap-16 lg:px-8">
        <div>
          <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${darkTheme ? "text-[#E7A88D]" : "text-[#9B482E]"}`}>
            {eyebrow}
          </p>
          <h2 id={`${schemaId}-title`} className="max-w-md font-serif text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className={`mt-4 max-w-sm text-sm leading-relaxed ${darkTheme ? "text-[#C8C3B9]" : "text-[#625F59]"}`}>{subtitle}</p>}
        </div>
        <div className={`border-t ${darkTheme ? "border-white/20" : "border-[#24231F]/10"}`}>
          {faqs.map((item) => (
            <details key={item.question} className={`group border-b ${darkTheme ? "border-white/20" : "border-[#24231F]/10"}`}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium leading-snug focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A45137] [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus aria-hidden="true" className={`h-4 w-4 shrink-0 transition-transform group-open:rotate-45 ${darkTheme ? "text-[#E7A88D]" : "text-[#9B482E]"}`} />
              </summary>
              <p className={`max-w-2xl pb-6 pr-8 text-sm leading-relaxed sm:text-base ${darkTheme ? "text-[#C8C3B9]" : "text-[#625F59]"}`}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
