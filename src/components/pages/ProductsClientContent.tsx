"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Schema from "@/components/Schema";
import ProductArtwork from "@/components/products/ProductArtwork";
import { PRODUCTS_DATA, PRODUCTS_PAGE_FAQS } from "@/constants";
import { ORGANIZATION_CONFIG } from "@/config/organization";

export default function ProductsClientContent() {
  const reduceMotion = useReducedMotion();
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TechFi Labs software products",
    itemListElement: PRODUCTS_DATA.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      description: product.summary,
      url: `${ORGANIZATION_CONFIG.url}/products/${product.slug}`,
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PRODUCTS_PAGE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="bg-[#fbfcf9] pb-20 pt-28 text-[#102d26] sm:pt-36">
      <Schema id="products-page-schema" data={productsSchema} />
      <Schema id="products-page-faq-schema" data={faqSchema} />

      <header className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
          TechFi Labs / Our work
        </p>
        <h1 className="max-w-5xl text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
          Software, built<br />
          <span className="text-emerald-700">with purpose.</span>
        </h1>
        <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Thoughtful digital products across AI, Salesforce, creative tools and everyday business operations. Designed to solve real problems, simply.
          </p>
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Selected products / {String(PRODUCTS_DATA.length).padStart(2, "0")}
          </span>
        </div>
      </header>

      <section aria-label="Our software products" className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {PRODUCTS_DATA.map((product, index) => {
          const reverse = index % 2 === 1;
          const number = String(index + 1).padStart(2, "0");

          return (
            <motion.article
              key={product.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: reduceMotion ? 0 : 0.48, ease: "easeOut" }}
              className="border-t border-[#173d32]/15 py-12 sm:py-16 lg:py-20"
            >
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
                <div className={`min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
                  <div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.17em] text-emerald-800/75">
                    <span className="tabular-nums">{number}</span>
                    <span aria-hidden="true" className="h-px w-7 bg-emerald-800/30" />
                    <span>{product.category}</span>
                  </div>
                  <h2 className="max-w-lg text-4xl font-semibold leading-[1.07] tracking-[-0.055em] sm:text-5xl lg:text-[3.5rem]">
                    {product.name}
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                    {product.summary}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      {product.status}
                    </span>
                    {product.platforms.slice(0, 2).map((platform) => (
                      <span key={platform}>{platform}</span>
                    ))}
                  </div>
                  <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="group inline-flex min-h-11 items-center gap-2 border-b border-emerald-800 pb-1 text-sm font-semibold text-emerald-900 transition-colors hover:border-emerald-500 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      Explore {product.shortName}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" />
                    </Link>
                    {product.links.website && (
                      <a
                        href={product.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                      >
                        Visit website <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className={`min-w-0 ${reverse ? "md:order-1" : "md:order-2"}`}>
                  <ProductArtwork
                    product={product}
                    className="h-[270px] rounded-[1.25rem] sm:h-[360px] lg:h-[420px]"
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
        <p className="border-t border-[#173d32]/15 pt-5 text-xs leading-relaxed text-slate-500">
          Images are official product artwork or existing screenshots where available. Desi POS uses brand artwork because its application workspace is private.
        </p>
      </section>

      <section aria-labelledby="products-faq-title" className="mx-auto max-w-7xl px-5 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div className="grid gap-8 border-t border-[#173d32]/15 pt-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Good to know</p>
            <h2 id="products-faq-title" className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">A few quick answers.</h2>
          </div>
          <div>
            {PRODUCTS_PAGE_FAQS.map((item) => (
              <details key={item.question} className="group border-b border-[#173d32]/15">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-base font-medium leading-snug marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-700 transition-transform group-open:rotate-45" />
                </summary>
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div className="flex flex-col gap-6 border-t border-[#173d32]/15 pt-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Beyond the products</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
              Have a problem worth building for?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              We also design AI automation, Salesforce solutions and custom software for business teams.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex min-h-12 shrink-0 items-center gap-2 self-start border-b border-emerald-800 pb-1 text-sm font-semibold text-emerald-900 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            Start a conversation
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
