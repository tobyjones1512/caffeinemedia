import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

/**
 * Padding is a prop rather than a className override: `py-*` and `pt-*` live in
 * different breakpoint layers, so overriding one from the outside loses to the
 * `lg:` default further down the stylesheet.
 */
const SECTION_PAD = {
  y: "pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36",
  t: "pt-20 sm:pt-28 lg:pt-36",
  b: "pb-20 sm:pb-28 lg:pb-36",
  none: "",
} as const;

export function Section({
  children,
  className,
  id,
  bare = false,
  pad = "y",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Skip the container when a section needs to bleed edge to edge. */
  bare?: boolean;
  pad?: keyof typeof SECTION_PAD;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24", SECTION_PAD[pad], className)}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}

/** Mono metadata label with the little accent tick in front of it. */
export function SlateLabel({
  children,
  className,
  tick = true,
}: {
  children: ReactNode;
  className?: string;
  tick?: boolean;
}) {
  return (
    <span className={cn("slate inline-flex items-center gap-2.5 text-ash", className)}>
      {tick ? <span aria-hidden className="size-1.5 bg-accent" /> : null}
      {children}
    </span>
  );
}

/**
 * Editorial section head: the label and the headline sit left, an optional
 * lede hangs in a narrower column on the right.
 */
export function SectionHeading({
  label,
  title,
  emphasis,
  trail,
  lede,
  className,
  size = "lg",
}: {
  label: string;
  title: string;
  emphasis?: string;
  trail?: string;
  lede?: ReactNode;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <div
      className={cn(
        "grid gap-8 border-t border-bone/10 pt-8 lg:grid-cols-12 lg:gap-12",
        className,
      )}
    >
      <Reveal className="lg:col-span-7">
        <SlateLabel>{label}</SlateLabel>
        <h2
          className={cn(
            "display-md mt-6 text-bone",
            size === "lg"
              ? "text-[clamp(2.4rem,6vw,4.5rem)]"
              : "text-[clamp(2rem,4.6vw,3.25rem)]",
          )}
        >
          {title}
          {emphasis ? (
            <>
              {" "}
              <em className="text-accent italic">{emphasis}</em>
            </>
          ) : null}
          {trail}
        </h2>
      </Reveal>

      {lede ? (
        <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
          <div className="max-w-md text-base leading-[1.75] text-bone-dim sm:text-[17px]">
            {lede}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
