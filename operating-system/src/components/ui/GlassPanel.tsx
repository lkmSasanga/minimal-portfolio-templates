"use client";

import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { useMouse } from "@/components/providers/MouseProvider";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  parallax?: number;
  rotate?: number;
  style?: React.CSSProperties;
};

export function GlassPanel({
  children,
  className,
  parallax = 8,
  rotate = 2,
  style,
}: Props) {
  const { nx, ny } = useMouse();
  const tx = useTransform(nx, (v) => v * parallax);
  const ty = useTransform(ny, (v) => v * parallax);
  const rx = useTransform(ny, (v) => -v * rotate);
  const ry = useTransform(nx, (v) => v * rotate);
  const transform = useMotionTemplate`translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;

  return (
    <motion.div
      style={{ transform, transformStyle: "preserve-3d", ...style }}
      className={cn("glass rounded-2xl", className)}
    >
      {children}
    </motion.div>
  );
}
