"use client";

import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/cn";
import { ArrowUpRight, Github, Star } from "lucide-react";
import type { GithubRepo } from "@/lib/github";
import { fetchGithubRepos, fetchGithubUser } from "@/lib/github";

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-bg px-3 py-2">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </div>
      <div className="mt-0.5 text-sm font-semibold">{value}</div>
    </div>
  );
}

export function GithubWidget({ username }: { username: string }) {
  const user = useQuery({
    queryKey: ["github", username, "user"],
    queryFn: ({ signal }) => fetchGithubUser(username, signal)
  });

  const repos = useQuery({
    queryKey: ["github", username, "repos"],
    queryFn: ({ signal }) => fetchGithubRepos(username, signal),
    select: (data) =>
      data
        .filter((r) => !r.fork && !r.archived)
        .sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        )
        .slice(0, 6)
  });

  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr,1.05fr]">
      <div className="glass rounded-2xl p-6 shadow-glow">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {user.data?.avatar_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.data.avatar_url}
                alt={`${username} avatar`}
                className="h-12 w-12 rounded-2xl border border-border bg-bg object-cover"
              />
            ) : (
              <div className="h-12 w-12 rounded-2xl border border-border bg-bg" />
            )}
            <div>
              <div className="text-sm font-semibold">
                {user.data?.name ?? username}
              </div>
              <div className="mt-0.5 text-sm text-muted">@{username}</div>
            </div>
          </div>
          <a
            className="fancy-ring inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm text-muted shadow-glow hover:text-fg"
            href={user.data?.html_url ?? `https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" /> Open <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-4 text-sm text-muted">
          {user.isLoading
            ? "Loading GitHub profile…"
            : user.isError
              ? "GitHub profile unavailable right now."
              : user.data?.bio ?? "—"}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <Stat label="Repos" value={user.data?.public_repos ?? 0} />
          <Stat label="Followers" value={user.data?.followers ?? 0} />
          <Stat label="Following" value={user.data?.following ?? 0} />
        </div>

        {user.data?.location ? (
          <div className="mt-4 text-sm text-muted">Location: {user.data.location}</div>
        ) : null}

        {user.data?.blog ? (
          <a
            className="fancy-ring mt-3 inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
            href={user.data.blog}
            target="_blank"
            rel="noreferrer"
          >
            Website <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>

      <div className="glass rounded-2xl p-6 shadow-glow">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold">Recently updated repos</div>
          <div className="text-xs text-muted">
            {repos.isLoading ? "Loading…" : repos.isError ? "Unavailable" : "Live"}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {(repos.data ?? Array.from({ length: 6 })).map((r, idx) => {
            if (!r) {
              return (
                <div
                  key={`skeleton-${idx}`}
                  className="animate-pulse rounded-xl border border-border bg-bg p-4"
                >
                  <div className="h-4 w-2/3 rounded bg-border/60" />
                  <div className="mt-3 h-3 w-full rounded bg-border/40" />
                  <div className="mt-2 h-3 w-4/5 rounded bg-border/40" />
                </div>
              );
            }

            return (
              <a
                key={r.id}
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "fancy-ring group rounded-xl border border-border bg-bg p-4 shadow-glow transition hover:-translate-y-0.5"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold tracking-tight">{r.name}</div>
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <Star className="h-3.5 w-3.5" /> {r.stargazers_count}
                  </span>
                </div>
                <div className="mt-2 line-clamp-2 text-sm text-muted">
                  {r.description ?? "—"}
                </div>
                <div className="mt-3 text-xs text-muted">
                  {r.language ?? "—"}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
