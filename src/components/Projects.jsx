import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Container from "./Container";
import { projects } from "../data/projects";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          number="03"
          eyebrow="Work"
          title="Selected projects."
          description="A few things I’ve shipped to practice product thinking, not just pixels."
        />

        <div className="space-y-6">
          <ProjectCard project={featured} index={0} featured />
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 1} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
