import type { Transition, Variants } from "framer-motion";

/** macOS-like soft easing */
export const easeMac = [0.22, 1, 0.36, 1] as const;

export const transitionSoft: Transition = {
  duration: 0.65,
  ease: easeMac,
};

export const transitionPage: Transition = {
  duration: 0.7,
  ease: easeMac,
};

export const pageVariants: Variants = {
  initial: { opacity: 0, scale: 0.985, filter: "blur(6px)" },
  enter: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: transitionPage,
  },
  exit: {
    opacity: 0,
    scale: 1.015,
    filter: "blur(4px)",
    transition: { duration: 0.45, ease: easeMac },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionSoft,
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};
