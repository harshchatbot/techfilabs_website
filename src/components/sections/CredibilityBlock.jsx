import { motion } from "framer-motion";
export default function CredibilityBlock({
  title = "Built on Real Delivery Experience",
  subtitle = "AI automation and Salesforce delivery backed by hands-on project, support, and product-building experience.",
  items = [],
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ecfdf5_0%,#ffffff_100%)] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(6,95,70,0.05),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-green-600">Experience</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">{subtitle}</p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="min-w-0 rounded-[1.35rem] border border-emerald-900/10 bg-[#f7fefa] px-4 py-4 shadow-[0_14px_32px_rgba(6,95,70,0.05)]"
              >
                <p className="break-words text-sm font-medium leading-relaxed text-gray-900">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
