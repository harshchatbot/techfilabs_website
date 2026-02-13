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
    <section id="products" className="py-28 relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(134,239,172,0.2),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(74,222,128,0.16),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >
          <p className="inline-flex items-center rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-1 text-xs tracking-[0.2em] uppercase text-lime-100 mb-5">
            Product Studio
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Products we build, run, and scale.
          </h2>
          <p className="text-lg text-emerald-100/80">
            Sentinel is live. More mobile apps, web products, and AI tools are listed here as they launch.
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
              className="rounded-3xl border border-white/15 bg-emerald-900/35 backdrop-blur-md p-7 flex flex-col"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-lime-100/80">
                  <product.icon className="w-4 h-4" />
                  {product.category}
                </span>
                <span className="text-xs font-semibold rounded-full px-3 py-1 border border-lime-300/40 text-lime-100 bg-lime-300/10">
                  {product.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-lime-100/85 mb-4">{product.tagline}</p>
              <p className="text-emerald-100/75 text-sm leading-relaxed mb-6 flex-grow">{product.summary}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.platforms.map((platform) => (
                  <span key={platform} className="rounded-full border border-white/20 px-3 py-1 text-xs text-emerald-50">
                    {platform}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2.5 text-sm font-semibold text-emerald-950 hover:bg-lime-200 transition-colors"
                >
                  View Product
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {product.links?.playStore && (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
