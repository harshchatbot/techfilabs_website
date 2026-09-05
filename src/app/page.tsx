import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WorkflowShowcase from "@/components/sections/WorkflowShowcase";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import FAQSection from "@/components/sections/FAQSection";
import Contact from "@/components/sections/Contact";
import ClientLogos from "@/components/sections/ClientLogos";
import TrustStrip from "@/components/sections/TrustStrip";
import {
  HOMEPAGE_TRUST_STRIP,
  CONTACT_INFO,
  HOMEPAGE_FAQS,
} from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import { createPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "AI Automation, Salesforce & Custom Engineering",
  description:
    "TechFi Labs builds AI agents, workflow automations, Salesforce workflows, and custom tools that reduce manual work for business teams.",
  path: "/",
  keywords: [
    "AI automation services",
    "Salesforce consulting",
    "workflow automation",
    "custom engineering",
    ORGANIZATION_CONFIG.name,
  ],
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust & Proof Bar */}
      <TrustStrip items={HOMEPAGE_TRUST_STRIP} />

      {/* 3. AI Automation Workflows */}
      <WorkflowShowcase />

      {/* 4. Client Logos Marquee */}
      <ClientLogos />

      {/* 5. Salesforce + AI Expertise */}
      <ExpertiseSection />

      {/* 6. Frequently Asked Questions */}
      <FAQSection faqs={HOMEPAGE_FAQS} schemaId="homepage-faq-schema" />

      {/* 7. Contact CTA */}
      <Contact contactInfo={CONTACT_INFO} />
    </>
  );
}
