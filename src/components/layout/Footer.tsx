import { Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FOOTER_DATA } from "../../constants/data";

const getIcon = (iconName: string) => {
  if (!iconName) return Globe;
  const name = iconName.toLowerCase();
  if (name.includes("instagram")) return Instagram;
  if (name.includes("linkedin")) return Linkedin;
  if (name.includes("twitter") || name.includes("x")) return Twitter;
  if (name.includes("facebook")) return Facebook;
  return Globe;
};

interface FooterProps {
  logo?: { name: string; logo: string };
  description?: string;
  themeVariant?: string;
}

export default function Footer({
  logo = { name: "TechFi Labs", logo: "/techfilabs_logo_2026.png" },
  description =
    "TechFi Labs builds and scales digital products across mobile, web, Salesforce, and AI automation workflows.",
  themeVariant = "green",
}: FooterProps) {
  const footerTheme =
    themeVariant === "sentinel"
      ? {
          root: "bg-[#3a261d] border-[#d7c8ae]/25",
          glow: "bg-[radial-gradient(circle_at_90%_20%,rgba(226,206,171,0.2),transparent_45%)]",
          logoWrap: "border-[#e6d8c1]/55 bg-[#f8f3e8]",
          logoText: "text-[#f3ead9]",
          bodyText: "text-[#ddcfb8]",
          social: "border-[#d7c8ae]/35 bg-white/5 text-[#f3ead9] hover:bg-[#f3ead9] hover:text-[#3a261d]",
          heading: "text-[#f3ead9]",
          list: "text-[#ddcfb8] text-sm",
          linkHover: "hover:text-[#fff6e8]",
          bottomBar: "border-[#d7c8ae]/20 text-[#d7c8ae]",
        }
      : {
          root: "bg-[linear-gradient(180deg,#064e2f_0%,#05472b_72%,#03291d_100%)] border-emerald-200/15",
          glow: "bg-[radial-gradient(circle_at_90%_20%,rgba(52,211,153,0.16),transparent_45%),radial-gradient(circle_at_12%_100%,rgba(3,41,29,0.26),transparent_38%)]",
          logoWrap: "border-lime-300/30 bg-white/90",
          logoText: "text-lime-100",
          bodyText: "text-stone-300",
          social: "border-lime-200/20 bg-white/5 text-lime-100 hover:bg-lime-300 hover:text-emerald-950",
          heading: "text-white",
          list: "text-stone-300 text-sm",
          linkHover: "hover:text-stone-100",
          bottomBar: "border-lime-200/10 text-stone-400",
        };

  return (
    <footer className={`relative overflow-visible border-t pb-12 pt-16 sm:pb-14 sm:pt-18 md:pt-20 md:pb-16 ${footerTheme.root}`}>
      <div className={`absolute inset-0 ${footerTheme.glow}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10 grid gap-9 sm:mb-12 sm:gap-10 md:mb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative z-10 mb-5 flex items-center gap-3">
              <div className={`w-14 h-14 rounded-full border overflow-hidden ${footerTheme.logoWrap}`}>
                <img src={logo.logo} alt={logo.name} className="w-full h-full object-cover scale-[1.18]" />
              </div>
              <span className={`text-xl font-bold tracking-tight ${footerTheme.logoText}`}>{logo.name}</span>
            </div>

            <p className={`mb-5 max-w-sm ${footerTheme.bodyText}`}>{description}</p>

            <div className="flex flex-wrap gap-3">
              {FOOTER_DATA.socialLinks.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${footerTheme.social}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className={`mb-3 font-semibold ${footerTheme.heading}`}>Services</h4>
            <ul className={`space-y-2.5 ${footerTheme.list}`}>
              {FOOTER_DATA.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className={`mb-3 font-semibold ${footerTheme.heading}`}>Company</h4>
            <ul className={`space-y-2 ${footerTheme.list}`}>
              {FOOTER_DATA.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`inline-flex min-h-[44px] items-center rounded-lg py-1 transition-colors ${footerTheme.linkHover}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`flex flex-col items-start justify-between gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:gap-4 md:pt-8 ${footerTheme.bottomBar}`}>
          <p className="leading-relaxed">
            © 2025 TechFi Labs. All rights reserved.
            <span className="block md:inline md:ml-1">
              A unit of{" "}
              <a
                href="https://thetechnologyfiction.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[44px] items-center rounded-lg py-1 font-semibold transition-colors ${footerTheme.linkHover}`}
              >
                The Technology Fiction
              </a>
              .
            </span>
          </p>
          <a
            href="https://thetechnologyfiction.com/blog/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-[44px] items-center rounded-lg py-1 transition-colors ${footerTheme.linkHover}`}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
