import { about } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section id="about" className="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            index="01"
            label="About"
            title="Who I Am"
            description={about.headline}
          />
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeIn className="lg:col-span-7">
            <blockquote className="font-serif text-2xl italic leading-snug text-zinc-300 sm:text-3xl md:text-4xl">
              &ldquo;{about.paragraphs[0]}&rdquo;
            </blockquote>
            <GlassCard gradient className="mt-10">
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                {about.paragraphs[1]}
              </p>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {about.highlights.map((item) => (
                <GlassCard
                  key={item.label}
                  className="group flex flex-col justify-between py-8 sm:flex-row sm:items-center lg:flex-col lg:items-start"
                >
                  <span className="font-display text-5xl font-extrabold text-gradient sm:text-6xl">
                    {item.value}
                  </span>
                  <span className="mt-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:mt-0 lg:mt-3">
                    {item.label}
                  </span>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
