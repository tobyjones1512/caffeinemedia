import Link from "next/link";

import { CornerFrame } from "@/components/corner-frame";
import { DivisionRow } from "@/components/division-row";
import { HomeHero } from "@/components/home-hero";
import { ActionLink, ArrowLink } from "@/components/link-arrow";
import { Marquee, MarqueeItem } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading, SlateLabel } from "@/components/section";
import {
  FactStrip,
  PipelineSection,
  PrinciplesSection,
} from "@/components/shared-sections";
import { capabilities, company, divisionList } from "@/lib/content";

const facts = [
  { value: "Three", label: "Companies, one roof" },
  { value: "01", label: "Pipeline, end to end" },
  { value: "2 wks", label: "To a real answer" },
  { value: "London", label: "Working UK-wide" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Capability ticker ------------------------------------------------ */}
      <div className="relative border-y border-bone/10 bg-roast-950 py-5">
        <Marquee slow>
          {capabilities.map((c) => (
            <MarqueeItem key={c} className="slate text-bone-dim">
              {c}
            </MarqueeItem>
          ))}
        </Marquee>
      </div>

      {/* Statement -------------------------------------------------------- */}
      <Section id="group">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-8">
            <SlateLabel>The group &mdash; 001</SlateLabel>
            <p className="display-md mt-8 text-[clamp(2.1rem,5vw,4rem)] text-bone">
              A film shouldn&rsquo;t have to change hands three times to reach a
              screen. <em className="text-crema italic">So it doesn&rsquo;t.</em>
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-4 lg:pt-4">
            <p className="text-base leading-[1.8] text-bone-dim sm:text-[17px]">
              {company.positioning}
            </p>
            <p className="mt-6 text-base leading-[1.8] text-ash">
              Each company stands on its own and takes outside work. Together
              they remove the handovers where independent films usually lose
              time, money and control.
            </p>
            <ArrowLink href="/about" className="mt-8">
              How the group works
            </ArrowLink>
          </Reveal>
        </div>
      </Section>

      {/* Divisions -------------------------------------------------------- */}
      <Section id="companies" pad="b">
        <SectionHeading
          label="The companies &mdash; 002"
          title="Three companies,"
          emphasis="one pipeline"
          trail="."
          lede={
            <>
              Hire one of them or all three. Nothing is bundled by force, and no
              division gets to hold a project hostage for another.
            </>
          }
          className="mb-14"
        />

        <div>
          {divisionList.map((division) => (
            <DivisionRow key={division.key} division={division} />
          ))}
        </div>
      </Section>

      <PipelineSection label="How it runs &mdash; 003" className="bg-roast-950" />

      <PrinciplesSection label="Principles &mdash; 004" />

      {/* Facts ------------------------------------------------------------ */}
      <div className="border-y border-bone/10 bg-roast-950">
        <Container>
          <FactStrip facts={facts} />
        </Container>
      </div>

      {/* CTA -------------------------------------------------------------- */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden border border-bone/12 px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-28">
            <div aria-hidden className="blueprint absolute inset-0 opacity-60" />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(80% 120% at 15% 0%, rgba(223,174,95,0.10), transparent 65%)",
              }}
            />
            <CornerFrame className="m-4" />

            <div className="relative max-w-4xl">
              <SlateLabel>Start here</SlateLabel>
              <h2 className="display-xl mt-7 text-[clamp(2.4rem,7vw,5.5rem)] text-bone">
                Bring us a film at{" "}
                <em className="text-crema italic">any stage</em>.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-[1.8] text-bone-dim sm:text-[17px]">
                A script, a rough cut, a finished feature, or a folder of files
                in the wrong codec. Tell us where it is and we will tell you
                exactly what we would do with it.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ActionLink href="/contact" variant="solid">
                  Start a project
                </ActionLink>
                <Link
                  href={`mailto:${company.email}`}
                  className="slate group inline-flex items-center px-1 py-4.5 text-ash transition-colors hover:text-bone"
                >
                  <span className="link-wipe">{company.email}</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
