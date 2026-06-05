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
  Testimonials,
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
        description="TechFi Labs helps businesses design, implement, integrate, and support Salesforce solutions through founder-led delivery, experienced Salesforce talent, and flexible managed service models."
        canonical="https://techfilabs.com/"
        type="website"
        keywords="Salesforce consulting company, Salesforce managed services, Salesforce production support, Salesforce implementation support, Salesforce staff augmentation, Salesforce engineering leadership, Salesforce support company India, Experience Cloud development, Apex LWC Flows Integrations, TechFi Labs"
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
          eyebrow="Founder-led Salesforce delivery"
          headline="Salesforce Consulting, Delivery & Managed Services"
          subtitle="TechFi Labs helps businesses design, implement, integrate, and support Salesforce solutions through founder-led delivery, experienced Salesforce talent, and flexible managed service models."
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
            text: "Explore Salesforce Services",
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
          title="Salesforce services we support"
          subtitle="TechFi Labs provides practical Salesforce consulting and delivery support across implementation, managed services, production support, engineering, and augmentation models."
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
              title: "Offshore-Capacity Seekers",
              description:
                "Work with an India-based team for staff augmentation, managed services, or delivery support models that can flex with demand.",
            },
          ]}
        />

        <EngagementModels
          title="How we work"
          subtitle="We can engage early as a consulting partner, support implementation delivery, stabilize production, and help you scale ongoing Salesforce execution."
          models={HOMEPAGE_ENGAGEMENT_MODELS}
        />

        <CapabilitiesGrid capabilities={HOMEPAGE_CAPABILITIES} />

        <CaseStudies
          title="Representative Salesforce Delivery Experience"
          subtitle="Representative examples of Salesforce delivery exposure across regulated environments, portals, and field operations programs."
          disclaimer="The following examples represent Salesforce delivery experience led by our founder across enterprise engagements. Client names and confidential details are intentionally omitted."
          studies={CASE_STUDIES_DATA}
          showLinks={false}
        />

        <About
          title="Built for Teams That Need Reliable Salesforce Execution"
          subtitle="Professional Salesforce consulting and delivery support with clear communication, senior ownership, and long-term maintainability in mind."
          description="TechFi Labs supports Salesforce implementation work, managed services, production support, and augmentation needs with founder-led delivery experience and hands-on engineering depth."
          logo={SITE_CONFIG.company}
          stats={ABOUT_DATA.stats}
          features={ABOUT_DATA.features}
        />

        <Testimonials testimonials={[]} />

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
