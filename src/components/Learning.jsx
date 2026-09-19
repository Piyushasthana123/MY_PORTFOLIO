import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import { learningTopics } from "../data/skills";

const growthFlow = ["Learn", "Build", "Experiment", "Improve", "Ship better"];

export default function Learning() {
  return (
    <section id="learning" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          number="05"
          eyebrow="Practice"
          title="What I’m studying now."
          description="A short list, on purpose. Depth beats a wall of logos."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-sm font-semibold text-heading">Focus</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {learningTopics.map((topic) => (
                <span
                  key={topic}
                  className="chip-surface rounded-full px-3.5 py-2 text-sm text-body"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-sm font-semibold text-heading">How I work</h3>
            <ol className="mt-5 space-y-3">
              {growthFlow.map((step, index) => (
                <li key={step} className="flex items-center gap-3 text-sm text-body">
                  <span className="font-mono text-[11px] text-accent-label">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
