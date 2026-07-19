"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function NebulaCloud({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.z = t * 0.02;
    mesh.current.position.x = position[0] + pointer.x * 0.3;
    mesh.current.position.y = position[1] - pointer.y * 0.2;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <sphereGeometry args={[2.4, 24, 24]} />
      <meshBasicMaterial color={color} transparent opacity={0.045} depthWrite={false} />
    </mesh>
  );
}

export function Nebula() {
  const clouds = useMemo(
    () =>
      [
        { position: [-6, 2, -8] as [number, number, number], color: "#0e7490", scale: 1.4 },
        { position: [7, -1, -10] as [number, number, number], color: "#1e3a5f", scale: 1.8 },
        { position: [0, 4, -12] as [number, number, number], color: "#134e4a", scale: 2.1 },
        { position: [-3, -3, -9] as [number, number, number], color: "#78350f", scale: 1.2 },
      ] as const,
    [],
  );

  return (
    <group>
      {clouds.map((c, i) => (
        <NebulaCloud key={i} {...c} />
      ))}
    </group>
  );
}
