import { HOMEPAGE_ACCELERATORS } from "./accelerators";

export const HOMEPAGE_BUILD_STACK = [
  "RangManch AI",
  "Sentinel",
  "Production Support Playbook",
  "AI Workflow Starter Kit",
  "FieldLens for Salesforce",
  "Resume RAG for Staffing",
].map((title) => HOMEPAGE_ACCELERATORS.find((item) => item.title === title)).filter(Boolean);
