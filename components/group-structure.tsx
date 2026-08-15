import Link from "next/link";

import { Monogram } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { company, divisionList } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The org chart, drawn with hairlines rather than a boxed diagram: parent at
 * the top, a drop to a spine, and three companies hanging off it. Stacks into
 * a single indented column on small screens.
 */
export function GroupStructure() {
  return (
    <div className="relative">
      {/* Parent */}
      <Reveal>
        <div className="mx-auto max-w-sm border border-bone/15 bg-roast-950 px-6 py-7 text-center">
          <Monogram className="mx-auto size-7 text-crema" />
          <p className="mt-4 font-sans text-sm font-semibold tracking-[0.2em] uppercase text-bone">
            {company.name}
          </p>
          <p className="slate mt-3 text-ash-deep">Group &middot; Est. {company.founded}</p>
        </div>
      </Reveal>

      {/* Drop from parent */}
      <span
        aria-hidden
        className="mx-auto hidden h-14 w-px bg-bone/15 sm:block"
      />

      {/* Children */}
      <div className="mt-10 grid gap-6 sm:mt-0 sm:grid-cols-3 sm:gap-0">
        {divisionList.map((d, i) => (
          <Reveal key={d.key} delay={0.1 + i * 0.09}>
            <div
              className="relative h-full sm:pt-14"
              style={{ ["--accent" as string]: d.accentVar }}
            >
              {/* Spine + drop, desktop only */}
              <span
                aria-hidden
                className={cn(
                  "absolute top-0 hidden h-px bg-bone/15 sm:block",
                  i === 0 && "left-1/2 w-1/2",
                  i === 1 && "inset-x-0",
                  i === 2 && "left-0 w-1/2",
                )}
              />
              <span
                aria-hidden
                className="absolute top-0 left-1/2 hidden h-14 w-px bg-bone/15 sm:block"
              />

              <Link
                href={d.href}
                className="group flex h-full flex-col border-t-2 border-bone/15 bg-roast-950 px-5 py-7 transition-colors duration-500 hover:border-accent sm:mx-2.5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="slate text-ash-deep transition-colors group-hover:text-accent">
                    {d.index}
                  </span>
                  <span className="slate text-accent">{d.discipline}</span>
                </div>
                <h3 className="display-md mt-6 text-3xl text-bone">
                  {d.shortName}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
                  {d.blurb}
                </p>
                <span
                  aria-hidden
                  className="mt-6 inline-block text-lg text-ash-deep transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5 group-hover:text-accent"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
