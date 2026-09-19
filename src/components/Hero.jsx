import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GitHubIcon } from "./icons/SocialIcons";
import { scrollToSection } from "../utils/navigation";
import { profile, socialLinks } from "../data/profile";
import Container from "./Container";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-16" aria-label="Hero">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full blur-[90px]"
        style={{ backgroundColor: "var(--hero-wash)" }}
      />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:py-20 lg:py-24">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
              className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent-label"
            >
              Based in India · Available for work
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55, ease }}
              className="max-w-xl text-[3.15rem] leading-[0.95] tracking-tight text-heading sm:text-7xl"
            >
              <span className="block font-semibold">{profile.name.split(" ")[0]}</span>
              <span className="font-display italic">{profile.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5, ease }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl"
            >
              I design and build web products with React, then back them with Python and FastAPI.
              Quiet interfaces. Clear structure. Code that earns its keep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.5, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="btn-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                See selected work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.55, ease }}
            className="surface-card rounded-2xl p-6 sm:p-7"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Now</p>
            <p className="mt-3 font-display text-2xl italic leading-snug text-heading">
              {profile.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Shipping interfaces, APIs, and small experiments in data and ML — always with a
              notebook nearby.
            </p>
            <div className="mt-6 hairline" />
            <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-faint">Focus</dt>
                <dd className="mt-1 text-heading">React · FastAPI</dd>
              </div>
              <div>
                <dt className="text-faint">Practice</dt>
                <dd className="mt-1 text-heading">{profile.mindset.replaceAll(" • ", " · ")}</dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
