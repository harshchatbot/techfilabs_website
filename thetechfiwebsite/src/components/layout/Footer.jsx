import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';
import { FOOTER_DATA } from "../../constants/data";

// Helper to map string icon names to Lucide components dynamically
const getIcon = (iconName) => {
  if (!iconName) return Globe;
  const name = iconName.toLowerCase();
  if (name.includes('instagram')) return Instagram;
  if (name.includes('linkedin')) return Linkedin;
  if (name.includes('twitter') || name.includes('x')) return Twitter;
  if (name.includes('facebook')) return Facebook;
  return Globe;
};

const Footer = ({
  logo = {
    text: "The Technology Fiction",
    initials: "TF",
    logo: "tech_fi_logo_512x512_image.jpeg",
  },
  description = "We help startups and small businesses scale with powerful Salesforce solutions, modern web and mobile applications, and intelligent automation.",
  copyright = "© 2025 The Technology Fiction. All rights reserved.",
  className = "",
}) => {
  return (
    <footer className={`bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden ${className}`}>
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">

          {/* BRAND COLUMN (Span 5 for more width) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                {/* Safe check for logo src */}
                {logo.logo ? (
                  <img
                    src={logo.logo}
                    alt={logo.text}
                    className="w-full h-full object-cover opacity-90"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-800" />
                )}
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {logo.text}
              </span>
            </div>
            
            <p className="text-zinc-500 leading-relaxed mb-8 max-w-sm text-sm">
              {description}
            </p>

            {/* Social Icons - "Ghost" Style */}
            <div className="flex gap-3">
              {FOOTER_DATA.socialLinks.map((social, index) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* SPACER COLUMN (Span 1) */}
          <div className="hidden md:block md:col-span-1" />

          {/* SERVICES COLUMN (Span 3) */}
          <div className="md:col-span-3">
             <h4 className="text-white font-semibold mb-6 tracking-wide">Services</h4>
             <ul className="space-y-4">
                {FOOTER_DATA.services.map((service, i) => (
                    <li key={i}>
                        <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors text-sm block hover:translate-x-1 duration-200">
                            {service}
                        </a>
                    </li>
                ))}
             </ul>
          </div>

          {/* COMPANY COLUMN (Span 3) */}
          <div className="md:col-span-3">
             <h4 className="text-white font-semibold mb-6 tracking-wide">Company</h4>
             <ul className="space-y-4">
                {FOOTER_DATA.company.map((item, i) => (
                    <li key={i}>
                        <a 
                          href={item.href} 
                          target={item.name.includes("Blog") ? "_blank" : "_self"}
                          className="text-zinc-500 hover:text-blue-400 transition-colors text-sm block hover:translate-x-1 duration-200"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
             </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-xs">
                {copyright}
            </p>
            <div className="flex items-center gap-6">
                {/* Updated Privacy Policy Link */}
                <a 
                  href="https://thetechnologyfiction.com/blog/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors"
                >
                  Privacy Policy
                </a>
                
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;