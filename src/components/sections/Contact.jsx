import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = ({ 
  title = "Start Your Transformation",
  subtitle = "Ready to scale? Connect with our Salesforce & AI experts for a free consultation tailored to your business needs.",
  contactInfo = {
    phone: "+91 7976111087",
    email: "thetechfilabs@gmail.com",
    address: "Jaipur, Rajasthan 302001"
  },
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formattedMessage = formData.company 
      ? `- ${formData.company}: ${formData.message}`
      : formData.message

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_message: formattedMessage,
      to_name: 'TechfiLabs Team',
      website_source: 'TechFi Website',
      subject: `New Contact Form Submission from ${formData.name}`
    }

    try {
      await emailjs.send(
        'service_n22qsrq', 
        'template_akdqils', 
        templateParams,
        '6ICiKx6wEuxS-3WZ5' 
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={`py-32 bg-black relative overflow-hidden ${className}`}>
      
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  { icon: MapPin, label: "Address", value: contactInfo.address, href: "#" }
                ].map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                      <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">{item.label}</h4>
                      <p className="text-lg text-white font-medium group-hover:text-blue-400 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900/40 rounded-3xl p-8 md:p-10 border border-white/5 backdrop-blur-xl"
          >
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-200">Message sent successfully! We'll be in touch.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-200">Something went wrong. Please try again later.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400 ml-1">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700"
                  placeholder="Your Company Ltd"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-400 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group mt-4"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact