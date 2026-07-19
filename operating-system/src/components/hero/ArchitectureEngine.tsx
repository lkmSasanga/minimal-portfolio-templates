"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  archEdges,
  archNodes,
  kindMeta,
  requestRoutes,
  type ArchNode,
} from "@/data/architecture";
import { useMouse } from "@/components/providers/MouseProvider";
import { useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeMac } from "@/lib/motion";

type Packet = {
  id: string;
  route: string[];
  progress: number;
  speed: number;
};

function nodeById(id: string) {
  return archNodes.find((n) => n.id === id)!;
}

function edgePath(from: ArchNode, to: ArchNode) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const cx = from.x + dx * 0.5;
  const cy = from.y + dy * 0.5 - Math.min(8, Math.abs(dx) * 0.15);
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

function pointOnRoute(route: string[], t: number) {
  const segs = route.length - 1;
  const scaled = Math.max(0, Math.min(0.999, t)) * segs;
  const i = Math.floor(scaled);
  const local = scaled - i;
  const a = nodeById(route[i]);
  const b = nodeById(route[i + 1]);
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const cx = a.x + dx * 0.5;
  const cy = a.y + dy * 0.5 - Math.min(8, Math.abs(dx) * 0.15);
  // Quadratic bezier
  const mt = 1 - local;
  return {
    x: mt * mt * a.x + 2 * mt * local * cx + local * local * b.x,
    y: mt * mt * a.y + 2 * mt * local * cy + local * local * b.y,
  };
}

function collectDeps(id: string, map: Map<string, Set<string>>) {
  const visited = new Set<string>();
  const stack = [id];
  while (stack.length) {
    const cur = stack.pop()!;
    if (visited.has(cur)) continue;
    visited.add(cur);
    const deps = map.get(cur);
    if (deps) deps.forEach((d) => stack.push(d));
  }
  return visited;
}

