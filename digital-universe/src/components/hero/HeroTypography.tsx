"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/portfolio";
import { useSound } from "@/hooks/useSound";
import { useUniverse } from "@/components/universe/UniverseContext";
import { cn } from "@/lib/utils";

export function HeroTypography() {
  const { exploreMode, setExploreMode } = useUniverse();
  const { playClick } = useSound();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || exploreMode) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        },
      );
    }, root);
    return () => ctx.revert();
  }, [exploreMode]);

  return (
    <div
      ref={root}
      className={cn(
        "pointer-events-none absolute inset-0 z-20 flex items-center",
        "transition-opacity duration-700",
        exploreMode ? "opacity-0" : "opacity-100",
      )}
    >
      <div className="pointer-events-auto max-w-xl px-8 md:px-14 lg:px-20">
        <p
          data-hero
          className="font-mono text-[11px] tracking-[0.28em] text-cyan-300/70 uppercase opacity-0"
        >
          {siteConfig.name} · {siteConfig.title}
        </p>

        <h1
          data-hero
          className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.05] tracking-[-0.03em] text-slate-50 opacity-0"
        >
          Engineering systems.
          <br />
          <span className="text-slate-400">Not just software.</span>
        </h1>

        <p
          data-hero
          className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-slate-400 opacity-0"
        >
          {siteConfig.philosophy}
        </p>

        <div data-hero className="mt-10 flex flex-wrap items-center gap-4 opacity-0">
          <button
            type="button"
            onClick={() => {
              playClick();
              setExploreMode(true);
            }}
            className="group relative overflow-hidden rounded-full border border-cyan-300/25 bg-cyan-400/10 px-6 py-3 font-display text-sm tracking-wide text-cyan-50 transition hover:border-cyan-200/40 hover:bg-cyan-400/20"
          >
            <span className="relative z-10">Explore Universe</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
          </button>

          <a
            href={siteConfig.resumeUrl}
            className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-display text-sm tracking-wide text-slate-300 transition hover:border-white/20 hover:text-white"
            onClick={() => playClick()}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
