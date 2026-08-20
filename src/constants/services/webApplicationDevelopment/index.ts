import { Globe } from "lucide-react";
import type { Service, ServiceLandingItem } from "@/types/index";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export const webApplicationDevelopmentService: Service = {
  slug: "web-application-development",
  icon: Globe,
  title: "Website & Web Application Development",
  description:
    "Build conversion-focused websites and web applications that support faster growth and cleaner operations.",
  features: [
    "Custom product websites and portals",
    "Progressive web apps and integrations",
    "Modernization of legacy systems",
    "UX, performance, and accessibility focus",
  ],
};

export const webApplicationDevelopmentLandingData: ServiceLandingItem = {
  slug: "web-application-development",
  title: "Website & Web Application Development Services",
  heroTitle: "Web App Development Services for Scalable Digital Platforms",
  heroSubtitle:
    "TechFi Labs builds high-performance websites and web applications focused on conversion, usability, and long-term maintainability.",
  seoTitle:
    `Web Application Development Company in Ajmer, Jaipur & Global | ${ORGANIZATION_CONFIG.name}`,
  seoDescription:
    `${ORGANIZATION_CONFIG.name} provides website and web application development services including UX, frontend, backend, integrations, and performance optimization for businesses in India and global markets.`,
  canonical: `${ORGANIZATION_CONFIG.url}/services/web-application-development`,
  intro:
    "We engineer web products that help teams launch faster, improve user engagement, and support business growth with stable architecture.",
  outcomes: [
    "Faster release cycles with scalable web architecture",
    "Improved lead conversion through UX and page performance",
    "Reliable integrations with CRM and business systems",
  ],
  capabilities: [
    "Marketing websites and conversion-focused landing pages",
    "Custom admin panels and business web portals",
    "API integrations with CRM, payments, and analytics tools",
    "Performance tuning and Core Web Vitals improvements",
    "Post-launch optimization and support",
  ],
  process: ["Discovery & UX direction", "Build and integration", "Launch, monitoring, and iteration"],
  faq: [
    {
      q: "Do you build both marketing sites and complex web apps?",
      a: "Yes. We build everything from high-converting websites to full-featured web platforms.",
    },
    {
      q: "Can you improve an existing slow website?",
      a: "Yes. We audit and optimize performance, UX, and content architecture for better conversion and SEO.",
    },
  ],
};
