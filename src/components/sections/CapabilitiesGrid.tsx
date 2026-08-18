"use client";

import { motion } from "framer-motion";

interface CapabilitiesGridProps {
  title?: string;
  subtitle?: string;
  capabilities?: string[];
}

export default function CapabilitiesGrid({
  title = "Salesforce capabilities",
  subtitle = "Hands-on delivery support across customization, administration, support, integrations, and release execution.",
  capabilities = [],
}: CapabilitiesGridProps) {
  return (
    <section id="capabilities" className="py-28 bg-green-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-green-600 mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-500">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="rounded-xl border border-green-100 bg-white px-4 py-3 text-sm font-medium text-green-800 shadow-sm"
            >
              {capability}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
