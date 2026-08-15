import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Mono text link with an arrow that steps forward on hover. */
export function ArrowLink({
  children,
  className,
  ...props
}: ComponentProps<typeof Link> & { children: ReactNode }) {
  return (
    <Link
      {...props}
      className={cn(
        "slate group inline-flex items-center gap-3 text-bone transition-colors duration-300 hover:text-accent",
        className,
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100" />
      </span>
      <span
        aria-hidden
        className="inline-block translate-x-0 text-[13px] leading-none transition-transform duration-400 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5"
      >
        &rarr;
      </span>
    </Link>
  );
}

/**
 * Boxed action. `solid` is the accent-filled primary; `ghost` is the outlined
 * version that fills on hover.
 */
export function ActionLink({
  children,
  className,
  variant = "ghost",
  ...props
}: ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <Link
      {...props}
      className={cn(
        "slate group relative inline-flex items-center justify-center gap-3 overflow-hidden px-7 py-4.5 transition-colors duration-400",
        variant === "solid"
          ? "bg-accent text-roast-950 hover:bg-bone"
          : "border border-bone/25 text-bone hover:border-accent hover:text-roast-950",
        className,
      )}
    >
      {variant === "ghost" ? (
        <span
          aria-hidden
          className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
        />
      ) : null}
      <span className="relative">{children}</span>
      <span
        aria-hidden
        className="relative text-[13px] leading-none transition-transform duration-400 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5"
      >
        &rarr;
      </span>
    </Link>
  );
}

/** Same treatment, for mailto / external destinations. */
export function ActionAnchor({
  children,
  className,
  variant = "ghost",
  ...props
}: ComponentProps<"a"> & { children: ReactNode; variant?: "solid" | "ghost" }) {
  return (
    <a
      {...props}
      className={cn(
        "slate group relative inline-flex items-center justify-center gap-3 overflow-hidden px-7 py-4.5 transition-colors duration-400",
        variant === "solid"
          ? "bg-accent text-roast-950 hover:bg-bone"
          : "border border-bone/25 text-bone hover:border-accent hover:text-roast-950",
        className,
      )}
    >
      {variant === "ghost" ? (
        <span
          aria-hidden
          className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
        />
      ) : null}
      <span className="relative">{children}</span>
      <span
        aria-hidden
        className="relative text-[13px] leading-none transition-transform duration-400 ease-[var(--ease-out-expo)] group-hover:translate-x-1.5"
      >
        &rarr;
      </span>
    </a>
  );
}
