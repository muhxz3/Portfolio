import type { GitHubProject } from '../types/github';

function formatTopic(topic: string): string {
  return topic
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function deriveSkillsFromRepos(repos: GitHubProject[]): string[] {
  const counts = new Map<string, number>();

  for (const repo of repos) {
    if (repo.language) {
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }

    for (const topic of repo.topics) {
      const formatted = formatTopic(topic);
      counts.set(formatted, (counts.get(formatted) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([skill]) => skill);
}
