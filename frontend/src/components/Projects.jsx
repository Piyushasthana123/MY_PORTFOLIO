import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const ease = [0.22, 1, 0.36, 1];

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32"
      style={{
        background: "var(--projects-bg)",
      }}
      aria-label="Selected Projects"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Eyebrow Tag: | PROJECTS | */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
              | SELECTED WORK |
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-normal text-[var(--text-heading)]">
              Digital Projects & Applications
            </h2>
          </div>
          <p className="mt-3 max-w-md text-sm text-[var(--text-muted)] font-light md:mt-0">
            Deployed solutions focusing on clean UI/UX, responsive layouts, and robust modern web architectures.
          </p>
        </div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="group relative mb-8 overflow-hidden rounded-2xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] transition-all duration-500 hover:border-[var(--accent)]/60 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
        >
          <div className="grid items-center lg:grid-cols-12">
            {/* Visual Preview */}
            <div className="relative overflow-hidden bg-[var(--bg-card)] lg:col-span-7">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-64 sm:h-80 lg:h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 rounded-full border border-[var(--accent)]/40 bg-[var(--bg-page)]/80 px-3.5 py-1 text-[11px] font-mono tracking-widest text-[var(--accent)] uppercase backdrop-blur-md">
                FEATURED PROJECT
              </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-accent-label)]">
                  {featured.period}
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-medium text-[var(--text-heading)]">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] font-light">
                  {featured.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-theme)] bg-[var(--bg-card)] px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-[var(--text-body)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Live Demo Link */}
              <div className="mt-8">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2.5 rounded-md px-6 py-3 text-xs font-semibold uppercase tracking-widest"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest of Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] transition-all duration-500 hover:border-[var(--accent)]/60 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Visual */}
                <div className="relative overflow-hidden bg-[var(--bg-card)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 rounded-full border border-[var(--border-theme)] bg-[var(--bg-page)]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--text-accent-label)] backdrop-blur-sm">
                    {project.period}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium text-[var(--text-heading)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] font-light tracking-wide">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border-theme)] bg-[var(--bg-card)] px-3 py-1 font-mono text-[10px] tracking-wide text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="border-t border-[var(--border-theme)]/50 p-6 pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-[var(--accent)] hover:text-[#140a04]"
                >
                  <span>Explore Live Project</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
