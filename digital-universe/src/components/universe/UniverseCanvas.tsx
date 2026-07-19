"use client";

import dynamic from "next/dynamic";

export const UniverseCanvas = dynamic(
  () => import("./UniverseScene").then((m) => m.UniverseScene),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 z-0 bg-[#02040a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.12),_transparent_55%)]" />
        <div className="flex h-full items-center justify-center">
          <div className="h-16 w-16 animate-pulse rounded-full border border-cyan-400/30 bg-cyan-400/5 shadow-[0_0_60px_rgba(45,212,191,0.25)]" />
        </div>
      </div>
    ),
  },
);
