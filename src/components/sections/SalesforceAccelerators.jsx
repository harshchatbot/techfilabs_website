import { motion } from "framer-motion";

export default function SalesforceAccelerators({
  title = "Salesforce Accelerators",
  subtitle = "Reusable delivery assets that help TechFi Labs move faster with more structure across implementation, support, migration, and staffing workflows.",
  items = [],
}) {
  return (
    <section className="relative overflow-hidden bg-white py-18 md:py-22">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.06),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-green-600">Salesforce Accelerators</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">{title}</h2>
          <p className="text-base text-slate-600 md:text-lg">{subtitle}</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-5">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-[1.5rem] border border-slate-200 bg-white/95 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-[0_24px_54px_rgba(22,101,52,0.08)] md:p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-green-700">
                  {item.icon ? <item.icon className="h-5 w-5" /> : null}
                </div>
                <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-green-700">
                  {item.badge}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-gray-900 md:text-2xl">{item.title}</h3>
              <p className="mb-5 leading-relaxed text-slate-600">{item.description}</p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">Primary Outcome</p>
                <p className="text-sm font-medium text-gray-900">{item.value}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
