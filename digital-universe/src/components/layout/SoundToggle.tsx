"use client";

import { useSound } from "@/hooks/useSound";
import { cn } from "@/lib/utils";

export function SoundToggle({ className }: { className?: string }) {
  const { enabled, toggle, playClick } = useSound();

  return (
    <button
      type="button"
      onClick={() => {
        toggle();
        if (!enabled) playClick();
      }}
      aria-pressed={enabled}
      aria-label={enabled ? "Mute ambient audio" : "Enable ambient audio"}
      className={cn(
        "fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0a1220]/55 text-slate-300 backdrop-blur-md transition hover:border-white/20 hover:text-white",
        className,
      )}
    >
      {enabled ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 10v4h3l4 4V6L7 10H4Z" />
          <path d="M16 9.5a3.5 3.5 0 0 1 0 5" />
          <path d="M18.5 7a7 7 0 0 1 0 10" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 10v4h3l4 4V6L7 10H4Z" />
          <path d="m16 10 4 4M20 10l-4 4" />
        </svg>
      )}
    </button>
  );
}
