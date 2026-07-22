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
  productInterest: "",
  projectType: "",
  message: "",
  website: "",
};

export default function Contact({
  title = "Need reliable Salesforce delivery support?",
  subtitle = "Whether you need one Salesforce resource, a managed support pod, or implementation support, TechFi Labs can help you scale with confidence.",
  contactInfo = {
    phone: "+91 7976111087",
    email: "harshveernirwan@techfilabs.com",
    address: "Jaipur, Rajasthan 302001",
  },
  products = [],
  interestOptions = [],
  projectTypes = [],
  interestLabel = "Service Needed",
  projectTypeLabel = "Engagement Type",
  messageLabel = "Project Brief",
  messagePlaceholder = "Describe the Salesforce support or delivery help you need.",
  submitButtonLabel = "Schedule a Quick Call",
  showLeadMagnet = true,
  quickActions = [],
  responsePromise = "",
}) {
  const resolvedInterestOptions = interestOptions.length ? interestOptions : products.map((product) => product.name);
  const resolvedProjectTypes = projectTypes.length
    ? projectTypes
    : ["Product demo", "New app build", "Web platform", "AI automation", "Salesforce consulting"];
  const [formData, setFormData] = useState({
    ...initialFormState,
    productInterest: resolvedInterestOptions[0] || "",
    projectType: resolvedProjectTypes[0] || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [leadMagnetEmail, setLeadMagnetEmail] = useState("");
  const [leadMagnetSubmitting, setLeadMagnetSubmitting] = useState(false);
  const [leadMagnetStatus, setLeadMagnetStatus] = useState(null);

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
      `Service Needed: ${formData.productInterest}`,
      `Engagement Model: ${formData.projectType}`,
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
      setFormData({
        ...initialFormState,
        productInterest: resolvedInterestOptions[0] || "",
        projectType: resolvedProjectTypes[0] || "",
      });
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
    <section id="contact" className="py-22 md:py-28 bg-[linear-gradient(180deg,#f7fcf9_0%,#ffffff_100%)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.06),transparent_28%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="mb-4 text-3xl md:text-6xl font-semibold text-gray-900 tracking-tight">{title}</h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-600">{subtitle}</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] md:gap-7 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] md:rounded-3xl border border-white/10 bg-white/95 shadow-[0_18px_50px_rgba(0,0,0,0.18)] p-5 md:p-7 space-y-6"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Talk to the team</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Get direct access to a founder-led Salesforce delivery team for implementation support, managed services, staffing, and production support discussions.
              </p>
            </div>

            {[
              { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
              { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: MapPin, label: "Location", value: contactInfo.address, href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 text-green-600 flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-gray-400">{item.label}</p>
                  <p className="text-gray-700">{item.value}</p>
                </div>
              </a>
            ))}

            {quickActions.length ? (
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.16em] text-gray-500">Quick contact options</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {quickActions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.href.startsWith("http") ? "_blank" : undefined}
                      rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2.5 text-sm font-semibold text-green-700 transition-colors hover:bg-green-100"
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {responsePromise ? (
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-emerald-700">Response Promise</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{responsePromise}</p>
              </div>
            ) : null}

            {showLeadMagnet ? (
            <div className="mt-2 rounded-2xl border border-green-200 bg-green-50 p-4 md:p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-green-600 mb-2">Lead Magnet</p>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Growth Outcome Checklist</h4>
              <p className="text-sm text-gray-500 mb-4">
                Get our practical checklist to identify bottlenecks and improve conversions, process speed, and delivery quality.
              </p>

              {leadMagnetStatus === "success" && (
                <p className="mb-3 text-sm text-green-700">
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
                <p className="mb-3 text-sm text-red-600">Could not submit right now. Please try again.</p>
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow-[0_14px_32px_rgba(5,150,105,0.18)] transition-colors hover:bg-emerald-700 disabled:opacity-60"
                >
                  {leadMagnetSubmitting ? "Submitting..." : "Get Checklist"}
                </button>
              </form>
            </div>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] md:rounded-3xl border border-white/10 bg-white/95 shadow-[0_18px_50px_rgba(0,0,0,0.18)] p-5 md:p-7"
          >
            {submitStatus === "success" && (
              <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-3 text-green-700 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Message sent. We will reach out shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-3 text-red-700 flex items-center gap-2">
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
                <Field label={interestLabel}>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    className="input-base"
                  >
                    {resolvedInterestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label={projectTypeLabel}>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="input-base"
                  >
                    {resolvedProjectTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label={messageLabel}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="input-base resize-none"
                  placeholder={messagePlaceholder}
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-[0_16px_40px_rgba(5,150,105,0.22)] transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : submitButtonLabel}
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
      <span className="text-xs uppercase tracking-[0.15em] text-gray-500">{label}</span>
      {children}
    </label>
  );
}
