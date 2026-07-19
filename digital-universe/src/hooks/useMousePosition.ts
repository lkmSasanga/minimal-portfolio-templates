"use client";

import { useEffect, useRef, useState } from "react";

export function useMousePosition(smooth = 0.08) {
  const target = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let frame = 0;
    const tick = () => {
      setPosition((prev) => ({
        x: prev.x + (target.current.x - prev.x) * smooth,
        y: prev.y + (target.current.y - prev.y) * smooth,
      }));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [smooth]);

  return position;
}
