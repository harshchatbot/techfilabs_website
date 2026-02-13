import { Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import { FOOTER_DATA } from "../../constants/data";

const getIcon = (iconName) => {
  if (!iconName) return Globe;
  const name = iconName.toLowerCase();
  if (name.includes("instagram")) return Instagram;
  if (name.includes("linkedin")) return Linkedin;
  if (name.includes("twitter") || name.includes("x")) return Twitter;
  if (name.includes("facebook")) return Facebook;
  return Globe;
};

export default function Footer({
  logo = { name: "TechFi Labs", logo: "/techfilabs_logo_2026.png" },
  description =
    "TechFi Labs builds and scales digital products across mobile, web, Salesforce, and AI automation workflows.",
  themeVariant = "green",
}) {
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
          root: "bg-[#052e16] border-lime-200/15",
          glow: "bg-[radial-gradient(circle_at_90%_20%,rgba(132,204,22,0.14),transparent_45%)]",
          logoWrap: "border-lime-300/30 bg-white/90",
          logoText: "text-lime-100",
          bodyText: "text-emerald-100/75",
          social: "border-lime-200/20 bg-white/5 text-lime-100 hover:bg-lime-300 hover:text-emerald-950",
          heading: "text-lime-100",
          list: "text-emerald-100/75 text-sm",
          linkHover: "hover:text-lime-100",
          bottomBar: "border-lime-200/10 text-emerald-100/65",
        };

  return (
    <footer className={`pt-20 pb-16 border-t relative overflow-hidden ${footerTheme.root}`}>
      <div className={`absolute inset-0 ${footerTheme.glow}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-14 h-14 rounded-full border overflow-hidden ${footerTheme.logoWrap}`}>
                <img src={logo.logo} alt={logo.name} className="w-full h-full object-cover scale-[1.18]" />
              </div>
              <span className={`text-xl font-bold tracking-tight ${footerTheme.logoText}`}>{logo.name}</span>
            </div>

            <p className={`max-w-sm mb-6 ${footerTheme.bodyText}`}>{description}</p>

            <div className="flex gap-3">
              {FOOTER_DATA.socialLinks.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${footerTheme.social}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className={`font-semibold mb-4 ${footerTheme.heading}`}>Services</h4>
            <ul className={`space-y-3 ${footerTheme.list}`}>
              {FOOTER_DATA.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className={`font-semibold mb-4 ${footerTheme.heading}`}>Company</h4>
            <ul className={`space-y-3 ${footerTheme.list}`}>
              {FOOTER_DATA.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className={`transition-colors ${footerTheme.linkHover}`}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t text-sm flex flex-col md:flex-row items-center justify-between gap-4 ${footerTheme.bottomBar}`}>
          <p>© 2025 TechFi Labs. All rights reserved.</p>
          <a
            href="https://thetechnologyfiction.com/blog/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${footerTheme.linkHover}`}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
