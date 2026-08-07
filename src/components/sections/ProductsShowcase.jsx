import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.45 },
  }),
};

export default function ProductsShowcase({ products = [] }) {
  return (
    <section id="products" className="py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-1 text-xs tracking-[0.2em] uppercase text-green-700 mb-5">
            Innovation Lab
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
            Product and automation experiments from TechFi Labs.
          </h2>
          <p className="text-lg text-gray-500">
            Alongside our Salesforce delivery practice, TechFi Labs also explores AI and automation products through our Innovation Lab.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.article
              key={product.slug}
              custom={index}
              variants={cardMotion}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex min-w-0 flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gray-400">
                  <product.icon className="w-4 h-4" />
                  {product.category}
                </span>
                <span className="text-xs font-semibold rounded-full px-3 py-1 border border-green-200 text-green-700 bg-green-50">
                  {product.status}
                </span>
              </div>

              <h3 className="mb-2 break-words text-2xl font-semibold text-gray-900">{product.name}</h3>
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-green-700">
                  {product.category}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{product.tagline}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{product.summary}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.platforms.map((platform) => (
                  <span key={platform} className="rounded-full border border-gray-100 px-3 py-1 text-xs text-gray-600">
                    {platform}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex max-w-full items-center gap-2 rounded-full bg-lime-300 px-4 py-2.5 text-center text-sm font-semibold leading-tight text-green-950 transition-colors hover:bg-lime-200"
                >
                  View Product
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {product.links?.playStore && (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex max-w-full items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-center text-xs font-semibold leading-tight text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path fill="#34A853" d="M3 3l10.5 9L3 21z" />
                      <path fill="#4285F4" d="M13.5 12L17 8.5 21 12l-4 3.5z" />
                      <path fill="#FBBC05" d="M3 3l14 5.5L13.5 12z" />
                      <path fill="#EA4335" d="M3 21l14-5.5L13.5 12z" />
                    </svg>
                    Get it on Google Play
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {product.links?.chromeWebStore && (
                  <a
                    href={product.links.chromeWebStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex max-w-full items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-center text-xs font-semibold leading-tight text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path
                        fill="#EA4335"
                        d="M12 12L5.2 12.1A6.95 6.95 0 0 1 12 2a6.94 6.94 0 0 1 6.08 3.55H12z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 12l3.4 5.9A7 7 0 0 1 2.92 12h9.08z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M12 12h6.08A7 7 0 0 1 15.4 17.9L12 12z"
                      />
                      <circle cx="12" cy="12" r="3.2" fill="#4285F4" />
                    </svg>
                    Add to Chrome
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {product.links?.website && (
                  <a
                    href={product.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex max-w-full items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-center text-xs font-semibold leading-tight text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    Visit Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
