"use client";

import { motion } from "framer-motion";
import type { ArchitectureLink, ArchitectureNode } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/motion";

type CaseArchitectureProps = {
  nodes: ArchitectureNode[];
  links: ArchitectureLink[];
  caption: string;
  light?: boolean;
  className?: string;
};

export function CaseArchitecture({
  nodes,
  links,
  caption,
  light = false,
  className,
}: CaseArchitectureProps) {
  const reduceMotion = useSafeReducedMotion();
  const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));

  return (
    <figure className={cn("w-full", className)}>
      <svg
        viewBox="0 0 560 240"
        className="h-auto w-full"
        role="img"
        aria-label={caption}
      >
        {links.map((link, index) => {
          const from = nodeMap[link.from];
          const to = nodeMap[link.to];
          if (!from || !to) return null;

          const x1 = from.x + from.w;
          const y1 = from.y + from.h / 2;
          const x2 = to.x;
          const y2 = to.y + to.h / 2;
          const midX = (x1 + x2) / 2;

          // Vertical-ish links when target is below/above
          const isVertical = Math.abs(from.y - to.y) > 40 && Math.abs(from.x - to.x) < 80;
          const path = isVertical
            ? `M${from.x + from.w / 2} ${from.y + from.h} V${to.y}`
            : `M${x1} ${y1} C${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;

          return (
            <motion.path
              key={`${link.from}-${link.to}-${index}`}
              d={path}
              fill="none"
              stroke={light ? "#b8a88a" : "#b8a88a"}
              strokeWidth="1"
              strokeDasharray={link.dashed ? "4 4" : undefined}
              opacity={light ? 0.7 : 0.85}
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: light ? 0.7 : 0.85 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: 0.15 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          );
        })}

        {nodes.map((node, index) => {
          const stroke =
            node.tone === "primary"
              ? light
                ? "#f7f4ef"
                : "#1c1917"
              : node.tone === "accent"
                ? "#b8a88a"
                : light
                  ? "rgba(247,244,239,0.35)"
                  : "#d6d0c8";

          return (
            <motion.g
              key={node.id}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={node.h}
                fill={
                  light
                    ? "rgba(26,22,18,0.45)"
                    : node.tone === "primary"
                      ? "rgba(247,244,239,0.9)"
                      : "rgba(239,235,227,0.7)"
                }
                stroke={stroke}
                strokeWidth="1"
              />
              <text
                x={node.x + node.w / 2}
                y={node.y + node.h / 2 + 4}
                textAnchor="middle"
                fill={light ? "#f7f4ef" : "#1c1917"}
                opacity={light ? 0.85 : 0.9}
                fontSize="12"
                fontFamily="ui-monospace, monospace"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
      <figcaption
        className={cn(
          "mt-5 max-w-2xl text-sm leading-relaxed",
          light ? "text-ivory/55" : "text-warm-grey",
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
