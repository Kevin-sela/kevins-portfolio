"use client";

import { useEffect, useState } from "react";

/** Current time in Accra (GMT), refreshed every 30 seconds. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Accra" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return <span className="tabular-nums" suppressHydrationWarning>{time ?? "--:--"}</span>;
}
