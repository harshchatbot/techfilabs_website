"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WorkflowShowcase from "@/components/sections/WorkflowShowcase";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import About from "@/components/sections/About";
import CaseStudies from "@/components/sections/CaseStudies";
import SalesforceAccelerators from "@/components/sections/SalesforceAccelerators";
import Contact from "@/components/sections/Contact";
import ClientLogos from "@/components/sections/ClientLogos";
import TrustStrip from "@/components/sections/TrustStrip";
import {
  HOMEPAGE_SERVICES_DATA,
  HOMEPAGE_TRUST_STRIP,
  HOMEPAGE_ACCELERATORS,
  ABOUT_DATA,
  CASE_STUDIES_DATA,
  CONTACT_INFO,
} from "@/constants/data";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* Trust & Proof Bar */}
      <TrustStrip items={HOMEPAGE_TRUST_STRIP} />

      {/* 2. What We Build */}
      <Services
        title="What We Build"
        subtitle="AI automation, Salesforce delivery, and custom workflow systems designed to eliminate manual tasks."
        services={HOMEPAGE_SERVICES_DATA}
      />

      {/* Client Logos marquee */}
      <ClientLogos />

      {/* 3. AI Automation Workflows */}
      <WorkflowShowcase />

      {/* 4. Salesforce + AI Expertise */}
      <ExpertiseSection />

      {/* 5. Why TechFi Labs */}
      <About items={ABOUT_DATA.reasons} />

      {/* 6. Proof / Experience */}
      <CaseStudies
        title="Representative Salesforce & AI Delivery Experience"
        subtitle="Real-world system implementations across regulated environments, portals, and field operations."
        studies={CASE_STUDIES_DATA}
      />

      {/* 7. Selected Work / Accelerators */}
      <SalesforceAccelerators
        title="Tools and Accelerators We’re Building"
        subtitle="Practical tools and automation systems engineered to solve real enterprise challenges."
        items={HOMEPAGE_ACCELERATORS}
      />

      {/* 8. Contact CTA */}
      <Contact
        contactInfo={CONTACT_INFO}
      />
    </>
  );
}
