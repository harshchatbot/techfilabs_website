import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Services({
  title = "Services that power product growth",
  subtitle = "From architecture to automation, we help teams ship faster and operate better.",
  services = [],
}) {
  return (
    <section id="services" className="py-28 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(132,204,22,0.14),transparent_42%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">{title}</h2>
          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-60px" }}
              className="h-full rounded-3xl border border-white/10 bg-emerald-900/25 p-7"
            >
              <div className="w-12 h-12 rounded-2xl bg-lime-300/15 border border-lime-200/20 flex items-center justify-center mb-6">
                {service.icon ? <service.icon className="w-6 h-6 text-lime-100" /> : null}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-emerald-100/75 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 pt-5 border-t border-white/10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-emerald-50/85">
                    <Check className="w-4 h-4 mt-0.5 text-lime-200 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
