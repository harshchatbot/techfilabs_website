"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ABOUT_DATA } from "@/constants";

interface AboutProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  reasons?: any[];
  items?: any[];
  isPageHeader?: boolean;
}

export default function About({
  eyebrow = "About TechFi Labs",
  title = "Built for the work that matters.",
  subtitle = "We combine practical engineering, AI automation and Salesforce expertise to help teams work better.",
  reasons,
  items,
  isPageHeader = false,
}: AboutProps) {
  const entries = items || reasons || ABOUT_DATA.reasons;
  const reduceMotion = useReducedMotion();
  const Heading = isPageHeader ? "h1" : "h2";

  return (
    <section className="bg-[#FAF9F5] py-16 text-[#24231F] sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <header className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B482E]">{eyebrow}</p>
          <Heading className="font-serif text-[clamp(2.8rem,6vw,5.2rem)] font-normal leading-[1.05] tracking-[-0.055em]">{title}</Heading>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#625F59] sm:text-lg">{subtitle}</p>
        </header>
        <div className="mt-14 grid border-t border-[#24231F]/15 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((item: { number?: string; title: string; description: string }, index: number) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.04 }}
              className={`border-b border-[#24231F]/15 py-7 sm:pr-6 lg:pr-8 ${index % 3 !== 0 ? "lg:border-l lg:pl-8" : ""}`}
            >
              <p className="text-xs font-semibold text-[#9B482E]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#625F59]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
