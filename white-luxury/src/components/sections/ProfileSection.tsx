import Image from "next/image";
import { Download } from "lucide-react";
import { profile, siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { EditorialLabel } from "@/components/ui/SectionHeader";

export function ProfileSection() {
  return (
    <section id="profile" className="scroll-mt-24 bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <FadeIn>
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-serif text-6xl text-charcoal/10 md:text-8xl">
              {profile.number}
            </span>
            <EditorialLabel tone="muted">Profile</EditorialLabel>
          </div>
          <h2 className="max-w-md font-serif text-editorial-sm text-charcoal">
            {profile.heading}
          </h2>
          <p className="mt-8 max-w-sm border-l border-champagne pl-5 text-base leading-relaxed text-warm-grey italic">
            {profile.philosophy}
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:gap-12">
            <div className="space-y-6">
              {profile.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-prose text-base leading-relaxed text-warm-grey md:text-[1.05rem]"
                >
                  {paragraph}
                </p>
              ))}
              <p className="pt-4 font-serif text-xl text-charcoal">
                {profile.signature}
              </p>
              <a
                href={siteConfig.resumeUrl}
                className="group inline-flex items-center gap-3 border-b border-stone pb-1 text-sm text-charcoal transition-colors hover:border-champagne"
              >
                Download résumé
                <Download
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-y-0.5"
                />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-xs lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-deep">
                <Image
                  src="/profile/portrait.png"
                  alt={`${siteConfig.name} portrait`}
                  fill
                  sizes="320px"
                  className="object-cover object-top grayscale"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <p className="font-serif text-2xl text-ivory">
                      {siteConfig.name.split(" ")[0]}
                    </p>
                    <p className="mt-1 text-xs text-ivory/60">
                      {siteConfig.location}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-ivory/50">
                    01
                  </span>
                </div>
              </div>
              <aside className="absolute -bottom-5 -left-4 border border-stone bg-ivory p-4 shadow-[0_18px_40px_-30px_rgba(28,25,23,0.45)] sm:-left-8">
                <p className="label-caps text-warm-grey">Annotation</p>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-charcoal">
                  ENG · CLOUD · CONSULT
                  <br />
                  EST. 2017
                </p>
              </aside>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
