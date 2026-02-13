import {
  About,
  Contact,
  Footer,
  Hero,
  Navigation,
  ProductsShowcase,
  Services,
  Testimonials,
} from "../components";
import WhatsAppChatButton from "../components/WhatsAppChatButton";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import {
  ABOUT_DATA,
  CONTACT_INFO,
  FOOTER_DATA,
  PRODUCTS_DATA,
  SERVICES_DATA,
  SITE_CONFIG,
  TESTIMONIALS_DATA,
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
        title="TechFi Labs | Salesforce Consulting, App Development & AI Automation in Ajmer, Jaipur and Global"
        description="TechFi Labs helps businesses increase conversions, improve execution speed, and reduce operational effort through app development, Salesforce consulting, data migration, and AI automation."
        canonical="https://techfilabs.com/"
        type="website"
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
          primaryButton={{
            text: "Explore Products",
            action: () => {
              const productsSection = document.getElementById("products");
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: "smooth" });
              }
            },
          }}
        />

        <ProductsShowcase products={PRODUCTS_DATA} />

        <Services services={SERVICES_DATA} />

        <About
          logo={SITE_CONFIG.company}
          stats={ABOUT_DATA.stats}
          features={ABOUT_DATA.features}
        />

        <Testimonials testimonials={TESTIMONIALS_DATA} />

        <Contact contactInfo={CONTACT_INFO} products={PRODUCTS_DATA} />
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
