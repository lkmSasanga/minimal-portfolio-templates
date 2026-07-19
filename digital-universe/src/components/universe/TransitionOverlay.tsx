"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useUniverse } from "@/components/universe/UniverseContext";

export function TransitionOverlay() {
  const { transitioning } = useUniverse();
  const root = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const veil = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!transitioning || !root.current || !glow.current || !veil.current) return;

    const ctx = gsap.context(() => {
      gsap.set(root.current, { autoAlpha: 1 });
      gsap.fromTo(
        glow.current,
        { scale: 0.04, opacity: 0.9 },
        { scale: 1.35, opacity: 0, duration: 1.05, ease: "power3.out" },
      );
      gsap.fromTo(
        veil.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, delay: 0.35, ease: "power2.inOut" },
      );
    }, root);

    return () => ctx.revert();
  }, [transitioning]);

  if (!transitioning) return null;

  return (
    <div ref={root} className="pointer-events-none fixed inset-0 z-[60]">
      <div ref={veil} className="absolute inset-0 bg-[#02040a] opacity-0" />
      <div
        ref={glow}
        className="absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(45,212,191,0.4),_transparent_55%)]"
      />
    </div>
  );
}
