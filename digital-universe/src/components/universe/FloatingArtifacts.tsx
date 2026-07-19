"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { artifacts } from "@/data/portfolio";

const typeStyles: Record<string, string> = {
  commit: "border-emerald-400/30 text-emerald-300/90",
  terminal: "border-cyan-400/30 text-cyan-200/90",
  api: "border-amber-400/30 text-amber-200/90",
  ci: "border-sky-400/30 text-sky-200/90",
  code: "border-teal-400/30 text-teal-200/90",
  deploy: "border-orange-400/30 text-orange-200/90",
};

type Flyer = {
  text: string;
  type: string;
  group: THREE.Group;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  el: HTMLDivElement | null;
};

function createFlyer(): Omit<Flyer, "el"> & { el: null } {
  const src = artifacts[Math.floor(Math.random() * artifacts.length)];
  const side = Math.random() > 0.5 ? 1 : -1;
  const group = new THREE.Group();
  group.position.set(
    side * (6 + Math.random() * 3),
    (Math.random() - 0.5) * 4,
    -2 - Math.random() * 4,
  );
  return {
    text: src.text,
    type: src.type,
    group,
    velocity: new THREE.Vector3(
      -side * (0.008 + Math.random() * 0.015),
      (Math.random() - 0.5) * 0.003,
      0.006,
    ),
    life: 0,
    maxLife: 7 + Math.random() * 4,
    el: null,
  };
}

function ArtifactFlyer({
  flyer,
  reducedMotion,
}: {
  flyer: ReturnType<typeof createFlyer>;
  reducedMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const state = useRef(flyer);

  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;
    const f = state.current;
    f.life += delta;
    groupRef.current.position.addScaledVector(f.velocity, delta * 60);
    if (divRef.current) {
      const fade = Math.max(0, Math.min(1, f.maxLife - f.life));
      divRef.current.style.opacity = String(fade);
    }
    if (f.life >= f.maxLife) {
      const next = createFlyer();
      state.current = next;
      groupRef.current.position.copy(next.group.position);
      if (divRef.current) {
        divRef.current.textContent = next.text;
        divRef.current.className = `rounded border bg-[#050a14]/75 px-2 py-1 font-mono text-[9px] backdrop-blur-sm ${typeStyles[next.type]}`;
      }
    }
  });

  return (
    <group ref={groupRef} position={flyer.group.position.toArray()}>
      <Html center distanceFactor={12} style={{ pointerEvents: "none" }}>
        <div
          ref={divRef}
          className={`rounded border bg-[#050a14]/75 px-2 py-1 font-mono text-[9px] backdrop-blur-sm ${typeStyles[flyer.type]}`}
        >
          {flyer.text}
        </div>
      </Html>
    </group>
  );
}

function Drone({
  radius,
  speed,
  phase,
  y,
  reducedMotion,
}: {
  radius: number;
  speed: number;
  phase: number;
  y: number;
  reducedMotion: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current || reducedMotion) return;
    const t = clock.getElapsedTime() * speed + phase;
    ref.current.position.set(
      Math.cos(t) * radius,
      y + Math.sin(t * 2) * 0.15,
      Math.sin(t) * radius,
    );
    ref.current.rotation.y = -t;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.08, 0.04, 0.12]} />
      <meshStandardMaterial color="#94a3b8" emissive="#38bdf8" emissiveIntensity={0.8} />
    </mesh>
  );
}

export function FloatingArtifacts({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const flyers = useMemo(
    () => (reducedMotion ? [] : [createFlyer(), createFlyer(), createFlyer()]),
    [reducedMotion],
  );

  const drones = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        radius: 2.8 + i * 0.7,
        speed: 0.2 + i * 0.05,
        phase: i * 1.1,
        y: ((i % 3) - 1) * 0.6,
      })),
    [],
  );

  return (
    <>
      {flyers.map((flyer, i) => (
        <ArtifactFlyer key={i} flyer={flyer} reducedMotion={reducedMotion} />
      ))}
      {drones.map((d) => (
        <Drone key={d.id} {...d} reducedMotion={reducedMotion} />
      ))}
    </>
  );
}
