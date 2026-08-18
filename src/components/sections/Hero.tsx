"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiquidMetalButton from "../ui/LiquidMetalButton";
import { prefersReducedMotion } from "../../utils/motionConfig";
import DottedSurface from "../ui/DottedSurface";

function getDeliveryText() {
  const now = new Date();
  return `AI automation systems • ${now.getFullYear()}`;
}

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  subtitle?: string;
  primaryButton?: { text: string; action: () => void };
  secondaryButton?: { text: string; action: () => void } | null;
  chips?: string[];
}

export default function Hero({
  eyebrow = getDeliveryText(),
  headline = "AI Agents & Automation for Modern Business Teams",
  subtitle = "We build AI agents, WhatsApp and email automations, and Salesforce-connected workflows that reduce manual work and help teams respond faster.",
  primaryButton = { text: "Build Your AI Workflow", action: () => {} },
  secondaryButton = null,
  chips = ["AI Agents", "WhatsApp + Email", "Salesforce + n8n"],
}: HeroProps) {
  const reduceMotion = prefersReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[78svh] overflow-hidden pt-32 sm:pt-36 md:min-h-[86svh] md:pt-40 lg:min-h-[90svh]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/techfi-ai-hero-poster.webp"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(3,41,29,0.74)_0%,rgba(3,41,29,0.62)_18%,rgba(3,41,29,0.62)_42%,rgba(3,41,29,0.78)_76%,rgba(3,41,29,0.92)_100%)]" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.20),transparent_24%),radial-gradient(circle_at_76%_20%,rgba(52,211,153,0.10),transparent_18%),radial-gradient(circle_at_50%_82%,rgba(6,95,70,0.28),transparent_34%)]" />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(3,41,29,0.78)_0%,rgba(3,41,29,0.68)_26%,rgba(3,41,29,0.38)_52%,rgba(3,41,29,0.18)_72%,rgba(3,41,29,0.24)_100%)]" />
      <div className="absolute inset-0 z-[2] md:hidden bg-[linear-gradient(180deg,rgba(3,41,29,0.84)_0%,rgba(3,41,29,0.70)_26%,rgba(3,41,29,0.72)_56%,rgba(3,41,29,0.90)_100%)]" />
      <DottedSurface className="z-[2] opacity-[0.08]" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,transparent_0%,transparent_54%,rgba(3,41,29,0.28)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-center px-5 pb-12 sm:px-6 md:min-h-[86svh] md:pb-16 lg:min-h-[90svh]">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-5 inline-flex items-center rounded-full border border-white/14 bg-white/[0.10] px-4 py-2 shadow-[0_18px_42px_rgba(3,41,29,0.2)] backdrop-blur-md"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 md:text-xs">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: "easeOut", delay: 0.06 }}
            className="max-w-[13ch] text-[2.35rem] font-extrabold leading-[0.96] tracking-[-0.04em] text-white sm:max-w-[14ch] sm:text-[2.9rem] md:max-w-[15ch] md:text-[3.45rem] lg:max-w-[14ch] lg:text-[4rem] xl:max-w-[14ch] xl:text-[4.35rem]"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.2 }}
            className="mb-5 mt-5 max-w-xl rounded-xl bg-[rgba(3,41,29,0.24)] px-4 py-3 text-base font-medium leading-relaxed text-emerald-50 shadow-[0_10px_30px_rgba(3,41,29,0.12)] backdrop-blur-sm [text-shadow:0_1px_10px_rgba(3,41,29,0.5)] sm:text-lg md:mt-6 md:text-[1.04rem]"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: "easeOut", delay: 0.24 }}
            className="mb-6 flex flex-wrap gap-2.5 sm:gap-3"
          >
            {chips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/16 bg-white/[0.12] px-3.5 py-1.5 text-[11px] font-medium text-white shadow-[0_12px_28px_rgba(3,41,29,0.16)] backdrop-blur-sm sm:text-xs"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 lg:gap-4"
          >
            <LiquidMetalButton
              onClick={primaryButton.action}
              className="min-h-[56px] text-base focus:ring-offset-[#052e1f] sm:min-w-[228px] sm:px-7"
              aria-label={primaryButton.text}
            >
              <span>{primaryButton.text}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </LiquidMetalButton>

            {secondaryButton ? (
              <button
                onClick={secondaryButton.action}
                className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.14] px-6 py-3.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(3,41,29,0.18)] backdrop-blur-md transition-all duration-300 hover:translate-y-[-1px] hover:bg-white/[0.18] focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#052e1f] sm:min-w-[200px] sm:px-7"
              >
                {secondaryButton.text}
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : null}
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.36 }}
            className="mt-7 hidden max-w-max items-center gap-3 rounded-2xl border border-white/14 bg-white/[0.09] px-4 py-3 text-white shadow-[0_18px_42px_rgba(3,41,29,0.16)] backdrop-blur-md xl:inline-flex"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                Live AI workflow layer
              </p>
              <p className="mt-1 text-sm text-white/80">WhatsApp • Email • Salesforce</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-28 bg-gradient-to-b from-transparent via-[#f7fcf9]/70 to-white" />
    </section>
  );
}
