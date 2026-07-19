"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function ParticleField({
  count = 400,
  reducedMotion = false,
}: {
  count?: number;
  reducedMotion?: boolean;
}) {
  const points = useRef<THREE.Points>(null);
  const velocities = useRef<Float32Array | null>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
      vel[i * 3] = (Math.random() - 0.5) * 0.004;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
    }
    velocities.current = vel;
    return pos;
  }, [count]);

  useFrame(({ pointer }) => {
    if (!points.current || !velocities.current || reducedMotion) return;
    const attr = points.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const vel = velocities.current;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += vel[i * 3] + pointer.x * 0.001;
      arr[i * 3 + 1] += vel[i * 3 + 1] - pointer.y * 0.001;
      arr[i * 3 + 2] += vel[i * 3 + 2];
      if (Math.abs(arr[i * 3]) > 9) arr[i * 3] *= -0.95;
      if (Math.abs(arr[i * 3 + 1]) > 6) arr[i * 3 + 1] *= -0.95;
      if (Math.abs(arr[i * 3 + 2]) > 9) arr[i * 3 + 2] *= -0.95;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#5eead4"
        size={0.035}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
