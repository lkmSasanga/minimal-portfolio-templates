"use client";

import { motion } from "framer-motion";
import { principles } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useSafeReducedMotion } from "@/lib/motion";

export function WorkingPrinciples() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeader
            number="05"
            title="Working Principles"
            description="A short philosophy of how I approach complex product and systems work."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {principles.map((principle, index) => (
            <FadeIn key={principle.number} delay={index * 0.06}>
              <article className="group relative h-full border border-stone bg-ivory p-8 transition-colors duration-500 hover:border-champagne/50 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-serif text-5xl text-charcoal/10">
                    {principle.number}
                  </span>
                  <PrincipleSymbol type={principle.symbol} />
                </div>
                <h3 className="mt-8 font-serif text-3xl text-charcoal">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-warm-grey md:text-base">
                  {principle.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleSymbol({
  type,
}: {
  type: "expand" | "line" | "orbit" | "mark";
}) {
  const reduceMotion = useSafeReducedMotion();

  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-champagne"
      initial={reduceMotion ? false : { opacity: 0.5 }}
      whileHover={reduceMotion ? undefined : { opacity: 1 }}
      aria-hidden
    >
      {type === "expand" && (
        <>
          <rect x="14" y="14" width="20" height="20" stroke="currentColor" strokeWidth="1" />
          <path d="M8 24 H14 M34 24 H40 M24 8 V14 M24 34 V40" stroke="currentColor" strokeWidth="1" />
        </>
      )}
      {type === "line" && (
        <>
          <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1" />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
        </>
      )}
      {type === "orbit" && (
        <>
          <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" />
          <circle cx="24" cy="12" r="2.5" fill="currentColor" />
        </>
      )}
      {type === "mark" && (
        <>
          <path d="M12 32 L24 12 L36 32" stroke="currentColor" strokeWidth="1" />
          <line x1="18" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="1" />
        </>
      )}
    </motion.svg>
  );
}
