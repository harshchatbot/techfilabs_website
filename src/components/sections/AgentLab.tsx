"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  ChevronDown,
  CirclePause,
  Play,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Scenario = {
  name: string;
  prompt: string;
  response: string;
  intent: string;
  action: string;
  safeguard: string;
  restricted?: boolean;
};

const SCENARIOS: Scenario[] = [
  {
    name: "New enquiry",
    prompt: "Hi, can you connect our support inbox to Salesforce?",
    response:
      "Of course. I can help plan that connection. Which support platform are you using today?",
    intent: "Salesforce integration enquiry",
    action: "Prepare integration questions and a lead draft",
    safeguard: "Draft only. No CRM record created.",
  },
  {
    name: "Customer support",
    prompt: "Our onboarding emails stopped sending. Can you help?",
    response:
      "I can help you investigate. When did this start, and were any changes deployed recently?",
    intent: "Possible onboarding workflow incident",
    action: "Prepare an incident summary for support",
    safeguard: "Human review before any escalation.",
  },
  {
    name: "Invoice request",
    prompt: "Can you tell me if invoice 2048 has been paid?",
    response:
      "I can help with that once your account is verified. Please complete identity verification first.",
    intent: "Invoice status request",
    action: "Pause billing lookup until verification",
    safeguard: "No financial data accessed or disclosed.",
    restricted: true,
  },
];

const STAGES = ["Understand", "Prepare", "Check", "Respond"];

type Phase = "idle" | "typing" | "processing" | "responding" | "complete";
type Mode = "demo" | "manual";

function matchScenario(message: string): Scenario | null {
  const normalized = message.toLowerCase();
  if (/invoice|payment|paid|billing|refund/.test(normalized)) return SCENARIOS[2];
  if (/error|broken|stopped|issue|support|incident|email|onboard/.test(normalized)) return SCENARIOS[1];
  if (/salesforce|crm|connect|integration|lead|whatsapp|automate/.test(normalized)) return SCENARIOS[0];
  return null;
}

