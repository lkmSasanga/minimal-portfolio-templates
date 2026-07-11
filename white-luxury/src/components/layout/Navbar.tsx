"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useSafeReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "nav-glass border-b border-stone/70"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-8"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-charcoal transition-colors hover:text-champagne md:text-2xl"
            aria-label={`${siteConfig.name} home`}
          >
            {siteConfig.monogram}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm text-warm-grey transition-colors hover:text-charcoal"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <span className="flex items-center gap-2 text-xs text-warm-grey">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-champagne" />
              </span>
              {siteConfig.availabilityShort}
            </span>
            <a
              href="#contact"
              className="border border-charcoal/80 px-4 py-2 text-xs tracking-[0.14em] text-charcoal uppercase transition-colors duration-500 hover:border-champagne hover:bg-champagne/10 hover:text-charcoal"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-charcoal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-24">
              <ul className="flex flex-1 flex-col gap-2">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-5 border-b border-stone/70 py-5"
                    >
                      <span className="font-mono text-xs tracking-widest text-champagne">
                        {link.number}
                      </span>
                      <span className="font-serif text-4xl text-charcoal">{link.label}</span>
                      <span className="ml-auto font-mono text-[10px] text-warm-grey-light">
                        0{index + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 border-t border-stone pt-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block font-serif text-xl text-charcoal"
                >
                  {siteConfig.email}
                </a>
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
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
