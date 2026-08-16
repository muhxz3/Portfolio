interface SkillsContentProps {
  skills: string[];
  loading: boolean;
  error: string | null;
}

export default function SkillsContent({ skills, loading, error }: SkillsContentProps) {
  return (
    <>
      <h2 className="mt-4 text-3xl font-semibold text-white">Skills from my projects</h2>
      <p className="mt-2 text-sm text-slate-400">
        Languages and technologies used across my GitHub repositories.
      </p>

      {loading && (
        <div className="mt-8 flex flex-wrap gap-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-9 w-24 animate-pulse rounded-full border border-slate-700 bg-slate-950/70"
            />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="mt-8 text-sm text-slate-400">Skills will appear once projects load.</p>
      )}

      {!loading && !error && skills.length === 0 && (
        <p className="mt-8 text-sm text-slate-400">No skills detected from repository data.</p>
      )}

      {!loading && !error && skills.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-600 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
