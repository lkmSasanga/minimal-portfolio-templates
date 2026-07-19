"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { lerp } from "@/lib/utils";
import { useUniverse } from "./UniverseContext";
import { planets } from "@/data/planets";

export function CameraController({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const { camera } = useThree();
  const { transitioning, focusPlanetId, exploreMode } = useUniverse();
  const base = useRef(new THREE.Vector3(0, 1.2, 9.5));
  const look = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ pointer, clock }) => {
    const t = clock.getElapsedTime();
    let target = base.current.clone();

    if (!reducedMotion) {
      target.x += pointer.x * (exploreMode ? 1.4 : 0.7);
      target.y += -pointer.y * (exploreMode ? 0.9 : 0.45) + Math.sin(t * 0.35) * 0.08;
      target.z += Math.sin(t * 0.2) * 0.15;
    }

    if (transitioning && focusPlanetId) {
      const planet = planets.find((p) => p.id === focusPlanetId);
      if (planet) {
        const angle = t * planet.orbitSpeed + planet.phase;
        const px = Math.cos(angle) * planet.orbitRadius;
        const pz = Math.sin(angle) * planet.orbitRadius;
        const py = Math.sin(angle * 0.7) * planet.orbitTilt;
        target = new THREE.Vector3(px * 0.55, py + 0.4, pz * 0.55 + 2.2);
        look.current.lerp(new THREE.Vector3(px, py, pz), 0.08);
      }
    } else {
      look.current.lerp(new THREE.Vector3(0, 0, 0), 0.06);
    }

    camera.position.x = lerp(camera.position.x, target.x, 0.045);
    camera.position.y = lerp(camera.position.y, target.y, 0.045);
    camera.position.z = lerp(camera.position.z, target.z, 0.045);
    camera.lookAt(look.current);
  });

  return null;
}
