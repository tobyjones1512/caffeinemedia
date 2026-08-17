import { cn } from "@/lib/utils";

/**
 * The custom Caffeine Media logo provided by the client.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Caffeine Media Logo"
      className={cn("size-6 object-contain", className)}
    />
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
      <Monogram className="size-6 shrink-0 transition-transform duration-700 ease-[var(--ease-out-expo)]" />
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
