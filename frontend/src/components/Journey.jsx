import { motion } from "framer-motion";
import { journeySteps } from "../data/skills";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../utils/navigation";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-24 sm:py-32"
      style={{
        background: "var(--journey-bg)",
      }}
      aria-label="Experience and Honors"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <div className="mb-14 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
            | MILESTONES & JOURNEY |
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-normal text-[var(--text-heading)]">
            Engineering Milestones
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--text-muted)] font-normal">
            From algorithmic foundations to winning national-level hackathons and building production AI systems.
          </p>
        </div>

        <div className="relative border-l border-[var(--border-theme)] pl-8 sm:pl-12 space-y-10">
          {journeySteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[calc(2rem+9px)] sm:-left-[calc(3rem+9px)] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--bg-page)] shadow-[0_0_10px_rgba(216,150,80,0.5)]">
                <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              </div>

              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--text-accent-label)]">
                Stage 0{item.step}
              </span>
              <h3 className="mt-1.5 font-display text-xl sm:text-2xl font-medium text-[var(--text-heading)]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed tracking-wide text-[var(--text-muted)] font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 rounded-2xl border border-[var(--border-theme)] bg-[var(--bg-elevated)] p-8 text-center shadow-xl">
          <h4 className="font-display text-2xl font-normal text-[var(--text-heading)]">
            Ready to collaborate on new ideas and technologies?
          </h4>
          <p className="mx-auto mt-3 max-w-md text-xs sm:text-sm leading-relaxed tracking-wide text-[var(--text-muted)]">
            Explore my work, discuss new software opportunities, or reach out directly.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="btn-primary inline-flex items-center gap-2.5 rounded-md px-6 py-3 text-xs font-semibold uppercase tracking-widest shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
