"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { prefersReducedMotion } from "../../utils/motionConfig";

const CAPABILITIES = [
  {
    title: "Implement",
    description: "Salesforce setup, configuration, and delivery.",
  },
  {
    title: "Automate",
    description: "Flows, Apex, APIs, AI agents, and integrations.",
  },
  {
    title: "Migrate",
    description: "Clean CRM data movement and validation support.",
  },
  {
    title: "Support",
    description: "Enhancements, releases, triage, and stability.",
  },
];

const DELIVERY_TAGS = [
  "Salesforce",
  "Agentforce",
  "Flow",
  "Apex",
  "AI Automation",
  "Data Migration",
];

const ARCHITECTURE_MEDIA = {
  src: "/assets/media/salesforce-ai-architecture.webp",
  fallbackSrc: "/assets/media/salesforce-ai-architecture.webp",
  alt: "Salesforce and AI delivery architecture visual",
};

function ArchitectureCard() {
  const [mediaSrc, setMediaSrc] = useState(ARCHITECTURE_MEDIA.src);
  const [triedFallback, setTriedFallback] = useState(false);
  const [isMissing, setIsMissing] = useState(false);

  useEffect(() => {
    setMediaSrc(ARCHITECTURE_MEDIA.src);
    setTriedFallback(false);
    setIsMissing(false);
  }, []);

  const handleError = () => {
    if (!triedFallback && ARCHITECTURE_MEDIA.fallbackSrc) {
      setMediaSrc(ARCHITECTURE_MEDIA.fallbackSrc);
      setTriedFallback(true);
      return;
    }

    setIsMissing(true);
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_24px_60px_rgba(3,41,29,0.2)]">
      {isMissing ? (
        <div className="flex min-h-[260px] items-center justify-center px-6 py-12 text-center md:min-h-[320px]">
          <div className="rounded-2xl border border-emerald-300/15 bg-white/[0.04] px-5 py-4 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              CRM architecture visual
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-emerald-50/75">
              Salesforce, automation, integrations, and support in one layer.
            </p>
          </div>
        </div>
      ) : (
        <div className="relative h-[260px] w-full md:h-[320px]">
          <Image
            src={mediaSrc}
            alt={ARCHITECTURE_MEDIA.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover"
            onError={handleError}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,78,47,0.08)_0%,rgba(4,56,38,0.18)_48%,rgba(4,56,38,0.82)_100%)]" />
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.08),transparent_30%)]" />
      <div className="absolute inset-[1px] rounded-[1.9rem] border border-white/8 opacity-75" />

      <div className="relative z-10 p-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
          Salesforce + AI Delivery Layer
        </p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300">
          CRM workflows connected with automation, integrations, support, and AI.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {DELIVERY_TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ExpertiseSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ExpertiseSection({
  title = "Salesforce delivery for real business workflows",
  subtitle = "Consulting, implementation, automation, data migration, and support — connected with AI where it creates practical value.",
}: ExpertiseSectionProps = {}) {
  const reduceMotion = prefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#071f18_0%,#0a2b21_100%)] py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.05),transparent_26%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-emerald-300">
              Salesforce + AI Expertise
            </p>

            <h2 className="max-w-[13ch] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {CAPABILITIES.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  viewport={{ once: true }}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >
            <ArchitectureCard />

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_46px_rgba(3,41,29,0.14)] md:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Featured Accelerator
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-[1.9rem]">
                    FieldLens for Salesforce
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Check field impact, dependencies, and usage inside Salesforce Lightning.
                  </p>
                </div>

                <Link
                  href="/products/fieldlens-for-salesforce"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#34d399_0%,#10b981_55%,#059669_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(16,185,129,0.22)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View FieldLens
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}