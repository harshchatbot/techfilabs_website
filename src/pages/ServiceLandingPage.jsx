import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Footer, Navigation } from "../components";
import Schema from "../components/Schema";
import Seo from "../components/Seo";
import { FOOTER_DATA, SERVICE_LANDING_DATA, SITE_CONFIG } from "../constants/data";

export default function ServiceLandingPage() {
  const { slug } = useParams();
  const service = SERVICE_LANDING_DATA[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-emerald-950 text-white">
        <Navigation
          logo={SITE_CONFIG.company}
          menuItems={SITE_CONFIG.navigation.menuItems}
          ctaButton={SITE_CONFIG.navigation.ctaButton}
        />
        <main className="pt-36 pb-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">Service page not found</h1>
          <p className="text-emerald-100/80 mb-8">Please return to home and select a valid service.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-semibold text-emerald-950">
            Back to Home
          </Link>
        </main>
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "TechFi Labs",
      url: "https://techfilabs.com/",
    },
    areaServed: ["Ajmer", "Jaipur", "India", "USA", "UK", "UAE"],
    description: service.heroSubtitle,
    serviceType: service.title,
    url: service.canonical,
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={service.canonical}
        type="website"
      />
      <Schema id={`service-${service.slug}-schema`} data={schemaData} />

      <Navigation
        logo={SITE_CONFIG.company}
        menuItems={SITE_CONFIG.navigation.menuItems}
        ctaButton={SITE_CONFIG.navigation.ctaButton}
      />

      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-lime-200 mb-4">Service Page</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 max-w-5xl">{service.heroTitle}</h1>
          <p className="text-xl text-lime-100/90 max-w-4xl mb-8">{service.heroSubtitle}</p>
          <p className="text-emerald-100/80 max-w-4xl leading-relaxed">{service.intro}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-semibold text-emerald-950 hover:bg-lime-200 transition-colors"
            >
              Get Your Outcome Plan <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/917976111087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-bold mb-4">Key Outcomes</h2>
            <ul className="space-y-3">
              {service.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-emerald-50/90">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-lime-200 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-bold mb-4">What We Deliver</h2>
            <ul className="space-y-3">
              {service.capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-emerald-50/90">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-lime-200 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-16">
          <div className="rounded-3xl border border-white/10 bg-emerald-900/30 p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Delivery Process</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {service.process.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-lime-200 mb-2">Step {index + 1}</p>
                  <p className="text-emerald-50/90">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faq.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-emerald-950/50 p-5">
                  <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-emerald-100/80">{item.a}</p>
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
