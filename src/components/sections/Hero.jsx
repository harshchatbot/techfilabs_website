import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ABOUT_DATA } from "../../constants/data";
import { prefersReducedMotion } from "../../utils/motionConfig";
import DottedSurface from "../ui/DottedSurface";

function getDeliveryText() {
  const now = new Date();
  return `Outcome-driven execution • ${now.getFullYear()}`;
}

const FLOATING_CARDS = [
  { title: "Discover", subtitle: "Salesforce roadmap", position: "left-[-0.4rem] top-[12%] xl:left-[-1.2rem]" },
  { title: "Build", subtitle: "Implementation delivery", position: "right-[-0.25rem] top-[18%] xl:right-[-0.9rem]" },
  { title: "Support", subtitle: "Production stability", position: "right-[10%] bottom-[10%]" },
];

export default function Hero({
  eyebrow = getDeliveryText(),
  headline = "Where Salesforce Delivery Meets Real Business Execution",
  subtitle = "We help businesses and consulting partners implement, optimize, and support Salesforce solutions through founder-led offshore delivery from India.",
  primaryButton = { text: "Explore Products", action: () => {} },
  secondaryButton = null,
  stats = ABOUT_DATA.stats,
  scrollTarget = "services",
}) {
  const reduceMotion = prefersReducedMotion();
  const headlineText = headline.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
  const hasLegacySplit = headlineText.includes(" Meets ");
  const headlineParts = hasLegacySplit ? headlineText.split(" Meets ") : [headlineText];

  const handleScrollDown = () => {
    const nextSection = document.getElementById(scrollTarget);
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f4fbf8_0%,#f8fcfa_38%,#ffffff_100%)] pb-14 pt-27 md:pb-20 md:pt-32"
    >
      <DottedSurface className="z-0 opacity-[0.16]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_12%_16%,rgba(110,231,183,0.18),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.16),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(52,211,153,0.07),transparent_28%)]" />
      <div className="absolute -left-20 top-14 z-[1] h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl md:h-96 md:w-96" />
      <div className="absolute right-0 top-8 z-[1] h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl md:h-[26rem] md:w-[26rem]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 md:px-6 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div className="max-w-3xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-5 inline-flex items-center rounded-full border border-emerald-200/80 bg-white/80 px-4 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 md:text-xs">
              {eyebrow}
            </span>
          </motion.div>

          <div className="mb-6 space-y-1.5 md:space-y-2">
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.62, ease: "easeOut", delay: 0.06 }}
              className={`text-[2.8rem] font-black leading-[0.92] tracking-[-0.05em] text-slate-950 sm:text-[3.5rem] md:text-[4.9rem] xl:text-[5.5rem] ${
                hasLegacySplit ? "max-w-[11ch] md:max-w-[12ch]" : "max-w-[12ch] md:max-w-[13ch] xl:max-w-[14ch]"
              }`}
            >
              {headlineParts[0]}
            </motion.h1>

            {hasLegacySplit ? (
              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.62, ease: "easeOut", delay: 0.12 }}
                className="max-w-[13ch] text-[2.8rem] font-black leading-[0.92] tracking-[-0.05em] text-slate-950 sm:text-[3.5rem] md:max-w-[14ch] md:text-[4.9rem] xl:text-[5.5rem]"
              >
                <span className="text-slate-950">Meets </span>
                <span className="bg-[linear-gradient(90deg,#0f766e_0%,#059669_42%,#22c55e_100%)] bg-clip-text text-transparent">
                  {headlineParts[1] || "Real-World Execution"}
                </span>
              </motion.h1>
            ) : null}
          </div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.2 }}
            className="mb-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-[1.15rem]"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: "easeOut", delay: 0.24 }}
            className="mb-6 flex flex-wrap gap-2.5"
          >
            {["Implementation", "Managed Services", "Staff Augmentation"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <button
              onClick={primaryButton.action}
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#059669_0%,#0f766e_100%)] px-6 py-3.5 text-base font-bold text-white shadow-[0_20px_45px_rgba(5,150,105,0.24)] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_24px_52px_rgba(5,150,105,0.28)] focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 sm:px-7"
            >
              {primaryButton.text}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            {secondaryButton ? (
              <button
                onClick={secondaryButton.action}
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/92 px-6 py-3.5 text-base font-semibold text-slate-800 shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition-all duration-300 hover:translate-y-[-1px] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 sm:px-7"
              >
                {secondaryButton.text}
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : null}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
          animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.72, ease: "easeOut", delay: 0.18 }}
          className="relative mx-auto w-full max-w-[640px] lg:max-w-[600px] lg:justify-self-end"
        >
          <div className="absolute inset-5 rounded-[2.6rem] bg-[radial-gradient(circle_at_top,rgba(110,231,183,0.18),transparent_46%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_42%)] blur-3xl" />

          {!reduceMotion ? (
            <svg
              className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full md:block"
              viewBox="0 0 600 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M116 128C175 138 194 186 252 208C312 232 378 192 438 170"
                stroke="url(#heroBeamA)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="7 10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.75 }}
                transition={{ duration: 1.3, delay: 0.55, ease: "easeOut" }}
              />
              <motion.path
                d="M320 352C360 334 388 302 450 286"
                stroke="url(#heroBeamB)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="7 10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.65 }}
                transition={{ duration: 1.1, delay: 0.78, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="heroBeamA" x1="100" y1="115" x2="460" y2="155" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6EE7B7" stopOpacity="0.18" />
                  <stop offset="0.5" stopColor="#10B981" />
                  <stop offset="1" stopColor="#047857" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="heroBeamB" x1="315" y1="375" x2="470" y2="285" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34D399" stopOpacity="0.18" />
                  <stop offset="1" stopColor="#059669" stopOpacity="0.45" />
                </linearGradient>
              </defs>
            </svg>
          ) : null}

          <div className="relative z-[2] overflow-hidden rounded-[2.7rem] border border-white/70 bg-white/70 p-3 shadow-[0_28px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl md:p-4">
            <div className="relative overflow-hidden rounded-[2.15rem] border border-white/70 bg-[linear-gradient(180deg,#edf8f1_0%,#deefe5_100%)] shadow-[0_22px_70px_rgba(15,23,42,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80&auto=format&fit=crop"
                alt="Consulting and delivery team collaborating on Salesforce transformation planning"
                className="aspect-[10/11] w-full object-cover transition-transform duration-500 hover:scale-[1.015] sm:aspect-[10/9] md:aspect-[10/8]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/8 via-transparent to-emerald-100/20" />
            </div>
          </div>

          {FLOATING_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={
                reduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: [0, index % 2 === 0 ? -6 : 6, 0],
                    }
              }
              transition={
                reduceMotion
                  ? {}
                  : {
                      opacity: { duration: 0.48, delay: 0.36 + index * 0.1, ease: "easeOut" },
                      y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" },
                    }
              }
              className={`absolute z-[3] hidden rounded-[1.5rem] border border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_18px_44px_rgba(15,23,42,0.14)] backdrop-blur-md lg:block ${card.position}`}
            >
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800">
                {card.title}
              </p>
              <p className="text-sm font-medium text-slate-600">{card.subtitle}</p>
            </motion.div>
          ))}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    y: [0, -4, 0],
                  }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    opacity: { duration: 0.48, delay: 0.68, ease: "easeOut" },
                    y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
                  }
            }
            className="absolute bottom-5 left-5 z-[3] hidden max-w-[240px] rounded-[1.55rem] border border-slate-200/80 bg-white/95 px-4 py-3.5 shadow-[0_18px_44px_rgba(15,23,42,0.14)] backdrop-blur-md lg:block"
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800">
              Founder-led Delivery
            </p>
            <p className="text-sm font-medium text-slate-600">
              Salesforce • Support • Staffing
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? {} : { opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.7 }}
        onClick={handleScrollDown}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center text-slate-400 transition-colors hover:text-slate-700 lg:inline-flex"
      >
        <span className="mb-1 text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-b from-transparent via-[#f8fbff] to-[#f6fbff]" />
    </section>
  );
}
