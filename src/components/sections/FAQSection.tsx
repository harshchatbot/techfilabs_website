"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Schema from "@/components/Schema";
import { FAQItem } from "@/constants/faq";

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
  subtitle = "Everything you need to know about our engineering approach, AI tools, delivery timelines, and Salesforce capabilities.",
  faqs,
  schemaId = "faq-section-schema",
  darkTheme = false,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className={`relative overflow-hidden py-20 md:py-26 ${
        darkTheme
          ? "bg-[linear-gradient(180deg,#071f18_0%,#0a2b21_100%)] text-white"
          : "bg-[linear-gradient(180deg,#ffffff_0%,#f7fefa_100%)] text-slate-900"
      }`}
    >
      <Schema id={schemaId} data={faqSchema} />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            <HelpCircle className="h-3.5 w-3.5 text-emerald-600" />
            {eyebrow}
          </div>
          <h2
            className={`mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl font-heading ${
              darkTheme ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mx-auto max-w-2xl text-base leading-relaxed md:text-lg ${
              darkTheme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const numberLabel = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                  darkTheme
                    ? isOpen
                      ? "border-emerald-400/40 bg-white/[0.08] shadow-[0_16px_40px_rgba(3,41,29,0.25)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                    : isOpen
                    ? "border-emerald-300 bg-white shadow-[0_14px_36px_rgba(6,95,70,0.06)]"
                    : "border-slate-200/80 bg-white/80 hover:border-emerald-200"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        darkTheme ? "text-emerald-300" : "text-emerald-600"
                      }`}
                    >
                      {numberLabel}
                    </span>
                    <h3
                      className={`text-lg font-bold tracking-tight md:text-xl font-heading ${
                        darkTheme ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      darkTheme
                        ? isOpen
                          ? "border-emerald-400/40 bg-emerald-400/20 text-emerald-300"
                          : "border-white/15 bg-white/5 text-slate-300"
                        : isOpen
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-slate-50 text-slate-500"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className={`border-t px-6 pb-6 pt-4 text-sm leading-relaxed md:text-base ${
                          darkTheme
                            ? "border-white/10 text-slate-300"
                            : "border-slate-100 text-slate-600"
                        }`}
                      >
                        <p>{item.answer}</p>

                        {item.category && (
                          <div className="mt-4 flex items-center gap-2">
                            <span
                              className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                                darkTheme
                                  ? "border-white/10 bg-white/5 text-emerald-300"
                                  : "border-emerald-100 bg-emerald-50 text-emerald-700"
                              }`}
                            >
                              {item.category}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
