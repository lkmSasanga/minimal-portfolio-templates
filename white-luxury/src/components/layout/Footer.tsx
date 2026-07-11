import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-stone bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8 md:py-16">
        <div className="space-y-4">
          <Link
            href="/"
            className="font-serif text-3xl text-charcoal transition-colors hover:text-champagne"
          >
            {siteConfig.monogram}
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-warm-grey">
            {siteConfig.closingPhrase}
          </p>
          <p className="font-mono text-[11px] tracking-[0.16em] text-warm-grey-light uppercase">
            Designed and engineered with intention
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-12">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-warm-grey transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-warm-grey">© {year} {siteConfig.name}</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-charcoal transition-colors hover:text-champagne"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
