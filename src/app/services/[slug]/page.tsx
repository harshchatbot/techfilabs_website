import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Schema from "@/components/Schema";
import { SERVICE_LANDING_DATA } from "@/constants/data";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import { createNotFoundMetadata, createPageMetadata } from "@/utils/metadata";

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
    return createNotFoundMetadata("Service");
  }

  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_LANDING_DATA[slug];

  if (!service) {
    notFound();
  }

  const relatedServices = Object.values(SERVICE_LANDING_DATA)
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${service.canonical}/#service`,
        name: service.title,
        provider: {
          "@id": `${ORGANIZATION_CONFIG.url}/#organization`,
        },
        areaServed: ORGANIZATION_CONFIG.areasServed,
        description: service.heroSubtitle,
        serviceType: service.title,
        url: service.canonical,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${service.canonical}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: ORGANIZATION_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${ORGANIZATION_CONFIG.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: service.canonical,
          },
        ],
      },
      ...(service.faq && service.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${service.canonical}/#faq`,
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
    <div className="min-h-screen bg-[#FAF9F5] pb-20 pt-32 text-[#24231F] sm:pt-40">
      <Schema id={`service-${service.slug}-schema`} data={schemaData} />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <header className="max-w-4xl">
          <Link href="/services" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#9B482E] hover:underline">
            <ArrowRight aria-hidden="true" className="h-4 w-4 rotate-180" /> All services
          </Link>
          <p className="mb-5 mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B482E]">Our services</p>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,5.3rem)] font-normal leading-[1.05] tracking-[-0.055em]">{service.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#625F59]">{service.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#24231F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#49433E]">
              Discuss your project <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/917976111087" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center border-b border-[#A45137] text-sm font-semibold text-[#9B482E] hover:underline">WhatsApp</a>
          </div>
        </header>
        <div className="mt-14 grid gap-12 border-t border-[#24231F]/15 pt-10 lg:grid-cols-2 lg:gap-20">
          <section>
            <h2 className="font-serif text-2xl font-normal sm:text-3xl">What this helps you achieve</h2>
            <ul className="mt-6 space-y-4">
              {service.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#625F59]">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#9B482E]" />{item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-normal sm:text-3xl">What we deliver</h2>
            <ul className="mt-6 space-y-4">
              {service.capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#625F59]">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#9B482E]" />{item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <section className="mt-16 border-t border-[#24231F]/15 pt-10">
          <h2 className="font-serif text-2xl font-normal sm:text-3xl">How we work</h2>
          <div className="mt-6 grid border-t border-[#24231F]/15 sm:grid-cols-3">
            {service.process.map((step, index) => (
              <div key={step} className={`border-b border-[#24231F]/15 py-6 sm:pr-6 ${index > 0 ? "sm:border-l sm:pl-6" : ""}`}>
                <p className="text-xs font-semibold text-[#9B482E]">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#625F59]">{step}</p>
              </div>
            ))}
          </div>
        </section>
        {service.faq.length > 0 && (
          <section className="mt-16 grid gap-8 border-t border-[#24231F]/15 pt-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <h2 className="font-serif text-2xl font-normal sm:text-3xl">Questions, answered.</h2>
            <div className="border-t border-[#24231F]/15">
              {service.faq.map((item) => (
                <details key={item.q} className="group border-b border-[#24231F]/15">
                  <summary className="cursor-pointer py-5 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A45137]">{item.q}</summary>
                  <p className="pb-5 text-sm leading-relaxed text-[#625F59]">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
        <section className="mt-16 border-t border-[#24231F]/15 pt-10" aria-labelledby="related-services-heading">
          <h2 id="related-services-heading" className="font-serif text-2xl font-normal sm:text-3xl">Related services</h2>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {relatedServices.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#9B482E] hover:underline">
                {item.title} <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
