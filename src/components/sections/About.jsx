import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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
    <section id="about" className="py-28 bg-gradient-to-b from-emerald-950 to-emerald-900/85 relative overflow-hidden">
      <div className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-lime-300/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-100 mb-4">About us</p>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">{title}</h2>
          <p className="text-xl text-stone-300 mb-4">{subtitle}</p>
          <p className="text-stone-300/85 leading-relaxed mb-8">{description}</p>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-stone-300"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={getAnimationConfig(fadeSlideUpVariants, { visible: () => ({ opacity: 1, y: 0 }) })}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-emerald-900/35 p-7 md:p-9"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white/90">
              <img src={logo?.logo} alt={logo?.name || "TechFi Labs"} className="w-full h-full object-cover scale-[1.18]" />
            </div>
            <div>
              <p className="text-white font-semibold">TechFi Labs Salesforce Delivery</p>
              <p className="text-emerald-100/70 text-sm">Support, implementation, managed services</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-emerald-900/35 p-4">
                <p className="text-2xl md:text-3xl font-medium text-emerald-50">
                  <CountUpNumber value={stat.number} duration={1200} />
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-emerald-100/65 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
