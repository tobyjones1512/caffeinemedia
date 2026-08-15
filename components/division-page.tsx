import { CornerFrame } from "@/components/corner-frame";
import { DivisionRow } from "@/components/division-row";
import { ActionAnchor, ActionLink } from "@/components/link-arrow";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Container, Section, SectionHeading, SlateLabel } from "@/components/section";
import { divisionList, type Division } from "@/lib/content";

/**
 * One template, three companies. The wrapper sets `--accent`, so every child
 * that uses text-accent / bg-accent picks up that division's colour.
 */
export function DivisionPage({ division }: { division: Division }) {
  const others = divisionList.filter((d) => d.key !== division.key);

  return (
    <div style={{ ["--accent" as string]: division.accentVar }}>
      {/* Hero ------------------------------------------------------------ */}
      <section className="relative overflow-hidden pt-[72px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="blueprint absolute inset-0 opacity-60" />
          <div
            className="absolute inset-x-0 top-0 h-[60vh]"
            style={{
              background: `radial-gradient(60% 55% at 12% 0%, ${division.accentHex}22, transparent 70%)`,
            }}
          />
        </div>

        <Container className="relative pt-16 pb-16 sm:pt-24 lg:pt-28 lg:pb-24">
          <Reveal y={14}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <SlateLabel>
                Caffeine Media &mdash; {division.index}
              </SlateLabel>
              <span aria-hidden className="hidden h-px w-16 bg-bone/15 sm:block" />
              <SlateLabel tick={false} className="text-accent">
                {division.discipline}
              </SlateLabel>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display-xl mt-9 max-w-[16ch] text-[clamp(2.8rem,9vw,8rem)] text-bone">
              {division.headline.lead}{" "}
              <em className="text-accent italic">{division.headline.emphasis}</em>
              {division.headline.trail}
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-bone/10 pt-9 lg:grid-cols-12 lg:gap-8">
            <Reveal delay={0.14} className="lg:col-span-6">
              <p className="max-w-xl text-base leading-[1.8] text-bone-dim sm:text-[17px]">
                {division.intro}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ActionAnchor
                  href={`mailto:${division.cta.email}?subject=${encodeURIComponent(
                    `${division.name} enquiry`,
                  )}`}
                  variant="solid"
                >
                  {division.cta.action}
                </ActionAnchor>
                <ActionLink href="/contact">All contacts</ActionLink>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-7">
                {division.facts.map((fact) => (
                  <div key={fact.label} className="border-t border-bone/10 pt-4">
                    <dt className="slate text-ash">{fact.label}</dt>
                    <dd className="mt-3 text-[15px] text-bone">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services -------------------------------------------------------- */}
      <Section id="services" className="bg-roast-950">
        <SectionHeading
          label={`${division.shortName} — what we do`}
          title="Capabilities"
          className="mb-16"
          size="md"
          lede={
            <>
              Everything below is run in-house by the {division.shortName} team.
              Anything the other two companies do better, we hand across the
              corridor rather than fake.
            </>
          }
        />

        <Stagger className="grid gap-x-10 gap-y-0 sm:grid-cols-2" gap={0.07}>
          {division.services.map((service, i) => (
            <StaggerItem key={service.title}>
              <div className="group border-t border-bone/10 py-8 sm:py-10">
                <div className="flex items-start gap-5">
                  <span className="slate mt-1.5 text-ash-deep transition-colors duration-400 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-snug text-bone sm:text-[1.7rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3.5 max-w-md text-[15px] leading-[1.8] text-ash">
                      {service.body}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Process --------------------------------------------------------- */}
      <Section id="process">
        <SectionHeading
          label={`${division.shortName} — how it runs`}
          title="Four stages, no"
          emphasis="surprises"
          trail="."
          size="md"
          className="mb-16"
          lede={
            <>
              You always know which stage the project is in, what it costs, and
              what has to be true before it moves to the next one.
            </>
          }
        />

        <Stagger className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" gap={0.09}>
          {division.process.map((stage) => (
            <StaggerItem key={stage.step} className="group relative pt-8 lg:pr-8">
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-full bg-bone/10"
              />
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-[var(--ease-out-expo)] group-hover:w-full"
              />
              <span
                aria-hidden
                className="absolute -top-[3px] left-0 size-1.5 bg-accent"
              />
              <span className="slate text-ash-deep">{stage.step}</span>
              <h3 className="display-md mt-5 text-3xl text-bone sm:text-4xl">
                {stage.title}
              </h3>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-ash">
                {stage.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* CTA -------------------------------------------------------------- */}
      <Section pad="b">
        <Reveal>
          <div className="relative overflow-hidden border border-bone/12 px-6 py-14 sm:px-12 sm:py-18 lg:px-16 lg:py-24">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `radial-gradient(75% 120% at 90% 10%, ${division.accentHex}1f, transparent 62%)`,
              }}
            />
            <CornerFrame className="m-4" />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-7">
                <SlateLabel>{division.name}</SlateLabel>
                <h2 className="display-md mt-6 text-[clamp(2.1rem,5.5vw,4rem)] text-bone">
                  {division.cta.title}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-[1.8] text-bone-dim">
                  {division.cta.body}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <ActionAnchor
                  href={`mailto:${division.cta.email}?subject=${encodeURIComponent(
                    `${division.name} — ${division.cta.action}`,
                  )}`}
                  variant="solid"
                >
                  {division.cta.action}
                </ActionAnchor>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Rest of the group ----------------------------------------------- */}
      <Section pad="b" className="border-t border-bone/10 bg-roast-950 pt-16">
        <SlateLabel className="mb-10">The rest of the group</SlateLabel>
        <div>
          {others.map((d) => (
            <DivisionRow key={d.key} division={d} />
          ))}
        </div>
      </Section>
    </div>
  );
}
