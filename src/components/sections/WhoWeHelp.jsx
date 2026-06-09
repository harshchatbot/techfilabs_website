import { motion } from "framer-motion";

export default function WhoWeHelp({
  title = "Who we help",
  subtitle = "We support consulting firms and businesses that need dependable offshore Salesforce delivery capacity.",
  items = [],
}) {
  return (
    <section id="who-we-help" className="py-24 bg-green-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-green-600 mb-4">Who We Help</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-500">{subtitle}</p>
        </motion.div>

        <div className="mb-14 rounded-3xl overflow-hidden h-64 w-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
