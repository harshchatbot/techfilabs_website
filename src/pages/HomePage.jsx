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
        title="TechFi Labs | Salesforce Consulting, Delivery & Managed Services"
        description="TechFi Labs helps businesses with Salesforce consulting, implementation, managed services, production support, staff augmentation, Experience Cloud delivery, and integrations."
        canonical="https://techfilabs.com/"
        type="website"
        keywords="Salesforce consulting, Salesforce implementation, Salesforce managed services, Salesforce production support, Salesforce staff augmentation, Experience Cloud, Salesforce integrations, Apex LWC Flows, Salesforce support company, TechFi Labs"
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
          eyebrow="Salesforce consulting and delivery"
          headline="Salesforce Consulting, Delivery & Managed Services"
          subtitle="TechFi Labs helps businesses and consulting partners design, implement, support, and scale Salesforce solutions with expert delivery teams, flexible engagement models, and practical execution."
          primaryButton={{
            text: "Book a Consultation",
            action: () => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            },
          }}
          secondaryButton={{
            text: "Explore Services",
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

        <Services
          title="Salesforce Services Built Around Your Delivery Needs"
          subtitle="Whether you need a new Salesforce implementation, ongoing production support, managed services, or skilled Salesforce professionals to extend your team, TechFi Labs helps you move faster with reliable execution."
          services={HOMEPAGE_SERVICES_DATA}
        />

        <WhoWeHelp
          title="Who we work with"
          subtitle="We support consulting firms, business teams, and delivery organizations that need reliable Salesforce execution capacity."
          items={[
            {
              title: "Consulting Firms",
              description:
                "Add implementation, engineering, and support bandwidth without stretching internal teams too thin.",
            },
            {
              title: "Business Teams",
              description:
                "Get help designing, improving, and supporting Salesforce when the in-house team needs experienced delivery backing.",
            },
            {
              title: "Growth-Stage Companies",
              description:
                "Move Salesforce work forward with practical support across build, integration, issue resolution, and ongoing improvements.",
            },
            {
              title: "Delivery Teams",
              description:
                "Work with a Salesforce delivery company that can add team capacity, support execution, and help maintain momentum across active programs.",
            },
          ]}
        />

        <EngagementModels
          title="From Strategy to Ongoing Support"
          subtitle="We work from discovery through delivery and post-launch support with a practical, execution-first approach."
          models={HOMEPAGE_ENGAGEMENT_MODELS}
        />

        <CapabilitiesGrid capabilities={HOMEPAGE_CAPABILITIES} />

        <CaseStudies
          title="Representative Salesforce Delivery Experience"
          subtitle="Examples of Salesforce delivery experience across regulated environments, portals, and field operations programs."
          disclaimer="Representative examples based on Salesforce delivery experience across enterprise engagements. Client names and confidential details are intentionally omitted."
          studies={CASE_STUDIES_DATA}
          showLinks={false}
        />

        <About
          title="Built for Teams That Need Reliable Salesforce Execution"
          subtitle="Professional Salesforce consulting and delivery support focused on maintainability, execution quality, and long-term reliability."
          description="TechFi Labs supports Salesforce implementation work, managed services, production support, staff augmentation, Experience Cloud delivery, and integrations with a practical engineering mindset and business-focused execution."
          logo={SITE_CONFIG.company}
          stats={ABOUT_DATA.stats}
          features={ABOUT_DATA.features}
        />

        <ProductsShowcase products={innovationProducts} />

        <Contact
          title="Need Salesforce delivery support?"
          subtitle="Let’s discuss your Salesforce roadmap, support needs, or talent requirements."
          contactInfo={CONTACT_INFO}
          products={PRODUCTS_DATA}
          interestOptions={[
            "Salesforce Consulting",
            "Salesforce Staff Augmentation",
            "Salesforce Production Support",
            "Salesforce Managed Services",
            "Salesforce Implementation",
            "Experience Cloud & Integrations",
          ]}
          projectTypes={[
            "Consulting Support",
            "Implementation Project",
            "Managed Services",
            "Production Support",
            "Staff Augmentation",
          ]}
          interestLabel="Service Needed"
          projectTypeLabel="Engagement Model"
          messageLabel="Support Requirement"
          messagePlaceholder="Tell us about your Salesforce roadmap, support needs, or team extension requirement."
          submitButtonLabel="Book a Consultation"
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
