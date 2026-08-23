import { Building2 } from "lucide-react";
import type { Product } from "@/types/index";

export const opsflowControlCenterProduct: Product = {
  slug: "opsflow-control-center",
  name: "OpsFlow Control Center",
  shortName: "OpsFlow",
  category: "Web App",
  status: "Coming Soon",
  icon: Building2,
  theme: "lime",
  tagline: "A single command dashboard for multi-site operations.",
  summary:
    "Web-first command console to monitor operations, service SLAs, and incident timelines across locations.",
  description:
    "Designed for teams running distributed operations and requiring fast decisions with structured visibility.",
  platforms: ["Web"],
  audience: ["Operations Heads", "Enterprise Admin Teams"],
  highlights: [
    { label: "KPI feeds", value: "Live" },
    { label: "Workflows", value: "Configurable" },
    { label: "Reports", value: "Executive-ready" },
  ],
  features: [
    "Cross-site performance dashboards",
    "SLA and ticket tracking with escalations",
    "Custom workflow automation",
    "Team-level access controls",
  ],
  ctas: {
    primary: { label: "Join Waitlist", href: "/#contact" },
    secondary: { label: "Talk to Team", href: "https://wa.me/917976111087" },
  },
  links: {},
  screenshots: [],
};
