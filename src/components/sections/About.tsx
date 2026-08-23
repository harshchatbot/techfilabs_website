"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ABOUT_SECTION_CONTENT, ABOUT_DATA } from "@/constants";

const PANEL_MEDIA = ABOUT_SECTION_CONTENT.panelMedia;

interface AboutProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  reasons?: any[];
  items?: any[];
  isPageHeader?: boolean;
}

function MediaFallback({ item }: { item: any }) {
  return (
    <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[1.8rem] border border-dashed border-emerald-300/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-10 md:min-h-[360px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.06),transparent_28%)]" />
      <div className="relative z-10 max-w-sm text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">{item.eyebrow}</p>
        <p className="mt-4 text-2xl font-semibold text-white">{item.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {item.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-emerald-100/80">
          Workflow preview
        </p>
      </div>
    </div>
  );
}

function MediaPanel({ item, isMissing, onMediaError }: { item: any; isMissing: boolean; onMediaError: () => void }) {
  const [mediaSrc, setMediaSrc] = useState(item.src);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setMediaSrc(item.src);
    setTriedFallback(false);
  }, [item.src]);

  const handleMediaError = () => {
    if (item.type === "image" && item.fallbackSrc && !triedFallback) {
      setMediaSrc(item.fallbackSrc);
      setTriedFallback(true);
      return;
    }
    onMediaError();
  };

  if (isMissing) {
    return <MediaFallback item={item} />;
  }

  if (item.type === "video") {
    return (
      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#041c14] shadow-[0_24px_60px_rgba(3,41,29,0.22)]">
        <video
          className="h-[280px] w-full object-cover md:h-[360px]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={handleMediaError}
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,78,47,0.12)_0%,rgba(4,56,38,0.06)_42%,rgba(4,56,38,0.72)_100%)]" />
        <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#0a2b21]/70 px-3 py-1.5 backdrop-blur-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.75)]" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#041c14] shadow-[0_24px_60px_rgba(3,41,29,0.22)] h-[280px] md:h-[360px]">
      <Image
        src={mediaSrc}
        alt={`${item.title} visual for TechFi Labs`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-full w-full object-cover"
        onError={handleMediaError}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,78,47,0.08)_0%,rgba(4,56,38,0.06)_38%,rgba(4,56,38,0.72)_100%)]" />
    </div>
  );
}

export default function About({
  eyebrow = "Why TechFi Labs",
  title = "Why Businesses Choose TechFi Labs",
  subtitle = "We help businesses simplify work, improve response times, and run more reliably with practical AI automation, Salesforce expertise, and long-term delivery support.",
  reasons,
  items = reasons || [],
  isPageHeader = false,
}: AboutProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const [missingAssets, setMissingAssets] = useState<Record<number, boolean>>({});
  const panel = useMemo(() => PANEL_MEDIA[openIndex] || PANEL_MEDIA[0], [openIndex]);

  const markMissing = (index: number) => {
    setMissingAssets((prev) => (prev[index] ? prev : { ...prev, [index]: true }));
  };

  const HeadingTag = isPageHeader ? "h1" : "h2";

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#064e2f_0%,#055536_70%,#043826_100%)] py-20 md:py-26"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,78,47,0.97)_0%,rgba(5,85,54,0.98)_60%,rgba(4,56,38,1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.08),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-emerald-300">{eyebrow}</p>
          <HeadingTag className="mb-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </HeadingTag>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">{subtitle}</p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-2">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.number || item.title}
                    className={`overflow-hidden rounded-[2rem] border border-emerald-200/12 shadow-[0_24px_64px_rgba(3,41,29,0.16)] backdrop-blur-sm transition-colors duration-300 ${
                      isOpen ? "bg-white/[0.055]" : "bg-white/[0.03] hover:bg-white/[0.025]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(index)}
                      className="flex w-full items-start gap-4 px-5 py-5 text-left focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:ring-inset md:gap-6 md:px-7 md:py-6"
                      aria-expanded={isOpen}
                      aria-controls={`why-techfi-panel-${index}`}
                      id={`why-techfi-trigger-${index}`}
                    >
                      <span className="w-14 shrink-0 pt-0.5 text-sm font-semibold tracking-[0.18em] text-emerald-300 md:w-16 md:text-base">
                        {item.number || `${String(index + 1).padStart(2, "0")}/`}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xl font-semibold leading-tight text-white md:text-[1.58rem]">
                          {item.title}
                        </span>
                      </span>
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200/14 bg-white/[0.05] text-white transition-colors duration-300">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={`why-techfi-panel-${index}`}
                          role="region"
                          aria-labelledby={`why-techfi-trigger-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 pl-[5.5rem] text-sm leading-relaxed text-slate-300 md:px-7 md:pb-7 md:pl-[7.4rem] md:text-base">
                            {item.description}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] border border-emerald-200/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-5 shadow-[0_28px_80px_rgba(3,41,29,0.22)] backdrop-blur-sm md:p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.08),transparent_28%)]" />
            <div className="absolute inset-[1px] rounded-[2.3rem] border border-white/8 opacity-80" />

            <div className="relative z-10">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    {panel.eyebrow}
                  </p>
                  <h3 className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {panel.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 md:text-[15px]">
                    {panel.description}
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  {items[openIndex]?.number || "01/"}
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={openIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="grid gap-5"
                >
                  <MediaPanel
                    item={panel}
                    isMissing={Boolean(missingAssets[openIndex])}
                    onMediaError={() => markMissing(openIndex)}
                  />

                  <div className="flex flex-wrap gap-2">
                    {panel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200">
                  Active focus: {items[openIndex]?.title}
                </span>
                <span className="rounded-full border border-emerald-300/14 bg-emerald-300/8 px-3 py-1.5 text-xs font-medium text-emerald-100">
                  {panel.secondaryPill}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
