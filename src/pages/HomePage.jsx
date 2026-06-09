import {
  About,
  CapabilitiesGrid,
  CaseStudies,
  ClientLogos,
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
    <div className="min-h-screen bg-white text-gray-900">
      <Seo
        title="TechFi Labs | Salesforce Consulting, Delivery & Managed Services"
        description="TechFi Labs helps businesses and consulting firms with Salesforce consulting, implementation support, managed services, production support, staff augmentation, Experience Cloud delivery, integrations, and delivery support from India."
        canonical="https://techfilabs.com/"
        type="website"
        keywords="Salesforce consulting, Salesforce implementation support, Salesforce managed services, Salesforce production support, Salesforce staff augmentation, offshore Salesforce delivery from India, Experience Cloud, Salesforce integrations, Apex LWC Flows, Salesforce support company, TechFi Labs"
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
          eyebrow="Salesforce Consulting Partner"
          headline="We Help Businesses Get More From Salesforce."
          subtitle="From implementation to ongoing support — TechFi Labs helps your team set up, manage, and grow on Salesforce. Based in India, serving clients globally."
          primaryButton={{
            text: "Talk to a Salesforce Expert",
            action: () => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            },
          }}
          secondaryButton={{
            text: "See Our Services",
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
          title="What We Do"
          subtitle="We're a Salesforce consulting team. Here's how we help."
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
          note="TechFi Labs can work as a dedicated Salesforce resource, an extended delivery team, a managed support pod, or a project-based implementation partner."
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

        <ClientLogos />

        <About
          title="A Salesforce Team You Can Rely On"
          subtitle="We handle Salesforce so your team doesn't have to."
          description="TechFi Labs is a Salesforce consulting partner based in India. We work with businesses and consulting firms across the US, UK, and India to implement, support, and manage Salesforce — with clean code, clear documentation, and no surprises."
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
            "Salesforce Implementation Support",
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
          submitButtonLabel="Discuss Salesforce Support Needs"
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
