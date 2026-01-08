import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ 
  title = "Trusted by Innovators",
  subtitle = "Partnerships built on trust, transparency, and technical excellence.",
  testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "The Technology Fiction transformed our business with their Salesforce automation. Our sales process is now 40% more efficient!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "Their React development team delivered an exceptional website that perfectly represents our brand and drives conversions.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, GrowthCo",
      content: "Professional, reliable, and results-driven. The Technology Fiction exceeded our expectations in every way.",
      rating: 5
    }
  ],
  className = ""
}) => {
  return (
    <section id="testimonials" className={`py-32 bg-black relative overflow-hidden ${className}`}>
      
      {/* Background Decor */}
      <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="h-full flex flex-col p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm relative group">
                
                {/* Big Quote Icon Background */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors rotate-180" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg text-zinc-300 leading-relaxed mb-8 relative z-10 font-light">
                  "{testimonial.content}"
                </p>

                {/* Footer (User Info) - Pushed to bottom */}
                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white tracking-wide">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider text-[10px] font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;