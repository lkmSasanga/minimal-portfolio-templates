"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeMac } from "@/lib/motion";

const stages = [
  { id: "write", label: "Writing code", detail: "orders.route.ts" },
  { id: "commit", label: "Commit created", detail: "f3e2a91 · feat(orders)" },
  { id: "pipeline", label: "Pipeline started", detail: "Harbor CI · run #1842" },
  { id: "tests", label: "Tests executing", detail: "23 passed · 0 failed" },
  { id: "docker", label: "Docker build", detail: "atlas/api:184 · 42s" },
  { id: "deploy", label: "Cloud deploy", detail: "ECS · eu-central-1" },
  { id: "traffic", label: "Traffic shifting", detail: "canary 10% → 100%" },
  { id: "success", label: "Deploy successful", detail: "Architecture updated" },
] as const;

export function DeploymentLoop() {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Full loop every ~20s
    const cycle = setInterval(() => {
      setVisible(true);
      setStage(0);
    }, 20000);

    // Kick off first cycle after mount
    const start = setTimeout(() => setVisible(true), 3500);
    return () => {
      clearInterval(cycle);
      clearTimeout(start);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (stage >= stages.length - 1) {
      const hide = setTimeout(() => setVisible(false), 2200);
      return () => clearTimeout(hide);
    }
    const t = setTimeout(() => setStage((s) => s + 1), 1100);
    return () => clearTimeout(t);
  }, [stage, visible]);

  const current = stages[stage];

  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.55, ease: easeMac }}
            className="glass flex min-w-[280px] items-center gap-3 rounded-2xl px-4 py-3"
          >
            <div className="relative flex h-8 w-8 items-center justify-center">
              <span
                className={`h-2 w-2 rounded-full ${
                  current.id === "success"
                    ? "bg-[var(--success)]"
                    : "bg-[var(--accent)]"
                } availability-pulse`}
              />
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 32 32">
                <circle
                  cx="16"
                  cy="16"
                  r="13"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="16"
                  cy="16"
                  r="13"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={81.6}
                  initial={{ strokeDashoffset: 81.6 }}
                  animate={{
                    strokeDashoffset: 81.6 - (81.6 * (stage + 1)) / stages.length,
                  }}
                  transition={{ duration: 0.5, ease: easeMac }}
                />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-medium tracking-tight text-white">
                {current.label}
              </p>
              <p className="font-mono text-[10px] text-[var(--fg-dim)]">
                {current.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
