"use client";

import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface WorkflowShowcaseProps {
  title?: string;
  subtitle?: string;
  workflows?: any[];
}

const STEPS = [
  { title: "A request arrives", description: "WhatsApp, email or CRM", Icon: MessageCircle },
  { title: "AI prepares the work", description: "Understand, draft and route", Icon: Bot },
  { title: "Your team stays in control", description: "Review, approve and act", Icon: CheckCircle2 },
];

export default function WorkflowShowcase({
  title = "From request to resolution.",
  subtitle = "Connect everyday requests to the right actions, with people in control.",
}: WorkflowShowcaseProps = {}) {
  const reduceMotion = useReducedMotion();
  return (
    <section aria-labelledby="workflow-title" className="bg-[#F1EEE7] py-16 text-[#24231F] sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#9B482E]">How automation helps</p>
            <h2 id="workflow-title" className="font-serif text-3xl font-normal tracking-[-0.04em] sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#625F59]">{subtitle}</p>
          </div>
          <Link href="#agent-lab" className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start border-b border-[#A45137] text-sm font-semibold text-[#9B482E] hover:text-[#73321F]">
            See the walkthrough <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid border-t border-[#24231F]/15 md:grid-cols-3">
          {STEPS.map(({ title: stepTitle, description, Icon }, index) => (
            <motion.div
              key={stepTitle}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.38, delay: reduceMotion ? 0 : index * 0.07 }}
              className={`flex gap-4 border-b border-[#24231F]/15 py-7 md:block md:border-b-0 md:py-8 ${index > 0 ? "md:border-l md:border-[#24231F]/15 md:pl-8" : ""} ${index < 2 ? "md:pr-8" : ""}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A45137]/25 text-[#9B482E]">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </div>
              <div>
                <p className="mt-0 md:mt-5 text-base font-semibold">{stepTitle}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#625F59]">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
