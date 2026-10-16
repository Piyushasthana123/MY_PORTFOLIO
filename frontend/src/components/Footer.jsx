import { Mail, Sparkles } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons/SocialIcons";
import { socialLinks, profile } from "../data/profile";
import { scrollToSection } from "../utils/navigation";

const footerSocials = [
  { icon: GitHubIcon, href: socialLinks.github, label: "GitHub Profile" },
  { icon: LinkedInIcon, href: socialLinks.linkedin, label: "LinkedIn Profile" },
  { icon: InstagramIcon, href: socialLinks.instagram, label: "Instagram Profile" },
  { icon: Mail, href: `mailto:${socialLinks.email}`, label: "Send Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-theme)] bg-[var(--bg-footer)] py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-heading)] group-hover:text-[var(--accent)] transition-colors">
                  {profile.name}
                </span>
                <Sparkles size={16} className="text-[var(--accent)]" />
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Computer Science Engineer · Web & AI Developer
              </p>
            </button>
            <p className="mt-3.5 max-w-md text-xs leading-relaxed tracking-wide text-[var(--text-muted)]">
              Based in Uttar Pradesh, India · Dedicated to building robust software, scalable web systems & intelligent digital solutions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {footerSocials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-theme)] bg-[var(--bg-elevated)] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-105 shadow-sm"
                title={label}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-[var(--border-theme)]/40 pt-6 text-xs text-[var(--text-faint)] tracking-wide gap-3">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[11px] tracking-wider text-[var(--text-muted)]">
            Built with React & Modern Web Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
