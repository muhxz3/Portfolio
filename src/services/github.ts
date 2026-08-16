import type { GitHubProject, GitHubRepoResponse } from '../types/github';

function normalizeRepo(repo: GitHubRepoResponse): GitHubProject {
  return {
    id: repo.id,
    title: repo.name,
    description: repo.description ?? 'No description provided.',
    url: repo.html_url,
    homepage: repo.homepage || null,
    stars: repo.stargazers_count,
    language: repo.language,
    topics: repo.topics ?? [],
    updatedAt: repo.updated_at,
  };
}

export async function fetchGitHubRepos(username: string): Promise<GitHubProject[]> {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`,
    { headers }
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`GitHub user "${username}" not found.`);
    }
    throw new Error(`Failed to fetch repositories (${response.status}).`);
  }

  const repos: GitHubRepoResponse[] = await response.json();

  return repos
    .filter((repo) => !repo.private && !repo.fork)
    .map(normalizeRepo);
}

export function getGitHubProfileUrl(username: string): string {
  return `https://github.com/${encodeURIComponent(username)}`;
}
