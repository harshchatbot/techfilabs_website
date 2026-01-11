import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

// these are sections that exist on the homepage (scroll targets)
const HOME_SECTIONS = new Set(["home", "services", "about", "contact", "testimonials"]);

const Navigation = ({
  logo = {
    text: "TechfiLabs",
    initials: "TF",
    logo: "techfilabs_primary_logo.png", // not sure where it impacts
  },
  menuItems = ["home", "services", "about", "contact"],
  ctaButton = { text: "Get Started", action: () => {} },
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // 1) LOCK BODY SCROLL: Prevent background move when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const goHomeThenScroll = async (sectionId) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
      return;
    }
    navigate("/");
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 150);
  };

  const handleMenuClick = (item) => {
    setIsMenuOpen(false);
    if (HOME_SECTIONS.has(item)) {
      goHomeThenScroll(item);
      return;
    }
    goHomeThenScroll(item);
  };

  // 2) SCROLL SPY LOGIC (Fixed: Now actually updates active state)
  useEffect(() => {
    const handleScroll = () => {
      // Background blur effect
      setScrolled(window.scrollY > 20);

      // Only run scroll spy on the homepage
      if (location.pathname !== "/") return;

      // Find which section is currently in view
      let current = "";
      for (const section of menuItems) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section top is within the top third of viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems, location.pathname]);

  // Animations
  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-black/80 backdrop-blur-xl border-white/10 py-3" 
            : "bg-transparent border-transparent py-4 md:py-6"
        } ${className}`}
      >
        {/* FIX: Changed px-6 to px-4 for better mobile alignment */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 z-50 relative"
            >
              <div
                className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg cursor-pointer"
                onClick={() => handleMenuClick("home")}
              >
                <img
                  src={logo.logo}
                  alt={logo.text}
                  className="w-full h-full object-cover opacity-90 object-contain"
                  //className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white hidden md:block">
                {logo.text}
              </span>
            </motion.div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`text-sm font-medium capitalize tracking-wide transition-colors duration-300 relative ${
                    activeSection === item ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand rounded-full"
                    />
                  )}
                </button>
              ))}

              <button
                onClick={ctaButton.action}
                className="group relative px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
              >
                {ctaButton.text}
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors relative"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            // FIX: Added overflow-hidden to contain blur effects
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 h-screen overflow-hidden"
          >
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-dark/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {menuItems.map((item, i) => (
                <motion.button
                  custom={i}
                  variants={linkVariants}
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`text-4xl font-bold capitalize text-left flex items-center justify-between group ${
                    activeSection === item ? "text-white" : "text-zinc-600"
                  }`}
                >
                  <span>{item}</span>
                  <ChevronRight
                    className={`w-8 h-8 transition-opacity ${
                      activeSection === item ? "opacity-100 text-brand" : "opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-10 border-t border-white/10 pt-8 relative z-10"
            >
              <button
                className="w-full py-4 bg-white text-black font-bold text-lg rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
                onClick={() => {
                  ctaButton.action();
                  setIsMenuOpen(false);
                }}
              >
                {ctaButton.text}
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-8 text-center">
                <p className="text-zinc-500 text-sm">© 2024 TechfiLabs</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;