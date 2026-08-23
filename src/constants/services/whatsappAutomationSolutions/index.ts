import { MessageCircle } from "lucide-react";
import type { Service, ServiceLandingItem } from "@/types/index";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const whatsappAutomationSolutionsService: Service = {
  slug: "whatsapp-automation-solutions",
  icon: MessageCircle,
  title: "WhatsApp Automation Solutions",
  description:
    "Improve response speed and lead conversion with WhatsApp journeys for support, follow-up, and engagement.",
  features: [
    "Conversational WhatsApp bots",
    "Lead qualification journeys",
    "Campaign and broadcast automation",
    "Payment and booking workflows",
  ],
};

export const whatsappAutomationSolutionsLandingData: ServiceLandingItem = {
  slug: "whatsapp-automation-solutions",
  title: "WhatsApp Automation Solutions",
  heroTitle: "WhatsApp Automation for Sales, Support, and Engagement",
  heroSubtitle:
    "TechFi Labs creates WhatsApp automation flows that improve response times, qualify leads, and streamline customer communication.",
  seoTitle:
    `WhatsApp Automation Services in Ajmer, Jaipur & Global | ${ORGANIZATION_CONFIG.name}`,
  seoDescription:
    `${ORGANIZATION_CONFIG.name} delivers WhatsApp automation solutions including chatbot flows, lead qualification, campaign messaging, and CRM integration for businesses in India and global markets.`,
  canonical: `${ORGANIZATION_CONFIG.url}/services/whatsapp-automation-solutions`,
  intro:
    "We build business-grade WhatsApp journeys that combine fast communication with structured workflows for marketing, sales, and support teams.",
  outcomes: [
    "Faster customer response times on WhatsApp",
    "Automated lead qualification and follow-up journeys",
    "Improved campaign consistency and conversion tracking",
  ],
  capabilities: [
    "WhatsApp chatbot and conversation flow design",
    "Lead capture, routing, and sales follow-up automation",
    "Campaign and notification workflow setup",
    "CRM and backend integration for unified records",
    "Analytics setup and optimization support",
  ],
  process: ["Journey design", "Automation setup and integration", "Testing and optimization"],
  faq: [
    {
      q: "Can you connect WhatsApp with our CRM?",
      a: "Yes. We integrate WhatsApp workflows with Salesforce, HubSpot, and custom backend systems.",
    },
    {
      q: "Do you support both support and sales workflows?",
      a: "Yes. We design separate or combined flows for support, lead qualification, and campaign engagement.",
    },
  ],
};
