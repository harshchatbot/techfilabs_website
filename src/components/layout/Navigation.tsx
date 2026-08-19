"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const HOME_SECTIONS = new Set(["home", "products", "services", "case-studies", "about", "contact", "testimonials"]);

const NAV_THEMES: Record<string, Record<string, string>> = {
  sentinel: {
    navScrolled: "bg-[#3d2a1f]/90 border-[#d7c8ae]/30 backdrop-blur-xl py-3",
    navIdle: "bg-[#3d2a1f]/80 border-[#d7c8ae]/20 backdrop-blur-xl py-3",
    logoWrap: "border-[#e6d8c1]/60 bg-[#f8f3e8]",
    logoText: "text-[#f3ead9]",
    logoTextScrolled: "text-[#f3ead9]",
    menuActive: "text-[#f3ead9]",
    menuActiveScrolled: "text-[#f3ead9]",
    menuIdle: "text-[#d7c8ae]/90 hover:text-[#fff6e8]",
    menuIdleScrolled: "text-[#d7c8ae]/90 hover:text-[#fff6e8]",
    sentinelButton: "border-[#e6d8c1]/45 text-[#f3ead9] hover:bg-[#f3ead9]/10",
    ctaButton: "bg-[#f3ead9] text-[#3d2a1f] hover:bg-[#fff6e8]",
    mobileToggle: "text-[#f3ead9] hover:bg-[#f3ead9]/15",
    mobilePanel: "bg-[#3d2a1f]/95 backdrop-blur-xl",
    mobileMenuItem: "border-[#d7c8ae]/25 text-[#f3ead9]",
    mobileSentinel: "border-[#d7c8ae]/35 text-[#f3ead9]",
    mobileCta: "bg-[#f3ead9] text-[#3d2a1f]",
  },
  green: {
    navScrolled: "bg-[#f7fefa]/92 border-white/80 shadow-[0_20px_44px_rgba(3,41,29,0.12)] backdrop-blur-xl",
    navIdle: "bg-[#f7fefa]/82 border-white/70 shadow-[0_16px_36px_rgba(3,41,29,0.10)] backdrop-blur-xl",
    logoWrap: "border-emerald-200/75 bg-white shadow-[0_12px_30px_rgba(16,185,129,0.10)]",
    logoText: "text-slate-900",
    logoTextScrolled: "text-slate-900",
    menuActive: "text-emerald-700",
    menuActiveScrolled: "text-emerald-700",
    menuIdle: "text-slate-800 hover:text-emerald-700",
    menuIdleScrolled: "text-slate-800 hover:text-emerald-700",
    sentinelButton: "border-gray-200 text-gray-700 hover:bg-gray-50",
    ctaButton:
      "bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-5 py-2.5 shadow-[0_14px_32px_rgba(5,150,105,0.22)]",
    mobileToggle: "text-slate-800 hover:bg-emerald-50/80",
    mobilePanel: "bg-[#f7fefa]/96 backdrop-blur-xl",
    mobileMenuItem: "border-slate-200 text-slate-800 hover:border-emerald-200 hover:bg-emerald-50/60",
    mobileSentinel: "border-gray-200 text-gray-700",
    mobileCta: "bg-emerald-600 text-white shadow-[0_14px_32px_rgba(5,150,105,0.22)]",
  },
};

interface NavigationProps {
  logo?: { name: string; logo: string };
  menuItems?: string[];
  ctaButton?: { text: string; action: string | (() => void) };
  themeVariant?: string;
}

export default function Navigation({
  logo = { name: "TechFi Labs", logo: "/techfilabs_logo_2026.png" },
  menuItems = ["home", "products", "services", "about", "contact"],
  ctaButton = { text: "Book a Strategy Call", action: "contact" },
  themeVariant = "green",
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleMenuClick = (item: string) => {
    setIsMenuOpen(false);

    if (HOME_SECTIONS.has(item)) {
      if (item === "home") {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        router.push("/");
        return;
      }

      if (pathname === "/") {
        scrollToSection(item);
      } else {
        if (item === "contact") {
          router.push("/#contact");
        } else {
          router.push("/");
          setTimeout(() => scrollToSection(item), 150);
        }
      }
      return;
    }

    router.push(`/${item}`);
  };

  const handleCtaClick = () => {
    setIsMenuOpen(false);

    if (pathname === "/") {
      scrollToSection("contact");
      return;
    }

    router.push("/#contact");
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (pathname !== "/") return;

      for (const section of menuItems) {
        const element = document.getElementById(section);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(section);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuItems, pathname]);

  const navTheme = NAV_THEMES[themeVariant] || NAV_THEMES.green;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto max-w-7xl px-3 sm:px-5">
          <div
            className={`flex items-center justify-between gap-4 rounded-[1.75rem] border px-4 py-3 transition-all duration-300 sm:px-5 ${
              scrolled ? navTheme.navScrolled : navTheme.navIdle
            }`}
          >
            <button onClick={() => handleMenuClick("home")} className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#f7fefa]">
              <div className={`h-11 w-11 overflow-hidden rounded-full border sm:h-12 sm:w-12 ${navTheme.logoWrap}`}>
                <img src={logo.logo} alt={logo.name} className="h-full w-full object-cover scale-[1.14]" />
              </div>
              <span
                className={`hidden sm:block text-[15px] font-semibold tracking-tight ${
                  scrolled ? navTheme.logoTextScrolled || navTheme.logoText : navTheme.logoText
                }`}
              >
                {logo.name}
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-5 xl:gap-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  aria-current={activeSection === item && pathname === "/" ? "page" : undefined}
                  className={`inline-flex min-h-[44px] items-center rounded-full px-4 py-2.5 capitalize text-sm font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#f7fefa] ${
                    activeSection === item && pathname === "/"
                      ? scrolled
                        ? `${navTheme.menuActiveScrolled || navTheme.menuActive} bg-emerald-50 border border-emerald-100/80`
                        : `${navTheme.menuActive} bg-white/[0.10] border border-white/10`
                      : scrolled
                        ? navTheme.menuIdleScrolled || navTheme.menuIdle
                        : navTheme.menuIdle
                  }`}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={handleCtaClick}
                className={`inline-flex min-h-[46px] items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#f7fefa] ${navTheme.ctaButton}`}
              >
                {ctaButton.text}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              className={`lg:hidden rounded-xl p-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#f7fefa] ${navTheme.mobileToggle}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className={`fixed inset-0 z-40 overflow-y-auto lg:hidden px-5 pb-8 pt-24 ${navTheme.mobilePanel}`}
          >
            <div className="space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left text-xl font-semibold capitalize transition-colors ${navTheme.mobileMenuItem}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <button
                onClick={() => {
                  handleCtaClick();
                }}
                className={`w-full rounded-2xl py-4 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-white/95 ${navTheme.mobileCta}`}
              >
                {ctaButton.text}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
