import { motion } from "framer-motion";
import CountUpNumber from "../ui/CountUpNumber";
import { fadeSlideUpVariants, getAnimationConfig, prefersReducedMotion } from "../../utils/motionConfig";

export default function About({
  title = "Why growth-focused teams choose TechFi Labs",
  subtitle = "We combine strategy and execution to turn business goals into measurable results.",
  description = "Our approach is simple: identify bottlenecks, build the right system, and optimize continuously until your business sees clear outcome improvements.",
  stats = [],
  features = [],
  logo,
}) {
  return (
    <section id="about" className="py-28 bg-green-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 mb-4">About us</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-4">{title}</h2>
          <p className="text-xl text-gray-500 mb-4">{subtitle}</p>
          <p className="text-gray-500 leading-relaxed max-w-2xl mb-8">{description}</p>

          <div className="flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-full border border-green-100 bg-white px-4 py-2.5 text-sm text-gray-600 shadow-sm"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={getAnimationConfig(fadeSlideUpVariants, { visible: () => ({ opacity: 1, y: 0 }) })}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid gap-4"
        >
          <div className="relative rounded-3xl overflow-hidden h-[320px] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80&auto=format&fit=crop"
              alt="Salesforce delivery workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 backdrop-blur-sm shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.16em] text-green-700 mb-1">Delivery Style</p>
              <p className="text-sm font-medium text-gray-900">Calm process, clear ownership, stable execution</p>
            </div>
          </div>

          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-4">
            <div className="relative rounded-3xl overflow-hidden min-h-[220px] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop"
                alt="Salesforce support collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5">
              <div className="flex items-center gap-3 mb-3">
                <img src="/techfilabs_logo_2026.png" alt="TechFi Labs" className="h-8 w-8 object-contain" />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">TechFi Labs</p>
                  <p className="text-gray-500 text-xs">Salesforce consulting and delivery · Jaipur, India</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-green-100 bg-green-50/60 p-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-green-700 mb-1">Delivery Focus</p>
                  <p className="text-sm text-gray-700">Implementation, support, managed services</p>
                </div>
                <div className="rounded-2xl border border-green-100 bg-green-50/60 p-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-green-700 mb-1">Working Style</p>
                  <p className="text-sm text-gray-700">Clear updates, stable releases, structured handover</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.slice(0, 4).map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-3">
                    <p className="text-sm font-semibold text-gray-900">
                      <CountUpNumber value={stat.number} duration={900} />
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
