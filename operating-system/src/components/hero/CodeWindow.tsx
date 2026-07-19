"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { codeSnippet } from "@/data/portfolio";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { easeMac } from "@/lib/motion";

function highlight(line: string) {
  // Lightweight token coloring
  const parts: { text: string; cls?: string }[] = [];
  const regex =
    /(\/\/.*$)|("(?:\\.|[^"])*")|(\b(?:export|async|function|await|return|const|try|finally|new)\b)|(\b\d+\b)|(\b[A-Za-z_][\w]*(?=\())|([{}()[\];,.=>])/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(line))) {
    if (m.index > last) parts.push({ text: line.slice(last, m.index) });
    if (m[1]) parts.push({ text: m[1], cls: "tok-cm" });
    else if (m[2]) parts.push({ text: m[2], cls: "tok-str" });
    else if (m[3]) parts.push({ text: m[3], cls: "tok-kw" });
    else if (m[4]) parts.push({ text: m[4], cls: "tok-num" });
    else if (m[5]) parts.push({ text: m[5], cls: "tok-fn" });
    else if (m[6]) parts.push({ text: m[6], cls: "tok-op" });
    last = m.index + m[0].length;
  }
  if (last < line.length) parts.push({ text: line.slice(last) });
  return parts;
}

export function CodeWindow() {
  const lines = codeSnippet.trimEnd().split("\n");
  const [scroll, setScroll] = useState(0);
  const [cursorLine, setCursorLine] = useState(0);
  const [compiled, setCompiled] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setScroll((s) => (s + 1) % Math.max(1, lines.length - 6));
      setCursorLine((c) => (c + 1) % lines.length);
    }, 1400);
    return () => clearInterval(id);
  }, [lines.length]);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setCompiled(true);
      hideTimer = setTimeout(() => setCompiled(false), 2200);
    }, 9000);
    return () => {
      clearInterval(id);
      clearTimeout(hideTimer);
    };
  }, []);

  const visible = lines.slice(scroll, scroll + 8);

  return (
    <GlassPanel className="w-[300px] overflow-hidden p-0" parallax={12} rotate={2.5}>
      <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#f87171]/60" />
          <span className="h-2 w-2 rounded-full bg-[#fbbf24]/60" />
          <span className="h-2 w-2 rounded-full bg-[#34d399]/60" />
          <span className="ml-2 font-mono text-[10px] text-[var(--fg-dim)]">
            orders.route.ts
          </span>
        </div>
        <AnimatePresence>
          {compiled && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: easeMac }}
              className="font-mono text-[10px] text-[var(--success)]"
            >
              ✓ compiled
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="relative h-[156px] overflow-hidden px-2 py-2 font-mono text-[10px] leading-[1.65]">
        {visible.map((line, i) => {
          const absolute = scroll + i;
          const active = absolute === cursorLine;
          return (
            <div
              key={`${absolute}-${line.slice(0, 8)}`}
              className="flex gap-2"
            >
              <span className="w-4 shrink-0 select-none text-right text-[var(--fg-dim)]">
                {absolute + 1}
              </span>
              <span className="relative whitespace-pre text-[var(--fg-muted)]">
                {highlight(line).map((p, j) => (
                  <span key={j} className={p.cls}>
                    {p.text}
                  </span>
                ))}
                {active && (
                  <span className="cursor-blink absolute ml-0.5 inline-block h-[12px] w-[5px] translate-y-[2px] bg-white/70" />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </GlassPanel>
  );
}
