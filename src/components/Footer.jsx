import { Code2 } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons/SocialIcons";
import { socialLinks, profile } from "../data/profile";
import { scrollToSection } from "../utils/navigation";
import Container from "./Container";

const footerLinks = [
  { icon: GitHubIcon, href: socialLinks.github, label: "GitHub" },
  { icon: LinkedInIcon, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: InstagramIcon, href: socialLinks.instagram, label: "Instagram" },
  { icon: Code2, href: socialLinks.hackerrank, label: "HackerRank" },
];

export default function Footer() {
  return (
    <footer className="border-t border-theme bg-footer theme-transition">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-left"
          >
            <p className="font-display text-2xl italic text-heading">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">React · Python · FastAPI</p>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {footerLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-theme text-muted transition-colors hover:text-heading"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </Container>
      <Container className="border-t border-subtle py-5">
        <p className="text-xs text-faint">© 2026 {profile.name}</p>
      </Container>
    </footer>
  );
}
