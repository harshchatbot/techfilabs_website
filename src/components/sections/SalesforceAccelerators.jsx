import { motion } from "framer-motion";
import { ArrowRight, CheckCheck, Radar, SearchCheck, Waypoints } from "lucide-react";
import { Link } from "react-router-dom";
import BorderBeam from "../ui/BorderBeam";
import { prefersReducedMotion } from "../../utils/motionConfig";

const CARD_LAYOUTS = {
  "RangManch AI": "md:col-span-2",
  Sentinel: "md:col-span-1",
  "Resume RAG for Staffing": "md:col-span-1",
  "Production Support Playbook": "md:col-span-1",
  "AI Workflow Starter Kit": "md:col-span-1",
};

function getCardVisual(title) {
  switch (title) {
    case "FieldLens for Salesforce":
      return (
        <div className="grid gap-2 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
            <span className="rounded-full border border-emerald-200/20 bg-emerald-300/10 px-2.5 py-1">Metadata trace</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-white">
            {["Field", "Flow", "Apex", "Layout", "Report"].map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5">{item}</span>
                {index < 4 ? <Waypoints className="h-3.5 w-3.5 text-emerald-300" /> : null}
              </div>
            ))}
          </div>
        </div>
      );
    case "RangManch AI":
      return (
        <div className="rounded-[1.5rem] border border-emerald-900/10 bg-white/70 p-4 shadow-[0_14px_34px_rgba(6,95,70,0.08)]">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            {[
              [
                "Script",
                "Prompt + concept",
                "bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.26),transparent_58%),linear-gradient(180deg,#ffffff_0%,#ecfdf5_100%)]",
                "h-[2px] w-8 bg-emerald-300/70",
                "w-14",
              ],
              [
                "Visual",
                "Frames + style",
                "bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.26),transparent_58%),linear-gradient(180deg,#ffffff_0%,#f7fefa_100%)]",
                "grid grid-cols-3 gap-1.5",
                "frames",
              ],
              [
                "Video",
                "Rendered output",
                "bg-[radial-gradient(circle_at_bottom,rgba(52,211,153,0.26),transparent_58%),linear-gradient(180deg,#ffffff_0%,#effcf5_100%)]",
                "h-1.5 rounded-full bg-emerald-500/75",
                "timeline",
              ],
            ].map(([label, meta, bg, detailClass, detailType], index) => (
              <div key={label} className="contents md:block">
                <div className="rounded-2xl border border-emerald-900/10 bg-white/90 p-3 shadow-[0_10px_24px_rgba(6,95,70,0.06)] transition-transform duration-300 md:hover:-translate-y-1">
                  <div className={`mb-4 overflow-hidden rounded-xl ${bg}`}>
                    <div className="flex h-16 flex-col justify-between p-3">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-emerald-900/10 bg-white/70 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                          0{index + 1}
                        </span>
                        <div className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(16,185,129,0.35)]" />
                      </div>
                      {detailType === "frames" ? (
                        <div className={detailClass}>
                          {Array.from({ length: 3 }).map((_, frameIndex) => (
                            <div
                              key={`${label}-${frameIndex}`}
                              className={`h-6 rounded-lg border border-emerald-900/8 ${
                                frameIndex === 1 ? "bg-white/90 shadow-[0_6px_16px_rgba(6,95,70,0.08)]" : "bg-white/55"
                              }`}
                            />
                          ))}
                        </div>
                      ) : detailType === "timeline" ? (
                        <div className="space-y-2">
                          <div className="h-1 rounded-full bg-white/70" />
                          <div className="flex items-center gap-2">
                            <div className={detailClass} />
                            <div className="h-1.5 w-5 rounded-full bg-emerald-200/70" />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className={detailClass} />
                          <div className="h-1.5 w-10 rounded-full bg-emerald-200/80" />
                          <div className="h-1.5 w-16 rounded-full bg-white/70" />
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">{label}</p>
                  <p className="mt-1 text-[11px] text-slate-500">{meta}</p>
                </div>
                {index < 2 ? (
                  <div className="hidden md:flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <div className="h-px w-6 bg-gradient-to-r from-emerald-200 to-emerald-400/70" />
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.45)]" />
                      <div className="h-px w-6 bg-gradient-to-r from-emerald-400/70 to-emerald-200" />
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-emerald-900/10 bg-emerald-50/80 px-3.5 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">Outcome</p>
            <p className="mt-1 text-sm font-medium text-slate-700">AI-assisted content and workflow creation</p>
          </div>
        </div>
      );
    case "Sentinel":
      return (
        <div className="relative mx-auto h-24 w-24">
          <div className="absolute inset-0 rounded-full border border-emerald-200/50" />
          <div className="absolute inset-3 rounded-full border border-emerald-300/40" />
          <div className="absolute inset-6 rounded-full border border-emerald-400/50" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.55)]" />
          <Radar className="absolute right-0 top-0 h-5 w-5 text-emerald-600" />
        </div>
      );
    case "Resume RAG for Staffing":
      return (
        <div className="flex items-center gap-3 rounded-[1.4rem] border border-emerald-900/10 bg-white/70 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
            <SearchCheck className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-28 rounded-full bg-emerald-100" />
            <div className="h-2.5 w-20 rounded-full bg-emerald-50" />
            <div className="h-2.5 w-24 rounded-full bg-emerald-100" />
          </div>
        </div>
      );
    case "Production Support Playbook":
      return (
        <div className="space-y-2 rounded-[1.4rem] border border-emerald-900/10 bg-white/70 p-4">
          {["Incidents", "Enhancements", "SLA", "Release"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <CheckCheck className="h-4 w-4 text-emerald-600" />
              {item}
            </div>
          ))}
        </div>
      );
    case "AI Workflow Starter Kit":
      return (
        <div className="flex items-center gap-2 rounded-[1.4rem] border border-emerald-900/10 bg-white/70 p-4">
          {["Inbox", "Classify", "Draft", "Escalate"].map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <span className="rounded-full border border-emerald-900/10 bg-white px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                {item}
              </span>
              {index < 3 ? <Waypoints className="h-3.5 w-3.5 text-emerald-300" /> : null}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function SalesforceAccelerators({
  title = "Tools and Accelerators We’re Building",
  subtitle = "A compact look at practical tools, accelerators, and workflow systems built to solve real business problems.",
  items = [],
}) {
  const reduceMotion = prefersReducedMotion();
  const [featured, ...rest] = items;

  return (
    <section id="products" className="relative overflow-hidden bg-[linear-gradient(180deg,#071f18_0%,#0a2b21_100%)] py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.05),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-emerald-300">[ Selected Work ]</p>
            <h2 className="max-w-[11ch] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              {subtitle}
            </p>
            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
              {(rest.slice(0, 4)).map((item, index) => (
                <div key={item.title} className="flex flex-col items-start gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
                      {String(index + 2).padStart(2, "0")}/ {item.badge}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {featured ? (
            <div className="grid gap-5">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42 }}
                viewport={{ once: true }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-[2.2rem] border border-emerald-200/14 bg-[linear-gradient(180deg,#064e2f_0%,#055536_72%,#03291d_100%)] p-6 shadow-[0_24px_64px_rgba(3,41,29,0.22)] transition-shadow duration-300 hover:shadow-[0_30px_76px_rgba(3,41,29,0.26)] md:p-7"
              >
                <BorderBeam size={280} duration={8.5} colorFrom="#10B981" colorTo="#A7F3D0" opacity={0.7} />
                <div className="absolute inset-[1px] rounded-[2.05rem] border border-white/6 opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(3,41,29,0.22),transparent_26%)]" />
                <div className="relative z-10 grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                        {featured.badge}
                      </span>
                      {featured.icon ? (
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-emerald-200">
                          <featured.icon className="h-5 w-5" />
                        </div>
                      ) : null}
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-[2rem]">{featured.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-[15px]">{featured.description}</p>
                    <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">Outcome</p>
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <p className="text-sm font-medium text-white">{featured.value}</p>
                    </div>
                    <div className="mt-5">
                      {featured.href ? (
                        <Link
                          to={featured.href}
                          className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[linear-gradient(90deg,#34d399_0%,#10b981_55%,#059669_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(16,185,129,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          {featured.ctaLabel || "Explore selected work"}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div>{getCardVisual(featured.title)}</div>
                    <div className="rounded-[1.6rem] border border-dashed border-emerald-300/18 bg-white/[0.04] p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">Asset preview</p>
                      <p className="mt-4 text-2xl font-semibold text-white">Product story slot</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        Add screenshots, a short product video, launch visuals, interface walkthroughs, or architecture diagrams here when ready.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {rest.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    className={`group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_16px_40px_rgba(3,41,29,0.14)] transition-shadow duration-300 hover:shadow-[0_22px_48px_rgba(3,41,29,0.2)] ${CARD_LAYOUTS[item.title] || ""}`}
                  >
                    {item.title === "RangManch AI" ? <BorderBeam size={200} duration={9} delay={0.35} colorFrom="#10B981" colorTo="#A7F3D0" opacity={0.45} /> : null}
                    {item.title === "Sentinel" ? <BorderBeam size={180} duration={10} delay={0.6} colorFrom="#064E2F" colorTo="#10B981" opacity={0.38} /> : null}
                    <div className="absolute inset-[1px] rounded-[1.55rem] border border-white/10 opacity-70" />
                    <div className="relative z-10">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-200">
                          {item.badge}
                        </span>
                        {item.icon ? (
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-emerald-200">
                            <item.icon className="h-4.5 w-4.5" />
                          </div>
                        ) : null}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                      <div className="mt-4">{getCardVisual(item.title) || <div className="h-[80px]" />}</div>
                    </div>
                    <div className="relative z-10 mt-4 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                      <div className="flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200/80">Outcome</p>
                        <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                      </div>
                      {item.href ? (
                        <Link
                          to={item.href}
                          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2"
                        >
                          {item.ctaLabel || "View work"}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                      ) : null}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
