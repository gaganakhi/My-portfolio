import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="max-w-screen-lg pt-[100px] mx-auto flex flex-col px-4 lg:pt-32 sm:pt-20">

        {/* Title */}
        <h2 className="text-4xl font-bold inline border-b-4 border-accent text-primary">
          Portfolio
        </h2>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <ProjectCard key={i} project={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
