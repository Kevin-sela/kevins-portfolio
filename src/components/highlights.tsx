"use client";

import { useQuery } from "@tanstack/react-query";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { fetchGithubRepos } from "@/lib/github";

function StatCard({
  label,
  value,
  sub
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="glass rounded-2xl p-5 shadow-glow">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-muted">{sub}</div>
    </div>
  );
}

function CountUp({ to }: { to: number }) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 70, damping: 18 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const [val, setVal] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setVal(v));
    mv.set(to);
    return () => unsub();
  }, [mv, rounded, to]);

  return <span>{val}</span>;
}

export function Highlights() {
  const chips = useMemo(
    () => [
      {
        icon: Zap,
        title: "Fast delivery, calm execution",
        body: "I break down ambiguous problems into shippable increments with tight feedback loops."
      },
      {
        icon: ShieldCheck,
        title: "Security + correctness by default",
        body: "JWT, Identity, role-based access, and a testing mindset that reduces production surprises."
      },
      {
        icon: Sparkles,
        title: "UX that sells the product",
        body: "Polished interactions, performance-first UI, and interfaces that feel intuitive for users."
      },
      {
        icon: Award,
        title: "Hackathon winner energy",
        body: "I build demo-ready systems quickly — without throwing architecture away."
      }
    ],
    []
  );

  return (
    <section className="mb-14">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="glass rounded-2xl p-6 shadow-glow lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Highlights
          </p>
          <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
            Recruiter-friendly signals — without fluff
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm text-muted sm:text-base">
            I’m strongest when I can own a slice end-to-end: clarify requirements,
            design the solution, build cleanly, test thoroughly, and ship.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <StatCard label="Years" value="7+" sub="Full‑stack development" />
            <StatCard
              label="Core stack"
              value=".NET + React"
              sub="APIs, auth, and UI"
            />
            <LiveMomentum />
          </div>
        </div>

        <div className="grid gap-4">
          {chips.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.35 }}
              className="glass rounded-2xl p-5 shadow-glow"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-border bg-bg p-2">
                  <c.icon className="h-4 w-4 text-muted" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-1 text-sm text-muted">{c.body}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveMomentum() {
  const username = "Kevin-sela";

  const repos = useQuery({
    queryKey: ["github", username, "repos"],
    queryFn: ({ signal }) => fetchGithubRepos(username, signal),
    select: (data) => data.filter((r) => !r.fork && !r.archived).slice(0, 12).length
  });

  return (
    <div className="glass rounded-2xl border border-border bg-bg/40 p-5">
      <div className="text-xs font-semibold uppercase tracking-wide text-muted">
        Momentum
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">
        <CountUp to={repos.data ?? 0} />
        {repos.isLoading ? "" : "+"}
      </div>
      <div className="mt-1 text-sm text-muted">
        recently updated repos {repos.isLoading ? "(loading…)" : "(live from GitHub)"}
      </div>
    </div>
  );
}
