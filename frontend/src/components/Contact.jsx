import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons/SocialIcons";
import ContactForm from "./ContactForm";
import { socialLinks } from "../data/profile";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/Piyushasthana123",
    href: "https://github.com/Piyushasthana123",
    icon: GitHubIcon,
    highlight: true,
  },
  {
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: socialLinks.phone,
    href: `tel:${socialLinks.phone}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "Piyush Asthana",
    href: socialLinks.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    value: "@piyushasthana444",
    href: socialLinks.instagram,
    icon: InstagramIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32"
      style={{
        background: "var(--contact-bg)",
      }}
      aria-label="Contact Section"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
            | INQUIRIES & COLLABORATION |
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-normal text-[var(--text-heading)]">
            Let’s Connect
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--text-muted)] font-normal">
            Whether you have an engineering opportunity, want to discuss software development, or build something great together, reach out below.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Contact Direct Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 lg:col-span-5"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                  rel={link.label === "Email" || link.label === "Phone" ? undefined : "noopener noreferrer"}
                  className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 hover:-translate-x-1 ${
                    link.highlight
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#140a04]"
                      : "border-[var(--border-theme)] bg-[var(--bg-elevated)] text-[var(--text-heading)] hover:border-[var(--accent)]/60"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
                      link.highlight
                        ? "border-current bg-transparent"
                        : "border-[var(--accent)]/30 bg-[var(--bg-card)] text-[var(--accent)]"
                    }`}
                  >
                    <Icon size={17} />
                  </span>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-[var(--text-accent-label)]">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium tracking-wide">{link.value}</span>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] p-7 sm:p-10 shadow-2xl lg:col-span-7"
          >
            <h3 className="mb-6 font-display text-2xl font-normal text-[var(--text-heading)]">
              Send a Direct Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
