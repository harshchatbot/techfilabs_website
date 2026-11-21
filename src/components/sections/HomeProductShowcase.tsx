"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCTS_DATA } from "@/constants/products/products";
import ProductArtwork from "@/components/products/ProductArtwork";

const FEATURED_SLUGS = ["rangmanch-ai", "orgready", "desi-pos", "fieldlens-for-salesforce", "sentinel-society-management"];
const FEATURED = FEATURED_SLUGS.map((slug) => PRODUCTS_DATA.find((product) => product.slug === slug)).filter((product) => product !== undefined);

export default function HomeProductShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="our-products" aria-labelledby="our-products-title" className="relative overflow-hidden bg-[#f7faf7] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_5%,rgba(167,243,208,0.24),transparent_35%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">Software we've built</p>
            <h2 id="our-products-title" className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-[#0b2d25] sm:text-5xl lg:text-6xl">
              Different ideas.<br /><span className="text-emerald-700">One engineering mindset.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From creator tools and Salesforce practice to counter billing and everyday operations — explore the products behind our engineering work.
            </p>
          </div>
          <Link href="/products" className="inline-flex min-h-12 shrink-0 items-center gap-2 self-start rounded-full border border-emerald-800 bg-[#0b2d25] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
            Explore all products <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-7">
          {FEATURED.map((product, index) => (
            <motion.article
              key={product.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.42, delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.18) }}
              className={`group flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-white p-3 shadow-[0_18px_60px_rgba(3,41,29,0.055)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(3,41,29,0.12)] sm:p-4 ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <ProductArtwork product={product} className={index === 0 ? "h-[300px] sm:h-[380px] lg:h-[420px]" : "h-[260px] sm:h-[300px]"} />
              <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{product.category}</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800">{product.status}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#0b2d25] sm:text-3xl">{product.name}</h3>
                <p className="max-w-2xl flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">{product.summary}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <Link href={`/products/${product.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                    Explore product <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {product.links.website && (
                    <a href={product.links.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">
                      Visit website <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-slate-500">Visuals are official product artwork or existing product screenshots. Product availability and access vary; Desi POS currently opens a private workspace sign-in.</p>
      </div>
    </section>
  );
}
