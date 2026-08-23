import { Zap } from "lucide-react";
import type { Service, ServiceLandingItem } from "@/types/index";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const salesforceConsultingService: Service = {
  slug: "salesforce-consulting",
  icon: Zap,
  title: "Salesforce Consulting & Implementation",
  description:
    "Improve sales execution and pipeline visibility with Salesforce systems aligned to your real business workflow.",
  features: [
    "Salesforce CRM setup and architecture",
    "Custom object and automation workflows",
    "Lightning migration and optimization",
    "Ongoing admin and growth support",
  ],
};

export const salesforceConsultingLandingData: ServiceLandingItem = {
  slug: "salesforce-consulting",
  title: "Salesforce Consulting & Implementation Services",
  heroTitle: "Salesforce Consulting Services for Growth-Focused Teams",
  heroSubtitle:
    "TechFi Labs helps companies design, implement, and optimize Salesforce with clear business outcomes, better adoption, and scalable architecture.",
  seoTitle:
    `Salesforce Consulting Services in Ajmer, Jaipur & Global | ${ORGANIZATION_CONFIG.name}`,
  seoDescription:
    `Expert Salesforce consulting and implementation services by ${ORGANIZATION_CONFIG.name}. We support setup, customization, automation, integrations, and ongoing optimization for businesses in Ajmer, Jaipur, India, and global markets.`,
  canonical: `${ORGANIZATION_CONFIG.url}/services/salesforce-consulting`,
  intro:
    "From discovery to go-live, we translate sales, service, and operations requirements into a Salesforce system your team can actually use and scale.",
  outcomes: [
    "Faster sales pipeline movement with cleaner CRM processes",
    "Higher team adoption through role-specific workflows",
    "Reliable dashboards for leadership-level decisions",
  ],
  capabilities: [
    "Sales Cloud and Service Cloud implementation",
    "Custom objects, flows, validation rules, and automations",
    "Lead lifecycle and opportunity pipeline optimization",
    "Third-party integrations and API-based extensions",
    "Post-launch support and admin governance",
  ],
  process: ["Discovery & process audit", "Architecture & implementation", "Training, launch, and optimization"],
  faq: [
    {
      q: "Do you work with startups and enterprise teams?",
      a: "Yes. We support early-stage teams and established businesses with scalable Salesforce implementation models.",
    },
    {
      q: "Can you optimize an existing Salesforce org?",
      a: "Yes. We perform org health checks, clean up automations, and improve performance and reporting accuracy.",
    },
  ],
};
