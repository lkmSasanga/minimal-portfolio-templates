import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-display text-3xl font-bold uppercase tracking-tight text-white">
          {siteConfig.name.split(" ")[0]}
          <span className="text-gradient">.</span>
        </p>
        <div className="text-right">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-zinc-600">
            © {year} — All rights reserved
          </p>
          <p className="mt-1 text-sm text-zinc-700">
            Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
