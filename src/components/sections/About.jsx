import { motion } from "framer-motion";
import CountUpNumber from "../ui/CountUpNumber";

export default function About({
  title = "Why Choose TechFi Labs",
  subtitle = "A practical Salesforce delivery team built for implementation support, managed services, and ongoing business execution.",
  description = "We bring together Salesforce consulting, build execution, release support, and long-term platform care so your team gets dependable delivery without extra operational friction.",
  stats = [],
  features = [],
  logo,
}) {
  return (
    <section id="about" className="py-22 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.06),transparent_28%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-green-600 mb-4">Why Choose TechFi Labs</p>
          <h2 className="mb-4 text-3xl md:text-6xl font-semibold text-gray-900 tracking-tight">{title}</h2>
          <p className="mb-4 text-lg md:text-xl text-slate-700">{subtitle}</p>
          <p className="text-slate-600 leading-relaxed max-w-2xl mb-8">{description}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-green-100 bg-green-50/65 px-4 py-3 text-sm font-medium text-gray-900 shadow-sm"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f7fcf9_0%,#ffffff_100%)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:p-6">
            <div className="mb-4 rounded-[1.5rem] border border-green-100 bg-green-50/70 px-4 py-4 md:px-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-green-700 mb-1">Delivery Style</p>
              <p className="text-sm font-medium text-gray-900">Calm process, clear ownership, stable execution</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.04)] md:p-5">
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
