import { signatureFacts } from "@/data/site";

export function SignatureStrip() {
  return (
    <section
      aria-label="Professional signature"
      className="border-y border-stone bg-cream"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="scrollbar-hide flex items-center gap-0 overflow-x-auto py-5 md:justify-between md:overflow-visible md:py-6">
          {signatureFacts.map((fact, index) => (
            <div
              key={`${fact.value}-${fact.label}`}
              className="flex shrink-0 items-center"
            >
              <div className="px-5 md:px-0">
                <p className="font-serif text-lg text-charcoal md:text-xl">
                  {fact.value}
                </p>
                <p className="mt-1 label-caps text-warm-grey">{fact.label}</p>
              </div>
              {index < signatureFacts.length - 1 ? (
                <span
                  aria-hidden
                  className="mx-2 h-8 w-px shrink-0 bg-stone md:mx-6 lg:mx-8"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
