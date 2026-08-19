import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Schema from "@/components/Schema";
import { PRODUCTS_DATA, PRODUCT_PAGE_FALLBACK } from "@/constants/data";

const PRODUCT_THEMES: Record<string, Record<string, string>> = {
  sentinel: {
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
    surfaceCard: "border-[#d7c8ae]/25 bg-[#2b1c15]/45",
    sectionLabel: "text-[#e7d8be]",
    muted: "text-[#d9c8ad]",
  },
  default: {
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
    surfaceCard: "border-white/10 bg-white/5",
    sectionLabel: "text-lime-200",
    muted: "text-emerald-100/75",
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: `${PRODUCT_PAGE_FALLBACK.title} | TechFi Labs`,
    };
  }

  return {
    title: `${product.name} | TechFi Labs`,
    description: product.summary,
    alternates: {
      canonical: `https://techfilabs.com/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((item) => item.slug === slug);

  if (!product) {
    notFound();
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

  const descriptionParagraphs = product.description
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const heroTitle = product.heroHeadline || product.name;
  const heroSubtext = product.heroSubtext || product.tagline;
  const brandName = product.brandName || product.name;

  const isSentinelTheme = product.theme === "sentinel";
  const galleryAspectClass = isSentinelTheme ? "aspect-[9/16]" : "aspect-[16/10]";
  const theme = PRODUCT_THEMES[product.theme] || PRODUCT_THEMES.default;

  return (
    <div className={`min-h-screen ${theme.pageBg} pt-28 pb-20`}>
      <Schema id={`product-${product.slug}-schema`} data={schemaData} />

      <main>
        <section className="max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 py-2 transition-colors ${theme.backLink}`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${theme.tag}`}>{brandName}</p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs tracking-[0.2em] uppercase ${theme.tag}`}>{product.category}</span>
                <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${theme.highlightCard} ${theme.highlightValue}`}>
                  {product.status}
                </span>
              </div>
              <h1 className={`mb-4 break-words text-4xl font-black tracking-tight md:text-6xl ${theme.title}`}>{heroTitle}</h1>
              <p className={`text-xl mb-4 ${theme.subtitle}`}>{heroSubtext}</p>
              <p className={`text-base sm:text-lg leading-relaxed mb-8 ${theme.body}`}>{product.summary}</p>

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
                  className={`inline-flex min-h-[48px] max-w-full items-center gap-2 rounded-full px-6 py-3 text-center font-semibold leading-tight transition-colors ${theme.ctaPrimary}`}
                >
                  {product.ctas.primary.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={product.ctas.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-[48px] max-w-full items-center gap-2 rounded-full border px-6 py-3 text-center font-semibold leading-tight transition-colors ${theme.ctaSecondary}`}
                >
                  {product.ctas.secondary.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
                {product.links?.playStore && (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[48px] max-w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left transition-colors ${theme.ctaSecondary}`}
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
                {product.links?.chromeWebStore && (
                  <a
                    href={product.links.chromeWebStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[48px] max-w-full items-center gap-3 rounded-xl border px-4 py-2.5 text-left transition-colors ${theme.ctaSecondary}`}
                    aria-label={`Add ${product.name} to Chrome`}
                  >
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-md bg-white/10">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                        <path
                          fill="#EA4335"
                          d="M12 12L5.2 12.1A6.95 6.95 0 0 1 12 2a6.94 6.94 0 0 1 6.08 3.55H12z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 12l3.4 5.9A7 7 0 0 1 2.92 12h9.08z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M12 12h6.08A7 7 0 0 1 15.4 17.9L12 12z"
                        />
                        <circle cx="12" cy="12" r="3.2" fill="#4285F4" />
                      </svg>
                    </span>
                    <span className="leading-tight text-left">
                      <span className="block text-[10px] uppercase tracking-[0.16em] opacity-80">Available on</span>
                      <span className="block text-sm font-bold">Chrome Web Store</span>
                    </span>
                  </a>
                )}
                {product.links?.website && (
                  <a
                    href={product.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[48px] max-w-full items-center gap-2 rounded-full border px-6 py-3 text-center font-semibold leading-tight transition-colors ${theme.ctaSecondary}`}
                  >
                    Visit Product Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <div className={`relative min-h-[420px] overflow-hidden rounded-3xl border p-4 sm:p-6 ${theme.mediaCard}`}>
              <div className={`absolute inset-0 ${theme.mediaGlow}`} />
              <div className="relative z-10">
                {product.screenshots?.length ? (
                  <div className="grid grid-cols-1 gap-3 pr-1 sm:grid-cols-2">
                    {product.screenshots.map((src, index) => (
                      <div
                        key={src}
                        className={`w-full ${galleryAspectClass} overflow-hidden rounded-2xl border p-2 ${theme.shotCard}`}
                      >
                        <img
                          src={src}
                          alt={`${product.name} screenshot ${index + 1}`}
                          loading="lazy"
                          className="h-full w-full rounded-xl object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="min-h-[360px] flex items-center justify-center text-center">
                    <div className="max-w-md">
                      <p className={`text-xs uppercase tracking-[0.18em] ${theme.sectionLabel}`}>Product overview</p>
                      <h3 className={`mt-4 text-2xl font-semibold ${theme.title}`}>Preview highlights</h3>
                      <div className="mt-5 flex flex-wrap justify-center gap-2">
                        {(product.highlights || []).map((highlight) => (
                          <span
                            key={highlight.label}
                            className={`rounded-full border px-4 py-2 text-sm font-medium ${theme.featureCard}`}
                          >
                            {highlight.label}
                          </span>
                        ))}
                      </div>
                      <p className={`mx-auto mt-5 max-w-sm text-sm leading-relaxed ${theme.subtitle}`}>
                        {product.summary}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6">
            <div className={`rounded-3xl border p-8 md:p-10 ${theme.featureWrap}`}>
              <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${theme.sectionLabel}`}>Summary</p>
              <h2 className={`text-3xl font-bold mb-5 ${theme.title}`}>Built for speed, creativity, and scale</h2>
              {product.intro ? <p className={`text-lg leading-relaxed mb-6 ${theme.subtitle}`}>{product.intro}</p> : null}
              <div className="space-y-5">
                {descriptionParagraphs.map((paragraph) => (
                  <p key={paragraph} className={`leading-relaxed ${theme.body}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className={`rounded-3xl border p-8 ${theme.surfaceCard}`}>
                <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${theme.sectionLabel}`}>Audience</p>
                <div className="space-y-3">
                  {product.audience.map((item) => (
                    <div key={item} className={`rounded-2xl border px-4 py-3 ${theme.featureCard}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-3xl border p-8 ${theme.surfaceCard}`}>
                <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${theme.sectionLabel}`}>Platform Availability</p>
                <div className="flex flex-wrap gap-3">
                  {product.platforms.map((platform) => (
                    <span
                      key={platform}
                      className={`rounded-full border px-4 py-2 text-sm font-medium ${theme.featureCard}`}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
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

        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className={`rounded-3xl border p-8 md:p-10 ${theme.featureWrap}`}>
            <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${theme.sectionLabel}`}>Get Started</p>
            <h2 className={`text-3xl font-bold mb-4 ${theme.title}`}>
              {product.ctaSection?.title || `Take the next step with ${product.name}`}
            </h2>
            <p className={`max-w-3xl leading-relaxed mb-8 ${theme.muted}`}>
              {product.ctaSection?.description ||
                "See how this product fits into your workflow and start exploring the fastest path to launch."}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={product.ctas.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[48px] max-w-full items-center gap-2 rounded-full px-6 py-3 text-center font-semibold leading-tight transition-colors ${theme.ctaPrimary}`}
              >
                {product.ctas.primary.label}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={product.ctas.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[48px] max-w-full items-center gap-2 rounded-full border px-6 py-3 text-center font-semibold leading-tight transition-colors ${theme.ctaSecondary}`}
              >
                {product.ctas.secondary.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
