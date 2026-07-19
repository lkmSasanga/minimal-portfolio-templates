"use client";

import { Html } from "@react-three/drei";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { PlanetConfig } from "@/data/planets";
import { useSound } from "@/hooks/useSound";
import { useUniverse } from "./UniverseContext";

type Props = {
  config: PlanetConfig;
  reducedMotion?: boolean;
};

export function Planet({ config, reducedMotion = false }: Props) {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);
  const scaleTarget = useRef(1);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  const { playClick, playHover } = useSound();
  const {
    setHoveredPlanet,
    setTransitioning,
    setFocusPlanetId,
    transitioning,
    exploreMode,
  } = useUniverse();

  const orbitGeo = useMemo(
    () => new THREE.RingGeometry(config.orbitRadius - 0.01, config.orbitRadius + 0.01, 128),
    [config.orbitRadius],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    const speed = reducedMotion ? config.orbitSpeed * 0.2 : config.orbitSpeed * (hovered ? 1.55 : 1);
    const angle = t * speed + config.phase;
    const x = Math.cos(angle) * config.orbitRadius;
    const z = Math.sin(angle) * config.orbitRadius;
    const y = Math.sin(angle * 0.7) * config.orbitTilt;
    group.current.position.set(x, y, z);

    if (mesh.current) {
      mesh.current.rotation.y = t * (hovered ? 1.2 : 0.4);
      scaleTarget.current = hovered ? 1.25 : 1;
      const s = mesh.current.scale.x + (scaleTarget.current - mesh.current.scale.x) * 0.1;
      mesh.current.scale.setScalar(s);
    }
    if (glow.current) {
      const mat = glow.current.material as THREE.MeshBasicMaterial;
      mat.opacity = hovered ? 0.35 : 0.12;
      glow.current.scale.setScalar(hovered ? 2.2 : 1.6);
    }
  });

  const onPointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
    setHovered(true);
    setHoveredPlanet(config);
    playHover();
  };

  const onPointerOut = () => {
    document.body.style.cursor = "auto";
    setHovered(false);
    setHoveredPlanet(null);
  };

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (transitioning || !config.href) return;
    playClick();
    setFocusPlanetId(config.id);
    setTransitioning(true);
    setTimeout(() => {
      router.push(config.href!);
    }, 900);
  };

  return (
    <>
      <mesh
        geometry={orbitGeo}
        rotation={[-Math.PI / 2 + config.orbitTilt * 0.3, 0, 0]}
        renderOrder={-1}
      >
        <meshBasicMaterial
          color={config.color}
          transparent
          opacity={hovered || exploreMode ? 0.18 : 0.06}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <group ref={group}>
        <mesh
          ref={mesh}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        >
          <sphereGeometry args={[config.radius, 32, 32]} />
          <meshStandardMaterial
            color={config.color}
            emissive={config.emissive}
            emissiveIntensity={hovered ? 1.4 : 0.55}
            metalness={0.4}
            roughness={0.35}
          />
        </mesh>

        <mesh ref={glow}>
          <sphereGeometry args={[config.radius, 16, 16]} />
          <meshBasicMaterial color={config.color} transparent opacity={0.12} depthWrite={false} />
        </mesh>

        {(hovered || exploreMode) && (
          <Html
            distanceFactor={8}
            position={[0, config.radius + 0.45, 0]}
            center
            style={{ pointerEvents: "none" }}
          >
            <div className="w-44 rounded-lg border border-white/10 bg-[#060b16]/85 px-3 py-2 text-left shadow-[0_0_40px_rgba(14,165,233,0.15)] backdrop-blur-md">
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-cyan-200/80">
                {config.label}
              </p>
              <p className="mt-1 font-body text-[11px] leading-relaxed text-slate-300">
                {config.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {config.skills.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-slate-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {config.href && (
                <p className="mt-2 font-mono text-[9px] text-amber-200/80">click to enter →</p>
              )}
            </div>
          </Html>
        )}
      </group>
    </>
  );
}
