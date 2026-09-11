"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_CONFIG } from "@/constants";

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
    navScrolled: "bg-[rgba(247,254,250,0.99)] border-emerald-200/80 shadow-[0_20px_44px_rgba(3,41,29,0.16)] backdrop-blur-xl",
    navIdle: "bg-[rgba(247,254,250,0.97)] border-emerald-200/75 shadow-[0_18px_40px_rgba(3,41,29,0.16)] backdrop-blur-xl",
    logoWrap: "border-emerald-200/75 bg-white shadow-[0_12px_30px_rgba(16,185,129,0.10)]",
    logoText: "text-slate-950",
    logoTextScrolled: "text-slate-950",
    menuActive: "text-emerald-800",
    menuActiveScrolled: "text-emerald-800",
    menuIdle: "text-slate-900 hover:text-emerald-800",
    menuIdleScrolled: "text-slate-900 hover:text-emerald-800",
    sentinelButton: "border-gray-200 text-gray-700 hover:bg-gray-50",
    ctaButton:
      "bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-5 py-2.5 shadow-[0_14px_32px_rgba(5,150,105,0.22)]",
    mobileToggle: "text-slate-950 hover:bg-emerald-50",
    mobilePanel: "bg-[rgba(247,254,250,0.98)] backdrop-blur-xl",
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
  logo = NAV_CONFIG.logo,
  menuItems = NAV_CONFIG.menuItems,
  ctaButton = NAV_CONFIG.ctaButton,
  themeVariant = "green",
}: NavigationProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  const getMenuHref = (item: string) => (item === "home" ? "/" : `/${item}`);

  const isItemActive = (item: string) => {
    if (item === "home") return pathname === "/";
    return pathname.startsWith(`/${item}`);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTheme = NAV_THEMES[themeVariant] || NAV_THEMES.green;

  return (
    <>
      <nav aria-label="Primary navigation" className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto max-w-7xl px-3 sm:px-5">
          <div
            className={`flex items-center justify-between gap-4 rounded-[1.75rem] border px-4 py-3 transition-all duration-300 sm:px-5 ${
              scrolled ? navTheme.navScrolled : navTheme.navIdle
            }`}
          >
            <Link href="/" className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#f7fefa]">
              <div className={`h-11 w-11 overflow-hidden rounded-full border sm:h-12 sm:w-12 relative ${navTheme.logoWrap}`}>
                <Image src={logo.logo} alt={logo.name} width={48} height={48} priority className="h-full w-full object-cover scale-[1.14]" />
              </div>
              <span
                className={`hidden sm:block text-[15px] font-semibold tracking-tight ${
                  scrolled ? navTheme.logoTextScrolled || navTheme.logoText : navTheme.logoText
                }`}
              >
                {logo.name}
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-5 xl:gap-8">
              {menuItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <Link
                    key={item}
                    href={getMenuHref(item)}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-[44px] items-center rounded-full px-4 py-2.5 capitalize text-sm font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#f7fefa] ${
                      active
                        ? scrolled
                          ? `${navTheme.menuActiveScrolled || navTheme.menuActive} bg-emerald-50 border border-emerald-100/80`
                          : `${navTheme.menuActive} bg-emerald-50 border border-emerald-200/80`
                        : scrolled
                          ? navTheme.menuIdleScrolled || navTheme.menuIdle
                          : navTheme.menuIdle
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className={`inline-flex min-h-[46px] items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#f7fefa] ${navTheme.ctaButton}`}
              >
                {ctaButton.text}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              className={`lg:hidden rounded-xl p-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#f7fefa] ${navTheme.mobileToggle}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
            aria-label="Mobile navigation"
          >
            <div className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={getMenuHref(item)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex min-h-[56px] w-full items-center rounded-2xl border px-4 py-3 text-left text-xl font-semibold capitalize transition-colors ${navTheme.mobileMenuItem}`}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex min-h-[56px] w-full items-center justify-center rounded-2xl px-4 py-3 font-bold focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-white/95 ${navTheme.mobileCta}`}
              >
                {ctaButton.text}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
