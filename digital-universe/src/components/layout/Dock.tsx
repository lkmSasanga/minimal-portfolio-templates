"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { dockItems } from "@/data/portfolio";
import { useInactivity } from "@/hooks/useInactivity";
import { useSound } from "@/hooks/useSound";
import { cn } from "@/lib/utils";

const icons: Record<string, ReactNode> = {
  home: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  ),
  about: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19.5c1.8-3.2 4.2-4.8 7-4.8s5.2 1.6 7 4.8" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4.5v3M12 16.5v3M4.5 12h3M16.5 12h3" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  ),
};

export function Dock() {
  const pathname = usePathname();
  const active = useInactivity(3500);
  const { playClick, playHover } = useSound();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center pb-5">
      <AnimatePresence>
        {active && (
          <motion.nav
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 28, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="pointer-events-auto flex items-end gap-1 rounded-2xl border border-white/10 bg-[#0a1220]/55 px-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            aria-label="Primary"
          >
            {dockItems.map((item, i) => {
              const isActive = pathname === item.href;
              const dist = hoverIndex === null ? 0 : Math.abs(hoverIndex - i);
              const scale = hoverIndex === null ? 1 : Math.max(1, 1.45 - dist * 0.22);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-label={item.label}
                  onMouseEnter={() => {
                    setHoverIndex(i);
                    playHover();
                  }}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => playClick()}
                  className={cn(
                    "group relative flex h-11 w-11 items-center justify-center rounded-xl text-slate-300 transition-colors",
                    isActive ? "bg-white/10 text-cyan-100" : "hover:text-white",
                  )}
                  style={{
                    transform: `scale(${scale}) translateY(${scale > 1 ? -(scale - 1) * 16 : 0}px)`,
                    transition: "transform 160ms ease",
                  }}
                >
                  {icons[item.id]}
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[9px] tracking-wider text-slate-200 opacity-0 transition group-hover:opacity-100">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
