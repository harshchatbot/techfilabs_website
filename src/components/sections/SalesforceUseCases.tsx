"use client";

import { motion } from "framer-motion";

interface SalesforceUseCasesProps {
  title?: string;
  subtitle?: string;
  items?: any[];
}

export default function SalesforceUseCases({
  title = "Salesforce Use Cases We Support",
  subtitle = "Focused delivery support for common Salesforce transformation, support, and optimization needs across business teams and consulting partners.",
  items = [],
}: SalesforceUseCasesProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fcf9_0%,#ffffff_100%)] py-18 md:py-22">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-50/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-green-600">Use Cases</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">{title}</h2>
          <p className="text-base text-slate-600 md:text-lg">{subtitle}</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white/95 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1 md:p-6"
            >
              <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-green-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 md:text-2xl">{item.title}</h3>
              <p className="leading-relaxed text-slate-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
