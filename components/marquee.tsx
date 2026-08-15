import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Infinite ticker. The track is rendered twice and translated -50%, so the
 * loop is seamless; hovering anywhere over the rail pauses it.
 */
export function Marquee({
  children,
  className,
  slow = false,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  slow?: boolean;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "pause-on-hover mask-fade-r relative flex w-full overflow-hidden",
        className,
      )}
    >
      <div
        data-marquee
        className={cn(
          "flex w-max shrink-0 items-center",
          slow ? "animate-marquee-slow" : "animate-marquee",
        )}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export function MarqueeItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-6 pr-6 whitespace-nowrap", className)}>
      {children}
      <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-accent/70" />
    </span>
  );
}
