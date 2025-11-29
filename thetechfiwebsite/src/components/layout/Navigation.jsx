import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const BLOG_URL = "https://thetechnologyfiction.com/blog/";

const Navigation = ({
  logo = {
    text: "The Technology Fiction",
    initials: "TF",
    logo: "tech_fi_logo_512x512_image.jpeg",
  },
  menuItems = ["home", "services", "blog", "about", "contact"],
  ctaButton = { text: "Get Started", action: () => {} },
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // 👇 moved inside component so it can use scrollToSection + setIsMenuOpen
  const handleMenuClick = (item) => {
    if (item === "blog") {
      window.location.href = BLOG_URL; // open blog homepage
      setIsMenuOpen(false);
    } else {
      scrollToSection(item);
    }
  };

  const handleMenuKeyDown = (e, item) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleMenuClick(item);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // ignore "blog" in scroll-based active section
      for (const section of menuItems.filter((m) => m !== "blog")) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-secondary-200 shadow-sm ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container>
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center border border-secondary-200">
              <img
                src={logo.logo}
                alt={`${logo.name || logo.text} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-display font-bold text-gradient">
              {logo.name || logo.text || "No text found"}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                onKeyDown={(e) => handleMenuKeyDown(e, item)}
                className={`capitalize font-medium transition-colors duration-300 ${
                  activeSection === item ? "nav-link-active" : "nav-link"
                }`}
                role="menuitem"
                aria-current={activeSection === item ? "page" : undefined}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </button>
            ))}
            <Button
              onClick={ctaButton.action}
              className="btn-primary"
              aria-label={ctaButton.text}
            >
              {ctaButton.text}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors text-secondary-600"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-secondary-200 shadow-lg"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  onKeyDown={(e) => handleMenuKeyDown(e, item)}
                  className={`block w-full text-left capitalize font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                    activeSection === item
                      ? "text-primary-600 bg-primary-50 border border-primary-200"
                      : "text-secondary-600 hover:text-primary-600 hover:bg-secondary-50"
                  }`}
                  role="menuitem"
                  aria-current={activeSection === item ? "page" : undefined}
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </button>
              ))}
              <Button
                className="w-full btn-primary"
                onClick={ctaButton.action}
                aria-label={ctaButton.text}
              >
                {ctaButton.text}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
