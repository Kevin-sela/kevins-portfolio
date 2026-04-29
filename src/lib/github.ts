export type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  blog: string | null;
};

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
};

async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(url, {
    signal,
    headers: { Accept: "application/vnd.github+json" }
  });
  if (!res.ok) throw new Error(`GitHub request failed: ${res.status}`);
  return (await res.json()) as T;
}

export async function fetchGithubUser(username: string, signal?: AbortSignal) {
  return fetchJson<GithubUser>(`https://api.github.com/users/${username}`, signal);
}

export async function fetchGithubRepos(username: string, signal?: AbortSignal) {
  return fetchJson<GithubRepo[]>(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
    signal
  );
}

