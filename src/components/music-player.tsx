"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { LofiEngine } from "@/lib/lofi-engine";

/**
 * Floating lo-fi toggle. The audio engine is code-split and only created on
 * the first click (browsers block audio before a user gesture anyway).
 * Playback pauses while the tab is hidden and resumes when it returns.
 * Shortcut: press "M".
 */
export function MusicPlayer() {
  const engineRef = useRef<LofiEngine | null>(null);
  const resumeOnShow = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = useCallback(async () => {
    if (loading) return;
    if (!engineRef.current) {
      setLoading(true);
      try {
        const { LofiEngine } = await import("@/lib/lofi-engine");
        engineRef.current = new LofiEngine();
      } finally {
        setLoading(false);
      }
    }
    const engine = engineRef.current;
    if (!engine) return;
    if (engine.playing) {
      setPlaying(false);
      await engine.pause();
    } else {
      setPlaying(true);
      await engine.play();
    }
  }, [loading]);

  useEffect(() => {
    const onVisibility = () => {
      const engine = engineRef.current;
      if (!engine) return;
      if (document.hidden && engine.playing) {
        resumeOnShow.current = true;
        void engine.pause();
      } else if (!document.hidden && resumeOnShow.current) {
        resumeOnShow.current = false;
        void engine.play();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "m" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
      void toggle();
    };
    const onExternal = () => void toggle();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("keydown", onKey);
    window.addEventListener("music:toggle", onExternal);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("music:toggle", onExternal);
    };
  }, [toggle]);

  useEffect(() => () => engineRef.current?.dispose(), []);

  return (
    <button
      type="button"
      className={`music-toggle${playing ? " is-playing" : ""}`}
      onClick={() => void toggle()}
      aria-pressed={playing}
      aria-label={playing ? "Pause lo-fi music" : "Play lo-fi music"}
      title={playing ? "Pause music (M)" : "Play lo-fi music (M)"}
    >
      <span className="music-eq" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="music-label">
        {loading ? "Tuning…" : playing ? "Lo-fi on" : "Play lo-fi"}
      </span>
    </button>
  );
}
