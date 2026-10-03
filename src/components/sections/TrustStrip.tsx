"use client";

import { motion } from "framer-motion";

interface TrustStripProps {
  items?: string[];
}

export default function TrustStrip({ items = [] }: TrustStripProps) {
  return (
    <section className="border-y border-emerald-900/10 bg-white py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              AI automation • CRM delivery • Custom workflow systems
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Built for teams that need faster responses, cleaner operations, and fewer repetitive manual tasks.
            </p>
          </div>

          {items.length > 0 ? (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {items.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}