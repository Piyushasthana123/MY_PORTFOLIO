import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons/SocialIcons";
import { profile, socialLinks } from "../data/profile";
import { scrollToSection } from "../utils/navigation";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Frequently cycle between roles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20"
      style={{
        background: "var(--hero-bg)",
      }}
      aria-label="Hero Introduction"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-10 right-1/4 h-[550px] w-[550px] rounded-full blur-[120px]"
        style={{ background: "var(--hero-wash)" }}
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full blur-[100px]"
        style={{ background: "var(--hero-wash)" }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Main Grid: Left Headline & CTA, Center Portrait, Right Floating Stats */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column (Span 6 on desktop) */}
          <div className="z-10 lg:col-span-6 xl:col-span-6">
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-4 inline-flex items-center gap-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
                | {profile.eyebrow} |
              </span>
            </motion.div>

            {/* Editorial Headline: Name with refined scale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease }}
              className="space-y-2"
            >
              <h1
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-wider text-[var(--text-heading)] uppercase"
                style={{ wordSpacing: "0.2em" }}
              >
                {profile.name}
              </h1>

              {/* Dynamic Animated Roles: Frequently changing role animation */}
              <div className="relative h-10 sm:h-12 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease }}
                    className="font-display text-2xl sm:text-3xl lg:text-4xl italic text-[var(--accent)] font-medium tracking-wide"
                  >
                    {profile.roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55, ease }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--text-muted)] font-normal"
            >
              Computer Science undergraduate at ANDUAT Ayodhya crafting high-performance
              web applications, intelligent AI models, and resilient Python systems.
              Winner of Internal Smart India Hackathon (SIH 2025).
            </motion.p>

            {/* Buttons: Official Single Resume Download CTA + Contact Me */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55, ease }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={socialLinks.resume}
                download="Piyush_Asthana_Resume.pdf"
                className="btn-primary group inline-flex items-center justify-center gap-3 rounded-md px-7 py-3.5 text-xs font-semibold uppercase tracking-widest shadow-lg transition-transform hover:-translate-y-0.5"
                title="Download Official Resume PDF"
              >
                <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="btn-secondary inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>
          </div>

          {/* Center Portrait Image (Span 4 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            className="relative flex justify-center lg:col-span-4"
          >
            {/* Subtle outer halo */}
            <div className="absolute inset-0 -m-3 rounded-2xl bg-gradient-to-b from-[var(--accent)]/20 via-transparent to-[var(--accent)]/10 blur-xl" />

            {/* Framed Portrait */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] shadow-2xl">
              <img
                src={profile.heroImage}
                alt={`${profile.name} - Professional Portrait`}
                className="h-[430px] w-full max-w-[340px] sm:h-[480px] sm:max-w-[380px] object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Bottom gradient fade into background */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--bg-page)] via-[var(--bg-page)]/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right Floating Stats Column (Span 2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease }}
            className="flex flex-row flex-wrap justify-between gap-6 lg:col-span-2 lg:flex-col lg:justify-center lg:gap-10"
          >
            {/* Luxury Round Emblem */}
            <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--bg-card)] shadow-[0_0_20px_rgba(216,150,80,0.2)]">
              <Sparkles size={20} className="text-[var(--accent)]" />
            </div>

            {/* Stat 1: 5+ Projects Completed */}
            <div className="min-w-[110px]">
              <div className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
                5+
              </div>
              <div className="mt-2.5 text-xs tracking-wider text-[var(--text-muted)] font-medium leading-relaxed">
                Projects Completed
              </div>
            </div>

            {/* Stat 2: 1st SIH Internal Hackathon Winner */}
            <div className="min-w-[110px]">
              <div className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
                1st
              </div>
              <div className="mt-2.5 text-xs tracking-wider text-[var(--text-muted)] font-medium leading-relaxed">
                SIH Internal Hackathon Winner
              </div>
            </div>

            {/* Stat 3: 7.6+ CGPA */}
            <div className="min-w-[110px]">
              <div className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
                7.6+
              </div>
              <div className="mt-2.5 text-xs tracking-wider text-[var(--text-muted)] font-medium leading-relaxed">
                B.Tech CSE CGPA
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Strip: Contact Information & Academic Credentials (Clean & Well-formatted) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="mt-16 sm:mt-20 flex flex-col gap-8 border-t border-[var(--border-theme)] pt-8 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Contact & Academic Credentials Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full lg:max-w-3xl">
            {/* Card 1: Contact Information */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] shadow-sm transition-all hover:border-[var(--accent)]/50">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--border-theme)] bg-[var(--bg-card)] text-[var(--accent)] shadow-sm">
                <Phone size={19} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-accent-label)] font-semibold">
                  Contact Information
                </span>
                <div className="mt-2.5 flex flex-col gap-1.5">
                  <a
                    href="tel:+918808273389"
                    className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--text-heading)] hover:text-[var(--accent)] transition-colors truncate"
                  >
                    +91-8808273389
                  </a>
                  <a
                    href="mailto:piyushasthana444@gmail.com"
                    className="text-xs tracking-wide text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors truncate"
                  >
                    piyushasthana444@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Academic Credentials */}
            <div className="flex items-start gap-4 p-4 rounded-xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] shadow-sm transition-all hover:border-[var(--accent)]/50">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--border-theme)] bg-[var(--bg-card)] text-[var(--accent)] shadow-sm">
                <GraduationCap size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-accent-label)] font-semibold">
                  Academic Credentials
                </span>
                <div className="mt-2.5 flex flex-col gap-1.5">
                  <span className="block text-xs sm:text-sm font-semibold tracking-wide text-[var(--text-heading)] leading-snug">
                    ANDUAT, Kumarganj Ayodhya
                  </span>
                  <span className="text-xs tracking-wide text-[var(--text-muted)]">
                    B.Tech CSE (2024–2028) · CGPA 7.636
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Row on Bottom Right (GitHub, LinkedIn, Instagram, Email) */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-theme)] bg-[var(--bg-card)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 shadow-sm"
              title="GitHub Profile"
            >
              <GitHubIcon size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-theme)] bg-[var(--bg-card)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedInIcon size={17} />
            </a>

            {/* Instagram */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-theme)] bg-[var(--bg-card)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 shadow-sm"
              title="Instagram Profile"
            >
              <InstagramIcon size={17} />
            </a>

            {/* Email */}
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Send Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-theme)] bg-[var(--bg-card)] text-[var(--text-muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 shadow-sm"
              title="Send Direct Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
