"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { SoundProvider } from "@/hooks/useSound";
import { UniverseProvider, useUniverse } from "@/components/universe/UniverseContext";
import { Dock } from "@/components/layout/Dock";
import { SoundToggle } from "@/components/layout/SoundToggle";

function RouteEffects({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { setTransitioning, setFocusPlanetId, setExploreMode } = useUniverse();

  useEffect(() => {
    setTransitioning(false);
    setFocusPlanetId(null);
    if (pathname !== "/") setExploreMode(false);
  }, [pathname, setTransitioning, setFocusPlanetId, setExploreMode]);

  return <>{children}</>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SoundProvider>
      <UniverseProvider>
        <RouteEffects>
          {children}
          <Dock />
          <SoundToggle />
        </RouteEffects>
      </UniverseProvider>
    </SoundProvider>
  );
}
