export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "What services does TechFi Labs specialize in?",
    answer: "TechFi Labs builds AI agents, workflow automations, WhatsApp and email integrations, Salesforce solutions, data migrations, and custom engineering tools.",
    category: "Services",
  },
  {
    question: "How long does a typical AI automation or Salesforce project take to deploy?",
    answer: "Timelines depend on scope, integrations, data quality, testing, and release requirements. After discovery, we provide a phased delivery plan based on the work involved.",
    category: "Delivery",
  },
  {
    question: "How do AI agents integrate with our existing CRM and software stack?",
    answer: "We connect approved business systems through APIs, webhooks, and workflow tools, with access controls, logging, error handling, and human review where needed.",
    category: "Technology",
  },
  {
    question: "What are your engagement models?",
    answer: "Engagements can be structured around a defined project, an extended delivery team, or ongoing managed support based on your goals and workload.",
    category: "Pricing & Plans",
  },
  {
    question: "Where is TechFi Labs located and do you serve international clients?",
    answer: "TechFi Labs is based in Jaipur, Rajasthan, India, and supports remote engagements with businesses and consulting teams in multiple regions.",
    category: "Company",
  },
];

export const SERVICES_PAGE_FAQS: FAQItem[] = [
  {
    question: "What AI automation platforms do you build on?",
    answer: "We select workflow, AI, and integration tools according to the use case, security needs, existing systems, and long-term maintenance requirements.",
    category: "AI & Automation",
  },
  {
    question: "Can TechFi Labs migrate or refactor legacy Salesforce implementations?",
    answer: "Yes. We can support data migration, automation modernization, Apex and LWC improvements, and structured reviews of existing Salesforce environments.",
    category: "Salesforce CRM",
  },
  {
    question: "How does WhatsApp AI Integration work for customer support?",
    answer: "A WhatsApp workflow can classify incoming messages, draft responses, update approved systems, and route exceptions to a person for review.",
    category: "Integrations",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Yes. Managed support can cover agreed response targets, issue triage, enhancements, release coordination, documentation, and ongoing workflow improvements.",
    category: "Support",
  },
];

export const PRODUCTS_PAGE_FAQS: FAQItem[] = [
  {
    question: "What is Sentinel Society Management?",
    answer: "Sentinel is a mobile society-management product for gated-community entry, communication, and daily operations.",
    category: "Sentinel",
  },
  {
    question: "What is FieldLens for Salesforce?",
    answer: "FieldLens is a Chrome extension that helps Salesforce admins and developers review field impact and dependencies inside Salesforce Lightning.",
    category: "FieldLens",
  },
  {
    question: "Are TechFi Labs products available for custom enterprise licensing?",
    answer: "Availability, access, and customization options differ by product. Contact TechFi Labs to discuss the relevant product and intended use.",
    category: "Licensing",
  },
];

export const ABOUT_PAGE_FAQS: FAQItem[] = [
  {
    question: "What is TechFi Labs' core engineering philosophy?",
    answer: "We focus on maintainable systems, clear safeguards, useful documentation, and business outcomes that can be evaluated after launch.",
    category: "Philosophy",
  },
  {
    question: "What delivery experience informs your work?",
    answer: "Our approach is shaped by hands-on AI automation, Salesforce implementation and support, data migration, and custom product engineering work.",
    category: "Team",
  },
];

export const CONTACT_PAGE_FAQS: FAQItem[] = [
  {
    question: "How quickly can we get started after reaching out?",
    answer: "We review your request, clarify the business need, and reply with a practical next step for discovery or scoping.",
    category: "Intake",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "We can work under a mutual NDA when confidential architecture, code, data, or CRM access needs to be discussed.",
    category: "Security",
  },
];
