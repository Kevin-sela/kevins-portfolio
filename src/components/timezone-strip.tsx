"use client";

import { useEffect, useState } from "react";

type City = { name: string; tz: string; offset: number };

const CITIES: City[] = [
  { name: "Accra", tz: "Africa/Accra", offset: 0 },
  { name: "London", tz: "Europe/London", offset: 0 },
  { name: "Berlin", tz: "Europe/Berlin", offset: 1 },
  { name: "New York", tz: "America/New_York", offset: -5 },
];

const WORK_START = 9;
const WORK_END = 17;

/** Hours ahead of GMT for `tz` right now (handles daylight saving). */
function offsetFor(tz: string, now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(now);
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  let diff = h + m / 60 - (now.getUTCHours() + now.getUTCMinutes() / 60);
  if (diff > 12) diff -= 24;
  if (diff < -12) diff += 24;
  return Math.round(diff * 2) / 2;
}

const pct = (h: number) => `${(h / 24) * 100}%`;

/**
 * Working hours of a few hiring hubs on one GMT axis, with Accra's day in
 * gold and the shared hours shaded. A plain, factual answer to "will our
 * hours overlap?".
 */
export function TimezoneStrip() {
  const [cities, setCities] = useState(CITIES);
  const [nowH, setNowH] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCities(CITIES.map((c) => ({ ...c, offset: offsetFor(c.tz, now) })));
      setNowH(now.getUTCHours() + now.getUTCMinutes() / 60);
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const accraStart = WORK_START;
  const accraEnd = WORK_END;

  return (
    <figure className="tz" data-reveal>
      <figcaption className="tz-head">
        <span>Working-hour overlap</span>
        <span className="tz-axis-note">GMT · 09:00–17:00 local</span>
      </figcaption>
      <div className="tz-rows">
        {cities.map((c) => {
          const start = WORK_START - c.offset;
          const end = WORK_END - c.offset;
          const ovStart = Math.max(start, accraStart);
          const ovEnd = Math.min(end, accraEnd);
          const overlap = Math.max(0, ovEnd - ovStart);
          const isHome = c.name === "Accra";
          return (
            <div className="tz-row" key={c.name}>
              <span className="tz-city">
                {c.name}
                <small>{c.offset === 0 ? "GMT" : `GMT${c.offset > 0 ? "+" : "−"}${Math.abs(c.offset)}`}</small>
              </span>
              <div className="tz-track">
                <span className={`tz-block${isHome ? " is-home" : ""}`} style={{ left: pct(start), width: pct(end - start) }} />
                {!isHome && overlap > 0 ? (
                  <span className="tz-overlap" style={{ left: pct(ovStart), width: pct(overlap) }} />
                ) : null}
                {nowH !== null ? <span className="tz-now" style={{ left: pct(nowH) }} /> : null}
              </div>
              <span className="tz-hours">{isHome ? "home" : `${overlap}h shared`}</span>
            </div>
          );
        })}
      </div>
      <div className="tz-axis" aria-hidden="true">
        <span>00</span>
        <span>06</span>
        <span>12</span>
        <span>18</span>
        <span>24</span>
      </div>
    </figure>
  );
}
