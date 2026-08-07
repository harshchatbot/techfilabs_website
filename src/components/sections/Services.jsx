import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { prefersReducedMotion } from "../../utils/motionConfig";

function LayerLabel({ item, layerLevel, reduceMotion }) {
  if (!item) return null;

  return (
    <motion.div
      key={item.title}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.98 }}
      animate={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              top: `calc(14% + (${layerLevel} * 2.25rem))`,
            }
      }
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
      transition={{ duration: reduceMotion ? 0.18 : 0.32, ease: "easeOut" }}
      className="build-stack-label pointer-events-none absolute left-4 z-20 w-[min(18rem,calc(100%-2rem))] rounded-2xl border border-emerald-200/14 bg-[linear-gradient(135deg,rgba(6,78,47,0.92),rgba(8,43,33,0.88))] px-4 py-3 shadow-[0_16px_36px_rgba(3,41,29,0.28)] backdrop-blur-md sm:left-auto sm:right-5 sm:w-[16.5rem]"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200/90">
        {item.badge}
      </p>
      <p className="mt-1 text-sm font-semibold leading-snug text-white">
        {item.title}
      </p>
    </motion.div>
  );
}

export default function Services({
  title = "What We Build",
  subtitle = "AI automation, Salesforce delivery, and custom tools for teams that want less manual work.",
  services = [],
}) {
  const reduceMotion = prefersReducedMotion();
  const items = useMemo(() => services.filter(Boolean), [services]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(null);

  if (!items.length) return null;

  const displayIndex = previewIndex ?? activeIndex;
  const activeItem = items[activeIndex] || items[0];
  const displayItem = items[displayIndex] || activeItem;
  const activeLayerLevel = items.length - 1 - displayIndex;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#071f18_0%,#08251c_36%,#0a2b21_100%)] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.06),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-emerald-300">
            [ What We Build ]
          </p>
          <h2 className="max-w-[12ch] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="mt-7 grid gap-9 md:mt-8 md:gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
          <div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_24px_52px_rgba(3,41,29,0.18)] backdrop-blur-sm md:p-4">
              <div className="space-y-2.5">
              {items.map((item, index) => {
                const isOpen = index === activeIndex;

                return (
                  <div
                    key={item.title}
                    className={`rounded-[1.5rem] border border-white/8 ${
                      isOpen ? "bg-white/[0.04]" : "bg-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`what-we-build-panel-${index}`}
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setPreviewIndex(index)}
                      onMouseLeave={() => setPreviewIndex(null)}
                      onFocus={() => setPreviewIndex(index)}
                      onBlur={() => setPreviewIndex(null)}
                      className="flex min-h-[60px] w-full items-start justify-between gap-4 rounded-[1.5rem] px-4 py-4 text-left transition-colors duration-300 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071f18] md:px-5 md:py-5"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="text-sm font-semibold tracking-[0.16em] text-emerald-300">
                            {String(index + 1).padStart(2, "0")}/
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200/90">
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="mt-3 text-xl font-semibold leading-tight text-white md:text-[1.65rem]">
                          {item.title}
                        </h3>
                      </div>

                      <span
                        className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200"
                            : "border-white/10 bg-white/[0.03] text-slate-300"
                        }`}
                      >
                        {isOpen ? <Minus className="h-4.5 w-4.5" /> : <Plus className="h-4.5 w-4.5" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={`what-we-build-panel-${index}`}
                          initial={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                          animate={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 1, height: "auto" }}
                          exit={reduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                          transition={{ duration: reduceMotion ? 0.18 : 0.34, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-4 px-4 pb-5 pt-0 md:px-5 md:pb-6">
                            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-[15px]">
                              {item.description}
                            </p>

                            {item.value ? (
                              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                                  Outcome
                                </span>
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                <span className="text-sm font-medium leading-relaxed text-white">
                                  {item.value}
                                </span>
                              </div>
                            ) : null}

                            {item.href ? (
                              <div>
                                <Link
                                  to={item.href}
                                  className="inline-flex min-h-[48px] w-full max-w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#34d399_0%,#10b981_55%,#059669_100%)] px-5 py-3 text-center text-sm font-semibold leading-tight text-white shadow-[0_14px_36px_rgba(16,185,129,0.22)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071f18] sm:w-auto"
                                >
                                  {item.ctaLabel || "Explore"}
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </div>
                            ) : null}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: "easeOut", delay: 0.06 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >
            <div className="build-stack-shell relative overflow-hidden rounded-[2.4rem] border border-emerald-200/10 p-5 shadow-[0_28px_68px_rgba(3,41,29,0.24)] sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.05),transparent_26%)]" />
              <div className="absolute inset-[1px] rounded-[2.3rem] border border-white/8 opacity-90" />

              <div
                className="build-stack-scene"
                style={{
                  "--stack-layer-count": items.length,
                  "--active-layer-level": activeLayerLevel,
                }}
              >
                <AnimatePresence mode="wait">
                  <LayerLabel
                    item={displayItem}
                    layerLevel={activeLayerLevel}
                    reduceMotion={reduceMotion}
                  />
                </AnimatePresence>

                {items.map((item, index) => {
                  const layerLevel = items.length - 1 - index;
                  const isActive = index === displayIndex;
                  const isCommitted = index === activeIndex;

                  return (
                    <motion.div
                      key={item.title}
                      className={`build-stack-layer ${isActive ? "is-active" : ""} ${isCommitted ? "is-committed" : ""}`}
                      style={{
                        "--layer-level": layerLevel,
                        "--layer-index": index,
                        zIndex: isActive ? 30 : items.length - layerLevel,
                      }}
                      animate={
                        reduceMotion
                          ? { opacity: 1 }
                          : {
                              opacity: isActive ? 1 : 0.92,
                              filter: isActive ? "brightness(1.06)" : "brightness(0.94)",
                            }
                      }
                      transition={{ duration: reduceMotion ? 0.18 : 0.34, ease: "easeOut" }}
                    >
                      <div className="build-stack-layer__surface">
                        <div className="build-stack-layer__pattern" />
                        <span className="build-stack-layer__index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="build-stack-layer__title">{item.title}</span>
                      </div>
                      <div className="build-stack-layer__front" />
                      <div className="build-stack-layer__side" />
                      <div className="build-stack-layer__glow" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_48px_rgba(3,41,29,0.16)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Active layer
              </p>
              <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-2xl font-semibold leading-tight text-white">
                    {displayItem.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                    {displayItem.description}
                  </p>
                </div>
                <span className="rounded-full border border-emerald-200/14 bg-emerald-300/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100">
                  {displayItem.badge}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
