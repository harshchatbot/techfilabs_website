import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Footer, Navigation } from "../components";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import Mascot from "../components/ui/Mascot";
import {
  FOOTER_DATA,
  PRODUCT_PAGE_FALLBACK,
  PRODUCTS_DATA,
  SITE_CONFIG,
} from "../constants/data";

export default function ProductPage() {
  const { slug } = useParams();
  const product = PRODUCTS_DATA.find((item) => item.slug === slug);

  if (!product) {
    const FallbackIcon = PRODUCT_PAGE_FALLBACK.icon;

    return (
      <div className="min-h-screen bg-emerald-950 text-white">
        <Navigation
          logo={SITE_CONFIG.company}
          menuItems={SITE_CONFIG.navigation.menuItems}
          ctaButton={SITE_CONFIG.navigation.ctaButton}
        />
        <main className="pt-36 pb-24 px-6 max-w-4xl mx-auto text-center">
          <FallbackIcon className="w-14 h-14 mx-auto mb-5 text-lime-300" />
          <h1 className="text-4xl font-black mb-3">{PRODUCT_PAGE_FALLBACK.title}</h1>
          <p className="text-emerald-100/80 mb-8">{PRODUCT_PAGE_FALLBACK.description}</p>
          <Link
            to={PRODUCT_PAGE_FALLBACK.cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-semibold text-emerald-950"
          >
            {PRODUCT_PAGE_FALLBACK.cta.label}
          </Link>
        </main>
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: product.category,
    operatingSystem: product.platforms.join(", "),
    description: product.summary,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    brand: { "@type": "Organization", name: "TechFi Labs" },
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Seo
        title={`${product.name} | TechFi Labs`}
        description={product.summary}
        canonical={`https://techfilabs.com/products/${product.slug}`}
        type="website"
      />
      <Schema id={`product-${product.slug}-schema`} data={schemaData} />

      <Navigation
        logo={SITE_CONFIG.company}
        menuItems={SITE_CONFIG.navigation.menuItems}
        ctaButton={SITE_CONFIG.navigation.ctaButton}
      />

      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lime-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-lime-200 mb-4">{product.category}</p>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">{product.name}</h1>
              <p className="text-xl text-lime-100/90 mb-3">{product.tagline}</p>
              <p className="text-emerald-100/80 leading-relaxed mb-8">{product.description}</p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {product.highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="text-sm text-emerald-100/70">{item.label}</p>
                    <p className="text-lg font-bold text-lime-100">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={product.ctas.primary.href}
                  className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-semibold text-emerald-950 hover:bg-lime-200 transition-colors"
                >
                  {product.ctas.primary.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={product.ctas.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  {product.ctas.secondary.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-lime-200/30 bg-gradient-to-b from-emerald-800/70 to-emerald-950 p-8 min-h-[420px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(190,242,100,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(74,222,128,0.18),transparent_55%)]" />
              <div className="relative z-10 text-center">
                <Mascot size="md" className="mx-auto mb-5" />
                <p className="text-lime-100 text-sm max-w-xs mx-auto">
                  Add Sentinel screenshots or demo video links here to enrich the product page.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="rounded-3xl border border-white/10 bg-emerald-900/30 p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-6">Feature Breakdown</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-emerald-50/90">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>
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
