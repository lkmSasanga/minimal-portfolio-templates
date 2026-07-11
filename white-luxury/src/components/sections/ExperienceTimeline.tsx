"use client";

import { useEffect, useRef, useState } from "react";
import { experienceChapters } from "@/data/experience";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const [active, setActive] = useState(0);
  const desktopRefs = useRef<(HTMLElement | null)[]>([]);
  const mobileRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const elements = [
      ...desktopRefs.current.filter(Boolean),
      ...mobileRefs.current.filter(Boolean),
    ] as HTMLElement[];

    elements.forEach((el) => {
      const index = Number(el.dataset.index);
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { threshold: 0.45, rootMargin: "-20% 0px -35% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="experience" className="scroll-mt-24 bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <SectionHeader
            number="04"
            title="Professional Chapters"
            description="A chronological view of roles and engagements that shaped how I design and deliver systems."
          />
        </FadeIn>

        <div className="mt-16 hidden lg:block">
          <div className="relative mb-14 h-px bg-stone">
            <div
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-champagne transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: `calc(${(active / Math.max(experienceChapters.length - 1, 1)) * 100}% - 5px)`,
              }}
            />
            {experienceChapters.map((chapter, index) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => {
                  desktopRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  setActive(index);
                }}
                className="absolute top-4 -translate-x-1/2 font-mono text-[11px] tracking-widest text-warm-grey transition-colors hover:text-charcoal"
                style={{
                  left: `${(index / Math.max(experienceChapters.length - 1, 1)) * 100}%`,
                }}
              >
                {chapter.start}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {experienceChapters.map((chapter, index) => (
              <article
                key={chapter.id}
                data-index={index}
                ref={(el) => {
                  desktopRefs.current[index] = el;
                }}
                className={cn(
                  "border-t pt-6 transition-all duration-700",
                  index === active
                    ? "border-charcoal opacity-100"
                    : "border-stone opacity-45",
                )}
              >
                <p className="font-mono text-[11px] tracking-widest text-champagne">
                  {chapter.start} — {chapter.end}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">
                  {chapter.company}
                </h3>
                <p className="mt-2 text-sm text-warm-grey">{chapter.position}</p>
                <p className="mt-5 text-sm leading-relaxed text-warm-grey">
                  {chapter.responsibility}
                </p>
                <p className="mt-4 border-l border-champagne/70 pl-3 text-sm leading-relaxed text-charcoal-soft">
                  {chapter.achievement}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {chapter.domains.map((domain) => (
                    <span
                      key={domain}
                      className="font-mono text-[10px] tracking-wide text-warm-grey-light"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-14 space-y-0 border-l border-stone pl-6 lg:hidden">
          {experienceChapters.map((chapter, index) => (
            <FadeIn key={chapter.id} delay={index * 0.05}>
              <article
                data-index={index}
                ref={(el) => {
                  mobileRefs.current[index] = el;
                }}
                className={cn(
                  "relative pb-12 transition-opacity duration-500",
                  index === active ? "opacity-100" : "opacity-60",
                )}
              >
                <span
                  className={cn(
                    "absolute -left-[1.92rem] top-1 h-2.5 w-2.5 rounded-full border border-stone bg-ivory transition-colors",
                    index === active && "border-champagne bg-champagne",
                  )}
                />
                <p className="font-mono text-[11px] tracking-widest text-champagne">
                  {chapter.start} — {chapter.end}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-charcoal">
                  {chapter.company}
                </h3>
                <p className="mt-1 text-sm text-warm-grey">{chapter.position}</p>
                <p className="mt-4 text-sm leading-relaxed text-warm-grey">
                  {chapter.responsibility}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {chapter.achievement}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
