import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import { profile } from "../data/profile";

const growingAreas = [
  "React",
  "Backend APIs",
  "Python",
  "Data analytics",
  "AI / ML",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          number="01"
          eyebrow="About"
          title="A builder who likes the craft."
          description="I learn in public by making things — then I go back and make them better."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mx-auto w-40 sm:w-48 lg:mx-0 lg:w-full"
          >
            <img
              src={profile.avatar}
              alt={`${profile.name} portrait`}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <p className="mt-3 font-mono text-[11px] tracking-wide text-faint">
              {profile.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="space-y-5 text-base leading-[1.75] text-muted"
          >
            <p>
              I&apos;m <span className="text-heading">{profile.name}</span>. I spend most of my
              time on the web: layouts that feel considered, React components that stay
              readable, and Python services that do one job well.
            </p>
            <p>
              Tailwind helps me stay honest about spacing and type. FastAPI is how I like to
              expose an idea to the world. On the side I study data, machine learning, and DSA
              so the next project is a little more solid than the last.
            </p>
            <p>
              I don&apos;t chase every trend. I pick a problem, ship a version, then refine the
              details until it feels like someone actually sat with it.
            </p>

            <div className="pt-4">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
                Currently growing
              </p>
              <ul className="flex flex-wrap gap-2">
                {growingAreas.map((area) => (
                  <li
                    key={area}
                    className="chip-surface rounded-full px-3.5 py-1.5 text-sm text-body"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
