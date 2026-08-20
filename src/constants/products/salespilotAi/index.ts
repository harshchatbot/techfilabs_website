import { Bot } from "lucide-react";
import type { Product } from "@/types/index";

export const salespilotAiProduct: Product = {
  slug: "salespilot-ai",
  name: "SalesPilot AI",
  shortName: "SalesPilot",
  category: "AI Tool",
  status: "In Development",
  icon: Bot,
  theme: "teal",
  tagline: "AI-led lead qualification and follow-up automation.",
  summary:
    "An AI assistant layer that qualifies leads, runs follow-ups, and syncs insights into CRM workflows.",
  description:
    "Created for growth teams that need higher conversion velocity without increasing manual effort.",
  platforms: ["Web", "WhatsApp", "Voice"],
  audience: ["Sales Teams", "Founders", "Inside Sales"],
  highlights: [
    { label: "Lead response", value: "24/7" },
    { label: "CRM sync", value: "Automated" },
    { label: "Workflows", value: "AI-assisted" },
  ],
  features: [
    "AI lead qualification and routing",
    "WhatsApp and email follow-ups",
    "CRM enrichment and activity logging",
    "Intent scoring and summary dashboards",
  ],
  ctas: {
    primary: { label: "Request Early Access", href: "/#contact" },
    secondary: { label: "WhatsApp Us", href: "https://wa.me/917976111087" },
  },
  links: {},
  screenshots: [],
};
