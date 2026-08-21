"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

/**
 * Defers the ~300 kB Three.js bundle until the browser is idle, so it never
 * competes with the hero text for LCP. Users who prefer reduced motion, or
 * whose browser never goes idle, keep the static placeholder.
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
    <div className="relative aspect-square w-full max-w-[400px] overflow-visible lg:max-w-[600px]">
      <div className="absolute inset-0 scale-150 rounded-full bg-gradient-to-r from-blue-400/20 via-cyan-400/10 to-emerald-400/20 blur-3xl" />

      {showScene ? (
        <HeroScene />
      ) : (
        <div
          className="relative z-10 flex h-full w-full items-center justify-center"
          aria-hidden="true"
        >
          <div className="h-3/5 w-3/5 rounded-full bg-gradient-to-br from-slate-200 via-white to-slate-300 shadow-2xl ring-1 ring-slate-200/70" />
        </div>
      )}

      <div className="absolute top-4 right-4 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-raleway text-xs font-medium text-gray-700">
            Agents running
          </span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur-sm">
        <span className="font-raleway text-xs font-medium text-gray-700">
          Voice · Leads · Finance · Workflows
        </span>
      </div>
    </div>
  );
}
