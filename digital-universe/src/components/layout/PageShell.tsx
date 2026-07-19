"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function PageShell({ eyebrow, title, subtitle, children, className }: Props) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#02040a] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.12),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(45,212,191,0.08),_transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-cyan-300/70 uppercase transition hover:text-cyan-200"
          >
            ← Return to universe
          </Link>

          <p className="mt-10 font-mono text-[11px] tracking-[0.28em] text-slate-500 uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.03em] text-slate-50">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-slate-400">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={cn("mt-14", className)}
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}
