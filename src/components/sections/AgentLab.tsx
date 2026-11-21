"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Bot, Check, ChevronDown, CirclePause, Mail, MessageCircle,
  RotateCcw, ShieldCheck, Workflow, Wrench,
} from "lucide-react";

type Scenario = {
  name: string;
  channel: string;
  message: string;
  intent: string;
  plan: string;
  tool: string;
  toolAction: string;
  trace: string[];
  reviewRequired: boolean;
  reviewReason: string;
  response: string;
};

const SCENARIOS: Scenario[] = [
  {
    name: "Sales enquiry",
    channel: "WhatsApp",
    message: "Hi, can you connect our support platform to Salesforce?",
    intent: "Salesforce integration enquiry",
    plan: "Identify the request, prepare a lead summary, and draft a follow-up question.",
    tool: "Salesforce CRM (simulated)",
    toolAction: "Prepare a lead draft. No CRM record is created.",
    trace: [
      "Input: WhatsApp enquiry (example data)",
      "Decision: classify as a new integration enquiry",
      "Tool: Salesforce CRM / create-lead (simulation only)",
      "Arguments: topic=Salesforce integration; status=draft",
      "Result: lead draft prepared; external writes=0",
    ],
    reviewRequired: false,
    reviewReason: "No sensitive data or external write is required. Draft response passes the demonstration policy check.",
    response: "Thanks for reaching out. Which support platform would you like to integrate with Salesforce?",
  },
  {
    name: "Support incident",
    channel: "Email",
    message: "Our onboarding automation stopped after yesterday's deployment.",
    intent: "Potential workflow incident",
    plan: "Summarize the incident, prepare a case, and escalate to a support engineer.",
    tool: "Salesforce Service Cloud (simulated)",
    toolAction: "Prepare an incident case with the reported symptoms. No case is submitted.",
    trace: [
      "Input: customer email (example data)",
      "Decision: classify as a support incident",
      "Tool: Service Cloud / prepare-case (simulation only)",
      "Arguments: severity=unverified; category=onboarding",
      "Result: draft case prepared; external writes=0",
      "Policy: support incident requires human triage",
    ],
    reviewRequired: true,
    reviewReason: "An engineer must confirm impact and priority before escalation or a customer commitment.",
    response: "We've noted the onboarding issue. Could you share the error message and approximate start time?",
  },
  {
    name: "Billing request",
    channel: "Web chat",
    message: "Can you tell me whether invoice 2048 has been paid?",
    intent: "Invoice status request",
    plan: "Check authorization before any billing lookup or disclosure.",
    tool: "Billing API (simulated)",
    toolAction: "Block invoice lookup pending identity verification. No billing data is accessed.",
    trace: [
      "Input: invoice status enquiry (example data)",
      "Decision: financial information requested",
      "Policy: identity verification required",
      "Tool: Billing API / get-invoice (NOT executed)",
      "Result: blocked; external reads=0; disclosures=0",
      "Next: request verified account context",
    ],
    reviewRequired: true,
    reviewReason: "Identity is not verified. The agent must not disclose invoice details or perform a billing lookup.",
    response: "I can help with that. Please complete account verification before we check invoice details.",
  },
];

const STAGES = [
  { name: "Understand", Icon: Bot },
  { name: "Plan", Icon: Workflow },
  { name: "Use tools", Icon: Wrench },
  { name: "Review", Icon: ShieldCheck },
  { name: "Respond", Icon: MessageCircle },
];

