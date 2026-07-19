"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { easeMac } from "@/lib/motion";

const commits = [
  { hash: "f3e2a91", msg: "feat(orders): idempotent route", time: "2m" },
  { hash: "a91c44b", msg: "fix(gateway): warm pool drain", time: "18m" },
  { hash: "77c0de1", msg: "chore: bump event schema v12", time: "1h" },
];

const pods = [
  { name: "gateway-7f2a", status: "Running", cpu: "12%" },
  { name: "orders-9c1b", status: "Running", cpu: "28%" },
  { name: "inventory-3ae", status: "Running", cpu: "9%" },
];

export function DevWindows() {
  const [metric, setMetric] = useState(42);
  const [prOpen, setPrOpen] = useState(true);
  const [logLines, setLogLines] = useState([
    "INFO  ecs  task started revision=184",
    "INFO  health  /ready 200 4ms",
    "WARN  queue  depth=18 region=eu-central-1",
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setMetric((m) => Math.max(12, Math.min(96, m + (Math.random() > 0.5 ? 3 : -2))));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const logs = [
      "INFO  deploy  traffic shift 10% → canary",
      "INFO  kafka  lag=0 orders.created",
      "INFO  redis  hit_ratio=0.97",
      "DEBUG auth  jwt refreshed uid=…8f2",
      "INFO  alb  target healthy :443",
    ];
    let i = 0;
    const id = setInterval(() => {
      setLogLines((prev) => [...prev.slice(-2), logs[i % logs.length]]);
      i++;
    }, 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setPrOpen((v) => !v), 12000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* GitHub commits */}
      <div className="absolute left-[-4%] top-[8%] z-20 hidden xl:block">
        <GlassPanel className="w-[220px] p-3" parallax={14} rotate={3.5}>
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--fg-dim)]">
            GitHub · main
          </p>
          <ul className="space-y-2">
            {commits.map((c) => (
              <li key={c.hash} className="flex items-start gap-2">
                <span className="mt-0.5 font-mono text-[10px] text-[var(--accent)]">
                  {c.hash}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] text-white/90">{c.msg}</p>
                  <p className="text-[9px] text-[var(--fg-dim)]">{c.time} ago</p>
                </div>
              </li>
            ))}
          </ul>
        </GlassPanel>
      </div>

      {/* CloudWatch-ish metric */}
      <div className="absolute right-[-2%] top-[12%] z-20 hidden lg:block">
        <GlassPanel className="w-[200px] p-3" parallax={11} rotate={-2.5}>
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--fg-dim)]">
            CloudWatch · p99
          </p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-medium tracking-tight text-white">
              {metric}
              <span className="ml-1 text-xs text-[var(--fg-muted)]">ms</span>
            </p>
            <svg viewBox="0 0 80 28" className="h-7 w-20">
              <motion.polyline
                fill="none"
                stroke="#5eead4"
                strokeWidth="1.5"
                points={`0,20 12,${22 - metric * 0.12} 24,18 36,${16 - metric * 0.08} 48,14 60,${18 - metric * 0.1} 72,10 80,12`}
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: easeMac }}
              />
            </svg>
          </div>
        </GlassPanel>
      </div>

      {/* K8s pods */}
      <div className="absolute bottom-[18%] left-[-6%] z-20 hidden xl:block">
        <GlassPanel className="w-[210px] p-3" parallax={9} rotate={2}>
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--fg-dim)]">
            kubectl · commerce
          </p>
          <ul className="space-y-1.5">
            {pods.map((p) => (
              <li
                key={p.name}
                className="flex items-center justify-between gap-2 font-mono text-[10px]"
              >
                <span className="text-white/85">{p.name}</span>
                <span className="text-[var(--success)]">{p.status}</span>
              </li>
            ))}
          </ul>
        </GlassPanel>
      </div>

      {/* Docker / CI logs */}
      <div className="absolute bottom-[6%] right-[2%] z-20 hidden md:block">
        <GlassPanel className="w-[240px] p-0" parallax={8} rotate={-2}>
          <div className="border-b border-white/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--fg-dim)]">
            Docker · build logs
          </div>
          <div className="space-y-1 px-3 py-2 font-mono text-[10px] text-[var(--fg-muted)]">
            {logLines.map((l, i) => (
              <motion.p
                key={`${l}-${i}`}
                initial={{ opacity: 0, x: 4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: easeMac }}
              >
                {l}
              </motion.p>
            ))}
          </div>
        </GlassPanel>
      </div>

      {/* PR card */}
      <motion.div
        className="absolute right-[18%] top-[2%] z-20 hidden lg:block"
        animate={{ opacity: prOpen ? 1 : 0.35, y: prOpen ? 0 : -6 }}
        transition={{ duration: 0.6, ease: easeMac }}
      >
        <GlassPanel className="w-[200px] p-3" parallax={13} rotate={3}>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--fg-dim)]">
            Pull request
          </p>
          <p className="mt-1 text-[12px] font-medium text-white">
            #184 · warm pool drain
          </p>
          <div className="mt-2 flex items-center gap-2 text-[10px]">
            <span className="rounded-md bg-[var(--success)]/15 px-1.5 py-0.5 text-[var(--success)]">
              checks ✓
            </span>
            <span className="text-[var(--fg-dim)]">2 reviewers</span>
          </div>
        </GlassPanel>
      </motion.div>
    </>
  );
}
