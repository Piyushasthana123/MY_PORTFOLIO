import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          number="02"
          eyebrow="Skills"
          title="Tools I reach for."
          description="A practical stack across the interface, the server, and the data in between."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="surface-card rounded-2xl p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-theme text-accent-label">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <h3 className="text-base font-semibold text-heading">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-sm font-medium text-heading">{skill.name}</span>
                      <span className="text-right text-xs text-faint">{skill.description}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
