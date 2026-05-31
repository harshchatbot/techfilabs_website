import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { fadeSlideUpVariants, getAnimationConfig, prefersReducedMotion } from "../../utils/motionConfig";

export default function Services({
  title = "Services focused on growth outcomes",
  subtitle = "We align technology with your business goals to improve conversion, efficiency, and execution speed.",
  services = [],
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const reduceMotion = prefersReducedMotion();

  return (
    <section id="services" className="py-28 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(132,204,22,0.14),transparent_42%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">{title}</h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={getAnimationConfig(fadeSlideUpVariants, { visible: () => ({ opacity: 1, y: 0 }) })}
              initial="hidden"
              whileInView="visible"
              custom={reduceMotion ? 0 : index * 0.08}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={reduceMotion ? {} : { y: -6 }}
              onMouseEnter={() => !reduceMotion && setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full rounded-3xl border border-white/10 bg-emerald-900/40 p-7 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl border border-emerald-700/40 flex items-center justify-center mb-6 transition-colors duration-300 ${
                hoveredIndex === index ? "bg-emerald-800/50" : "bg-emerald-900/40"
              }`}>
                {service.icon ? <service.icon className="w-6 h-6 text-emerald-100" /> : null}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-stone-300/90 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 pt-5 border-t border-white/10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-emerald-50/85">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-200 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {service.slug && (
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-700/40 px-4 py-2 text-sm font-semibold text-emerald-100 hover:bg-emerald-900/30 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
