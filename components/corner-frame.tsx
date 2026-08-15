import { cn } from "@/lib/utils";

/** Camera framing marks — four corner ticks around a block of content. */
export function CornerFrame({ className }: { className?: string }) {
  const corner = "absolute size-4 border-bone/30";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      <span className={cn(corner, "top-0 left-0 border-t border-l")} />
      <span className={cn(corner, "top-0 right-0 border-t border-r")} />
      <span className={cn(corner, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(corner, "right-0 bottom-0 border-r border-b")} />
    </div>
  );
}
