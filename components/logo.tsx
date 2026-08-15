import { cn } from "@/lib/utils";

/**
 * The house mark: a ring that reads as a film reel from a distance and as a
 * coffee bean up close, split by the seam running through the middle.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("size-6", className)}
    >
      <circle
        cx="16"
        cy="16"
        r="13.25"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M16 2.9c-6 4.9 6 8.4 0 13.1s6 8.2 0 13.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({
  className,
  sub,
}: {
  className?: string;
  sub?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Monogram className="size-6 shrink-0 text-accent transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:rotate-180" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[15px] font-semibold tracking-[0.16em] uppercase">
          Caffeine
        </span>
        {sub ? (
          <span className="slate mt-1 text-[9px] text-ash">{sub}</span>
        ) : null}
      </span>
    </span>
  );
}
