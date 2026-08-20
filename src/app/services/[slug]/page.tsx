import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Schema from "@/components/Schema";
import { SERVICE_LANDING_DATA } from "@/constants/data";
import { ORGANIZATION_CONFIG } from "@/config/organization";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_LANDING_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_LANDING_DATA[slug];

  if (!service) {
    return {
      title: `Service Not Found | ${ORGANIZATION_CONFIG.name}`,
    };
  }

  return {
    title: `${service.seoTitle} | ${ORGANIZATION_CONFIG.name}`,
    description: service.seoDescription,
    alternates: {
      canonical: service.canonical,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_LANDING_DATA[slug];

  if (!service) {
    notFound();
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        provider: {
          "@type": "Organization",
          name: ORGANIZATION_CONFIG.name,
          url: ORGANIZATION_CONFIG.url,
        },
        areaServed: ORGANIZATION_CONFIG.areasServed,
        description: service.heroSubtitle,
        serviceType: service.title,
        url: service.canonical,
      },
      ...(service.faq && service.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: service.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-white pt-28 pb-20">
      <Schema id={`service-${service.slug}-schema`} data={schemaData} />

      <main>
        <section className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-lime-200 mb-4">Service Page</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 max-w-5xl">{service.heroTitle}</h1>
          <p className="text-xl text-lime-100/90 max-w-4xl mb-8">{service.heroSubtitle}</p>
          <p className="text-emerald-100/80 max-w-4xl leading-relaxed">{service.intro}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-semibold text-emerald-950 hover:bg-lime-200 transition-colors"
            >
              Get Your Outcome Plan <ArrowRight className="w-4 h-4" />
            </Link>
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
    </div>
  );
}
