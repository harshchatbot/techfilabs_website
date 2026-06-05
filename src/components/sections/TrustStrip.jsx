import { motion } from "framer-motion";

export default function TrustStrip({
  items = [],
  eyebrow = "Salesforce Delivery Support",
}) {
  return (
    <section className="py-8 bg-emerald-925/70 border-y border-white/8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/80">{eyebrow}</p>
          <div className="flex flex-wrap gap-3">
            {items.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-full border border-emerald-700/35 bg-emerald-900/35 px-4 py-2 text-sm font-medium text-stone-200"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
