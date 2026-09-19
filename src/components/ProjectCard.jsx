import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./icons/SocialIcons";

export default function ProjectCard({ project, index = 0, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group surface-card overflow-hidden rounded-2xl ${
        featured ? "md:grid md:grid-cols-2 md:items-stretch" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-surface-muted ${featured ? "md:min-h-[280px]" : ""}`}>
        <img
          src={project.image}
          alt=""
          className={`h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
            featured ? "sm:h-56 md:h-full" : "sm:h-52"
          }`}
          loading="lazy"
        />
      </div>

      <div className={`flex flex-col p-6 ${featured ? "sm:p-8" : ""}`}>
        <h3 className={`font-semibold tracking-tight text-heading ${featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="chip-surface rounded-full px-2.5 py-1 text-[11px] text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
          >
            Live site
            <ArrowUpRight size={14} />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            >
              <GitHubIcon size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
