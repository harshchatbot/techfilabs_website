import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ABOUT_DATA } from "../../constants/data";

function getDeliveryText() {
  const now = new Date();
  return `Outcome-driven execution • ${now.getFullYear()}`;
}

export default function Hero({
  eyebrow = getDeliveryText(),
  headline = "We Architect Systems That Drive Operational Excellence.",
  subtitle = "We design scalable, compliant systems using Salesforce Platform , build digital products and AI systems that eliminate manual work and improve operational performance , productivity and revenue.",
  primaryButton = { text: "Explore Products", action: () => {} },
  secondaryButton = null,
  stats = ABOUT_DATA.stats,
  scrollTarget = "services",
}) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById(scrollTarget);
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-32 pb-16 overflow-hidden bg-[#0f3b22]"
    >
      {/* Radial gradient overlay only — no video */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_20%_0%,rgba(190,242,100,0.22),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(34,197,94,0.15),transparent_35%)]" />
      <div className="absolute left-0 right-0 bottom-0 h-32 z-[1] bg-gradient-to-t from-[#0f3b22] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-emerald-700/60 bg-emerald-900/40 px-4 py-2 mb-7"
          >
            <span className="text-xs tracking-[0.16em] uppercase text-emerald-100">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl md:text-7xl xl:text-8xl leading-[0.95] font-black tracking-tight text-white mb-7"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={primaryButton.action}
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-7 py-3.5 text-base font-bold text-emerald-950 hover:bg-lime-200 transition-colors"
            >
              {primaryButton.text}
              <ArrowRight className="w-4 h-4" />
            </button>
            {secondaryButton ? (
              <button
                onClick={secondaryButton.action}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                {secondaryButton.text}
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : null}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative lg:justify-self-end"
        >
          <div className="grid grid-cols-2 gap-3 max-w-[420px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop"
              alt="Salesforce consultant"
              className="rounded-2xl h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&auto=format&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl h-48 w-full object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80&auto=format&fit=crop"
              alt="Business meeting"
              className="rounded-2xl h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80&auto=format&fit=crop"
              alt="Partnership"
              className="rounded-2xl h-48 w-full object-cover mt-8"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center text-emerald-100/60 hover:text-white"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase mb-1">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
