"use client";

import { useEffect, useRef } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * A 24fps timecode running since the page loaded. Decorative, but it is the
 * detail that makes the header feel like it belongs to a film company.
 *
 * The frame counter writes straight to the DOM node rather than through state,
 * so a 24fps readout costs no React renders.
 */
export function Timecode({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = "00:00:24:00";
      return;
    }

    let raf = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      start ??= now;
      const frames = Math.floor(((now - start) / 1000) * 24);
      el.textContent = `${pad(Math.floor(frames / 86400))}:${pad(
        Math.floor(frames / 1440) % 60,
      )}:${pad(Math.floor(frames / 24) % 60)}:${pad(frames % 24)}`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      00:00:00:00
    </span>
  );
}
