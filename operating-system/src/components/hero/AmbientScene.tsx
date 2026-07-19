"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useMotionValueEvent } from "framer-motion";
import { useMouse } from "@/components/providers/MouseProvider";

function StarField() {
  const points = useRef<THREE.Points>(null);
  const mouse = useRef({ nx: 0, ny: 0 });
  const { nx, ny } = useMouse();

  useMotionValueEvent(nx, "change", (v) => {
    mouse.current.nx = v;
  });
  useMotionValueEvent(ny, "change", (v) => {
    mouse.current.ny = v;
  });

  const { positions, colors } = useMemo(() => {
    const count = 900;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;
      const t = Math.random();
      col[i * 3] = 0.55 + t * 0.35;
      col[i * 3 + 1] = 0.75 + t * 0.2;
      col[i * 3 + 2] = 0.85 + t * 0.15;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime * 0.02;
    const { nx: mx, ny: my } = mouse.current;
    points.current.rotation.y = t + mx * 0.08;
    points.current.rotation.x = my * 0.05;
    points.current.position.x = THREE.MathUtils.lerp(
      points.current.position.x,
      mx * 0.6,
      0.04,
    );
    points.current.position.y = THREE.MathUtils.lerp(
      points.current.position.y,
      -my * 0.4,
      0.04,
    );
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function AmbientScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] opacity-70">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <StarField />
      </Canvas>
    </div>
  );
}
