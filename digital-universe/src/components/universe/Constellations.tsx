"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { planets } from "@/data/planets";
import { useUniverse } from "./UniverseContext";

export function Constellations({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const lineRef = useRef<THREE.LineSegments>(null);
  const { hoveredPlanet, exploreMode } = useUniverse();

  const geometry = useMemo(() => {
    const positions: number[] = [];
    // Connect core (0,0,0) to each planet orbit sample + a few cross links
    for (let i = 0; i < planets.length; i++) {
      const a = planets[i];
      const angle = a.phase;
      const ax = Math.cos(angle) * a.orbitRadius;
      const az = Math.sin(angle) * a.orbitRadius;
      positions.push(0, 0, 0, ax, a.orbitTilt, az);

      const b = planets[(i + 2) % planets.length];
      const bx = Math.cos(b.phase) * b.orbitRadius;
      const bz = Math.sin(b.phase) * b.orbitRadius;
      positions.push(ax, a.orbitTilt, az, bx, b.orbitTilt, bz);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!lineRef.current || reducedMotion) return;
    const mat = lineRef.current.material as THREE.LineBasicMaterial;
    const pulse = 0.04 + Math.sin(clock.getElapsedTime() * 1.5) * 0.02;
    mat.opacity = hoveredPlanet || exploreMode ? 0.22 : pulse;
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#7dd3fc" transparent opacity={0.06} depthWrite={false} />
    </lineSegments>
  );
}
