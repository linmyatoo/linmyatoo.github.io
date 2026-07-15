"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navItems, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section precisely on scroll across all section heights
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Check if scrolled near the bottom of the page (for Contact section)
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass-strong shadow-sm shadow-slate-900/5 border-b border-slate-200/80" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="group cursor-pointer block"
              aria-label="Home"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm group-hover:border-primary group-hover:scale-105 transition-all flex items-center justify-center bg-white shrink-0">
                <Image
                  src="/images/lmo1.jpeg"
                  alt="Lin Myat Oo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-white/80 border border-slate-200 shadow-sm backdrop-blur-md">
              {navItems.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className={cn(
                      "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 relative",
                      isActive
                        ? "text-white bg-primary shadow-sm shadow-primary/25"
                        : "text-text-muted hover:text-text hover:bg-slate-100/80"
                    )}
                  >
                    {label}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-muted hover:text-text hover:bg-card/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-72 bg-white/95 backdrop-blur-xl border-l border-slate-200 p-6 pt-20 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map(({ label, href }) => {
                  const sectionId = href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(href);
                      }}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200",
                        isActive
                          ? "text-white bg-primary shadow-sm shadow-primary/20"
                          : "text-text-muted hover:text-text hover:bg-slate-100"
                      )}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
