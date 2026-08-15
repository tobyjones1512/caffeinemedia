import Link from "next/link";

import type { Division } from "@/lib/content";

/**
 * A division presented as a full-width editorial row rather than a card in a
 * grid: index, name, discipline, one line of copy. The whole row is the link,
 * and it takes on that company's accent colour on hover.
 */
export function DivisionRow({ division }: { division: Division }) {
  return (
    <Link
      href={division.href}
      style={{ ["--accent" as string]: division.accentVar }}
      className="group relative block border-b border-bone/10 first:border-t"
    >
      {/* Accent wash + growing left rule on hover. */}
      <span
        aria-hidden
        className="absolute inset-0 bg-accent opacity-0 transition-opacity duration-600 ease-[var(--ease-out-expo)] group-hover:opacity-[0.055]"
      />
      <span
        aria-hidden
        className="absolute top-0 bottom-0 left-0 w-px origin-bottom scale-y-0 bg-accent transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:origin-top group-hover:scale-y-100"
      />

      <div className="relative grid grid-cols-1 gap-y-5 px-1 py-9 sm:px-4 lg:grid-cols-12 lg:items-center lg:gap-6 lg:py-12">
        <div className="flex items-center gap-4 lg:col-span-1">
          <span className="slate text-ash-deep transition-colors duration-400 group-hover:text-accent">
            {division.index}
          </span>
          <span
            aria-hidden
            className="h-px flex-1 bg-bone/10 lg:hidden"
          />
        </div>

        <h3 className="display-md text-[clamp(2.1rem,5.6vw,3.5rem)] text-bone transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-2 lg:col-span-4">
          {division.shortName}
          <span className="sr-only"> — {division.name}</span>
        </h3>

        <p className="slate text-ash transition-colors duration-400 group-hover:text-accent lg:col-span-2">
          {division.discipline}
        </p>

        <p className="max-w-lg text-[15px] leading-relaxed text-bone-dim lg:col-span-4 lg:text-base">
          {division.blurb}
        </p>

        <span
          aria-hidden
          className="text-xl text-ash-deep transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 group-hover:text-accent lg:col-span-1 lg:justify-self-end"
        >
          &rarr;
        </span>
      </div>
    </Link>
  );
}
