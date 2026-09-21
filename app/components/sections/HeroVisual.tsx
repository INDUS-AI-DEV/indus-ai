"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/**
 * Defers the ~300 kB Three.js bundle until the browser is idle, so it never
 * competes with the hero text for LCP. Scaled to compact 80% footprint
 * (max-w-[400px]) to prevent screen overflow and horizontal clipping.
 */
export default function HeroVisual() {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    type IdleWindow = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const idleWindow = window as IdleWindow;

    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(() => setShowScene(true), {
        timeout: 2500,
      });
      return () => idleWindow.cancelIdleCallback?.(handle);
    }

    const timer = window.setTimeout(() => setShowScene(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[300px] overflow-visible sm:max-w-[350px] lg:max-w-[390px]">
      {/* Dynamic ambient backdrop */}
      <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-cyan-400/15 via-emerald-400/10 to-blue-500/15 blur-2xl" />

      {/* 3D Scene / Fallback */}
      {showScene ? (
        <HeroScene />
      ) : (
        <div
          className="relative z-10 flex h-full w-full items-center justify-center"
          aria-hidden="true"
        >
          <div className="h-3/5 w-3/5 rounded-full bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-xl ring-1 ring-slate-200/80" />
        </div>
      )}

      {/* Enterprise Status Chip 1 (Top right) */}
      <div className="absolute top-2 -right-1 z-20 flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 px-3 py-1.5 shadow-md shadow-slate-900/5 backdrop-blur-md sm:right-1">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-raleway text-[11px] font-bold tracking-wide text-slate-800">
          Voice OS &bull; &lt;500ms Latency
        </span>
      </div>

      {/* Enterprise Status Chip 2 (Bottom left) */}
      <div className="absolute -bottom-1 -left-1 z-20 flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 px-3 py-1.5 shadow-md shadow-slate-900/5 backdrop-blur-md sm:left-1">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_6px_#00c3ff]" />
        <span className="font-raleway text-[11px] font-bold tracking-wide text-slate-800">
          29+ Languages &bull; Telephony &amp; CRM Sync
        </span>
      </div>
    </div>
  );
}
