"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HERO_CONTENT } from "@/constants";

interface HeroProps {
  eyebrow?: string;
  headline?: string;
  subtitle?: string;
  primaryButton?: { text: string; action: () => void };
  secondaryButton?: { text: string; href?: string; action?: () => void } | null;
  chips?: string[];
}

export default function Hero({
  eyebrow = "AI automation · Salesforce · Engineering",
  headline = HERO_CONTENT.headline,
  subtitle = HERO_CONTENT.subtitle,
  primaryButton = { text: HERO_CONTENT.primaryButtonLabel, action: () => {} },
  secondaryButton = { text: "Explore services", href: "/services" },
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF9F5] pt-32 pb-16 text-[#24231F] sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B482E] sm:text-xs"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-[13ch] font-serif text-[clamp(3.1rem,6vw,5.75rem)] font-normal leading-[1.03] tracking-[-0.055em]"
          >
            {headline === HERO_CONTENT.headline ? (
              <>Less busywork.<br /><span className="text-[#9B482E]">More progress.</span></>
            ) : headline}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-7 max-w-lg text-base leading-[1.8] text-[#625F59] sm:text-lg"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/contact"
              onClick={primaryButton.action}
              aria-label={primaryButton.text}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#24231F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#49433E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9B482E]"
            >
              {primaryButton.text}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            {secondaryButton && (
              <Link
                href={secondaryButton.href || "/services"}
                onClick={secondaryButton.action}
                className="inline-flex min-h-12 items-center gap-1.5 border-b border-[#24231F]/40 px-1 text-sm font-semibold text-[#24231F] transition-colors hover:border-[#9B482E] hover:text-[#9B482E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9B482E]"
              >
                {secondaryButton.text}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="relative overflow-hidden rounded-[1.35rem] bg-[#292925] shadow-[0_18px_60px_rgba(36,35,31,0.09)]"
        >
          <div className="relative aspect-[5/4] sm:aspect-[6/4] lg:aspect-[4/5]">
            <video
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/assets/techfi-ai-hero-poster.webp"
              aria-label="Abstract technology and automation visual"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 hidden bg-[url('/assets/techfi-ai-hero-poster.webp')] bg-cover bg-center motion-reduce:block"
              role="img"
              aria-label="Abstract technology and automation visual"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,19,0.05)_30%,rgba(20,20,19,0.6)_100%)]" />
            <p className="absolute bottom-5 left-6 right-6 text-xs font-medium tracking-[0.12em] text-white/85 sm:bottom-7 sm:left-8">
              Built around the way your team works.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
