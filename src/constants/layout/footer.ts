import { ORGANIZATION_CONFIG } from "@/config/organization";

export const FOOTER_DATA = {
  services: [
    "AI Agents",
    "WhatsApp AI Integrations",
    "Email AI Automation",
    "Salesforce AI & CRM Delivery",
  ],
  company: [
    { name: "What We Build", href: "/services" },
    { name: "Selected Work", href: "/products" },
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
  copyright: "© 2025 TechFi Labs. All rights reserved.",
  parentCompanyPrefix: "A unit of",
  parentCompanyName: "The Technology Fiction",
  parentCompanyUrl: "https://thetechnologyfiction.com/",
  privacyPolicyLabel: "Privacy Policy",
  privacyPolicyUrl: "https://thetechnologyfiction.com/blog/privacy-policy/",
};
