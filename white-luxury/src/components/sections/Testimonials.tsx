"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { EditorialLabel } from "@/components/ui/SectionHeader";
import { useSafeReducedMotion } from "@/lib/motion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useSafeReducedMotion();
  const active = testimonials[index];

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  function previous() {
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((current) => (current + 1) % testimonials.length);
  }

  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <EditorialLabel tone="muted">Testimonials</EditorialLabel>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <FadeIn>
            <span
              aria-hidden
              className="font-serif text-[7rem] leading-none text-champagne/40 md:text-[9rem]"
            >
              “
            </span>
          </FadeIn>

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.name}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <p className="font-serif text-3xl leading-snug text-charcoal md:text-4xl lg:text-[2.75rem]">
                  {active.quote}
                </p>
                <footer className="mt-10">
                  <cite className="not-italic">
                    <span className="block text-base text-charcoal">{active.name}</span>
                    <span className="mt-1 block text-sm text-warm-grey">
                      {active.role}, {active.company}
                    </span>
                    <span className="mt-3 block font-mono text-[11px] tracking-wider text-warm-grey-light">
                      {active.context}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center border border-stone text-charcoal transition-colors hover:border-champagne"
              >
                <ChevronLeft size={16} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center border border-stone text-charcoal transition-colors hover:border-champagne"
              >
                <ChevronRight size={16} strokeWidth={1.5} />
              </button>
              <div className="ml-2 flex gap-2">
                {testimonials.map((item, itemIndex) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show testimonial from ${item.name}`}
                    onClick={() => setIndex(itemIndex)}
                    className={`h-1.5 w-6 transition-colors ${
                      itemIndex === index ? "bg-champagne" : "bg-stone"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
