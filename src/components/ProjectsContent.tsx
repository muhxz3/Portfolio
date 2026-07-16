import { projects } from '../data/content';

export default function ProjectsContent() {
  return (
    <>
      <h2 className="mt-4 text-3xl font-semibold text-white">Projects that reflect my learning journey</h2>
      <div className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
