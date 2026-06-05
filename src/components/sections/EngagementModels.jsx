import { motion } from "framer-motion";

export default function EngagementModels({
  title = "How we work",
  subtitle = "Choose the engagement model that fits your pipeline, support load, and delivery structure.",
  models = [],
  note = "",
}) {
  return (
    <section id="engagement-models" className="py-28 bg-gradient-to-b from-emerald-950 to-emerald-900/85 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(190,242,100,0.12),transparent_42%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-100 mb-4">Engagement Models</p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">{title}</h2>
          <p className="text-lg text-stone-300">{subtitle}</p>
          {note ? <p className="mt-4 text-sm leading-relaxed text-emerald-100/80">{note}</p> : null}
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {models.map((model, index) => (
            <motion.article
              key={model.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-emerald-900/35 p-7"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-100/80 mb-3">Model {index + 1}</p>
              <h3 className="text-2xl font-semibold text-white mb-3">{model.title}</h3>
              <p className="text-stone-300 leading-relaxed">{model.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
