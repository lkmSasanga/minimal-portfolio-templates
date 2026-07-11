"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * SSR-safe reduced-motion flag.
 * Always `false` on the server and during the first client render so markup matches,
 * then updates to the real preference after mount.
 */
export function useSafeReducedMotion() {
  const prefersReduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return ready && prefersReduced === true;
}
