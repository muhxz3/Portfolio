import type { GitHubProject } from '../types/github';
import ProjectCarousel from './ProjectCarousel';

interface ProjectsContentProps {
  repos: GitHubProject[];
  loading: boolean;
  error: string | null;
  profileUrl: string | null;
}

export default function ProjectsContent({ repos, loading, error, profileUrl }: ProjectsContentProps) {
  return (
    <>
      <h2 className="mt-4 text-3xl font-semibold text-white">Projects from my GitHub</h2>
      <p className="mt-2 text-sm text-slate-400">
        Live repositories pulled from my GitHub account.
      </p>

      {loading && (
        <div className="mt-8 animate-pulse space-y-4">
          <div className="h-48 rounded-2xl border border-slate-700 bg-slate-950/70" />
          <div className="mx-auto h-2.5 w-24 rounded-full bg-slate-700" />
        </div>
      )}

      {!loading && error && (
        <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
          <p className="text-sm text-red-300">{error}</p>
          {profileUrl && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              View my GitHub profile →
            </a>
          )}
        </div>
      )}

      {!loading && !error && <ProjectCarousel repos={repos} />}
    </>
  );
}
