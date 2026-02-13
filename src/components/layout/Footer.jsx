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
  logo = { name: "TechFi Labs", logo: "/techfilabs_primary_logo.png" },
  description =
    "TechFi Labs builds and scales digital products across mobile, web, Salesforce, and AI automation workflows.",
}) {
  return (
    <footer className="bg-[#052e16] pt-20 pb-16 border-t border-lime-200/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(132,204,22,0.14),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full border border-lime-300/30 bg-white/90 overflow-hidden">
                <img src={logo.logo} alt={logo.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-lime-100 tracking-tight">{logo.name}</span>
            </div>

            <p className="text-emerald-100/75 max-w-sm mb-6">{description}</p>

            <div className="flex gap-3">
              {FOOTER_DATA.socialLinks.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-lime-200/20 bg-white/5 text-lime-100 flex items-center justify-center hover:bg-lime-300 hover:text-emerald-950 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lime-100 font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-emerald-100/75 text-sm">
              {FOOTER_DATA.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-lime-100 font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-emerald-100/75 text-sm">
              {FOOTER_DATA.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-lime-100 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-lime-200/10 text-sm text-emerald-100/65 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 TechFi Labs. All rights reserved.</p>
          <a
            href="https://thetechnologyfiction.com/blog/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-100 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
