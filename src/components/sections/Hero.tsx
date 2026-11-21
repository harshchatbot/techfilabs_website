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
  eyebrow = "Making everyday work easier",
  headline = HERO_CONTENT.headline,
  subtitle = HERO_CONTENT.subtitle,
  primaryButton = { text: HERO_CONTENT.primaryButtonLabel, action: () => {} },
  secondaryButton = { text: "Explore services", href: "/services" },
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate flex min-h-[660px] items-center overflow-hidden bg-[#FAF9F5] pb-20 pt-36 text-[#24231F] sm:min-h-[720px] sm:pb-24 sm:pt-40 lg:min-h-[780px]"
    >
      {/* The video covers the entire hero. Low opacity and an ivory overlay protect text contrast. */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.40] motion-reduce:hidden sm:opacity-[0.46]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/techfi-ai-hero-poster.webp"
          tabIndex={-1}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hidden bg-[url('/assets/techfi-ai-hero-poster.webp')] bg-cover bg-center opacity-[0.40] motion-reduce:block" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,249,245,0.91)_0%,rgba(250,249,245,0.85)_45%,rgba(250,249,245,0.72)_100%)] sm:bg-[linear-gradient(90deg,rgba(250,249,245,0.90)_0%,rgba(250,249,245,0.76)_48%,rgba(250,249,245,0.40)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-[790px]">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#8F432C]"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            id="home-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-[16ch] font-serif text-[clamp(3.15rem,6.5vw,6.2rem)] font-normal leading-[1.04] tracking-[-0.055em]"
          >
            {headline === HERO_CONTENT.headline ? (
              <>
                Less manual work.
                <br />
                <span className="text-[#8F432C]">More time for what matters.</span>
              </>
            ) : (
              headline
            )}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-8 max-w-[570px] text-base leading-[1.8] text-[#494640] sm:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-10 flex flex-wrap items-center gap-5"
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
                className="inline-flex min-h-12 items-center gap-1.5 border-b border-[#24231F]/40 px-1 text-sm font-semibold text-[#24231F] transition-colors hover:border-[#8F432C] hover:text-[#8F432C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F432C]"
              >
                {secondaryButton.text}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
