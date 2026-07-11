"use client";

import { useState } from "react";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/GlassCard";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  return (
    <section id="contact" className="px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16">
            <span className="font-display text-6xl font-extrabold leading-none text-white/[0.06] sm:text-7xl">
              05
            </span>
            <h2 className="font-display text-display-lg mt-4 font-bold text-white">
              Let&apos;s{" "}
              <span className="font-serif italic text-gradient">talk</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-zinc-400 sm:text-xl">
              Have a project in mind? Drop a message — I typically respond within
              24 hours.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <GlassCard gradient className="h-full p-8 sm:p-10">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block font-display text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-lg text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block font-display text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-lg text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block font-display text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-lg text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <Button
                  href={`mailto:${siteConfig.email}`}
                  variant="primary"
                  className="w-full py-4 font-display text-base font-semibold uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="flex h-full flex-col justify-between gap-8">
              <GlassCard className="p-8">
                <h3 className="font-display text-2xl font-bold text-white">
                  Email
                </h3>
                <p className="mt-2 text-zinc-500">
                  Tap to copy — or open your mail client.
                </p>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group mt-6 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-left transition-all hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  <span className="text-lg text-zinc-200">{siteConfig.email}</span>
                  <span className="font-display text-sm font-semibold uppercase tracking-wider text-blue-400">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </button>
              </GlassCard>

              <GlassCard className="p-8">
                <h3 className="mb-6 font-display text-2xl font-bold text-white">
                  Connect
                </h3>
                <SocialLinks links={socialLinks} />
              </GlassCard>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 p-8">
                <p className="font-display text-4xl font-bold uppercase leading-tight text-white/10 sm:text-5xl">
                  Remote
                </p>
                <p className="mt-4 text-zinc-400">
                  Based in{" "}
                  <span className="font-display font-semibold text-white">
                    {siteConfig.location}
                  </span>
                  . Available worldwide.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