export function ArchitectureEngine() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [routes, setRoutes] = useState(requestRoutes);
  const [packets, setPackets] = useState<Packet[]>([]);
  const [pulseId, setPulseId] = useState<string | null>(null);
  const raf = useRef<number>(0);
  const last = useRef(performance.now());
  const spawnAcc = useRef(0);
  const mouseOffset = useRef({ x: 0, y: 0 });
  const { nx, ny } = useMouse();

  useMotionValueEvent(nx, "change", (v) => {
    mouseOffset.current.x = v * 1.2;
  });
  useMotionValueEvent(ny, "change", (v) => {
    mouseOffset.current.y = v * 0.9;
  });

  const depMap = useMemo(() => {
    const m = new Map<string, Set<string>>();
    archNodes.forEach((n) => m.set(n.id, new Set(n.dependsOn)));
    return m;
  }, []);

  const activeFocus = hovered ?? selected;
  const highlighted = useMemo(() => {
    if (!activeFocus) return null;
    return collectDeps(activeFocus, depMap);
  }, [activeFocus, depMap]);

  const spawnPacket = useCallback(() => {
    const route = routes[Math.floor(Math.random() * routes.length)];
    setPackets((prev) => {
      if (prev.length > 14) return prev;
      return [
        ...prev,
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          route,
          progress: 0,
          speed: 0.08 + Math.random() * 0.06,
        },
      ];
    });
  }, [routes]);

  useEffect(() => {
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last.current) / 1000);
      last.current = now;
      spawnAcc.current += dt;
      if (spawnAcc.current > 0.55) {
        spawnAcc.current = 0;
        spawnPacket();
      }
      setPackets((prev) =>
        prev
          .map((p) => ({ ...p, progress: p.progress + p.speed * dt }))
          .filter((p) => p.progress < 1),
      );
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [spawnPacket]);

  const onNodeClick = (id: string) => {
    setSelected((s) => (s === id ? null : id));
    setPulseId(id);
    setTimeout(() => setPulseId(null), 700);

    // Re-route: prefer paths that touch this node
    const touching = requestRoutes.filter((r) => r.includes(id));
    const rest = requestRoutes.filter((r) => !r.includes(id));
    // Alternate path order to simulate dynamic routing
    const flipped = touching.map((r) =>
      r.length > 3 ? [...r.slice(0, 2), ...r.slice(2).reverse()] : [...r],
    );
    setRoutes([...flipped, ...rest]);

    // Burst packets through the node
    const burst = (touching.length ? touching : requestRoutes).slice(0, 4);
    setPackets((prev) => [
      ...prev,
      ...burst.map((route, i) => ({
        id: `burst-${id}-${i}-${Date.now()}`,
        route,
        progress: 0,
        speed: 0.14 + i * 0.02,
      })),
    ]);
  };

  const tooltipNode = activeFocus ? nodeById(activeFocus) : null;

  return (
    <div className="relative h-full w-full select-none [perspective:900px]">
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: 4,
          rotateY: -3,
        }}
        transition={{ duration: 1.2, ease: easeMac }}
      >
        {/* Soft plate behind graph */}
        <div className="absolute inset-[4%] rounded-3xl border border-white/[0.05] bg-gradient-to-b from-white/[0.04] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />

        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Edges */}
          {archEdges.map((edge) => {
            const from = nodeById(edge.from);
            const to = nodeById(edge.to);
            const active =
              !highlighted ||
              (highlighted.has(edge.from) && highlighted.has(edge.to));
            const focused =
              highlighted &&
              highlighted.has(edge.from) &&
              highlighted.has(edge.to);
            return (
              <path
                key={edge.id}
                d={edgePath(from, to)}
                fill="none"
                stroke={focused ? "rgba(94,234,212,0.55)" : "rgba(255,255,255,0.1)"}
                strokeWidth={focused ? 0.35 : 0.2}
                strokeOpacity={active ? 1 : 0.15}
                style={{
                  transition: "stroke 0.4s ease, stroke-opacity 0.4s ease",
                  transform: `translate(${mouseOffset.current.x * 0.15}px, ${mouseOffset.current.y * 0.1}px)`,
                }}
              />
            );
          })}

          {/* Packets */}
          {packets.map((p) => {
            const pt = pointOnRoute(p.route, p.progress);
            const onFocus =
              !highlighted || p.route.some((id) => highlighted.has(id));
            return (
              <circle
                key={p.id}
                cx={pt.x}
                cy={pt.y}
                r={0.55}
                fill="#5eead4"
                opacity={onFocus ? 0.95 : 0.2}
                filter="url(#glow)"
              />
            );
          })}

          {/* Nodes */}
          {archNodes.map((node) => {
            const meta = kindMeta[node.kind];
            const isHot = activeFocus === node.id;
            const isDep = highlighted?.has(node.id);
            const dimmed = highlighted && !isDep;
            const pulsing = pulseId === node.id;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer"
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onNodeClick(node.id)}
                style={{
                  opacity: dimmed ? 0.25 : 1,
                  transition: "opacity 0.4s ease",
                }}
              >
                {(isHot || pulsing) && (
                  <circle
                    r={5.2}
                    fill="none"
                    stroke={meta.color}
                    strokeWidth={0.25}
                    opacity={0.5}
                  >
                    <animate
                      attributeName="r"
                      from="4.2"
                      to="6.2"
                      dur="0.7s"
                      fill="freeze"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="0.7s"
                      fill="freeze"
                    />
                  </circle>
                )}
                <circle
                  r={isHot ? 3.6 : 3.1}
                  fill="rgba(8,10,16,0.92)"
                  stroke={meta.color}
                  strokeWidth={isHot || isDep ? 0.45 : 0.28}
                  style={{
                    filter: isHot
                      ? `drop-shadow(0 0 4px ${meta.glow})`
                      : undefined,
                    transition: "r 0.35s ease, stroke-width 0.35s ease",
                  }}
                />
                <circle r={1.05} fill={meta.color} opacity={0.95} />
                <text
                  y={5.6}
                  textAnchor="middle"
                  fill="rgba(232,234,239,0.85)"
                  fontSize="2.1"
                  fontFamily="var(--font-geist-sans), sans-serif"
                  style={{ pointerEvents: "none" }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltipNode && (
          <motion.div
            key={tooltipNode.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.35, ease: easeMac }}
            className="pointer-events-none absolute bottom-3 left-1/2 z-10 w-[min(280px,90%)] -translate-x-1/2"
          >
            <div className="glass-soft rounded-xl px-3.5 py-2.5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13px] font-medium tracking-tight text-white">
                  {tooltipNode.label}
                </p>
                <span
                  className="rounded-md px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                  style={{
                    color: kindMeta[tooltipNode.kind].color,
                    background: kindMeta[tooltipNode.kind].glow,
                  }}
                >
                  {tooltipNode.kind}
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] text-[var(--fg-muted)]">
                {tooltipNode.tech}
              </p>
              {tooltipNode.dependsOn.length > 0 && (
                <p className="mt-1.5 text-[10px] text-[var(--fg-dim)]">
                  depends → {tooltipNode.dependsOn.join(", ")}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] availability-pulse" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--fg-dim)]">
          Live architecture
        </span>
      </div>

      <p
        className={cn(
          "pointer-events-none absolute right-3 top-3 font-mono text-[10px] text-[var(--fg-dim)]",
        )}
      >
        click to re-route
      </p>
    </div>
  );
}
