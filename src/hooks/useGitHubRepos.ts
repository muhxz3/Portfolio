import { useEffect, useState } from 'react';
import { fetchGitHubRepos, getGitHubProfileUrl } from '../services/github';
import type { GitHubProject } from '../types/github';

interface UseGitHubReposResult {
  repos: GitHubProject[];
  loading: boolean;
  error: string | null;
  profileUrl: string | null;
}

export function useGitHubRepos(): UseGitHubReposResult {
  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const [repos, setRepos] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      setError('GitHub username is not configured. Set VITE_GITHUB_USERNAME in your .env file.');
      return;
    }

    let cancelled = false;

    async function loadRepos() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchGitHubRepos(username);
        if (!cancelled) {
          setRepos(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load repositories.');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadRepos();

    return () => {
      cancelled = true;
    };
  }, [username]);

  return {
    repos,
    loading,
    error,
    profileUrl: username ? getGitHubProfileUrl(username) : null,
  };
}
