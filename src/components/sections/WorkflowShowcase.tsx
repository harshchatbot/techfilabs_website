"use client";

import { motion } from "framer-motion";
import { Bot, FileText, Mail, MessageCircle, RefreshCw, ShieldCheck, Sheet, Users } from "lucide-react";

const DETAIL_INPUTS = [
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Email", icon: Mail },
  { label: "Salesforce", icon: ShieldCheck },
];

const DETAIL_OUTPUTS = [
  { label: "Sheets", icon: Sheet },
  { label: "Human Review", icon: Users },
  { label: "Response Ready", icon: RefreshCw },
];

const DETAIL_STEPS = ["Classify", "Summarize", "Draft Reply", "Route", "Log"];
const DETAIL_PARTICLES = [
  { id: "wa-in", start: { x: 60, y: 76 }, mid: { x: 188, y: 100 }, end: { x: 300, y: 154 }, delay: 0.2 },
  { id: "email-in", start: { x: 74, y: 210 }, mid: { x: 198, y: 194 }, end: { x: 300, y: 170 }, delay: 0.85 },
  { id: "crm-out", start: { x: 340, y: 160 }, mid: { x: 438, y: 126 }, end: { x: 554, y: 104 }, delay: 1.45 },
  { id: "review-out", start: { x: 340, y: 178 }, mid: { x: 444, y: 220 }, end: { x: 552, y: 232 }, delay: 2.05 },
];

interface WorkflowShowcaseProps {
  title?: string;
  subtitle?: string;
  workflows?: any[];
}

export default function WorkflowShowcase({ title, subtitle, workflows }: WorkflowShowcaseProps = {}) {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#064e2f_0%,#055536_72%,#03291d_100%)] py-20 text-white md:py-26"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(3,41,29,0.22),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-emerald-300">AI Automation Workflows</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            AI workflows that connect messages, systems, and business actions.
          </h2>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">
            We connect incoming requests to one workflow that can sort messages, summarize context, draft responses, update Salesforce, write to sheets, and send exceptions for human review.
          </p>
          <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-slate-200">
            <span>WhatsApp / Email</span>
            <span className="text-emerald-300">→</span>
            <span>AI Agent</span>
            <span className="text-emerald-300">→</span>
            <span>Classify / Summarize / Draft Reply</span>
            <span className="text-emerald-300">→</span>
            <span>Salesforce / Sheets / Human Review</span>
          </div>
        </motion.div>

        <div className="relative mb-8 overflow-hidden rounded-[2rem] border border-emerald-200/14 bg-white/[0.05] p-5 shadow-[0_24px_70px_rgba(3,41,29,0.18)] backdrop-blur-sm md:mb-10 md:p-7">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(52,211,153,0.08),transparent_36%,rgba(3,41,29,0.12)_100%)]" />
          <div className="relative z-10 flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">Workflow Graph</p>
              <p className="mt-1 text-sm font-medium text-white md:text-base">Detailed AI orchestration across channels, CRM, and review</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-200">
              <Bot className="h-3.5 w-3.5 text-emerald-300" />
              Live workflow
            </div>
          </div>

          <div className="relative mt-6 grid gap-6 md:grid-cols-[0.92fr_1.05fr_0.92fr] md:items-center">
            <svg
              className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full md:block"
              viewBox="0 0 620 330"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M116 78C188 78 224 111 289 150"
                stroke="url(#detailBeamA)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.82 }}
                transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M120 206C196 206 232 188 289 166"
                stroke="url(#detailBeamB)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.74 }}
                transition={{ duration: 1.16, delay: 0.34, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M334 158C400 142 426 110 495 96"
                stroke="url(#detailBeamC)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.08, delay: 0.48, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M338 172C402 186 428 220 497 228"
                stroke="url(#detailBeamD)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.12, delay: 0.62, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="detailBeamA" x1="116" y1="78" x2="289" y2="150" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34D399" stopOpacity="0.1" />
                  <stop offset="0.55" stopColor="#10B981" />
                  <stop offset="1" stopColor="#6EE7B7" stopOpacity="0.55" />
                </linearGradient>
                <linearGradient id="detailBeamB" x1="120" y1="206" x2="289" y2="166" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34D399" stopOpacity="0.1" />
                  <stop offset="0.55" stopColor="#059669" />
                  <stop offset="1" stopColor="#6EE7B7" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="detailBeamC" x1="334" y1="158" x2="495" y2="96" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981" stopOpacity="0.15" />
                  <stop offset="0.62" stopColor="#34D399" />
                  <stop offset="1" stopColor="#A7F3D0" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="detailBeamD" x1="338" y1="172" x2="497" y2="228" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10B981" stopOpacity="0.15" />
                  <stop offset="0.62" stopColor="#34D399" />
                  <stop offset="1" stopColor="#A7F3D0" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {DETAIL_PARTICLES.map((particle) => (
              <motion.div
                key={particle.id}
                className="pointer-events-none absolute left-0 top-0 z-[2] hidden md:block"
                animate={{
                  x: [particle.start.x, particle.mid.x, particle.end.x],
                  y: [particle.start.y, particle.mid.y, particle.end.y],
                  opacity: [0, 1, 1, 0],
                  scale: [0.78, 1, 1, 0.84],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  repeatDelay: 0.55,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              >
                <span className="block h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.95)]" />
              </motion.div>
            ))}

            <div className="space-y-3">
              {DETAIL_INPUTS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.42, delay: 0.18 + index * 0.06 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl border border-emerald-300/10 bg-white/[0.045] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
                      <item.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-slate-400">Incoming request</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <motion.div
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-300/45 to-transparent md:block"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.52, delay: 0.28 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[1.9rem] border border-emerald-300/12 bg-white/[0.065] p-5 shadow-[0_20px_54px_rgba(0,0,0,0.18)] backdrop-blur-sm"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(6,78,59,0.4))] text-emerald-200 shadow-[0_16px_36px_rgba(16,185,129,0.16)]">
                  <Bot className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-center text-xl font-semibold text-white md:text-2xl">AI Agent</h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-slate-300">
                  Handles the repetitive steps so teams can review, approve, and act faster.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {DETAIL_STEPS.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-200"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-3">
              {DETAIL_OUTPUTS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.42, delay: 0.38 + index * 0.06 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl border border-emerald-300/10 bg-white/[0.045] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
                      <item.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-slate-400">Next step</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <RefreshCw className="h-4 w-4 text-emerald-300" />
                Multi-step workflow handling
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <FileText className="h-4 w-4 text-emerald-300" />
                CRM updates, summaries, and activity logs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
