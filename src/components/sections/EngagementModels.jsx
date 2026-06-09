import { motion } from "framer-motion";

export default function EngagementModels({
  title = "How we work",
  subtitle = "Choose the engagement model that fits your pipeline, support load, and delivery structure.",
  models = [],
  note = "",
}) {
  return (
    <section id="engagement-models" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-green-600 mb-4">Engagement Models</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-500">{subtitle}</p>
          {note ? <p className="mt-4 text-sm leading-relaxed text-gray-500">{note}</p> : null}
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {models.map((model, index) => (
            <motion.article
              key={model.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{model.title}</h3>
              <p className="text-gray-500 leading-relaxed">{model.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
