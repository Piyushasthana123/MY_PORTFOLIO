import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./icons/SocialIcons";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import Container from "./Container";
import { socialLinks } from "../data/profile";

const contactLinks = [
  {
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Piyushasthana123",
    href: socialLinks.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: "Piyush Asthana",
    href: socialLinks.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    value: "@_piyush_asthana_",
    href: socialLinks.instagram,
    icon: InstagramIcon,
  },
  {
    label: "HackerRank",
    value: "piyushasthana444",
    href: socialLinks.hackerrank,
    icon: Code2,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          number="07"
          eyebrow="Contact"
          title="Let’s talk."
          description="A project, a question, or a hello — the form below lands in my inbox."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 lg:col-span-2"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-surface-muted"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-theme text-muted">
                    <Icon size={16} />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-faint">
                      {link.label}
                    </span>
                    <span className="text-sm font-medium text-heading">{link.value}</span>
                  </span>
                </a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-6 sm:p-8 lg:col-span-3"
          >
            <h3 className="mb-6 text-lg font-semibold text-heading">Send a message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
