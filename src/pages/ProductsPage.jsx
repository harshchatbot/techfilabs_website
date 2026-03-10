import { Footer, Navigation, ProductsShowcase } from "../components";
import Seo from "../components/Seo";
import { FOOTER_DATA, PRODUCTS_DATA, SITE_CONFIG } from "../constants/data";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Seo
        title="Products by TechFi Labs | Mobile Apps, Web Apps and AI Tools"
        description="Explore TechFi Labs products including Sentinel Society Management, FieldLens for Salesforce, RangManch AI, and upcoming web and AI platforms."
        canonical="https://techfilabs.com/products"
        type="website"
        keywords="Tech products, Salesforce Chrome extension, FieldLens for Salesforce, RangManch AI, AI video generation SaaS, AI image generation platform, society management app, software products by IT company, Ajmer software company, Rajasthan IT company, India software products"
      />

      <Navigation
        logo={SITE_CONFIG.company}
        menuItems={SITE_CONFIG.navigation.menuItems}
        ctaButton={SITE_CONFIG.navigation.ctaButton}
      />

      <main className="pt-28">
        <ProductsShowcase products={PRODUCTS_DATA} />
      </main>

      <Footer
        logo={SITE_CONFIG.company}
        services={FOOTER_DATA.services}
        company={FOOTER_DATA.company}
        socialLinks={FOOTER_DATA.socialLinks}
      />
    </div>
  );
}
