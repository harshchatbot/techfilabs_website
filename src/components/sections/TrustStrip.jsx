import { motion } from "framer-motion";

export default function TrustStrip({
  items = [],
  eyebrow = "Salesforce Delivery Support",
}) {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-green-600">Salesforce Partner • Trusted by teams across India, USA &amp; UK</p>
          <div className="flex flex-wrap gap-3">
            {items.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700"
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
