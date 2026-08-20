import { Cpu } from "lucide-react";
import type { Service, ServiceLandingItem } from "@/types/index";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const aiAgentsAutomationService: Service = {
  slug: "ai-agents-automation",
  icon: Cpu,
  title: "AI Agents & Automation",
  description:
    "Automate repetitive operations and improve team productivity with AI agents connected to your business systems.",
  features: [
    "AI voice and chat assistants",
    "Feedback and lead automation",
    "Salesforce and HubSpot integrations",
    "n8n and LangChain orchestration",
  ],
};

export const aiAgentsAutomationLandingData: ServiceLandingItem = {
  slug: "ai-agents-automation",
  title: "AI Agents & Automation Services",
  heroTitle: "AI Agents and Automation Systems for Business Operations",
  heroSubtitle:
    "TechFi Labs designs AI-driven workflows that automate repetitive tasks, improve response times, and integrate with your core systems.",
  seoTitle: `AI Automation Agency in Ajmer, Jaipur & Global | ${ORGANIZATION_CONFIG.name}`,
  seoDescription:
    `${ORGANIZATION_CONFIG.name} builds AI agents and automation workflows for sales, support, and operations, with CRM integration and process orchestration for global businesses.`,
  canonical: `${ORGANIZATION_CONFIG.url}/services/ai-agents-automation`,
  intro:
    "From conversational agents to backend process orchestration, we create practical AI systems that reduce manual load and improve execution speed.",
  outcomes: [
    "24/7 AI-assisted lead and support handling",
    "Reduced manual operations across repetitive workflows",
    "Better process visibility through unified automation layers",
  ],
  capabilities: [
    "AI chat and voice assistant implementation",
    "Workflow orchestration with n8n and custom logic",
    "CRM-connected automation for lead and support pipelines",
    "Prompt flow design and response quality controls",
    "Monitoring and continuous model-assisted optimization",
  ],
  process: ["Use-case mapping", "Agent and workflow implementation", "Testing, rollout, and optimization"],
  faq: [
    {
      q: "Can AI workflows integrate with Salesforce and WhatsApp?",
      a: "Yes. We design cross-system automation that connects AI assistants with CRM and communication channels.",
    },
    {
      q: "Do you build production-ready systems or prototypes?",
      a: "We build production-ready automation systems with monitoring, safeguards, and support.",
    },
  ],
};
