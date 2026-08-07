import {
  About,
  Contact,
  CredibilityBlock,
  ExpertiseSection,
  Footer,
  Hero,
  Navigation,
  OrganizationsServed,
  SalesforceAccelerators,
  Services,
  WorkflowShowcase,
} from "../components";
import WhatsAppChatButton from "../components/WhatsAppChatButton";
import Schema from "../components/Schema";
import Seo from "../components/Seo";
import {
  ABOUT_DATA,
  CONTACT_INFO,
  FOOTER_DATA,
  HOMEPAGE_ACCELERATORS,
  HOMEPAGE_BUILD_STACK,
  HOMEPAGE_CREDIBILITY,
  HOMEPAGE_EXPERTISE_POINTS,
  HOMEPAGE_EXPERTISE_TOOLS,
  PRODUCTS_DATA,
  SITE_CONFIG,
} from "../constants/data";

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechFi Labs",
    alternateName: "TechFi",
    url: "https://techfilabs.com/",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TechFi Labs",
    url: "https://techfilabs.com/",
    image: "https://techfilabs.com/techfilabs_logo_2026.png",
    telephone: "+91 7976111087",
    email: "harshveernirwan@techfilabs.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jaipur, Rajasthan",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
    areaServed: ["Jaipur", "India", "USA", "UK", "UAE"],
    sameAs: ["https://www.linkedin.com/company/the-technology-fiction/"],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Seo
        title="TechFi Labs | AI Automation Studio with Salesforce Delivery Expertise"
        description="TechFi Labs builds AI agents, WhatsApp and email automations, Salesforce workflows, managed support solutions, data migration services, and custom tools for growing business teams."
        canonical="https://techfilabs.com/"
        type="website"
        keywords="AI automation studio, AI agents, WhatsApp automation, email automation, Salesforce consulting, Salesforce support, managed services, production support, data migration, custom engineering, TechFi Labs"
      />
      <Schema id="website-schema" data={websiteSchema} />
      <Schema id="local-business-schema" data={localBusinessSchema} />

      <Navigation
        logo={SITE_CONFIG.company}
        menuItems={SITE_CONFIG.navigation.menuItems}
        ctaButton={SITE_CONFIG.navigation.ctaButton}
      />

      <main id="main-content">
        <Hero
          eyebrow="AI Automation • Salesforce • Custom Engineering"
          headline="AI Agents & Automation for Growing Business Teams"
          subtitle="AI agents, Salesforce workflows, and custom tools that reduce manual work."
          chips={["AI Agents", "WhatsApp + Email", "Salesforce", "Custom Engineering"]}
          primaryButton={{
            text: "Build Your AI Workflow",
            action: () => {
              const contactSection = document.getElementById("contact");
              if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            },
          }}
          secondaryButton={{
            text: "Explore Services",
            action: () => {
              const servicesSection = document.getElementById("services");
              if (servicesSection) servicesSection.scrollIntoView({ behavior: "smooth" });
            },
          }}
          scrollTarget="services"
        />

        <OrganizationsServed />

        <Services
          title="What We Build"
          subtitle="AI automation, Salesforce delivery, and custom tools for teams that want less manual work."
          services={HOMEPAGE_BUILD_STACK}
        />

        <WorkflowShowcase />

        <ExpertiseSection
          points={HOMEPAGE_EXPERTISE_POINTS}
          tools={HOMEPAGE_EXPERTISE_TOOLS}
        />

        <About
          eyebrow="Why TechFi Labs"
          title="Why Businesses Choose TechFi Labs"
          subtitle="We automate real workflows with strong Salesforce delivery support."
          items={ABOUT_DATA.reasons}
        />

        <CredibilityBlock items={HOMEPAGE_CREDIBILITY} />

        <SalesforceAccelerators items={HOMEPAGE_ACCELERATORS} />

        <Contact
          title="Need AI automation or Salesforce support?"
          subtitle="Tell us what you want to automate, improve, or support."
          contactInfo={CONTACT_INFO}
          products={PRODUCTS_DATA}
          quickActions={[
            { label: "Chat on WhatsApp", href: "https://wa.me/917976111087" },
            { label: "Email TechFi Labs", href: "mailto:harshveernirwan@techfilabs.com" },
          ]}
          responsePromise="We usually respond within 1 business day."
          interestOptions={[
            "AI Agents & Automation",
            "WhatsApp & Email Automation",
            "Salesforce Consulting & Delivery",
            "Managed Services & Production Support",
            "Data Migration & Custom Engineering",
          ]}
          projectTypes={[
            "Discovery / Strategy",
            "Workflow Build",
            "Salesforce Delivery",
            "Managed Support",
          ]}
          interestLabel="What do you need help with?"
          projectTypeLabel="Engagement Type"
          messageLabel="Project Brief"
          messagePlaceholder="Tell us which workflow, process, or Salesforce challenge you want to improve."
          submitButtonLabel="Discuss Your Workflow"
          showLeadMagnet={false}
        />
      </main>

      <Footer
        logo={SITE_CONFIG.company}
        description="TechFi Labs builds AI agents, workflow automations, and Salesforce-connected systems for modern business teams."
        services={FOOTER_DATA.services}
        company={FOOTER_DATA.company}
        socialLinks={FOOTER_DATA.socialLinks}
      />

      <WhatsAppChatButton text="Hi! I want to discuss an AI automation workflow." />
    </div>
  );
}
