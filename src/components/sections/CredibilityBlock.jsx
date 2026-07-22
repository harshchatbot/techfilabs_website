import { motion } from "framer-motion";

export default function CredibilityBlock({
  title = "Execution Credibility",
  subtitle = "Practical Salesforce delivery support shaped by real implementation, support, and governance experience.",
  items = [],
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fcf9_0%,#ffffff_100%)] py-18 md:py-22">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:items-start xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-green-600">Delivery Proof</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">{title}</h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">{subtitle}</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            {items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex min-h-[112px] items-start rounded-[1.5rem] border border-green-100 bg-white px-5 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <p className="text-sm font-medium leading-relaxed text-gray-900 md:text-[0.95rem]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
