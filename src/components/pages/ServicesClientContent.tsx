"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Schema from "@/components/Schema";
import FAQSection from "@/components/sections/FAQSection";
import { SERVICES_DATA, SERVICES_PAGE_FAQS } from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export default function ServicesClientContent() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TechFi Labs Services",
    itemListElement: SERVICES_DATA.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `${ORGANIZATION_CONFIG.url}/services/${service.slug}`,
    })),
  };

  return (
    <div className="bg-[#FAF9F5] pt-32 text-[#24231F] sm:pt-40">
      <Schema id="services-page-schema" data={servicesSchema} />
      <header className="mx-auto max-w-7xl px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B482E]">What we do</p>
        <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.055em]">
          Technology that makes work simpler.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#625F59] sm:text-lg">
          AI automation, Salesforce delivery and custom integrations, built around your business.
        </p>
      </header>
      <section aria-label="Our services" className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="grid border-t border-[#24231F]/15 md:grid-cols-2">
          {SERVICES_DATA.map((service, index) => (
            <article key={service.slug} className={`border-b border-[#24231F]/15 py-8 sm:py-10 ${index % 2 === 0 ? "md:pr-12" : "md:border-l md:border-[#24231F]/15 md:pl-12"}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#9B482E]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 max-w-lg font-serif text-2xl font-normal tracking-[-0.04em] sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#625F59] sm:text-base">{service.description}</p>
              <Link href={`/services/${service.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#9B482E] hover:underline">
                Explore service <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <FAQSection eyebrow="Good to know" title="A few quick answers." faqs={SERVICES_PAGE_FAQS} schemaId="services-page-faq-schema" />
    </div>
  );
}
