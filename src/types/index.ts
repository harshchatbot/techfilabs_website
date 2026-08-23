import { ElementType } from "react";

export interface ProductHighlight {
  label: string;
  value: string;
}

export interface ProductCtas {
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
}

export interface ProductLinks {
  playStore?: string;
  chromeWebStore?: string;
  website?: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  brandName?: string;
  category: string;
  status: string;
  icon: ElementType;
  theme: string;
  tagline: string;
  summary: string;
  intro?: string;
  heroHeadline?: string;
  heroSubtext?: string;
  description: string;
  platforms: string[];
  audience: string[];
  highlights: ProductHighlight[];
  features: string[];
  ctas: ProductCtas;
  ctaSection?: {
    title: string;
    description: string;
  };
  links: ProductLinks;
  screenshots: string[];
}

export interface Service {
  slug: string;
  icon: ElementType;
  title: string;
  description: string;
  features: string[];
}

export interface ServiceLandingFaq {
  q: string;
  a: string;
}

export interface ServiceLandingItem {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  intro: string;
  outcomes: string[];
  capabilities: string[];
  process: string[];
  faq: ServiceLandingFaq[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  period: string;
  summary: string;
  outcomes: string[];
  keywords: string[];
  technologies: string[];
}

export interface AboutReason {
  number: string;
  title: string;
  description: string;
}

export interface MissionValueItem {
  title: string;
  description: string;
}

export interface Accelerator {
  title: string;
  description: string;
  badge: string;
  value: string;
  icon: ElementType;
  href: string;
  ctaLabel: string;
}

export interface SiteConfig {
  company: {
    name: string;
    initials: string;
    email: string;
    phone: string;
    address: string;
    logo: string;
  };
  navigation: {
    menuItems: string[];
    ctaButton: {
      text: string;
      action: string;
    };
  };
}
