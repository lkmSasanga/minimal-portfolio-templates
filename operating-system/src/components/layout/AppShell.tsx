"use client";

import { Navigation } from "@/components/layout/Navigation";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { MouseProvider } from "@/components/providers/MouseProvider";

export function AppShell({
  children,
  withAmbient = true,
}: {
  children: React.ReactNode;
  withAmbient?: boolean;
}) {
  return (
    <MouseProvider>
      <div className="relative min-h-dvh overflow-hidden bg-[var(--bg-void)] text-[var(--fg)]">
        {withAmbient && <HeroBackground />}
        <Navigation />
        <PageTransition>{children}</PageTransition>
      </div>
    </MouseProvider>
  );
}
