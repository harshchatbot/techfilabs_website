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
  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Seo
        title="TechFi Labs | Product Engineering, AI Automation, Salesforce"
        description="TechFi Labs builds and scales digital products. Explore Sentinel Society Management and our services across web, mobile, Salesforce, and AI automation."
        canonical="https://techfilabs.com/"
        type="website"
      />

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