export default function AgentLab() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [mode, setMode] = useState<Mode>("demo");
  const [runKey, setRunKey] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [stage, setStage] = useState(0);
  const [typedPrompt, setTypedPrompt] = useState("");
  const [typedReply, setTypedReply] = useState("");
  const [draft, setDraft] = useState("");
  const [manualPrompt, setManualPrompt] = useState("");
  const [manualResponse, setManualResponse] = useState("");
  const [manualScenario, setManualScenario] = useState<Scenario | null>(null);

  const currentScenario = mode === "demo" ? SCENARIOS[scenarioIndex] : manualScenario;
  const prompt = mode === "demo" ? SCENARIOS[scenarioIndex].prompt : manualPrompt;
  const response = mode === "demo" ? SCENARIOS[scenarioIndex].response : manualResponse;

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.18 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused || !prompt || !response) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (callback: () => void, delay: number) => {
      timers.push(setTimeout(callback, delay));
    };

    setTypedPrompt("");
    setTypedReply("");
    setStage(0);
    setPhase(mode === "demo" ? "typing" : "processing");

    const instant = Boolean(reduceMotion);
    const promptDelay = mode === "demo" && !instant ? 26 : 0;
    const promptEnd = mode === "demo" && !instant ? prompt.length * promptDelay : 0;

    if (mode === "demo" && !instant) {
      for (let i = 1; i <= prompt.length; i++) {
        schedule(() => setTypedPrompt(prompt.slice(0, i)), i * promptDelay);
      }
    } else {
      setTypedPrompt(prompt);
    }

    const processingStart = promptEnd + (instant ? 0 : 350);
    schedule(() => setPhase("processing"), processingStart);
    const stageDelay = instant ? 0 : 620;
    for (let i = 1; i <= 3; i++) {
      schedule(() => setStage(i), processingStart + i * stageDelay);
    }

    const replyStart = processingStart + 3 * stageDelay + (instant ? 0 : 260);
    schedule(() => setPhase("responding"), replyStart);

    const replyDelay = instant ? 0 : 22;
    if (instant) {
      schedule(() => setTypedReply(response), replyStart);
    } else {
      for (let i = 1; i <= response.length; i++) {
        schedule(() => setTypedReply(response.slice(0, i)), replyStart + i * replyDelay);
      }
    }

    const finish = replyStart + response.length * replyDelay + (instant ? 0 : 150);
    schedule(() => {
      setStage(4);
      setPhase("complete");
    }, finish);

    // A calm looping preview, not a live model response.
    if (mode === "demo" && !instant) {
      schedule(() => setRunKey((key) => key + 1), finish + 5600);
    }

    return () => timers.forEach(clearTimeout);
  }, [visible, paused, scenarioIndex, mode, prompt, response, runKey, reduceMotion]);

  function selectScenario(index: number) {
    setScenarioIndex(index);
    setMode("demo");
    setPaused(false);
    setDraft("");
    setRunKey((key) => key + 1);
  }

  function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = draft.trim().slice(0, 220);
    if (!message) return;
    const match = matchScenario(message);
    setManualScenario(match);
    setManualPrompt(message);
    setManualResponse(
      match
        ? match.response
        : "This is a guided preview, not a live AI chat. Try asking about Salesforce, customer support or an invoice."
    );
    setMode("manual");
    setPaused(false);
    setDraft("");
    setRunKey((key) => key + 1);
  }

  function replay() {
    setPaused(false);
    setRunKey((key) => key + 1);
  }

  const showPrompt = typedPrompt.length > 0;
  const showReply = phase === "responding" || phase === "complete";
  const stageLabel = phase === "typing"
    ? "Writing a sample request"
    : phase === "processing"
      ? STAGES[Math.min(stage, 2)]
      : phase === "responding"
        ? "Preparing a reply"
        : phase === "complete"
          ? "Example complete"
          : "Ready";

  return (
    <section
      ref={sectionRef}
      id="agent-lab"
      aria-labelledby="agent-lab-title"
      className="relative isolate overflow-hidden bg-[#24231F] py-20 text-[#FAF9F5] sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-0 h-[540px] w-[540px] rounded-full bg-[#A45137]/[0.12] blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8A7C65]/[0.12] blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.19em] text-[#E7A88D]">
              Experience the engineering
            </p>
            <h2
              id="agent-lab-title"
              className="max-w-[13ch] font-serif text-[clamp(2.8rem,5vw,5.1rem)] font-normal leading-[1.08] tracking-[-0.05em]"
            >
              See how an <span className="text-[#E7A88D]">AI agent</span> works.
            </h2>
            <p className="mt-6 max-w-md text-base leading-[1.8] text-[#D3CDC3] sm:text-lg">
              A customer asks. The agent understands, checks and prepares a helpful reply.
            </p>

            <div className="mt-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#BDB3A7]">
                Try a conversation
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Example conversations">
                {SCENARIOS.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-pressed={mode === "demo" && scenarioIndex === index}
                    onClick={() => selectScenario(index)}
                    className={`min-h-11 rounded-full border px-4 py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E7A88D] ${
                      mode === "demo" && scenarioIndex === index
                        ? "border-[#E7A88D] bg-[#E7A88D] font-semibold text-[#24231F]"
                        : "border-white/20 text-[#E9E0D6] hover:border-white/45 hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#BDB3A7]">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#E7A88D]" />
                Scripted demonstration
              </span>
              <span>No live AI or external API calls</span>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="min-w-0 overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#F8F5EF] text-[#24231F] shadow-[0_32px_100px_rgba(0,0,0,0.28)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#24231F]/10 bg-white/75 px-4 py-4 sm:px-6">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#24231F] text-[#F8F5EF]">
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">TechFi Agent Preview</p>
                  <p className="mt-0.5 text-xs text-[#706A62]">Example conversation</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full border border-[#A45137]/20 bg-[#A45137]/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8F432C] sm:text-xs">
                Simulation
              </span>
            </div>

            <div className="relative flex min-h-[365px] flex-col gap-5 px-4 py-6 sm:min-h-[390px] sm:px-6">
              <div className="flex max-w-[90%] items-start gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E9E2D8] text-[#494640]">
                  <Bot aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-relaxed shadow-[0_3px_18px_rgba(36,35,31,0.05)] sm:text-[15px]">
                  Hello! How can I help you today?
                </div>
              </div>

              {showPrompt && (
                <div className="ml-auto flex max-w-[90%] justify-end">
                  <div className="rounded-2xl rounded-tr-sm bg-[#292825] px-4 py-3 text-sm leading-relaxed text-white sm:text-[15px]">
                    {typedPrompt}
                    {phase === "typing" && !reduceMotion && (
                      <span aria-hidden="true" className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-[#E7A88D]" />
                    )}
                  </div>
                </div>
              )}

              {(phase === "processing" || phase === "responding" || phase === "complete") && (
                <div className="flex max-w-[96%] items-start gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E9E2D8] text-[#494640]">
                    <Bot aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-[0_3px_18px_rgba(36,35,31,0.05)]">
                    {!showReply ? (
                      <div className="flex items-center gap-1.5 py-1" aria-label="Preparing a reply">
                        {[0, 1, 2].map((dot) => (
                          <span
                            key={dot}
                            className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#A45137] motion-reduce:animate-none"
                            style={{ animationDelay: `${dot * 180}ms` }}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed sm:text-[15px]">
                        {typedReply}
                        {phase === "responding" && !reduceMotion && (
                          <span aria-hidden="true" className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-[#A45137]" />
                        )}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-[#24231F]/10 bg-white/60 px-4 py-4 sm:px-6">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#625F59]" role="status" aria-live="polite">
                  <span className={`h-2 w-2 rounded-full ${phase === "complete" ? "bg-[#497A5C]" : "bg-[#A45137]"}`} />
                  {stageLabel}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPaused((value) => !value)}
                    aria-label={paused ? "Play demonstration" : "Pause demonstration"}
                    title={paused ? "Play" : "Pause"}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#24231F]/10 text-[#625F59] hover:bg-[#F1EEE7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A45137]"
                  >
                    {paused ? <Play aria-hidden="true" className="h-4 w-4" /> : <CirclePause aria-hidden="true" className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={replay}
                    aria-label="Replay demonstration"
                    title="Replay"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#24231F]/10 text-[#625F59] hover:bg-[#F1EEE7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A45137]"
                  >
                    <RotateCcw aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mb-4 grid grid-cols-4 gap-1.5" aria-label={`Demo progress: ${stage} of 4 steps`}>
                {STAGES.map((name, index) => (
                  <div key={name} className="min-w-0">
                    <div className={`h-1 rounded-full transition-colors duration-300 ${stage > index ? "bg-[#A45137]" : "bg-[#DDD7CE]"}`} />
                    <p className={`mt-2 truncate text-center text-[10px] sm:text-xs ${stage > index ? "font-semibold text-[#8F432C]" : "text-[#817A70]"}`}>
                      {name}
                    </p>
                  </div>
                ))}
              </div>

              <form onSubmit={submitMessage} className="flex items-end gap-2 rounded-xl border border-[#24231F]/15 bg-white p-2 focus-within:border-[#A45137]">
                <label htmlFor="agent-demo-input" className="sr-only">Try a message in the scripted demo</label>
                <textarea
                  id="agent-demo-input"
                  value={draft}
                  onFocus={() => setPaused(true)}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      event.currentTarget.form?.requestSubmit();
                    }
                  }}
                  rows={1}
                  maxLength={220}
                  placeholder="Ask about Salesforce, support or billing..."
                  className="max-h-24 min-h-10 min-w-0 flex-1 resize-none bg-transparent px-2 py-2.5 text-sm text-[#24231F] outline-none placeholder:text-[#918B82]"
                />
                <button
                  type="submit"
                  disabled={!draft.trim()}
                  aria-label="Send example message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#24231F] text-white transition-colors hover:bg-[#49433E] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A45137]"
                >
                  <Send aria-hidden="true" className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-[11px] leading-relaxed text-[#817A70]">
                Interactive scripted preview. Messages stay in your browser. No live AI is connected.
              </p>
            </div>
          </motion.div>
        </div>

        <details className="group mx-auto mt-10 max-w-7xl border-t border-white/15 pt-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-[#D3CDC3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E7A88D] [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#E7A88D]" />
              What happens behind the scenes?
            </span>
            <ChevronDown aria-hidden="true" className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-5 grid gap-4 pb-2 text-sm sm:grid-cols-3">
            <div className="border-l border-[#E7A88D]/50 pl-4">
              <p className="mb-2 font-semibold text-white">Understand</p>
              <p className="leading-relaxed text-[#C8C0B5]">
                {currentScenario?.intent ?? "Recognize whether the message matches a supported example."}
              </p>
            </div>
            <div className="border-l border-[#E7A88D]/50 pl-4">
              <p className="mb-2 font-semibold text-white">Prepare</p>
              <p className="leading-relaxed text-[#C8C0B5]">
                {currentScenario?.action ?? "Suggest a supported example without contacting external systems."}
              </p>
            </div>
            <div className="border-l border-[#E7A88D]/50 pl-4">
              <p className="mb-2 font-semibold text-white">Check safeguards</p>
              <p className="leading-relaxed text-[#C8C0B5]">
                {currentScenario?.safeguard ?? "No tool calls, records or sensitive information are accessed."}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#AFA69A]">
            All steps and replies are predefined examples. This preview does not perform real actions or send messages to a server.
          </p>
        </details>
      </div>
    </section>
  );
}
