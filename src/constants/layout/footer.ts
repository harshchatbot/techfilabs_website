import { ORGANIZATION_CONFIG } from "@/config/organization";

export const FOOTER_DATA = {
  services: [
    { name: "AI Agents", href: "/services/ai-agents-automation" },
    { name: "WhatsApp Automation", href: "/services/whatsapp-automation-solutions" },
    { name: "Salesforce Consulting", href: "/services/salesforce-consulting" },
    { name: "Salesforce Data Migration", href: "/services/salesforce-data-migration" },
  ],
  company: [
    { name: "What We Build", href: "/services" },
    { name: "Selected Work", href: "/products" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Why TechFi Labs", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { name: "Instagram", icon: "instagram", href: ORGANIZATION_CONFIG.social.instagram },
    {
      name: "Facebook",
      icon: "facebook",
      href: ORGANIZATION_CONFIG.social.facebook,
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      href: ORGANIZATION_CONFIG.social.linkedin,
    },
  ],
};

export const FOOTER_LEGAL_DATA = {
  copyright: "© 2026 TechFi Labs. All rights reserved.",
  parentCompanyPrefix: "A unit of",
  parentCompanyName: "The Technology Fiction",
  parentCompanyUrl: "https://thetechnologyfiction.com/",
  privacyPolicyLabel: "Privacy Policy",
  privacyPolicyUrl: "/privacy-policy",
};
