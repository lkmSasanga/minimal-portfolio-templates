import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-ivory px-5 text-center">
      <p className="font-mono text-sm tracking-widest text-champagne">404</p>
      <h1 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-warm-grey">
        The page you are looking for does not exist in this archive.
      </p>
      <Link
        href="/"
        className="mt-8 border border-charcoal px-5 py-3 text-sm tracking-[0.12em] text-charcoal uppercase transition-colors hover:border-champagne hover:bg-champagne/10"
      >
        Return home
      </Link>
    </div>
  );
}
