import { useCallback, useEffect, useState } from 'react';
import type { GitHubProject } from '../types/github';

const AUTO_ADVANCE_MS = 5000;

interface ProjectCarouselProps {
  repos: GitHubProject[];
}

export default function ProjectCarousel({ repos }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = repos.length;

  const goTo = useCallback(
    (index: number, slideDirection: 'next' | 'prev') => {
      if (isAnimating || total === 0) return;
      setDirection(slideDirection);
      setIsAnimating(true);
      setCurrentIndex(index);
    },
    [isAnimating, total]
  );

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % total, 'next');
  }, [currentIndex, goTo, total]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + total) % total, 'prev');
  }, [currentIndex, goTo, total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, total]);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = window.setTimeout(() => setIsAnimating(false), 400);
    return () => window.clearTimeout(timer);
  }, [isAnimating, currentIndex]);

  if (total === 0) {
    return (
      <p className="mt-8 text-sm text-slate-400">No public repositories found on GitHub.</p>
    );
  }

  const project = repos[currentIndex];
  const tags = [
    ...(project.language ? [project.language] : []),
    ...project.topics.map((topic) =>
      topic
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    ),
  ];

  const enterClass = isAnimating
    ? direction === 'next'
      ? 'animate-slide-in-right'
      : 'animate-slide-in-left'
    : '';

  return (
    <div
      className="mt-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={total <= 1}
          aria-label="Previous project"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/70 p-6 shadow-inner shadow-cyan-950/20">
          <article
            key={project.id}
            className={`transition-all duration-[400ms] ease-out ${enterClass}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-cyan-400"
                >
                  {project.title}
                </a>
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current text-amber-400" aria-hidden>
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
                {project.stars}
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

            {tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Live demo →
              </a>
            )}
          </article>
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={total <= 1}
          aria-label="Next project"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {repos.map((repo, index) => (
          <button
            key={repo.id}
            type="button"
            onClick={() => goTo(index, index > currentIndex ? 'next' : 'prev')}
            aria-label={`Go to ${repo.title}`}
            aria-current={index === currentIndex ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex
                ? 'w-6 bg-cyan-400'
                : 'w-2.5 bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
