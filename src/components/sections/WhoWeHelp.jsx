import { motion } from "framer-motion";

export default function WhoWeHelp({
  title = "Who we help",
  subtitle = "We support consulting firms and businesses that need dependable offshore Salesforce delivery capacity.",
  items = [],
}) {
  return (
    <section id="who-we-help" className="py-28 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(132,204,22,0.1),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-100 mb-4">Who We Help</p>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">{title}</h2>
          <p className="text-lg text-stone-300">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-emerald-900/40 p-7"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-stone-300 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
