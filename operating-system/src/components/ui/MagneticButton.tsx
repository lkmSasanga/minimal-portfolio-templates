"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { easeMac } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.22);
    y.set(dy * 0.22);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    primary:
      "bg-[var(--accent)] text-[#041016] hover:brightness-110 shadow-[0_0_32px_rgba(94,234,212,0.25)]",
    secondary:
      "glass text-white hover:bg-white/[0.08]",
    ghost:
      "text-[var(--fg-muted)] hover:text-white border border-transparent hover:border-white/10",
  }[variant];

  const shared = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium tracking-tight transition-[filter,background,color,border-color] duration-400",
    styles,
    className,
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        style={{ x: sx, y: sy }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.4, ease: easeMac }}
        className={shared}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: easeMac }}
      className={shared}
    >
      {children}
    </motion.button>
  );
}
