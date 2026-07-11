import { projects } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            index="03"
            label="Projects"
            title="Selected Work"
            description="Case studies in scalable architecture, refined UX, and production-grade delivery."
          />
        </FadeIn>

        <div className="space-y-8">
          {featured.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <GlassCard
                gradient
                className="group relative overflow-hidden p-8 sm:p-10 lg:p-12"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

                <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
                  <span className="font-display text-6xl font-extrabold leading-none text-white/[0.06] sm:text-7xl lg:text-8xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                      <h3 className="font-display text-3xl font-bold text-white transition-colors group-hover:text-blue-300 sm:text-4xl md:text-5xl">
                        {project.title}
                      </h3>
                      <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 font-display text-xs font-semibold uppercase tracking-widest text-blue-400">
                        Featured
                      </span>
                    </div>

                    <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-display text-xs font-medium uppercase tracking-wider text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-8">
                      <a
                        href={project.liveUrl}
                        className="font-display text-sm font-semibold uppercase tracking-wider text-blue-400 transition-colors hover:text-blue-300"
                      >
                        Live Demo →
                      </a>
                      <a
                        href={project.repoUrl}
                        className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-600 transition-colors hover:text-zinc-300"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {other.map((project, index) => (
              <FadeIn key={project.title} delay={index * 100}>
                <GlassCard className="group flex h-full flex-col p-8">
                  <span className="font-display text-4xl font-extrabold text-white/[0.06]">
                    {String(featured.length + index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white transition-colors group-hover:text-purple-300 sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2.5 py-1 font-display text-xs uppercase tracking-wider text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-6">
                    <a
                      href={project.liveUrl}
                      className="font-display text-sm font-semibold uppercase tracking-wider text-blue-400 hover:text-blue-300"
                    >
                      Demo →
                    </a>
                    <a
                      href={project.repoUrl}
                      className="font-display text-sm font-semibold uppercase tracking-wider text-zinc-600 hover:text-zinc-300"
                    >
                      Code
                    </a>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
