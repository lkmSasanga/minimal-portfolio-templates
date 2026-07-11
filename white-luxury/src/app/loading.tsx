export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-ivory">
      <div className="flex flex-col items-center gap-4">
        <div className="h-px w-16 origin-center animate-pulse bg-champagne" />
        <p className="font-mono text-[11px] tracking-[0.2em] text-warm-grey uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
