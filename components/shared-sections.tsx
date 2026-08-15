import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { divisions, pipeline, principles } from "@/lib/content";

const accentByOwner: Record<string, string> = {
  Studios: divisions.studios.accentVar,
  Post: divisions.post.accentVar,
  Films: divisions.films.accentVar,
};

export function PipelineSection({
  label = "How it runs",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Section id="pipeline" className={className}>
      <SectionHeading
        label={label}
        title="Script to screen, without"
        emphasis="the handovers"
        trail="."
        lede={
          <>
            The same four stages every film goes through &mdash; except here the
            people running them share a building, a schedule and a delivery
            spec.
          </>
        }
        className="mb-16"
      />

      <Stagger className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
        {pipeline.map((stage) => (
          <StaggerItem
            key={stage.step}
            className="group relative pt-7 lg:pr-8"
            y={18}
          >
            <span aria-hidden className="absolute top-0 left-0 h-px w-full bg-bone/10" />
            <span
              aria-hidden
              className="absolute top-0 left-0 h-px w-0 transition-[width] duration-700 ease-[var(--ease-out-expo)] group-hover:w-full"
              style={{ backgroundColor: accentByOwner[stage.owner] }}
            />
            <div className="flex items-baseline justify-between gap-4">
              <span className="slate text-ash-deep">{stage.step}</span>
              <span className="slate" style={{ color: accentByOwner[stage.owner] }}>
                {stage.owner}
              </span>
            </div>
            <h3 className="display-md mt-6 text-3xl text-bone sm:text-4xl">
              {stage.title}
            </h3>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-ash">
              {stage.body}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function PrinciplesSection({
  label = "Principles",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Section id="principles" className={className}>
      <SectionHeading
        label={label}
        title="Four things we"
        emphasis="won't trade"
        trail="."
        lede={
          <>
            Written down because they are easy to hold at four projects and hard
            to hold at forty.
          </>
        }
        className="mb-16"
      />

      <Stagger className="grid gap-x-8 gap-y-12 sm:grid-cols-2" gap={0.1}>
        {principles.map((p) => (
          <StaggerItem key={p.n} className="flex gap-6 sm:gap-8">
            <span className="font-display text-2xl leading-none text-crema/60 sm:text-3xl">
              {p.n}
            </span>
            <div className="border-t border-bone/10 pt-1">
              <h3 className="font-display text-2xl leading-snug text-bone sm:text-[1.7rem]">
                {p.title}
              </h3>
              <p className="mt-3.5 max-w-md text-[15px] leading-[1.8] text-ash sm:text-base">
                {p.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/** Small reusable stat rail. */
export function FactStrip({
  facts,
}: {
  facts: { value: string; label: string }[];
}) {
  return (
    <Reveal>
      <dl className="grid grid-cols-2 gap-px lg:grid-cols-4">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`px-1 py-10 sm:py-14 ${
              i % 2 === 1 ? "border-l border-bone/10 pl-6" : ""
            } lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-1`}
          >
            <dt className="slate text-ash">{f.label}</dt>
            <dd className="display-md mt-4 text-[clamp(1.9rem,4vw,3rem)] text-bone">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
