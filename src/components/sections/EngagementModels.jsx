import { motion } from "framer-motion";

export default function EngagementModels({
  title = "Delivery Process",
  subtitle = "Choose the engagement model that fits your pipeline, support load, and delivery structure.",
  models = [],
  note = "",
}) {
  return (
    <section id="engagement-models" className="py-22 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-50/70 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10 md:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-green-600 mb-4">Delivery Process</p>
          <h2 className="mb-4 text-3xl md:text-6xl font-semibold tracking-tight text-gray-900">{title}</h2>
          <p className="text-base md:text-lg text-slate-600">{subtitle}</p>
          {note ? (
            <div className="mt-5 inline-flex max-w-3xl rounded-[1.5rem] border border-green-100 bg-green-50/80 px-4 py-3.5 text-sm leading-relaxed text-gray-600 md:px-5 md:py-4">
              {note}
            </div>
          ) : null}
        </motion.div>

        <div className="grid gap-4 md:gap-5 xl:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] border border-gray-200 bg-white p-3 md:p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop"
                alt="Salesforce delivery process and client discussion"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute left-4 bottom-4 rounded-2xl border border-white/40 bg-white/88 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.18em] text-green-700 mb-1">Execution model</p>
                <p className="text-sm font-medium text-gray-900">Discover, design, build, validate, deploy, and support with one practical team.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {models.map((model, index) => (
            <motion.article
              key={model.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-[1.5rem] md:rounded-[1.75rem] border border-gray-200 bg-gradient-to-br from-white via-white to-green-50/35 p-5 md:p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(22,101,52,0.08)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="h-11 w-11 rounded-2xl border border-green-100 bg-green-50/80" />
              </div>
              <h3 className="mb-3 text-xl md:text-2xl font-semibold text-gray-900">{model.title}</h3>
              <p className="text-slate-600 leading-relaxed">{model.description}</p>
            </motion.article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
