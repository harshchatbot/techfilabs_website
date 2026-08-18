"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import LiquidMetalButton from "../ui/LiquidMetalButton";

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

interface ContactProps {
  title?: string;
  subtitle?: string;
  contactInfo?: { phone?: string; email?: string; address?: string };
  products?: any[];
  interestOptions?: string[];
  projectTypes?: string[];
  interestLabel?: string;
  projectTypeLabel?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitButtonLabel?: string;
  showLeadMagnet?: boolean;
  quickActions?: any[];
  responsePromise?: string;
  options?: any;
  formAction?: any;
}

export default function Contact({
  title = "Need AI automation or Salesforce support?",
  subtitle = "Tell us what you want to automate, improve, or support.",
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
  messagePlaceholder = "Describe the workflow, AI use case, or CRM process you want to automate.",
  submitButtonLabel = "Schedule a Quick Call",
  showLeadMagnet = false,
  quickActions = [],
  responsePromise = "",
}: ContactProps) {
  const resolvedInterestOptions = interestOptions.length ? interestOptions : products.map((product) => product.name);
  const resolvedProjectTypes = projectTypes.length
    ? projectTypes
    : ["AI agent", "Workflow automation", "Salesforce delivery", "Managed support"];

  const [formData, setFormData] = useState({
    ...initialFormState,
    productInterest: resolvedInterestOptions[0] || "",
    projectType: resolvedProjectTypes[0] || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [leadMagnetEmail, setLeadMagnetEmail] = useState("");
  const [leadMagnetSubmitting, setLeadMagnetSubmitting] = useState(false);
  const [leadMagnetStatus, setLeadMagnetStatus] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
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

  const handleLeadMagnetSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!leadMagnetEmail) return;

    setLeadMagnetSubmitting(true);
    setLeadMagnetStatus(null);

    const templateParams = {
      user_name: "Lead Magnet Request",
      user_email: leadMagnetEmail,
      user_message: "Requested lead magnet: Free Product + Salesforce Growth Checklist (2026 edition).",
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

  const contactRows = [
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: MapPin, label: "Location", value: contactInfo.address, href: "#" },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#064e2f_0%,#055536_68%,#03291d_100%)] py-20 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(3,41,29,0.28),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-emerald-300">[ Contact ]</p>
            <h2 className="max-w-[10ch] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">{subtitle}</p>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {contactRows.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 py-4 transition-colors hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-300/16 bg-emerald-300/10 text-emerald-200">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-100">{item.value}</p>
                </a>
              ))}
            </div>


            {showLeadMagnet ? (
              <div className="mt-6 rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">Lead magnet</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Free Growth Outcome Checklist</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                  Get our practical checklist to identify bottlenecks and improve conversions, process speed, and delivery quality.
                </p>

                {leadMagnetStatus === "success" ? (
                  <p className="mt-4 text-sm text-emerald-200">
                    Thanks. Check your inbox for the checklist. If not received, use this direct download:{" "}
                    <a
                      href={LEAD_MAGNET_DOWNLOAD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      Download checklist
                    </a>
                  </p>
                ) : null}
                {leadMagnetStatus === "error" ? (
                  <p className="mt-4 text-sm text-red-300">Could not submit right now. Please try again.</p>
                ) : null}

                <form onSubmit={handleLeadMagnetSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
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
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow-[0_14px_32px_rgba(5,150,105,0.18)] transition-colors hover:bg-emerald-700 disabled:opacity-60"
                  >
                    {leadMagnetSubmitting ? "Submitting..." : "Get Checklist"}
                  </button>
                </form>
              </div>
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-emerald-900/12 bg-[linear-gradient(180deg,#f7fefa_0%,#effcf5_100%)] p-5 shadow-[0_20px_56px_rgba(6,95,70,0.10)] md:p-7"
          >
            <div className="mb-6 border-b border-emerald-900/10 pb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">Project intake</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Share what you want to improve.</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                Send the workflow, support need, or Salesforce challenge you are dealing with. We will help shape the right next step.
              </p>
            </div>

            {submitStatus === "success" ? (
              <div className="mb-6 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 p-3 text-green-700">
                <CheckCircle2 className="h-5 w-5" />
                Message sent. We will reach out shortly.
              </div>
            ) : null}

            {submitStatus === "error" ? (
              <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-red-700">
                <AlertCircle className="h-5 w-5" />
                Something failed while sending. Please try again.
              </div>
            ) : null}

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

              <div className="grid gap-4 md:grid-cols-2">
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

              <div className="grid gap-4 md:grid-cols-2">
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

              <div className="grid gap-4 md:grid-cols-2">
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

              <LiquidMetalButton
                type="submit"
                disabled={isSubmitting}
                className="w-full focus:ring-offset-[#f7fefa]"
                aria-label={submitButtonLabel}
              >
                <span>{isSubmitting ? "Sending..." : submitButtonLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </LiquidMetalButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</span>
      {children}
    </label>
  );
}
