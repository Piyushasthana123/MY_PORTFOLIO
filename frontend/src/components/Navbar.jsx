import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GitHubIcon } from "./icons/SocialIcons";
import { navLinks, scrollToSection } from "../utils/navigation";
import { useScrollSpy, useScrolled } from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";
import { profile, socialLinks } from "../data/profile";

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border-theme)] bg-[var(--bg-nav-scrolled)] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-10"
        aria-label="Main navigation"
      >
        {/* Luxury Crest / Logo on Top Left */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-3 text-left focus:outline-none"
          aria-label="Go to home"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--bg-card)] shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-[var(--accent)]">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-[var(--accent)]"
              fill="currentColor"
            >
              <path d="M12 2l2.6 6.3 6.8.5-5.2 4.4 1.7 6.6L12 16.4l-5.9 3.4 1.7-6.6-5.2-4.4 6.8-.5L12 2z" />
            </svg>
            <div className="absolute inset-0 rounded-full border border-[var(--accent)]/20 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-semibold tracking-wider text-[var(--text-heading)]">
              {profile.name}
            </span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.28em] text-[var(--text-accent-label)]">
              PORTFOLIO
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`relative py-1.5 font-sans text-xs uppercase tracking-[0.22em] transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[var(--accent)] font-semibold"
                  : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="active-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* GitHub Action Link */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full border border-[var(--border-theme)] bg-[var(--bg-card)] px-4 py-2 text-xs font-semibold tracking-widest text-[var(--text-heading)] uppercase transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] shadow-sm"
            title="Piyush Asthana on GitHub"
          >
            <GitHubIcon size={14} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-theme)] text-[var(--text-muted)] hover:text-[var(--accent)]"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={16} />
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--text-heading)] hover:bg-[var(--bg-surface-muted)]"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-[var(--border-theme)] bg-[var(--bg-nav-scrolled)] px-6 py-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`py-2 text-left font-sans text-sm tracking-[0.15em] uppercase ${
                    activeSection === link.id
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNavClick("contact")}
                  className="btn-primary flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs tracking-widest uppercase font-semibold"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
