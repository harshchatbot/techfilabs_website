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

  const isSentinelTheme = product.theme === "sentinel";
  const theme = isSentinelTheme
    ? {
        pageBg: "bg-[#2b1c15] text-[#f3ead9]",
        backLink: "text-[#e7d8be] hover:text-[#fff7ea]",
        tag: "text-[#e7d8be]",
        title: "text-[#fff7ea]",
        subtitle: "text-[#f1e3cc]",
        body: "text-[#d9c8ad]",
        highlightCard: "border-[#d7c8ae]/30 bg-[#f3ead9]/5",
        highlightLabel: "text-[#c9b79a]",
        highlightValue: "text-[#fff2dc]",
        ctaPrimary: "bg-[#f3ead9] text-[#3d2a1f] hover:bg-[#fff7ea]",
        ctaSecondary: "border-[#d7c8ae]/40 text-[#f3ead9] hover:bg-[#f3ead9]/10",
        mediaCard: "border-[#d7c8ae]/35 bg-gradient-to-b from-[#5b3c2d]/50 to-[#2b1c15]",
        mediaGlow:
          "bg-[radial-gradient(circle_at_20%_20%,rgba(243,234,217,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(190,166,132,0.18),transparent_55%)]",
        shotCard: "border-[#d7c8ae]/30 bg-[#2b1c15]/60",
        featureWrap: "border-[#d7c8ae]/25 bg-[#f3ead9]/5",
        featureCard: "border-[#d7c8ae]/25 bg-[#2b1c15]/45 text-[#f1e4cf]",
      }
    : {
        pageBg: "bg-emerald-950 text-white",
        backLink: "text-lime-200 hover:text-white",
        tag: "text-lime-200",
        title: "text-white",
        subtitle: "text-lime-100/90",
        body: "text-emerald-100/80",
        highlightCard: "border-white/15 bg-white/5",
        highlightLabel: "text-emerald-100/70",
        highlightValue: "text-lime-100",
        ctaPrimary: "bg-lime-300 text-emerald-950 hover:bg-lime-200",
        ctaSecondary: "border-white/20 text-white hover:bg-white/10",
        mediaCard: "border-lime-200/30 bg-gradient-to-b from-emerald-800/70 to-emerald-950",
        mediaGlow:
          "bg-[radial-gradient(circle_at_20%_20%,rgba(190,242,100,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(74,222,128,0.18),transparent_55%)]",
        shotCard: "border-white/20 bg-emerald-950/40",
        featureWrap: "border-white/10 bg-emerald-900/30",
        featureCard: "border-white/10 bg-white/5 text-emerald-50/90",
      };

  return (
    <div className={`min-h-screen ${theme.pageBg}`}>
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
        themeVariant={isSentinelTheme ? "sentinel" : "green"}
      />

      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 transition-colors ${theme.backLink}`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${theme.tag}`}>{product.category}</p>
              <h1 className={`text-4xl md:text-6xl font-black tracking-tight mb-4 ${theme.title}`}>{product.name}</h1>
              <p className={`text-xl mb-3 ${theme.subtitle}`}>{product.tagline}</p>
              <p className={`leading-relaxed mb-8 ${theme.body}`}>{product.description}</p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {product.highlights.map((item) => (
                  <div key={item.label} className={`rounded-2xl border p-4 ${theme.highlightCard}`}>
                    <p className={`text-sm ${theme.highlightLabel}`}>{item.label}</p>
                    <p className={`text-lg font-bold ${theme.highlightValue}`}>{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={product.ctas.primary.href}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors ${theme.ctaPrimary}`}
                >
                  {product.ctas.primary.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={product.ctas.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition-colors ${theme.ctaSecondary}`}
                >
                  {product.ctas.secondary.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
                {product.links?.playStore && (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-colors ${theme.ctaSecondary}`}
                    aria-label={`Get ${product.name} on Google Play`}
                  >
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-md bg-white/10">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                        <path fill="#34A853" d="M3 3l10.5 9L3 21z" />
                        <path fill="#4285F4" d="M13.5 12L17 8.5 21 12l-4 3.5z" />
                        <path fill="#FBBC05" d="M3 3l14 5.5L13.5 12z" />
                        <path fill="#EA4335" d="M3 21l14-5.5L13.5 12z" />
                      </svg>
                    </span>
                    <span className="leading-tight text-left">
                      <span className="block text-[10px] uppercase tracking-[0.16em] opacity-80">Available on</span>
                      <span className="block text-sm font-bold">Google Play</span>
                    </span>
                  </a>
                )}
              </div>
            </div>

            <div className={`rounded-3xl border p-4 sm:p-6 min-h-[420px] relative overflow-hidden ${theme.mediaCard}`}>
              <div className={`absolute inset-0 ${theme.mediaGlow}`} />
              <div className="relative z-10">
                {product.screenshots?.length ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1">
                    {product.screenshots.map((src, index) => (
                      <div
                        key={src}
                        className={`w-full h-[360px] sm:h-[420px] rounded-2xl border p-2 ${theme.shotCard}`}
                      >
                        <img
                          src={src}
                          alt={`${product.name} screenshot ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="min-h-[360px] flex items-center justify-center text-center">
                    <div>
                      <Mascot size="md" className="mx-auto mb-5" />
                      <p className={`text-sm max-w-xs mx-auto ${theme.subtitle}`}>
                        Add Sentinel screenshots or demo video links here to enrich the product page.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className={`rounded-3xl border p-8 md:p-10 ${theme.featureWrap}`}>
            <h2 className="text-3xl font-bold mb-6">Feature Breakdown</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature) => (
                <div key={feature} className={`rounded-2xl border p-5 ${theme.featureCard}`}>
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
        themeVariant={isSentinelTheme ? "sentinel" : "green"}
      />
    </div>
  );
}
