import { motion } from "framer-motion";

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex max-w-2xl flex-col ${alignment}`}
    >
      <div className="mb-4 flex items-center gap-3">
        {number && (
          <span className="font-mono text-[11px] tracking-[0.18em] text-accent-label">
            {number}
          </span>
        )}
        {eyebrow && (
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="font-display text-[2.15rem] leading-[1.15] tracking-tight text-heading sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
