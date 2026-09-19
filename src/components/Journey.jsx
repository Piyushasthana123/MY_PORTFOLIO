import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import { journeySteps } from "../data/skills";

export default function Journey() {
  return (
    <section id="journey" className="relative py-20 sm:py-28">
      <Container className="max-w-[720px]">
        <SectionHeading
          number="06"
          eyebrow="Path"
          title="A simple loop, repeated."
          description="No origin-story theatrics — just the sequence I keep coming back to."
        />

        <ol className="relative space-y-0 border-l border-theme pl-6 sm:pl-8">
          {journeySteps.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="relative pb-8 last:pb-0"
            >
              <span className="absolute top-1.5 h-2.5 w-2.5 -translate-x-[calc(1.5rem+5px)] rounded-full border border-[var(--accent)] bg-page sm:-translate-x-[calc(2rem+5px)]" />
              <p className="font-mono text-[11px] text-accent-label">
                {String(item.step).padStart(2, "0")}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-heading">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
