import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, scrollToSection } from "../utils/navigation";
import { useScrollSpy, useScrolled } from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const activeSection = useScrollSpy(navLinks.map((link) => link.id));

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 theme-transition ${
        scrolled ? "border-b border-theme bg-nav-scrolled backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className="site-wrap flex h-[4.25rem] items-center justify-between"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-2.5 rounded-md"
          aria-label="Go to home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-theme font-display text-lg italic text-heading">
            P
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-heading sm:inline">
            {profile.name}
          </span>
        </button>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`relative rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                activeSection === link.id ? "text-heading" : "text-muted hover:text-heading"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--accent)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
          <ThemeToggle className="ml-2" />
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="btn-primary ml-3 rounded-full px-4 py-2 text-[13px] font-semibold"
          >
            Write to me
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md p-2 text-body hover:bg-surface-muted hover:text-heading"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-b border-theme bg-nav-scrolled backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-lg px-3 py-3 text-left text-sm font-medium ${
                    activeSection === link.id
                      ? "bg-surface-muted text-heading"
                      : "text-muted hover:text-heading"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className="btn-primary mt-2 rounded-full px-4 py-3 text-sm font-semibold"
              >
                Write to me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
