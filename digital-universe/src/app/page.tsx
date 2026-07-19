"use client";

import { useEffect } from "react";
import { UniverseCanvas } from "@/components/universe/UniverseCanvas";
import { TransitionOverlay } from "@/components/universe/TransitionOverlay";
import { HeroTypography } from "@/components/hero/HeroTypography";
import { ExploreHint } from "@/components/hero/ExploreHint";

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add("universe-lock");
    return () => document.documentElement.classList.remove("universe-lock");
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-[#02040a]">
      <UniverseCanvas />
      <HeroTypography />
      <ExploreHint />
      <TransitionOverlay />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#02040a] via-[#02040a]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-[#02040a]/70 to-transparent max-md:w-full max-md:bg-gradient-to-b max-md:from-[#02040a]/80 max-md:via-[#02040a]/30" />
    </div>
  );
}
