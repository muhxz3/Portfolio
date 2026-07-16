import { skills } from '../data/content';

export default function SkillsContent() {
  return (
    <>
      <h2 className="mt-4 text-3xl font-semibold text-white">Foundational skills I am building with</h2>
      <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
            <h3 className="text-lg font-semibold text-cyan-400">{skill.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{skill.level}</p>
          </div>
        ))}
      </div>
    </>
  );
}
