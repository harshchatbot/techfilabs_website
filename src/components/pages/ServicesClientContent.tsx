"use client";

import Services from "@/components/sections/Services";
import FAQSection from "@/components/sections/FAQSection";
import Schema from "@/components/Schema";
import { HOMEPAGE_SERVICES_DATA, SERVICES_DATA, SERVICES_PAGE_FAQS } from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    <div className="pt-24 pb-16">
      <Schema id="services-page-schema" data={servicesSchema} />
      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Services & Capabilities
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-heading mb-6">
            AI Automation & Salesforce Delivery Services
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We build production-ready AI workflows, WhatsApp integrations, and Salesforce CRM architectures engineered for measurable business impact.
          </p>
        </div>
      </div>

      {/* Main Services Interactive Showcase */}
      <Services
        title="What We Build & Deliver"
        subtitle="Explore our core service lines built for enterprise efficiency and modern SaaS execution."
        services={HOMEPAGE_SERVICES_DATA}
      />

      {/* Full Detailed Service Breakdown Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-heading">
            Specialized Service Categories
          </h2>
          <p className="mt-3 text-slate-600">
            Click any service to view full capabilities, deliverables, and case study outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.slug}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-md"
                >
                  View Service Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services FAQ Section */}
      <div className="mt-16">
        <FAQSection
          eyebrow="Services & Capabilities FAQ"
          title="Service Delivery & Technology FAQ"
          faqs={SERVICES_PAGE_FAQS}
          schemaId="services-page-faq-schema"
        />
      </div>
    </div>
  );
}
