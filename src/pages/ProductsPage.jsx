import { Footer, Navigation, ProductsShowcase } from "../components";
import Seo from "../components/Seo";
import { FOOTER_DATA, PRODUCTS_DATA, SITE_CONFIG } from "../constants/data";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Seo
        title="Products | TechFi Labs"
        description="Explore products built by TechFi Labs across mobile apps, web platforms, and AI tools."
        canonical="https://techfilabs.com/products"
        type="website"
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
