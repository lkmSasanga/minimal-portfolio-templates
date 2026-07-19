"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { PlanetConfig } from "@/data/planets";

type UniverseContextValue = {
  hoveredPlanet: PlanetConfig | null;
  setHoveredPlanet: (planet: PlanetConfig | null) => void;
  transitioning: boolean;
  setTransitioning: (v: boolean) => void;
  focusPlanetId: string | null;
  setFocusPlanetId: (id: string | null) => void;
  exploreMode: boolean;
  setExploreMode: (v: boolean) => void;
};

const UniverseContext = createContext<UniverseContextValue | null>(null);

export function UniverseProvider({ children }: { children: ReactNode }) {
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetConfig | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [focusPlanetId, setFocusPlanetId] = useState<string | null>(null);
  const [exploreMode, setExploreMode] = useState(false);

  const value = useMemo(
    () => ({
      hoveredPlanet,
      setHoveredPlanet,
      transitioning,
      setTransitioning,
      focusPlanetId,
      setFocusPlanetId,
      exploreMode,
      setExploreMode,
    }),
    [hoveredPlanet, transitioning, focusPlanetId, exploreMode],
  );

  return <UniverseContext.Provider value={value}>{children}</UniverseContext.Provider>;
}

export function useUniverse() {
  const ctx = useContext(UniverseContext);
  if (!ctx) throw new Error("useUniverse must be used within UniverseProvider");
  return ctx;
}
