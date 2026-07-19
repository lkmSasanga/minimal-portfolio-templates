"use client";

import { motion } from "framer-motion";
import { useUniverse } from "@/components/universe/UniverseContext";

export function ExploreHint() {
  const { exploreMode, setExploreMode, hoveredPlanet } = useUniverse();

  if (!exploreMode) return null;

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-between px-6 pt-6 md:px-10">
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-[11px] tracking-[0.22em] text-slate-400 uppercase"
      >
        {hoveredPlanet ? `Orbit · ${hoveredPlanet.label}` : "Navigate the system"}
      </motion.p>
      <button
        type="button"
        onClick={() => setExploreMode(false)}
        className="pointer-events-auto rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] tracking-[0.18em] text-slate-300 uppercase transition hover:border-white/20"
      >
        Exit explore
      </button>
    </div>
  );
}
