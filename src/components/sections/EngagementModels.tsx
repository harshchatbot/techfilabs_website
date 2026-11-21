"use client";

import { motion, useReducedMotion } from "framer-motion";

interface EngagementModelsProps {
  title?: string;
  subtitle?: string;
  models?: { title: string; description: string }[];
  note?: string;
}

export default function EngagementModels({
  title = "How we work",
  subtitle = "A clear process, from the first conversation to ongoing support.",
  models = [],
  note = "",
}: EngagementModelsProps) {
  const reduceMotion = useReducedMotion();
  return (
    <section id="engagement-models" className="bg-[#F1EEE7] py-16 text-[#24231F] sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9B482E]">Our process</p>
          <h2 className="font-serif text-3xl font-normal tracking-[-0.045em] sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#625F59]">{subtitle}</p>
        </div>
        <div className="mt-10 grid border-t border-[#24231F]/15 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model, index) => (
            <motion.article
              key={model.title}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.05 }}
              className={`border-b border-[#24231F]/15 py-7 sm:pr-5 lg:border-b-0 ${index > 0 ? "lg:border-l lg:border-[#24231F]/15 lg:pl-6" : ""}`}
            >
              <p className="text-xs font-semibold text-[#9B482E]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-lg font-semibold">{model.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#625F59]">{model.description}</p>
            </motion.article>
          ))}
        </div>
        {note && <p className="mt-6 max-w-2xl text-sm text-[#625F59]">{note}</p>}
      </div>
    </section>
  );
}
