import {
  About,
  CapabilitiesGrid,
  CaseStudies,
  Contact,
  EngagementModels,
  Footer,
  Hero,
  Navigation,
  ProductsShowcase,
  Services,
  TrustStrip,
  WhoWeHelp,
} from "../components";
import WhatsAppChatButton from "../components/WhatsAppChatButton";
import Schema from "../components/Schema";
import Seo from "../components/Seo";
import {
  ABOUT_DATA,
  CASE_STUDIES_DATA,
  CONTACT_INFO,
  FOOTER_DATA,
  HOMEPAGE_CAPABILITIES,
  HOMEPAGE_ENGAGEMENT_MODELS,
  HOMEPAGE_SERVICES_DATA,
  HOMEPAGE_TRUST_STRIP,
  HOMEPAGE_WHO_WE_HELP,
  PRODUCTS_DATA,
  SITE_CONFIG,
} from "../constants/data";

export default function HomePage() {
  const innovationProducts = PRODUCTS_DATA.filter((product) => ["Live", "Beta"].includes(product.status)).slice(0, 3);
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
    email: "thetechfilabs@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jaipur, Rajasthan",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
    areaServed: ["Ajmer", "Jaipur", "India", "USA", "UK", "UAE"],
    sameAs: ["https://www.linkedin.com/company/the-technology-fiction/"],
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Seo
        title="TechFi Labs | Offshore Salesforce Delivery Partner from India"
        description="TechFi Labs helps consulting firms and businesses scale Salesforce delivery through staff augmentation, production support, managed services, and implementation support from India."
        canonical="https://techfilabs.com/"
        type="website"
        keywords="offshore Salesforce delivery partner, Salesforce staff augmentation India, Salesforce production support, Salesforce managed services India, Salesforce implementation support, Salesforce offshore team, Salesforce consulting firms support, Salesforce developers India, Salesforce support partner, TechFi Labs"
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
          eyebrow="Salesforce delivery from India"
          headline="Your Offshore Salesforce Delivery Partner"
          subtitle="TechFi Labs helps consulting firms and businesses scale Salesforce delivery through staff augmentation, production support, managed services, and implementation support from India."
          primaryButton={{
            text: "Book a 15-Minute Call",
            action: () => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            },
          }}
          secondaryButton={{
            text: "View Salesforce Services",
            action: () => {
              const servicesSection = document.getElementById("services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            },
          }}
          stats={ABOUT_DATA.stats}
          scrollTarget="services"
        />

        <TrustStrip items={HOMEPAGE_TRUST_STRIP} />

        <WhoWeHelp items={HOMEPAGE_WHO_WE_HELP} />

        <Services
          title="What we do"
          subtitle="TechFi Labs focuses on four Salesforce delivery services that help consulting firms and businesses add offshore execution capacity without adding unnecessary complexity."
          services={HOMEPAGE_SERVICES_DATA}
        />

        <EngagementModels models={HOMEPAGE_ENGAGEMENT_MODELS} />

        <CapabilitiesGrid capabilities={HOMEPAGE_CAPABILITIES} />

        <CaseStudies
          title="Proof of practical Salesforce delivery experience"
          subtitle="A real delivery example from compliance-heavy Salesforce work, showing implementation depth, support awareness, and enterprise execution discipline."
          studies={CASE_STUDIES_DATA}
        />

        <About
          title="Why TechFi Labs"
          subtitle="Salesforce-focused delivery support built for consulting firms and businesses that need dependable offshore execution."
          description="TechFi Labs is a Salesforce-focused consulting and delivery company from India. We support consulting firms, IT agencies, startups, and businesses with hands-on implementation help, production support, managed services, and staff augmentation. The delivery model is founder-led, technically grounded, cost-effective, and designed for long-term reliability."
          logo={SITE_CONFIG.company}
          stats={ABOUT_DATA.stats}
          features={ABOUT_DATA.features}
        />

        <ProductsShowcase products={innovationProducts} />

        <Contact
          title="Need reliable Salesforce delivery support?"
          subtitle="Whether you need one Salesforce resource, a managed support pod, or implementation support, TechFi Labs can help you scale with confidence."
          contactInfo={CONTACT_INFO}
          products={PRODUCTS_DATA}
          interestOptions={[
            "Salesforce Staff Augmentation",
            "Salesforce Production Support",
            "Salesforce Managed Services",
            "Salesforce Implementation Support",
          ]}
          projectTypes={[
            "Dedicated Salesforce Resource",
            "Managed Salesforce Pod",
            "Monthly Support Retainer",
            "Project-Based Implementation",
          ]}
          interestLabel="Service Needed"
          projectTypeLabel="Engagement Model"
          messageLabel="Support Requirement"
          messagePlaceholder="Tell us what Salesforce delivery, support, or implementation help you need."
          submitButtonLabel="Schedule a Quick Call"
          showLeadMagnet={false}
        />
      </main>

      <Footer
        logo={SITE_CONFIG.company}
        services={FOOTER_DATA.services}
        company={FOOTER_DATA.company}
        socialLinks={FOOTER_DATA.socialLinks}
      />

      <WhatsAppChatButton />
    </div>
  );
}
