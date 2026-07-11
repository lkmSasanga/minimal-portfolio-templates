import { siteConfig, socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  const [firstName, ...rest] = siteConfig.name.split(" ");
  const lastName = rest.join(" ") || firstName;

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pt-28 pb-12 sm:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="font-display text-outline text-[clamp(6rem,22vw,18rem)] font-extrabold uppercase leading-none select-none">
          Dev
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <FadeIn>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.availability}
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <FadeIn delay={80}>
              <p className="font-serif text-xl italic text-zinc-500 sm:text-2xl">
                Portfolio / 2026
              </p>
            </FadeIn>

            <FadeIn delay={120}>
              <h1 className="mt-4 font-display font-extrabold uppercase">
                <span className="text-display-xl block text-white">
                  {firstName}
                </span>
                <span className="text-display-xl text-gradient block">
                  {lastName}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-6 font-display text-2xl font-medium text-zinc-300 sm:text-3xl md:text-4xl">
                {siteConfig.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="font-serif italic text-purple-300">
                  {siteConfig.title.split(" ").slice(-1)[0]}
                </span>
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={280} className="lg:max-w-xs lg:pb-4">
            <div className="hidden h-32 w-px bg-gradient-to-b from-blue-500/50 to-transparent lg:block" />
            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg lg:mt-0">
              {siteConfig.tagline}
            </p>
            <p className="mt-3 text-sm uppercase tracking-widest text-zinc-600">
              {siteConfig.location}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={360}>
          <div className="mt-12 flex flex-wrap items-center gap-4 sm:mt-16">
            <Button href="#projects" className="px-8 py-4 text-base font-display font-semibold uppercase tracking-wider">
              View Work
            </Button>
            <Button
              href={siteConfig.cvUrl}
              variant="secondary"
              external
              className="px-8 py-4 text-base font-display font-semibold uppercase tracking-wider"
            >
              Download CV
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={440}>
          <SocialLinks links={socialLinks} className="mt-10" />
        </FadeIn>
      </div>
    </section>
  );
}
