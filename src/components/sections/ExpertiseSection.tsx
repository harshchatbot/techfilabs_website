"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const CAPABILITIES = [
  { title: "Implement", description: "Salesforce configuration and delivery." },
  { title: "Automate", description: "Flows, Apex, APIs and AI integrations." },
  { title: "Migrate", description: "Data movement and validation." },
  { title: "Support", description: "Releases, improvements and stability." },
];

interface ExpertiseSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ExpertiseSection({
  title = "Salesforce, made to work for you.",
  subtitle = "Implementation, integration and ongoing support, without unnecessary complexity.",
}: ExpertiseSectionProps = {}) {
  const reduceMotion = useReducedMotion();
  return (
    <section aria-labelledby="expertise-title" className="bg-white py-16 text-[#24231F] sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-20 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9B482E]">Salesforce expertise</p>
          <h2 id="expertise-title" className="max-w-xl font-serif text-3xl font-normal leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#625F59]">{subtitle}</p>
          <div className="mt-8 border-t border-[#24231F]/10">
            {CAPABILITIES.map(({ title: itemTitle, description }, index) => (
              <motion.div
                key={itemTitle}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.04 }}
                className="flex flex-col gap-1 border-b border-[#24231F]/10 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <h3 className="w-24 shrink-0 text-base font-semibold">{itemTitle}</h3>
                <p className="text-sm leading-relaxed text-[#625F59]">{description}</p>
              </motion.div>
            ))}
          </div>
          <Link href="/services" className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#A45137] text-sm font-semibold text-[#9B482E] hover:text-[#73321F]">
            Explore our services <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem] bg-[#F1EEE7]">
            <Image
              src="/assets/media/salesforce-ai-architecture.webp"
              alt="Illustration of Salesforce and AI workflow architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5 flex flex-wrap items-start justify-between gap-3 border-b border-[#24231F]/10 pb-5">
            <div>
              <p className="text-sm font-semibold">FieldLens for Salesforce</p>
              <p className="mt-1 text-xs leading-relaxed text-[#625F59]">Explore field dependencies and usage in Lightning.</p>
            </div>
            <Link href="/products/fieldlens-for-salesforce" className="inline-flex min-h-9 items-center gap-1.5 text-xs font-semibold text-[#9B482E] hover:underline">
              View product <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
