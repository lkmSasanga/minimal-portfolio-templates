"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense } from "react";
import { planets } from "@/data/planets";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CameraController } from "./CameraController";
import { Constellations } from "./Constellations";
import { DigitalCore } from "./DigitalCore";
import { FloatingArtifacts } from "./FloatingArtifacts";
import { Nebula } from "./Nebula";
import { OrbitLabels } from "./OrbitLabels";
import { ParticleField } from "./ParticleField";
import { Planet } from "./Planet";
import { Starfield } from "./Starfield";
import { SymbolStreams } from "./SymbolStreams";

function SceneContent({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <color attach="background" args={["#02040a"]} />
      <fog attach="fog" args={["#02040a", 12, 38]} />

      <ambientLight intensity={0.25} color="#94a3b8" />
      <directionalLight position={[6, 8, 4]} intensity={0.55} color="#e2e8f0" />
      <directionalLight position={[-4, -2, -6]} intensity={0.25} color="#38bdf8" />

      <DigitalCore reducedMotion={reducedMotion} />
      <Constellations reducedMotion={reducedMotion} />
      <Nebula />
      <Starfield count={reducedMotion ? 600 : 1600} reducedMotion={reducedMotion} />
      <ParticleField count={reducedMotion ? 120 : 380} reducedMotion={reducedMotion} />
      <OrbitLabels reducedMotion={reducedMotion} />
      <FloatingArtifacts reducedMotion={reducedMotion} />
      <SymbolStreams reducedMotion={reducedMotion} />

      {planets.map((p) => (
        <Planet key={p.id} config={p} reducedMotion={reducedMotion} />
      ))}

      <CameraController reducedMotion={reducedMotion} />

      {!reducedMotion && (
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.55} luminanceThreshold={0.35} luminanceSmoothing={0.7} mipmapBlur />
          <Vignette offset={0.25} darkness={0.65} />
        </EffectComposer>
      )}
    </>
  );
}

export function UniverseScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 1.2, 9.5], fov: 42, near: 0.1, far: 80 }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <Suspense fallback={null}>
          <SceneContent reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
