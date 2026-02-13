import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_n22qsrq";
const EMAILJS_NOTIFY_TEMPLATE_ID = "template_akdqils";
const EMAILJS_PUBLIC_KEY = "6ICiKx6wEuxS-3WZ5";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_leadmagnet_autoreply";
const LEAD_MAGNET_DOWNLOAD_URL = "https://techfilabs.com/lead-magnets/product-salesforce-growth-checklist-2026.pdf";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  productInterest: "Sentinel Society Management",
  projectType: "Product demo",
  message: "",
  website: "",
};

export default function Contact({
  title = "Let’s solve your growth challenge",
  subtitle = "Tell us your business goal and we will send an outcome-focused execution plan.",
  contactInfo = {
    phone: "+91 7976111087",
    email: "thetechfilabs@gmail.com",
    address: "Jaipur, Rajasthan 302001",
  },
  products = [],
}) {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [leadMagnetEmail, setLeadMagnetEmail] = useState("");
  const [leadMagnetSubmitting, setLeadMagnetSubmitting] = useState(false);
  const [leadMagnetStatus, setLeadMagnetStatus] = useState(null);

  const productOptions = products.map((product) => product.name);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.website) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const compiledMessage = [
      `Phone: ${formData.phone || "Not provided"}`,
      `Company: ${formData.company || "Not provided"}`,
      `Product Interest: ${formData.productInterest}`,
      `Project Type: ${formData.projectType}`,
      `Message: ${formData.message}`,
    ].join("\n");

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_message: compiledMessage,
      to_name: "TechFi Labs Team",
      website_source: "TechFi Website",
      subject: `New Website Lead from ${formData.name}`,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NOTIFY_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setSubmitStatus("success");
      setFormData(initialFormState);
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLeadMagnetSubmit = async (event) => {
    event.preventDefault();
    if (!leadMagnetEmail) return;

    setLeadMagnetSubmitting(true);
    setLeadMagnetStatus(null);

    const templateParams = {
      user_name: "Lead Magnet Request",
      user_email: leadMagnetEmail,
      user_message:
        "Requested lead magnet: Free Product + Salesforce Growth Checklist (2026 edition).",
      to_name: "TechFi Labs Team",
      website_source: "TechFi Website Lead Magnet",
      subject: "New Lead Magnet Signup",
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NOTIFY_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      const autoReplyParams = {
        user_name: "TechFi Labs",
        user_email: leadMagnetEmail,
        to_email: leadMagnetEmail,
        user_message: `Thanks for requesting the checklist. Download link: ${LEAD_MAGNET_DOWNLOAD_URL}`,
        lead_magnet_link: LEAD_MAGNET_DOWNLOAD_URL,
        subject: "Your Free Product + Salesforce Growth Checklist",
      };

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE_ID,
          autoReplyParams,
          EMAILJS_PUBLIC_KEY
        );
      } catch (autoReplyError) {
        console.warn("Auto-reply template failed. Keep team notification only:", autoReplyError);
      }

      setLeadMagnetStatus("success");
      setLeadMagnetEmail("");
    } catch (error) {
      console.error("Lead magnet signup failed:", error);
      setLeadMagnetStatus("error");
    } finally {
      setLeadMagnetSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(132,204,22,0.12),transparent_45%)]" />

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

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-7 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Talk to the team</h3>

            {[
              { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
              { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: MapPin, label: "Location", value: contactInfo.address, href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-lime-300/20 text-lime-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-emerald-100/70">{item.label}</p>
                  <p className="text-emerald-50">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-lime-300/25 bg-lime-300/10 p-5 mt-2">
              <p className="text-xs uppercase tracking-[0.16em] text-lime-100 mb-2">Lead Magnet</p>
              <h4 className="text-lg font-bold text-white mb-2">Free Growth Outcome Checklist</h4>
              <p className="text-sm text-emerald-100/80 mb-4">
                Get our practical checklist to identify bottlenecks and improve conversions, process speed, and delivery quality.
              </p>

              {leadMagnetStatus === "success" && (
                <p className="text-sm text-lime-100 mb-3">
                  Thanks. Check your inbox for the checklist. If not received, use this direct download:
                  {" "}
                  <a
                    href={LEAD_MAGNET_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    Download checklist
                  </a>
                </p>
              )}
              {leadMagnetStatus === "error" && (
                <p className="text-sm text-red-200 mb-3">Could not submit right now. Please try again.</p>
              )}

              <form onSubmit={handleLeadMagnetSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={leadMagnetEmail}
                  onChange={(event) => setLeadMagnetEmail(event.target.value)}
                  required
                  className="input-base"
                  placeholder="Enter your work email"
                />
                <button
                  type="submit"
                  disabled={leadMagnetSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-4 py-3 font-semibold text-emerald-950 hover:bg-lime-200 transition-colors disabled:opacity-60"
                >
                  {leadMagnetSubmitting ? "Submitting..." : "Get Checklist"}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-emerald-900/35 p-7"
          >
            {submitStatus === "success" && (
              <div className="mb-6 rounded-xl border border-lime-300/30 bg-lime-300/15 p-3 text-lime-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Message sent. We will reach out shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 rounded-xl border border-red-300/40 bg-red-400/10 p-3 text-red-100 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Something failed while sending. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full Name">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-base"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Work Email">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-base"
                    placeholder="name@company.com"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Phone">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-base"
                    placeholder="+91"
                  />
                </Field>
                <Field label="Company">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="input-base"
                    placeholder="Company name"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Product Interest">
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    className="input-base"
                  >
                    {productOptions.map((productName) => (
                      <option key={productName} value={productName}>
                        {productName}
                      </option>
                    ))}
                    <option value="New custom product">New custom product</option>
                  </select>
                </Field>

                <Field label="Project Type">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="input-base"
                  >
                    <option>Product demo</option>
                    <option>New app build</option>
                    <option>Web platform</option>
                    <option>AI automation</option>
                    <option>Salesforce consulting</option>
                  </select>
                </Field>
              </div>

              <Field label="Project Brief">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="input-base resize-none"
                  placeholder="Describe what you want to build and timeline."
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-lime-300 px-6 py-3.5 font-bold text-emerald-950 hover:bg-lime-200 transition-colors disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs uppercase tracking-[0.15em] text-emerald-100/70">{label}</span>
      {children}
    </label>
  );
}
