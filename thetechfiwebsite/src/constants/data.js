import { Zap, Globe, Users, Phone, Mail, MapPin } from 'lucide-react'

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
    menuItems: ['home', 'services', 'about', 'contact'],
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
    description: "Expert Salesforce consulting services and CRM implementation for small businesses and startups. Professional Salesforce consultants providing affordable IT solutions.",
    features: ["Salesforce CRM Setup", "Custom CRM Development", "Salesforce Lightning Migration", "CRM Customization Services"]
  },
  {
    icon: Globe,
    title: "Managed IT Services & Cloud Computing",
    description: "Comprehensive managed IT services including cloud computing solutions, IT infrastructure management, and business IT solutions for growing companies.",
    features: ["Cloud Computing Services", "IT Infrastructure Management", "IT Support & Maintenance", "Business IT Solutions"]
  },
  {
    icon: Users,
    title: "Salesforce Integration & Development",
    description: "Salesforce integration experts providing custom CRM development, Salesforce Lightning migration, and integration with existing systems for optimal performance.",
    features: ["Salesforce Integration Experts", "Custom CRM Development", "API Integration", "Salesforce Development Company"]
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
    "About Us",
    "Careers",
    "Blog",
    "Contact"
  ],
  socialLinks: [
    { name: "Instagram", icon: "instagram", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/the-technology-fiction/" }
  ]
} 