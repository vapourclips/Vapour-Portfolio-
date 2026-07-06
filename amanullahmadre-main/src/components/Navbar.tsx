import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { LiquidGlass } from "@/components/liquid-glass/LiquidGlass";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {isScrolled ? (
        <LiquidGlass
          as="div"
          radius={0}
          strength={0}
          tilt={false}
          className="shadow-soft"
        >
          <NavInner
            isDark={isDark}
            toggleDarkMode={toggleDarkMode}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </LiquidGlass>
      ) : (
        <div className="bg-transparent">
          <NavInner
            isDark={isDark}
            toggleDarkMode={toggleDarkMode}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <LiquidGlass as="div" radius={0} strength={0} tilt={false} className="border-t border-border">
              <div className="section-container py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block btn-primary text-center mt-4"
                >
                  Get In Touch
                </a>
              </div>
            </LiquidGlass>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavInner = ({
  isDark,
  toggleDarkMode,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isDark: boolean;
  toggleDarkMode: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (v: boolean) => void;
}) => (
  <nav className="section-container">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2">
        <span className="text-xl font-bold text-foreground">
          Amanullah<span className="text-primary">.</span>
        </span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="nav-link">
            {link.name}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>

        <LiquidGlass
          as="a"
          href="#contact"
          radius={12}
          strength={20}
          className="btn-glass-primary hidden md:inline-flex text-sm !px-5 !py-2.5"
        >
          Get In Touch
        </LiquidGlass>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
