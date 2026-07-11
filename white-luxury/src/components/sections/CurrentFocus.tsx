import { currentFocus } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { EditorialLabel } from "@/components/ui/SectionHeader";

export function CurrentFocus() {
  const items = [...currentFocus, ...currentFocus];

  return (
    <section className="overflow-hidden border-y border-stone bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <EditorialLabel tone="muted">Research Index</EditorialLabel>
              <h2 className="mt-4 font-serif text-3xl text-charcoal md:text-4xl">
                Currently Exploring
              </h2>
            </div>
            <p className="max-w-sm text-sm text-warm-grey">
              Active interests shaping how I approach upcoming product and systems work.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
        <div className="flex w-max animate-marquee gap-0">
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-6 px-6"
            >
              <span className="font-mono text-[11px] tracking-widest text-champagne">
                {String((index % currentFocus.length) + 1).padStart(2, "0")}
              </span>
              <span className="whitespace-nowrap font-serif text-2xl text-charcoal md:text-3xl">
                {item}
              </span>
              <span className="h-px w-10 bg-stone" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
