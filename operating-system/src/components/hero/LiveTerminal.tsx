"use client";

import { useEffect, useState } from "react";
import { terminalCommands } from "@/data/portfolio";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function LiveTerminal() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "output" | "pause">("typing");
  const [lines, setLines] = useState<string[]>([]);

  const current = terminalCommands[cmdIndex % terminalCommands.length];

  useEffect(() => {
    if (phase !== "typing") return;
    if (typed.length < current.cmd.length) {
      const t = setTimeout(() => {
        setTyped(current.cmd.slice(0, typed.length + 1));
      }, 28 + Math.random() * 40);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("output"), 280);
    return () => clearTimeout(t);
  }, [phase, typed, current.cmd]);

  useEffect(() => {
    if (phase !== "output") return;
    setLines((prev) => [
      ...prev.slice(-6),
      `$ ${current.cmd}`,
      ...current.output.split("\n"),
    ]);
    const t = setTimeout(() => setPhase("pause"), 400);
    return () => clearTimeout(t);
  }, [phase, current]);

  useEffect(() => {
    if (phase !== "pause") return;
    const t = setTimeout(() => {
      setCmdIndex((i) => i + 1);
      setTyped("");
      setPhase("typing");
    }, 1600);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <GlassPanel
      className="w-[280px] overflow-hidden p-0 sm:w-[300px]"
      parallax={10}
      rotate={3}
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#f87171]/60" />
        <span className="h-2 w-2 rounded-full bg-[#fbbf24]/60" />
        <span className="h-2 w-2 rounded-full bg-[#34d399]/60" />
        <span className="ml-2 font-mono text-[10px] text-[var(--fg-dim)]">
          zsh — deploy
        </span>
      </div>
      <div className="h-[148px] overflow-hidden px-3 py-2 font-mono text-[10.5px] leading-relaxed text-[var(--fg-muted)]">
        {lines.map((line, i) => (
          <div
            key={`${i}-${line.slice(0, 12)}`}
            className={
              line.startsWith("$")
                ? "text-[var(--accent)]"
                : "text-[var(--fg-muted)]"
            }
          >
            {line}
          </div>
        ))}
        {phase === "typing" && (
          <div className="text-[var(--accent)]">
            $ {typed}
            <span className="cursor-blink ml-0.5 inline-block h-3 w-[6px] translate-y-[2px] bg-[var(--accent)]" />
          </div>
        )}
      </div>
    </GlassPanel>
  );
}
