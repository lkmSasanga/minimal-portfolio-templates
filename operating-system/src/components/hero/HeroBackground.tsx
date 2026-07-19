"use client";

import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { useMouse } from "@/components/providers/MouseProvider";

export function HeroBackground() {
  const { nx, ny } = useMouse();

  const glowX = useTransform(nx, (v) => 50 + v * 12);
  const glowY = useTransform(ny, (v) => 40 + v * 10);
  const glowPos = useMotionTemplate`${glowX}% ${glowY}%`;
  const lightX = useTransform(nx, (v) => v * 40);
  const lightY = useTransform(ny, (v) => v * 30);
  const bg = useMotionTemplate`radial-gradient(ellipse 55% 45% at ${glowPos}, rgba(94,234,212,0.09), transparent 70%)`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden noise">
      <div className="absolute inset-0 bg-[var(--bg-void)]" />

      <div className="absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2 spin-gradient opacity-40">
        <div
          className="h-full w-full"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(94,234,212,0.07), transparent 30%, rgba(147,197,253,0.06), transparent 60%, rgba(252,211,77,0.04), transparent 85%, rgba(94,234,212,0.05))",
          }}
        />
      </div>

      <motion.div className="absolute inset-0" style={{ background: bg }} />

      <motion.div
        className="absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full opacity-50 blur-3xl"
        style={{
          x: lightX,
          y: lightY,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12), transparent 65%)",
        }}
      />

      <div
        className="absolute -right-1/4 bottom-0 h-[60%] w-[60%] rounded-full opacity-40 blur-3xl drift-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(94,234,212,0.08), transparent 65%)",
        }}
      />

      <div className="grid-overlay absolute inset-0" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 30%, rgba(6,7,10,0.85) 100%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
