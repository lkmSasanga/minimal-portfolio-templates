"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { orbitLabels } from "@/data/portfolio";

export function OrbitLabels({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const group = useRef<THREE.Group>(null);

  const items = useMemo(
    () =>
      orbitLabels.map((label, i) => {
        const angle = (i / orbitLabels.length) * Math.PI * 2;
        const radius = 2.4 + (i % 3) * 0.55;
        return { label, angle, radius, y: ((i % 5) - 2) * 0.18 };
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!group.current || reducedMotion) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.08;
  });

  return (
    <group ref={group}>
      {items.map((item) => {
        const x = Math.cos(item.angle) * item.radius;
        const z = Math.sin(item.angle) * item.radius;
        return (
          <Html
            key={item.label}
            position={[x, item.y, z]}
            center
            distanceFactor={10}
            style={{ pointerEvents: "none" }}
          >
            <span className="whitespace-nowrap font-mono text-[9px] tracking-[0.18em] text-slate-400/70 uppercase">
              {item.label}
            </span>
          </Html>
        );
      })}
    </group>
  );
}
