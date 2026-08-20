import { Bot, MessageCircle, Database, Cpu, Globe } from "lucide-react";
import type { Service, ServiceLandingItem } from "@/types/index";

import {
  salesforceConsultingService,
  salesforceConsultingLandingData,
} from "./salesforceConsulting";
import {
  salesforceDataMigrationService,
  salesforceDataMigrationLandingData,
} from "./salesforceDataMigration";
import {
  webApplicationDevelopmentService,
  webApplicationDevelopmentLandingData,
} from "./webApplicationDevelopment";
import {
  mobileAppDevelopmentService,
  mobileAppDevelopmentLandingData,
} from "./mobileAppDevelopment";
import {
  aiAgentsAutomationService,
  aiAgentsAutomationLandingData,
} from "./aiAgentsAutomation";
import {
  whatsappAutomationSolutionsService,
  whatsappAutomationSolutionsLandingData,
} from "./whatsappAutomationSolutions";

export * from "./salesforceConsulting";
export * from "./salesforceDataMigration";
export * from "./webApplicationDevelopment";
export * from "./mobileAppDevelopment";
export * from "./aiAgentsAutomation";
export * from "./whatsappAutomationSolutions";

export const SERVICES_DATA: Service[] = [
  salesforceConsultingService,
  salesforceDataMigrationService,
  webApplicationDevelopmentService,
  mobileAppDevelopmentService,
  aiAgentsAutomationService,
  whatsappAutomationSolutionsService,
];

export const SERVICE_LANDING_DATA: Record<string, ServiceLandingItem> = {
  "salesforce-consulting": salesforceConsultingLandingData,
  "salesforce-data-migration": salesforceDataMigrationLandingData,
  "web-application-development": webApplicationDevelopmentLandingData,
  "mobile-app-development": mobileAppDevelopmentLandingData,
  "ai-agents-automation": aiAgentsAutomationLandingData,
  "whatsapp-automation-solutions": whatsappAutomationSolutionsLandingData,
};

export const HOMEPAGE_SERVICES_DATA = [
  {
    title: "AI Agents & Automation",
    description: "Automate repetitive work across teams and tools.",
    points: ["Task routing", "Reply drafting", "Internal support"],
    visuals: ["Smart actions", "Human handoff", "Workflow control"],
    badge: "Automation",
    icon: Bot,
    size: "wide",
    slug: "ai-agents-automation",
    surface:
      "bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.08),transparent_36%)]",
  },
  {
    title: "WhatsApp & Email Automation",
    description: "Capture, classify, reply, and route messages faster.",
    points: ["Inbox routing", "Lead follow-up", "Customer updates"],
    visuals: ["WhatsApp", "Email", "Escalations"],
    badge: "Channel automation",
    icon: MessageCircle,
    slug: "whatsapp-automation-solutions",
  },
  {
    title: "Salesforce Consulting & Delivery",
    description: "Improve Salesforce setup, automation, and integrations.",
    points: ["Implementation", "CRM automation", "User workflows"],
    visuals: ["Salesforce", "Flows", "FieldLens"],
    badge: "CRM delivery",
    icon: Database,
    size: "wide",
    slug: "salesforce-consulting",
  },
  {
    title: "Managed Services & Production Support",
    description: "Keep systems stable with fixes, releases, and improvements.",
    points: ["Incident handling", "Release support", "Enhancements"],
    visuals: ["Tickets", "SLA", "Monitoring"],
    badge: "Ongoing support",
    icon: Cpu,
    slug: "salesforce-consulting",
  },
  {
    title: "Data Migration & Custom Engineering",
    description: "Move, clean, validate, and connect business data.",
    points: ["Data migration", "Custom tools", "System integrations"],
    visuals: ["Data mapping", "APIs", "Custom apps"],
    badge: "Custom build",
    icon: Globe,
    slug: "web-application-development",
  },
];
