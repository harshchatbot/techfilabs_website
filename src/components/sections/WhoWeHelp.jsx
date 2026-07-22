import { motion } from "framer-motion";

export default function WhoWeHelp({
  title = "Who we help",
  subtitle = "We support consulting firms and businesses that need dependable Salesforce delivery capacity.",
  items = [],
}) {
  return (
    <section id="who-we-help" className="py-20 md:py-24 bg-[linear-gradient(180deg,#f6fbff_0%,#ffffff_100%)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10 grid gap-6 md:gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-green-600 mb-4">Who We Help</p>
            <h2 className="mb-4 text-3xl md:text-6xl font-semibold tracking-tight text-gray-900">{title}</h2>
            <p className="text-base md:text-lg text-slate-600">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[16/8]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop"
                alt="Salesforce and consulting delivery team collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute left-4 bottom-4 max-w-[260px] rounded-2xl border border-white/40 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.18em] text-green-700 mb-1">Who we support</p>
                <p className="text-sm font-medium text-gray-900">Consulting firms, business teams, and delivery partners.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 md:gap-5">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] md:rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-5 md:p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-green-600 mb-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-xl md:text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
