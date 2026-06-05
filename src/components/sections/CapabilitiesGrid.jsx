import { motion } from "framer-motion";

export default function CapabilitiesGrid({
  title = "Salesforce capabilities",
  subtitle = "Hands-on delivery support across customization, administration, support, integrations, and release execution.",
  capabilities = [],
}) {
  return (
    <section id="capabilities" className="py-28 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.12),transparent_42%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-100 mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">{title}</h2>
          <p className="text-lg text-stone-300">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-emerald-50"
            >
              {capability}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
