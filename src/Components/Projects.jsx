import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-10">
      <h3 className="text-2xl font-semibold">Selected projects</h3>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((item, i) => (
          <ProjectCard key={i} project={item} />
        ))}
      </div>
    </section>
  );
}
