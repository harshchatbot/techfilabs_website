"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SalesforceAccelerators from "@/components/sections/SalesforceAccelerators";
import FAQSection from "@/components/sections/FAQSection";
import Schema from "@/components/Schema";
import ProductArtwork from "@/components/products/ProductArtwork";
import { PRODUCTS_DATA, HOMEPAGE_ACCELERATORS, PRODUCTS_PAGE_FAQS } from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export default function ProductsClientContent() {
  const reduceMotion = useReducedMotion();
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
    <div className="pb-16 pt-28">
      <Schema id="products-page-schema" data={productsSchema} />
      <section className="relative overflow-hidden bg-[#092c25] py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(110,231,183,0.15),transparent_45%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">TechFi Labs · Software portfolio</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Built to solve.<br /><span className="text-emerald-300">Designed to feel effortless.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/75 sm:text-lg">
            Discover our creator tools, Salesforce software, counter solutions, and operational products. Explore real product imagery and what each experience is designed to do.
          </p>
        </div>
      </section>

      <section aria-label="Software products" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {PRODUCTS_DATA.map((product, index) => (
            <motion.article
              key={product.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.38, delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.16) }}
              className={`group flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-[#f8fcf9] p-3 shadow-sm transition-shadow hover:shadow-xl sm:p-4 ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <ProductArtwork product={product} className={index === 0 ? "h-[300px] sm:h-[420px]" : "h-[260px] sm:h-[300px]"} />
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{product.category}</span>
                  <span className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-800">{product.status}</span>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0a2b23] sm:text-3xl">{product.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">{product.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.highlights.slice(0, 3).map((highlight) => (
                    <span key={highlight.label} className="rounded-full border border-emerald-900/10 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">{highlight.value}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-900/10 pt-5">
                  <Link href={`/products/${product.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0a2b23] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
                    View product <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                  {product.links.website && <a href={product.links.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
                    Product website <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          Official product artwork and existing screenshots are used where available. Desi POS currently offers a private workspace sign-in; its card uses official branding rather than a fabricated application screenshot.
        </p>
      </section>

      <SalesforceAccelerators
        title="More Delivery Tools & Frameworks"
        subtitle="Reusable frameworks, RAG systems, and production starter kits built for clients."
        items={HOMEPAGE_ACCELERATORS}
      />
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
