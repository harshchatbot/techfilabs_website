"use client";

import SalesforceAccelerators from "@/components/sections/SalesforceAccelerators";
import FAQSection from "@/components/sections/FAQSection";
import Schema from "@/components/Schema";
import { PRODUCTS_DATA, HOMEPAGE_ACCELERATORS, PRODUCTS_PAGE_FAQS } from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProductsClientContent() {
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TechFi Labs Products & Accelerators",
    itemListElement: PRODUCTS_DATA.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      description: product.summary,
      url: `${ORGANIZATION_CONFIG.url}/products/${product.slug}`,
    })),
  };

  return (
    <div className="pt-24 pb-16">
      <Schema id="products-page-schema" data={productsSchema} />
      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Proprietary Products & Accelerators
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-heading mb-6">
            Selected Work & Software Products
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We design, build, and deploy high-impact SaaS tools, Chrome extensions, and operational automation platforms.
          </p>
        </div>
      </div>

      {/* Flagship SaaS & Product Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS_DATA.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.slug}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 font-heading">
                          {product.name}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">{product.category}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-bold text-emerald-800">
                      {product.status}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {product.tagline}
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs font-bold text-slate-900">{h.value}</div>
                        <div className="text-[11px] text-slate-500">{h.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-md"
                >
                  View Product Showcase
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Homepage Accelerators & Tools Component */}
      <SalesforceAccelerators
        title="More Delivery Tools & Frameworks"
        subtitle="Reusable frameworks, RAG systems, and production starter kits built for clients."
        items={HOMEPAGE_ACCELERATORS}
      />

      {/* Products FAQ Section */}
      <div className="mt-16">
        <FAQSection
          eyebrow="Products & Licensing FAQ"
          title="Software & Accelerator FAQ"
          faqs={PRODUCTS_PAGE_FAQS}
          schemaId="products-page-faq-schema"
        />
      </div>
    </div>
  );
}