export default function AgentLab() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [reviewDecision, setReviewDecision] = useState<"approved" | "held" | null>(null);
  const reduceMotion = useReducedMotion();
  const scenario = SCENARIOS[scenarioIndex];
  const needsApproval = scenario.reviewRequired && step === 4;
  const canAdvance = step < 5 && (!needsApproval || reviewDecision === "approved");
  const stageContent = [
    "",
    scenario.intent,
    scenario.plan,
    scenario.toolAction,
    scenario.reviewReason,
    scenario.response,
  ];

  function chooseScenario(index: number) {
    setScenarioIndex(index);
    setStep(0);
    setReviewDecision(null);
  }

  function reset() {
    setStep(0);
    setReviewDecision(null);
  }

  return (
    <section id="agent-lab" aria-labelledby="agent-lab-title" className="relative overflow-hidden bg-[#24231F] py-20 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(217,119,87,0.08),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#E7A88D]">Experience the engineering</p>
          <h2 id="agent-lab-title" className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            See how an AI agent works.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#F8F2E9]/75 sm:text-lg">
            Explore a guided example of tools, safeguards and human review.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-[#E7A88D]/20 bg-white/[0.045] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="rounded-xl border border-[#E7A88D]/20 bg-[#E7A88D]/10 p-2.5 text-[#EBC0AA]"><Bot aria-hidden="true" className="h-5 w-5" /></span>
              <div>
                <p className="text-base font-semibold">TechFi AgentLab</p>
                <p className="text-xs text-[#E9E0D6]/60">Guided orchestration walkthrough</p>
              </div>
            </div>
            <span className="rounded-full border border-amber-200/40 bg-amber-200/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-100">
              Simulation · no live AI
            </span>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#EBC0AA]/75">Choose a scenario</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Business scenarios">
              {SCENARIOS.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={scenarioIndex === index}
                  onClick={() => chooseScenario(index)}
                  className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7A88D] ${scenarioIndex === index ? "border-[#E7A88D] bg-[#E7A88D] text-[#24231F]" : "border-white/20 bg-white/5 text-[#F8F2E9] hover:bg-white/10"}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="rounded-2xl border border-white/10 bg-[#0c2d27] p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#EBC0AA]">
                {scenario.channel === "Email" ? <Mail aria-hidden="true" className="h-4 w-4" /> : <MessageCircle aria-hidden="true" className="h-4 w-4" />}
                Incoming {scenario.channel} request
              </div>
              <p className="text-base leading-relaxed text-white/90">&ldquo;{scenario.message}&rdquo;</p>
              <p className="mt-5 text-xs text-[#E9E0D6]/55">Example input · no customer data</p>
            </div>

            <div className="min-w-0 rounded-2xl border border-white/10 bg-[#0c2d27] p-4 sm:p-5">
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2" aria-label={`Workflow stage ${step} of 5`}>
                {STAGES.map(({ name, Icon }, index) => {
                  const reached = step > index;
                  return (
                    <div key={name} className={`min-w-0 rounded-xl border p-2 text-center transition-colors sm:p-3 ${reached ? "border-[#E7A88D]/60 bg-[#E7A88D]/15" : "border-white/10 bg-white/[0.035]"}`}>
                      <Icon aria-hidden="true" className={`mx-auto mb-2 h-4 w-4 sm:h-5 sm:w-5 ${reached ? "text-[#EBC0AA]" : "text-[#E9E0D6]/45"}`} />
                      <p className={`break-words text-[10px] font-semibold leading-tight sm:text-xs ${reached ? "text-white" : "text-white/55"}`}>{name}</p>
                      {reached && <Check aria-label="Reached" className="mx-auto mt-2 h-3 w-3 text-[#E7A88D]" />}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 min-h-[128px]" aria-live="polite" aria-atomic="true">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${scenarioIndex}-${step}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: reduceMotion ? 0 : 0.24 }}
                    className="rounded-xl border border-white/10 bg-white/[0.045] p-4"
                  >
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#EBC0AA]">
                      {step === 0 ? "Ready to simulate" : `Stage ${step} · ${STAGES[step - 1].name}`}
                    </p>
                    <p className="text-sm leading-relaxed text-white/85">
                      {step === 0 ? "Select Run workflow to follow the agent's decisions and safeguards." : stageContent[step]}
                    </p>
                    {step === 3 && <p className="mt-2 text-xs text-amber-100/80">Tool call is scripted. No external systems are contacted.</p>}
                  </motion.div>
                </AnimatePresence>
              </div>

              {needsApproval && (
                <div className="mt-3 rounded-xl border border-amber-200/30 bg-amber-200/[0.06] p-4">
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-100"><CirclePause aria-hidden="true" className="h-4 w-4" /> Human review required</p>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => setReviewDecision("approved")} className="rounded-lg bg-[#E7A88D] px-3 py-2 text-sm font-semibold text-[#24231F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Approve safe response</button>
                    <button type="button" onClick={() => setReviewDecision("held")} className="rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Hold for follow-up</button>
                  </div>
                  {reviewDecision && <p role="status" className="mt-3 text-sm text-amber-50">{reviewDecision === "approved" ? "Safe draft approved for this simulation. No message will be sent." : "Workflow held. A human must resolve the exception before continuing."}</p>}
                </div>
              )}

              <details className="group mt-4 rounded-xl border border-white/10 bg-black/10 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#E9E0D6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E7A88D]">
                  <span>Inspect simulated tool trace</span>
                  <ChevronDown aria-hidden="true" className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <ol className="mt-3 space-y-2 border-t border-white/10 pt-3 font-mono text-xs leading-relaxed text-[#E9E0D6]/75">
                  {scenario.trace.map((entry, index) => <li key={entry}><span className="mr-2 text-[#E7A88D]/60">{String(index + 1).padStart(2, "0")}</span>{entry}</li>)}
                </ol>
                <p className="mt-3 text-xs text-amber-100/70">Illustrative trace only; no API calls, records, or credentials.</p>
              </details>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep((current) => Math.min(current + 1, 5))}
                  disabled={!canAdvance}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#E7A88D] px-5 py-2.5 text-sm font-semibold text-[#24231F] transition-colors hover:bg-[#F0C8B6] disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {step === 0 ? "Run workflow" : step === 5 ? "Completed" : "Next stage"} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
                <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <RotateCcw aria-hidden="true" className="h-4 w-4" /> Reset
                </button>
                <span className="text-xs text-[#E9E0D6]/60" aria-live="polite">{step} / 5 stages</span>
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-[#E9E0D6]/55">
            This is a predefined educational simulation, not a live AI agent. Approvals, tool traces, and outputs are illustrative; no data leaves the page.
          </p>
        </div>
      </div>
    </section>
  );
}
