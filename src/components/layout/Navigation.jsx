import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HOME_SECTIONS = new Set(["home", "products", "services", "about", "contact", "testimonials"]);

export default function Navigation({
  logo = { name: "TechFi Labs", logo: "/techfilabs_primary_logo.png" },
  menuItems = ["home", "products", "services", "about", "contact"],
  ctaButton = { text: "Book a Strategy Call", action: () => {} },
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
        navigate("/");
        setTimeout(() => scrollToSection(item), 150);
      }
      return;
    }

    navigate(`/${item}`);
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-emerald-950/90 border-lime-300/15 backdrop-blur-xl py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between gap-6">
            <button onClick={() => handleMenuClick("home")} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-lime-300/35 bg-white/90 overflow-hidden">
                <img src={logo.logo} alt={logo.name} className="w-full h-full object-contain" />
              </div>
              <span className="hidden md:block text-base font-semibold tracking-tight text-lime-100">
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
                      ? "text-lime-100"
                      : "text-emerald-100/75 hover:text-lime-100"
                  }`}
                >
                  {item}
                </button>
              ))}

              <Link
                to="/products/sentinel-society-management"
                className="rounded-full border border-lime-200/35 px-4 py-2 text-sm font-semibold text-lime-100 hover:bg-lime-200/15 transition-colors"
              >
                Sentinel
              </Link>

              <button
                onClick={ctaButton.action}
                className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-emerald-950 hover:bg-lime-200 transition-colors"
              >
                {ctaButton.text}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              className="md:hidden rounded-xl p-2 text-lime-100 hover:bg-lime-200/15 transition-colors"
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
            className="fixed inset-0 z-40 bg-emerald-950/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <div className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className="w-full rounded-2xl border border-lime-300/20 px-4 py-4 text-left text-2xl font-semibold capitalize text-lime-100"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              <Link
                to="/products/sentinel-society-management"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full rounded-2xl border border-lime-300/25 px-5 py-4 text-center font-semibold text-lime-100"
              >
                Open Sentinel Product Page
              </Link>

              <button
                onClick={() => {
                  ctaButton.action();
                  setIsMenuOpen(false);
                }}
                className="w-full rounded-2xl bg-lime-300 py-4 font-bold text-emerald-950"
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
