/**
 * Two fixed, non-interactive layers that sit above everything:
 * a moving 35mm grain plate and a soft lens vignette. They are what stop the
 * flat black from reading as a default dark theme.
 */
export function GrainOverlay() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-90">
      <div className="absolute -inset-[60%] animate-grain grain-layer opacity-[0.045] mix-blend-soft-light" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 35%, transparent 42%, rgba(4,3,3,0.55) 100%)",
        }}
      />
    </div>
  );
}
