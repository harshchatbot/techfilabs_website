import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import Schema from "@/components/Schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechFi Labs | AI Automation Studio & Salesforce Delivery",
  description:
    "TechFi Labs is an AI-first automation studio with deep Salesforce delivery expertise. We build AI agents, workflow automations, WhatsApp integrations, and CRM platforms.",
  keywords: [
    "AI Agents",
    "Workflow Automation",
    "WhatsApp AI Integrations",
    "Email AI Automation",
    "n8n Workflows",
    "Salesforce AI",
    "Salesforce Consulting",
    "TechFi Labs",
  ],
  authors: [{ name: "TechFi Labs" }],
  openGraph: {
    title: "TechFi Labs | AI Automation Studio & Salesforce Delivery",
    description:
      "Build scalable AI workflows, WhatsApp automations, and Salesforce CRM platforms with TechFi Labs.",
    type: "website",
    locale: "en_US",
    url: "https://techfilabs.com",
    siteName: "TechFi Labs",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechFi Labs",
    url: "https://techfilabs.com",
    logo: "https://techfilabs.com/techfilabs_logo_2026.png",
    description:
      "TechFi Labs is an AI-first automation studio with deep Salesforce delivery expertise.",
    sameAs: [
      "https://www.facebook.com/thetechnologyfiction/",
      "https://www.linkedin.com/company/the-technology-fiction/",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head />
      <body className="bg-techfi-mintBg text-slate-900 font-sans antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppChatButton />
        <Schema id="organization-schema" data={globalSchema} />
      </body>
    </html>
  );
}
