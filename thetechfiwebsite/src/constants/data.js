import { Zap, Globe, Users, Database , Smartphone, Mail, Cpu } from 'lucide-react'

export const SITE_CONFIG = {
  company: {
    name: "The Technology Fiction",
    initials: "TF",
    email: "thetechfisolutions@gmail.com",
    phone: "+91 7976111087",
    address: "Jaipur, Rajasthan 302001",
    logo: "/tech_fi_logo_512x512_image.jpeg"
  },
  navigation: {
    menuItems: ['home', 'services','blog', 'about', 'contact'],
    ctaButton: {
      text: "Get Started",
      action: () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }
}

export const SERVICES_DATA = [
  {
    icon: Zap,
    title: "Salesforce Consulting & Implementation",
    description:
      "End-to-end Salesforce consulting and CRM implementation for startups and growing businesses.",
    features: [
      "Salesforce CRM Setup",
      "Custom CRM Development",
      "Salesforce Lightning Migration",
      "CRM Customization Services",
    ],
  },
  {
    icon: Database,
    title: "Salesforce Data Migration & ETL",
    description:
      "Accurate and secure Salesforce data migration with ETL, cleansing, mapping, and quality checks.",
    features: [
      "Discovery & Data Planning",
      "Data Cleansing & Deduplication",
      "Custom Field Mapping & Transformation",
      "ETL Tool Expertise (Data Loader, DBAmp, MuleSoft, etc.)",
      "Quality Assurance & Post-Migration Support",
    ],
  },
  {
    icon: Globe,
    title: "Website & Web Application Development",
    description:
      "Modern, responsive websites and web apps built for performance, scalability, and great UX.",
    features: [
      "Custom Website & Portal Development",
      "Headless CMS & Progressive Web Apps",
      "Legacy Modernisation & Third-Party Integrations",
      "Performance & Accessibility Optimisation",
      "UX/UI Design & User Experience",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile & Cross‑Platform App Development",
    description: "Create native iOS and Android apps or cross‑platform solutions with Flutter or React Native. Our end‑to‑end services cover discovery, UI/UX design, secure backend integration, testing, launch and post‑release support. We also build progressive web apps to deliver a native‑like experience on the web.",
    features: [
      "Native iOS & Android App Development",
      "Flutter & Cross‑Platform App Development",
      "Progressive Web Apps (PWAs)",
      "Full Lifecycle: Design, Development, Testing, Launch, Support",
      "Scalable Architecture & Integration"
    ]
  },
  {
    icon: Cpu,
    title: "AI Agents & Automation",
    description: "Revolutionize your business operations with custom AI agents designed to automate calls, collect feedback, and handle repetitive tasks intelligently. From AI-powered calling assistants to chat-driven customer engagement systems, we create end-to-end AI workflows that integrate seamlessly with your CRM and business tools to boost efficiency and enhance user experience.",
    features: [
      "Custom AI Calling & Voice Agents",
      "Feedback & Lead Collection Automation",
      "CRM Integration with Salesforce & HubSpot",
      "Conversational AI & Chatbot Development",
      "AI Workflow Orchestration using LangChain & n8n"
    ]
  }
]

export const TESTIMONIALS_DATA = [
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
  },
  {
    name: "Rajesh Kumar",
    role: "Managing Director, Digital Solutions India",
    content: "The Technology Fiction helped us implement Salesforce across our entire organization. Their expertise in Indian business processes made the transition seamless. Our team productivity increased by 60% within 3 months!",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Founder, E-commerce Startup, Mumbai",
    content: "As a startup founder, I needed a professional website that could scale with our business. The Technology Fiction delivered a stunning React-based platform that perfectly captures our brand essence and has significantly improved our customer engagement.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "IT Director, Manufacturing Solutions Ltd, Bangalore",
    content: "We were struggling with manual processes until The Technology Fiction automated our entire sales pipeline with Salesforce. The ROI was incredible - we recovered our investment in just 6 months and our sales team is now 3x more productive.",
    rating: 5
  }
]

export const ABOUT_DATA = {
  stats: [
    { number: "100+", label: "IT Projects Completed" },
    { number: "50+", label: "Small Business Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "IT Support Available" }
  ],
  features: [
    "Expert Salesforce Consultants",
    "Affordable IT Solutions",
    "IT Services for Small Businesses",
    "Salesforce Consultants for Startups"
  ]
}

export const CONTACT_INFO = {
  phone: SITE_CONFIG.company.phone,
  email: SITE_CONFIG.company.email,
  address: SITE_CONFIG.company.address
}

export const FOOTER_DATA = {
  services: [
    "Salesforce Consulting & Implementation",
    "Salesforce Data Migration & ETL",
    "Website & Web App Development",
    "Mobile App Development"
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Salesforce Blog", href: "https://thetechnologyfiction.com/blog" },
    { name: "Contact", href: "#" }
  ],
  socialLinks: [
    { name: "Instagram", icon: "instagram", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/the-technology-fiction/" }
  ]
} 