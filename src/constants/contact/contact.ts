import { SITE_CONFIG } from "../site/site";

export const CONTACT_INFO = {
  phone: SITE_CONFIG.company.phone,
  email: SITE_CONFIG.company.email,
  address: SITE_CONFIG.company.address,
};

export const CONTACT_SECTION_CONTENT = {
  badge: "[ Contact ]",
  title: "Need AI automation or Salesforce support?",
  subtitle: "Tell us what you want to automate, improve, or support.",
  intakeHeader: {
    badge: "Project intake",
    title: "Share what you want to improve.",
    subtitle:
      "Send the workflow, support need, or Salesforce challenge you are dealing with. We will help shape the right next step.",
  },
  formLabels: {
    name: "Full Name",
    namePlaceholder: "Your name",
    email: "Work Email",
    emailPlaceholder: "name@company.com",
    phone: "Phone",
    phonePlaceholder: "+91",
    company: "Company",
    companyPlaceholder: "Company name",
    serviceNeeded: "Service Needed",
    engagementType: "Engagement Type",
    projectBrief: "Project Brief",
    messagePlaceholder:
      "Describe the workflow, AI use case, or CRM process you want to automate.",
    submitButton: "Schedule a Quick Call",
    sendingButton: "Sending...",
  },
  leadMagnet: {
    badge: "Lead magnet",
    title: "Free Growth Outcome Checklist",
    description:
      "Get our practical checklist to identify bottlenecks and improve conversions, process speed, and delivery quality.",
    placeholder: "Enter your work email",
    submitButton: "Get Checklist",
    submittingButton: "Submitting...",
    successMsg: "Thanks. Check your inbox for the checklist.",
    errorMsg: "Could not submit right now. Please try again.",
  },
  statuses: {
    success: "Message sent. We will reach out shortly.",
    error: "Something failed while sending. Please try again.",
  },
};
