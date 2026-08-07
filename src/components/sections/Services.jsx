import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { prefersReducedMotion } from "../../utils/motionConfig";

const PLACEHOLDER_COPY = {
  "WhatsApp & Email Automation": {
    label: "Channel automation layer",
    helper: "Capture, classify, draft, and route messages with less manual inbox work.",
    chips: ["WhatsApp", "Email", "Follow-up"],
  },
  "Salesforce Consulting & Delivery": {
    label: "CRM execution layer",
    helper: "Connect Salesforce changes, approvals, and follow-up actions to day-to-day work.",
    chips: ["Implementation", "CRM", "Automation"],
  },
  "Managed Services & Production Support": {
    label: "Support operations layer",
    helper: "Keep releases, incidents, fixes, and service improvements running in one rhythm.",
    chips: ["Support", "Releases", "Monitoring"],
  },
  "Data Migration & Custom Engineering": {
    label: "Data and systems layer",
    helper: "Move, validate, and connect business data across custom workflows and tools.",
    chips: ["Migration", "Integrations", "Custom build"],
  },
};

function ServiceMedia({ service }) {
  const reduceMotion = prefersReducedMotion();

  if (service.title === "AI Agents & Automation") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-emerald-300/14 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-4 shadow-[0_20px_52px_rgba(3,41,29,0.2)] md:p-5">
        <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/10" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/16 bg-emerald-300/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-200">
          <span className="relative flex h-2.5 w-2.5">
            <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-300/70 ${reduceMotion ? "" : "animate-ping"}`} />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </span>
          AI automation preview
        </div>
        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200">
          Local illustration
        </div>
        <div className="relative z-10 flex h-full items-center justify-center rounded-[1.6rem] bg-white/[0.04] backdrop-blur-sm">
          <img
            src="/ai-chatbot-illustration-3d.png"
            alt="AI chatbot automation assistant for business workflows"
            className="h-auto max-h-[280px] w-full max-w-[360px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="absolute bottom-5 left-5 right-5 grid gap-2 md:grid-cols-3">
          {["Classify", "Draft", "Route"].map((item, index) => (
            <motion.div
              key={item}
              animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: [0.82, 1, 0.82], y: [0, -2, 0] }}
              transition={reduceMotion ? { duration: 0.2 } : { duration: 2.8, repeat: Infinity, delay: index * 0.18, ease: "easeInOut" }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-slate-100"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const placeholder = PLACEHOLDER_COPY[service.title] || {
    label: "Service focus",
    helper: "Workflow, systems, and delivery support aligned to this capability.",
    chips: service.points || [],
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 shadow-[0_20px_52px_rgba(3,41,29,0.16)] md:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(6,78,47,0.18),transparent_38%)]" />
      <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/8" />
      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-200">
        Service focus
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between rounded-[1.55rem] border border-dashed border-emerald-300/20 bg-white/[0.03] p-5 md:p-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
            {placeholder.label}
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white md:text-[2rem]">{service.title}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300 md:text-[15px]">
            {placeholder.helper}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {placeholder.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services({
  title = "What We Build",
  subtitle = "AI systems, automation workflows, and CRM-connected delivery support for teams that want less manual work and better execution.",
  services = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex] || services[0];
  const reduceMotion = prefersReducedMotion();

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#061b16_0%,#07241c_38%,#0a2b21_100%)] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.06),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-emerald-300">[ What We Build ]</p>
            <h2 className="max-w-[11ch] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 border-t border-white/10">
              {services.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    whileHover={reduceMotion ? undefined : { x: 4 }}
                    className={`flex w-full items-center justify-between gap-4 border-b border-white/10 py-5 text-left transition-colors duration-300 ${
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.8)]" : "bg-slate-500/50"}`} />
                      <div>
                        <p className="text-sm font-medium tracking-[0.14em] text-emerald-300/90">
                          {String(index + 1).padStart(2, "0")}/
                        </p>
                        <p className="mt-1 text-xl font-semibold leading-tight md:text-[1.45rem] lg:text-[1.55rem]">
                          {service.title}
                        </p>
                        {isActive ? (
                          <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-300">
                            {service.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <span className={`text-2xl ${isActive ? "text-emerald-300" : "text-slate-500"}`}>›</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {activeService ? (
            <motion.div
              key={activeService.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
              viewport={{ once: true }}
              className="grid gap-5"
            >
              <ServiceMedia service={activeService} />

              <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-emerald-300">Current focus</p>
                  <h3 className="text-2xl font-semibold text-white md:text-4xl">{activeService.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-emerald-300/16 bg-emerald-300/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-100">
                      {activeService.badge}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 lg:items-end">
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {(activeService.points || []).slice(0, 2).map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  {activeService.slug ? (
                    <Link
                      to={`/services/${activeService.slug}`}
                      className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[linear-gradient(90deg,#34d399_0%,#10b981_55%,#059669_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(16,185,129,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Explore Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
