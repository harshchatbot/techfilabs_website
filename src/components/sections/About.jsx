import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About({
  title = "Why teams choose TechFi Labs",
  subtitle = "Product thinking, execution discipline, and speed with accountability.",
  description = "We combine UI/UX, engineering, and automation strategy into delivery systems that create measurable business outcomes.",
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
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-lime-200 mb-4">About us</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">{title}</h2>
          <p className="text-xl text-lime-100/90 mb-4">{subtitle}</p>
          <p className="text-emerald-100/75 leading-relaxed mb-8">{description}</p>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-emerald-50/90"
              >
                <CheckCircle2 className="w-5 h-5 text-lime-200" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white/90">
              <img src={logo?.logo} alt={logo?.name || "TechFi Labs"} className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-white font-semibold">TechFi Labs Build System</p>
              <p className="text-emerald-100/70 text-sm">Strategy, design, delivery, iteration</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-emerald-900/35 p-4">
                <p className="text-2xl md:text-3xl font-black text-lime-100">{stat.number}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-emerald-100/65 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
