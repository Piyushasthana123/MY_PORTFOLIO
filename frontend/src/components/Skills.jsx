import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

const ease = [0.22, 1, 0.36, 1];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32"
      style={{
        background: "var(--skills-bg)",
      }}
      aria-label="Technical Skills"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
            | TECHNICAL CAPABILITIES |
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-normal text-[var(--text-heading)]">
            Core Skills & Computer Science Foundation
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--text-muted)] font-light">
            Engineered through coursework at ANDUAT Ayodhya, hackathon execution, and production builds.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease }}
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] p-7 transition-all duration-300 hover:border-[var(--accent)]/60 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="mb-5 flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--bg-card)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--accent)]">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-xl font-medium text-[var(--text-heading)]">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3.5 pt-2">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-start justify-between gap-4 py-0.5 text-xs">
                        <span className="font-medium tracking-wide text-[var(--text-body)]">{skill.name}</span>
                        <span className="text-right font-light leading-relaxed tracking-wide text-[var(--text-faint)]">{skill.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
