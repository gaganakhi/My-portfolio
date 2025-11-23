export default function ProjectCard({ project }) {
    return (
      <article className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
        <div className="h-36 rounded-md bg-slate-100 mb-4 flex items-center justify-center">
          <img src={project.img} alt="" className="h-full w-full object-cover rounded-md" />
        </div>
  
        <h4 className="font-semibold">{project.title}</h4>
        <p className="mt-2 text-sm text-slate-600">{project.desc}</p>
  
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100">{t}</span>
          ))}
        </div>
  
        <a href={project.url} className="mt-4 inline-block text-sm text-indigo-600">
          View
        </a>
      </article>
    );
  }
  