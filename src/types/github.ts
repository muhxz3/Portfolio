export interface GitHubRepoResponse {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  private: boolean;
  updated_at: string;
}

export interface GitHubProject {
  id: number;
  title: string;
  description: string;
  url: string;
  homepage: string | null;
  stars: number;
  language: string | null;
  topics: string[];
  updatedAt: string;
}
