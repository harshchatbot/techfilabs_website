"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCTS_DATA } from "@/constants/products/products";

const FEATURED_SLUGS = ["rangmanch-ai", "orgready", "desi-pos"];
const FEATURED = FEATURED_SLUGS
  .map((slug) => PRODUCTS_DATA.find((product) => product.slug === slug))
  .filter((product) => product !== undefined);

export default function HomeProductShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-products"
      aria-labelledby="our-products-title"
      className="bg-[#FAF9F5] py-14 text-[#24231f] sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A45137]">
              Made at TechFi Labs
            </p>
            <h2
              id="our-products-title"
              className="max-w-2xl font-serif text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[2.8rem]"
            >
              Thoughtful products, built for real life.
            </h2>
          </div>
          <Link
            href="/products"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-[#9B482E] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9B482E]"
          >
            Explore all products
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid border-t border-[#24231f]/15 md:grid-cols-3">
          {FEATURED.map((product, index) => {
            const image = product.coverImage || product.screenshots[0];
            const isRemote = Boolean(image && /^https?:\/\//.test(image));
            const isDesi = product.slug === "desi-pos";
            return (
              <motion.article
                key={product.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.05 }}
                className={`group flex items-center gap-4 border-b border-[#24231f]/15 py-5 md:flex-col md:items-stretch md:gap-0 md:border-b-0 md:py-6 ${index > 0 ? "md:border-l md:border-[#24231f]/15 md:pl-6" : ""} ${index < FEATURED.length - 1 ? "md:pr-6" : ""}`}
              >
                <Link
                  href={`/products/${product.slug}`}
                  aria-label={`Explore ${product.name}`}
                  className={`relative block h-24 w-28 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-36 md:h-40 md:w-full ${isDesi ? "bg-[#EEE4D4]" : "bg-[#EAEDE7]"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9B482E]`}
                >
                  {image ? (
                    <div className={`absolute inset-0 ${isDesi ? "p-5 md:p-8" : product.slug === "orgready" ? "p-2 md:p-3" : ""}`}>
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={image}
                          alt={product.coverAlt || `${product.name} product visual`}
                          fill
                          sizes="(max-width: 767px) 144px, 33vw"
                          unoptimized={isRemote}
                          className={isDesi || product.slug === "orgready" ? "object-contain" : "object-cover object-center"}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <product.icon aria-hidden="true" className="h-10 w-10 text-[#9B482E]" />
                    </div>
                  )}
                </Link>
                <div className="min-w-0 flex-1 md:pt-5">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A45137]">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold tracking-[-0.025em] sm:text-xl">
                    <Link href={`/products/${product.slug}`} className="hover:text-[#9B482E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B482E]">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#625f59] sm:text-sm">
                    {product.summary}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-2 inline-flex min-h-8 items-center gap-1.5 text-xs font-semibold text-[#9B482E] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9B482E] md:mt-3"
                  >
                    Learn more <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
