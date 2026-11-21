import { Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_DATA, FOOTER_LEGAL_DATA } from "@/constants";

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
    "Practical AI, Salesforce and custom software that make everyday work simpler.",
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
          social:
            "border-[#d7c8ae]/35 bg-white/5 text-[#f3ead9] hover:bg-[#f3ead9] hover:text-[#3a261d]",
          heading: "text-[#f3ead9]",
          list: "text-[#ddcfb8] text-sm",
          linkHover: "hover:text-[#fff6e8]",
          bottomBar: "border-[#d7c8ae]/20 text-[#d7c8ae]",
        }
      : {
          root: "bg-[#24231F] border-[#FAF9F5]/10",
          glow:
            "bg-none",
          logoWrap: "border-white/15 bg-white",
          logoText: "text-[#FAF9F5]",
          bodyText: "text-[#C8C3B9]",
          social:
            "border-white/15 bg-white/5 text-[#FAF9F5] hover:bg-[#FAF9F5] hover:text-[#24231f]",
          heading: "text-white",
          list: "text-[#C8C3B9] text-sm",
          linkHover: "hover:text-white",
          bottomBar: "border-white/15 text-[#B7B0A6]",
        };

  return (
    <footer
      className={`relative overflow-visible border-t pb-12 pt-16 sm:pb-14 sm:pt-18 md:pb-16 md:pt-20 ${footerTheme.root}`}
    >
      <div className={`absolute inset-0 ${footerTheme.glow}`} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 grid gap-9 sm:mb-12 sm:gap-10 md:mb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative z-10 mb-5 flex items-center gap-3">
              <div
                className={`relative h-14 w-14 overflow-hidden rounded-full border ${footerTheme.logoWrap}`}
              >
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  width={56}
                  height={56}
                  className="h-full w-full scale-[1.18] object-cover"
                />
              </div>

              <span className={`text-xl font-bold tracking-tight ${footerTheme.logoText}`}>
                {logo.name}
              </span>
            </div>

            <p className={`mb-5 max-w-md text-sm leading-relaxed ${footerTheme.bodyText}`}>
              {description}
            </p>

            <div className="flex flex-wrap gap-3">
              {FOOTER_DATA.socialLinks
                .filter((social) => social.href)
                .map((social) => {
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
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className={`mb-3 font-semibold ${footerTheme.heading}`}>Services</h4>

            <ul className={`space-y-2.5 ${footerTheme.list}`}>
              {FOOTER_DATA.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className={`inline-flex min-h-[44px] items-center rounded-lg py-1 transition-colors ${footerTheme.linkHover}`}
                  >
                    {service.name}
                  </Link>
                </li>
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

        <div
          className={`flex flex-col items-start justify-between gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:gap-4 md:pt-8 ${footerTheme.bottomBar}`}
        >
          <p className="leading-relaxed">
            {FOOTER_LEGAL_DATA.copyright}
            <span className="block md:ml-1 md:inline">
              {FOOTER_LEGAL_DATA.parentCompanyPrefix}{" "}
              <a
                href={FOOTER_LEGAL_DATA.parentCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[44px] items-center rounded-lg py-1 font-semibold transition-colors ${footerTheme.linkHover}`}
              >
                {FOOTER_LEGAL_DATA.parentCompanyName}
              </a>
              .
            </span>
          </p>

          <Link
            href={FOOTER_LEGAL_DATA.privacyPolicyUrl}
            className={`inline-flex min-h-[44px] items-center rounded-lg py-1 transition-colors ${footerTheme.linkHover}`}
          >
            {FOOTER_LEGAL_DATA.privacyPolicyLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}