export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "What services does TechFi Labs specialize in?",
    answer: "TechFi Labs is an AI-first automation studio and Salesforce delivery firm. We specialize in custom AI Agents, n8n workflow automation, WhatsApp & Email AI integration, Python automation, and end-to-end Salesforce CRM architecture & support.",
    category: "Services",
  },
  {
    question: "How long does a typical AI automation or Salesforce project take to deploy?",
    answer: "Initial proof-of-concept AI agents or workflow automation sprints typically launch within 1 to 2 weeks. Comprehensive Salesforce implementations or multi-channel automation pipelines typically range from 4 to 8 weeks depending on integration complexity.",
    category: "Delivery",
  },
  {
    question: "How do AI agents integrate with our existing CRM and software stack?",
    answer: "Our AI agents connect directly via REST/GraphQL APIs, webhooks, or integration platforms like n8n and Salesforce MuleSoft. They interface securely with CRMs (Salesforce, HubSpot), communication channels (WhatsApp, Email, Slack), and custom databases without disrupting existing infrastructure.",
    category: "Technology",
  },
  {
    question: "What are your engagement models?",
    answer: "We offer flexible engagement structures including Dedicated Squads, Project-Based Sprints, Managed Support Retainers, and On-Demand Advisory. Each model provides direct access to senior automation architects and certified Salesforce developers.",
    category: "Pricing & Plans",
  },
  {
    question: "Where is TechFi Labs located and do you serve international clients?",
    answer: "TechFi Labs is headquartered in Jaipur & Ajmer, Rajasthan, India, and serves enterprise clients globally across the United States, United Kingdom, United Arab Emirates, and Asia-Pacific regions.",
    category: "Company",
  },
];

export const SERVICES_PAGE_FAQS: FAQItem[] = [
  {
    question: "What AI automation platforms do you build on?",
    answer: "We build tailored AI automation workflows using n8n, Python, OpenAI, Anthropic Claude, LangChain, custom RAG (Retrieval-Augmented Generation) architectures, and Salesforce Einstein AI.",
    category: "AI & Automation",
  },
  {
    question: "Can TechFi Labs migrate or refactor legacy Salesforce implementations?",
    answer: "Yes. We perform complete data migrations, Process Builder to Flow conversions, Apex code refactoring, Lightning Web Component (LWC) modernization, and health audits for legacy Salesforce orgs.",
    category: "Salesforce CRM",
  },
  {
    question: "How does WhatsApp AI Integration work for customer support?",
    answer: "We connect WhatsApp Business APIs with custom LLM agents and your CRM database. When a customer messages your WhatsApp account, the AI agent answers complex product inquiries, updates CRM records, or seamlessly hands off complex cases to human support representatives.",
    category: "Integrations",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Yes. We offer Managed Services retainers with guaranteed SLA response times, proactive system monitoring, monthly feature enhancements, and continuous AI prompt optimization.",
    category: "Support",
  },
];

export const PRODUCTS_PAGE_FAQS: FAQItem[] = [
  {
    question: "What is Sentinel Society Management?",
    answer: "Sentinel is an enterprise mobile & web society management platform engineered for residential communities and gated complexes. It streamlines visitor management, maintenance billing, amenity bookings, and security guard workflows.",
    category: "Sentinel",
  },
  {
    question: "What is FieldLens for Salesforce?",
    answer: "FieldLens is a specialized Chrome extension built for Salesforce admins and developers. It allows instant inspection of custom field usage, formula dependencies, and page layout visibility directly inside Salesforce Lightning.",
    category: "FieldLens",
  },
  {
    question: "Are TechFi Labs products available for custom enterprise licensing?",
    answer: "Yes. All our proprietary accelerators and software products can be licensed out of the box or customized with white-label branding, dedicated hosting, and custom workflow rules for enterprise clients.",
    category: "Licensing",
  },
];

export const ABOUT_PAGE_FAQS: FAQItem[] = [
  {
    question: "What is TechFi Labs' core engineering philosophy?",
    answer: "We believe in practical, production-ready engineering over hype. Every AI agent, workflow automation, or CRM architecture we deliver is built for measurable ROI, high availability, zero maintenance bloat, and enterprise security.",
    category: "Philosophy",
  },
  {
    question: "What certifications do TechFi Labs engineers hold?",
    answer: "Our team holds multiple Salesforce Certifications (Application Architect, System Architect, Administrator, Platform Developer II) and deep engineering experience in AI engineering, Python, and cloud architecture.",
    category: "Team",
  },
];

export const CONTACT_PAGE_FAQS: FAQItem[] = [
  {
    question: "How quickly can we get started after reaching out?",
    answer: "After submitting your project details or scheduling a strategy call, our engineering team reviews your requirement within 12 to 24 business hours to deliver an initial technical roadmap and scope estimate.",
    category: "Intake",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Absolutely. Standard mutual NDAs are executed prior to deep architectural discussions or accessing client codebases and CRM orgs.",
    category: "Security",
  },
];
