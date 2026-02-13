import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HOME_SECTIONS = new Set(["home", "products", "services", "about", "contact", "testimonials"]);

export default function Navigation({
  logo = { name: "TechFi Labs", logo: "/techfilabs_primary_logo.png" },
  menuItems = ["home", "products", "services", "about", "contact"],
  ctaButton = { text: "Book a Strategy Call", action: () => {} },
  themeVariant = "green",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleMenuClick = (item) => {
    setIsMenuOpen(false);

    if (HOME_SECTIONS.has(item)) {
      if (item === "home") {
        if (location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        navigate("/");
        return;
      }

      if (location.pathname === "/") {
        scrollToSection(item);
      } else {
        if (item === "contact") {
          navigate("/#contact");
        } else {
          navigate("/");
          setTimeout(() => scrollToSection(item), 150);
        }
      }
      return;
    }

    navigate(`/${item}`);
  };

  const handleCtaClick = () => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      if (typeof ctaButton.action === "function") {
        ctaButton.action();
      }
      return;
    }

    navigate("/#contact");
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (location.pathname !== "/") return;

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
  }, [menuItems, location.pathname]);

  const navTheme =
    themeVariant === "sentinel"
      ? {
          navScrolled: "bg-[#3d2a1f]/90 border-[#d7c8ae]/30 backdrop-blur-xl py-3",
          logoWrap: "border-[#e6d8c1]/60 bg-[#f8f3e8]",
          logoText: "text-[#f3ead9]",
          menuActive: "text-[#f3ead9]",
          menuIdle: "text-[#d7c8ae]/90 hover:text-[#fff6e8]",
          sentinelButton: "border-[#e6d8c1]/45 text-[#f3ead9] hover:bg-[#f3ead9]/10",
          ctaButton: "bg-[#f3ead9] text-[#3d2a1f] hover:bg-[#fff6e8]",
          mobileToggle: "text-[#f3ead9] hover:bg-[#f3ead9]/15",
          mobilePanel: "bg-[#3d2a1f]/95 backdrop-blur-xl",
          mobileMenuItem: "border-[#d7c8ae]/25 text-[#f3ead9]",
          mobileSentinel: "border-[#d7c8ae]/35 text-[#f3ead9]",
          mobileCta: "bg-[#f3ead9] text-[#3d2a1f]",
        }
      : {
          navScrolled: "bg-emerald-950/90 border-lime-300/15 backdrop-blur-xl py-3",
          logoWrap: "border-lime-300/35 bg-white/90",
          logoText: "text-lime-100",
          menuActive: "text-lime-100",
          menuIdle: "text-emerald-100/75 hover:text-lime-100",
          sentinelButton: "border-lime-200/35 text-lime-100 hover:bg-lime-200/15",
          ctaButton: "bg-lime-300 text-emerald-950 hover:bg-lime-200",
          mobileToggle: "text-lime-100 hover:bg-lime-200/15",
          mobilePanel: "bg-emerald-950/95 backdrop-blur-xl",
          mobileMenuItem: "border-lime-300/20 text-lime-100",
          mobileSentinel: "border-lime-300/25 text-lime-100",
          mobileCta: "bg-lime-300 text-emerald-950",
        };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled ? navTheme.navScrolled : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between gap-6">
            <button onClick={() => handleMenuClick("home")} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full border overflow-hidden ${navTheme.logoWrap}`}>
                <img src={logo.logo} alt={logo.name} className="w-full h-full object-contain" />
              </div>
              <span className={`hidden md:block text-base font-semibold tracking-tight ${navTheme.logoText}`}>
                {logo.name}
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`capitalize text-sm font-semibold tracking-wide transition-colors ${
                    activeSection === item && location.pathname === "/"
                      ? navTheme.menuActive
                      : navTheme.menuIdle
                  }`}
                >
                  {item}
                </button>
              ))}

              <Link
                to="/products/sentinel-society-management"
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${navTheme.sentinelButton}`}
              >
                Sentinel
              </Link>

              <button
                onClick={handleCtaClick}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${navTheme.ctaButton}`}
              >
                {ctaButton.text}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              className={`md:hidden rounded-xl p-2 transition-colors ${navTheme.mobileToggle}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
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
            className={`fixed inset-0 z-40 md:hidden pt-24 px-6 ${navTheme.mobilePanel}`}
          >
            <div className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`w-full rounded-2xl border px-4 py-4 text-left text-2xl font-semibold capitalize ${navTheme.mobileMenuItem}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              <Link
                to="/products/sentinel-society-management"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full rounded-2xl border px-5 py-4 text-center font-semibold ${navTheme.mobileSentinel}`}
              >
                Open Sentinel Product Page
              </Link>

              <button
                onClick={() => {
                  handleCtaClick();
                }}
                className={`w-full rounded-2xl py-4 font-bold ${navTheme.mobileCta}`}
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
