import { ORGANIZATION_CONFIG } from "@/config/organization";
import type { SiteConfig } from "@/types/index";

export const SITE_CONFIG: SiteConfig = {
  company: {
    name: ORGANIZATION_CONFIG.name,
    initials: ORGANIZATION_CONFIG.initials,
    email: ORGANIZATION_CONFIG.contact.email,
    phone: ORGANIZATION_CONFIG.contact.phone,
    address: ORGANIZATION_CONFIG.contact.address,
    logo: ORGANIZATION_CONFIG.logo,
  },
  navigation: {
    menuItems: ["home", "products", "services", "about", "contact"],
    ctaButton: {
      text: "Book a Strategy Call",
      action: "contact",
    },
  },
};
