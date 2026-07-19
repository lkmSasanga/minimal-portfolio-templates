"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const glyphs = ["Σ", "λ", "∇", "∞", "π", "Δ", "01", "10", "0x", "{}", "→", "∴"];

function Stream({
  radius,
  speed,
  phase,
  reducedMotion,
}: {
  radius: number;
  speed: number;
  phase: number;
  reducedMotion: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  const glyph = useMemo(() => glyphs[Math.floor(Math.random() * glyphs.length)], []);

  useFrame(({ clock }) => {
    if (!ref.current || reducedMotion) return;
    const t = clock.getElapsedTime() * speed + phase;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.7) * 0.9,
      Math.sin(t) * radius * 0.85,
    );
  });

  return (
    <group ref={ref}>
      <Html center distanceFactor={14} style={{ pointerEvents: "none" }}>
        <span className="font-mono text-[10px] text-slate-500/60">{glyph}</span>
      </Html>
    </group>
  );
}

export function SymbolStreams({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const streams = useMemo(
    () =>
      Array.from({ length: reducedMotion ? 4 : 10 }, (_, i) => ({
        id: i,
        radius: 3.4 + (i % 4) * 0.9,
        speed: 0.15 + (i % 5) * 0.04,
        phase: i * 0.7,
      })),
    [reducedMotion],
  );

  return (
    <>
      {streams.map((s) => (
        <Stream key={s.id} {...s} reducedMotion={reducedMotion} />
      ))}
    </>
  );
}
