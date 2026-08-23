import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import Schema from "@/components/Schema";
import { ORGANIZATION_CONFIG } from "@/config/organization";
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
  metadataBase: new URL(ORGANIZATION_CONFIG.url),
  title: {
    default: `${ORGANIZATION_CONFIG.name} | ${ORGANIZATION_CONFIG.tagline}`,
    template: `%s | ${ORGANIZATION_CONFIG.name}`,
  },
  description: ORGANIZATION_CONFIG.description,
  keywords: [
    ...ORGANIZATION_CONFIG.services,
    ORGANIZATION_CONFIG.name,
    "AI Automation Agency Jaipur",
    "Salesforce Consulting Jaipur Ajmer",
    "AI Studio India",
  ],
  authors: [{ name: ORGANIZATION_CONFIG.name, url: ORGANIZATION_CONFIG.url }],
  creator: ORGANIZATION_CONFIG.name,
  publisher: ORGANIZATION_CONFIG.name,
  alternates: {
    canonical: ORGANIZATION_CONFIG.url,
  },
  verification: {
    google: ORGANIZATION_CONFIG.googleSiteVerification,
  },
  openGraph: {
    title: `${ORGANIZATION_CONFIG.name} | ${ORGANIZATION_CONFIG.tagline}`,
    description: ORGANIZATION_CONFIG.description,
    type: "website",
    locale: "en_US",
    url: ORGANIZATION_CONFIG.url,
    siteName: ORGANIZATION_CONFIG.name,
    images: [
      {
        url: ORGANIZATION_CONFIG.logoUrl,
        width: 1200,
        height: 630,
        alt: `${ORGANIZATION_CONFIG.name} - ${ORGANIZATION_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ORGANIZATION_CONFIG.name} | ${ORGANIZATION_CONFIG.tagline}`,
    description: ORGANIZATION_CONFIG.description,
    images: [ORGANIZATION_CONFIG.logoUrl],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": ORGANIZATION_CONFIG.geo.region,
    "geo.placename": ORGANIZATION_CONFIG.geo.placename,
    "geo.position": ORGANIZATION_CONFIG.geo.position,
    ICBM: ORGANIZATION_CONFIG.geo.icbm,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${ORGANIZATION_CONFIG.url}/#organization`,
        name: ORGANIZATION_CONFIG.name,
        alternateName: ORGANIZATION_CONFIG.alternateName,
        url: ORGANIZATION_CONFIG.url,
        logo: ORGANIZATION_CONFIG.logoUrl,
        image: ORGANIZATION_CONFIG.logoUrl,
        description: ORGANIZATION_CONFIG.description,
        telephone: ORGANIZATION_CONFIG.contact.phone,
        email: ORGANIZATION_CONFIG.contact.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: ORGANIZATION_CONFIG.contact.streetAddress,
          addressLocality: ORGANIZATION_CONFIG.contact.city,
          addressRegion: ORGANIZATION_CONFIG.contact.region,
          postalCode: ORGANIZATION_CONFIG.contact.postalCode,
          addressCountry: ORGANIZATION_CONFIG.contact.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: ORGANIZATION_CONFIG.geo.latitude,
          longitude: ORGANIZATION_CONFIG.geo.longitude,
        },
        areaServed: ORGANIZATION_CONFIG.areasServed.map((place) => ({
          "@type": place === "India" || place === "United States" || place === "United Kingdom" || place === "United Arab Emirates" ? "Country" : "City",
          name: place,
        })),
        knowsAbout: [...ORGANIZATION_CONFIG.services],
        sameAs: [
          ORGANIZATION_CONFIG.social.facebook,
          ORGANIZATION_CONFIG.social.linkedin,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${ORGANIZATION_CONFIG.url}/#website`,
        url: ORGANIZATION_CONFIG.url,
        name: ORGANIZATION_CONFIG.name,
        publisher: {
          "@id": `${ORGANIZATION_CONFIG.url}/#organization`,
        },
      },
    ],
  };

  const gaId = ORGANIZATION_CONFIG.googleAnalyticsId;

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head />
      <body className="bg-techfi-mintBg text-slate-900 font-sans antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppChatButton />
        <Schema id="organization-schema" data={globalSchema} />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
