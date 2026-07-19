"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function DigitalCore({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const ringC = useRef<THREE.Mesh>(null);
  const energy = useRef<THREE.Mesh>(null);

  const hexGeo = useMemo(() => new THREE.IcosahedronGeometry(0.72, 1), []);
  const coreGeo = useMemo(() => new THREE.SphereGeometry(0.55, 48, 48), []);
  const glassGeo = useMemo(() => new THREE.SphereGeometry(0.62, 32, 32), []);

  useFrame(({ clock }) => {
    if (reducedMotion) return;
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.15;
      group.current.position.y = Math.sin(t * 0.6) * 0.05;
    }
    if (core.current) {
      const s = 1 + Math.sin(t * 2.2) * 0.03;
      core.current.scale.setScalar(s);
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.4;
    if (ringB.current) ringB.current.rotation.x = t * 0.55;
    if (ringC.current) ringC.current.rotation.y = -t * 0.35;
    if (energy.current) {
      energy.current.rotation.y = t * 0.8;
      const mat = energy.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.8 + Math.sin(t * 3) * 0.35;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core} geometry={coreGeo}>
        <meshStandardMaterial
          color="#0c1222"
          emissive="#1d4ed8"
          emissiveIntensity={0.55}
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      <mesh geometry={glassGeo}>
        <meshPhysicalMaterial
          color="#94a3b8"
          transparent
          opacity={0.12}
          metalness={0.1}
          roughness={0.05}
          transmission={0.6}
          thickness={0.4}
        />
      </mesh>

      <mesh ref={energy} geometry={hexGeo}>
        <meshStandardMaterial
          color="#5eead4"
          emissive="#2dd4bf"
          emissiveIntensity={1}
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[1.05, 0.012, 12, 96]} />
        <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={1.2} />
      </mesh>
      <mesh ref={ringB} rotation={[0.6, 0.4, 0.3]}>
        <torusGeometry args={[1.25, 0.008, 12, 96]} />
        <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.9} />
      </mesh>
      <mesh ref={ringC} rotation={[-0.4, 0.8, 0.1]}>
        <torusGeometry args={[1.45, 0.006, 12, 120]} />
        <meshStandardMaterial
          color="#94a3b8"
          emissive="#64748b"
          emissiveIntensity={0.7}
          transparent
          opacity={0.7}
        />
      </mesh>

      <pointLight color="#5eead4" intensity={2.4} distance={8} decay={2} />
      <pointLight color="#38bdf8" intensity={1.2} distance={10} decay={2} position={[0.5, 0.4, 0.6]} />
    </group>
  );
}
