"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="#"
          className="group font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl"
        >
          <span className="text-gradient">{siteConfig.name.split(" ")[0]}</span>
          <span className="text-zinc-600">.</span>
        </Link>

        <ul className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-4 py-2 font-display text-sm font-medium uppercase tracking-wider text-zinc-500 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            href="#contact"
            variant="primary"
            className="px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider"
          >
            Hire Me
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-full bg-current transition-all duration-300",
                isOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-current transition-all duration-300",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-current transition-all duration-300",
                isOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-8 py-4 font-display text-4xl font-bold uppercase tracking-tight text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-8">
            <Button
              href="#contact"
              variant="primary"
              className="px-10 py-4 font-display text-base font-semibold uppercase tracking-wider"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
