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
          <p className="text-gray-500 leading-relaxed mb-8">{description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 text-gray-600 leading-relaxed"
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
          className="relative rounded-3xl overflow-hidden h-[420px]"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80&auto=format&fit=crop"
            alt="TechFi Labs team"
            className="w-full h-full object-cover"
          />
          {/* Overlay card at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-5 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <img src="/techfilabs_logo_2026.png" alt="TechFi Labs" className="h-8 w-8 object-contain" />
              <div>
                <p className="text-gray-900 font-semibold text-sm">TechFi Labs</p>
                <p className="text-gray-500 text-xs">Salesforce Consulting Partner · Jaipur, India</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="text-center">
                <p className="text-green-600 font-bold text-lg">50+</p>
                <p className="text-gray-400 text-xs">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-green-600 font-bold text-lg">3+</p>
                <p className="text-gray-400 text-xs">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-green-600 font-bold text-lg">5★</p>
                <p className="text-gray-400 text-xs">Rated</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
