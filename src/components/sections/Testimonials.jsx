import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials({
  title = "Trusted by scaling teams",
  subtitle = "Partnerships built on delivery quality and measurable outcomes.",
  testimonials = [],
}) {
  return (
    <section id="testimonials" className="py-28 bg-emerald-900/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(190,242,100,0.14),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">{title}</h2>
          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-emerald-950/45 p-7"
            >
              <Quote className="w-8 h-8 text-lime-200/50 mb-4" />

              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-lime-200 text-lime-200" />
                ))}
              </div>

              <p className="text-emerald-50/85 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="pt-5 border-t border-white/10">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-100/65 mt-1">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
