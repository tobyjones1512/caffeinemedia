import type { Metadata } from "next";

import { CornerFrame } from "@/components/corner-frame";
import { FaqAccordion } from "@/components/faq-accordion";
import { GroupStructure } from "@/components/group-structure";
import { ActionLink } from "@/components/link-arrow";
import { Reveal } from "@/components/reveal";
import { Container, Section, SectionHeading, SlateLabel } from "@/components/section";
import {
  FactStrip,
  PipelineSection,
  PrinciplesSection,
} from "@/components/shared-sections";
import { company, faq } from "@/lib/content";

export const metadata: Metadata = {
  title: "The group",
  description:
    "Caffeine Media is a three-company group for independent film: Caffeine Studios produces, Caffeine Post finishes, Caffeine Films releases.",
};

const facts = [
  { value: "2026", label: "Founded" },
  { value: "Three", label: "Operating companies" },
  { value: "London", label: "Head office" },
  { value: "Open", label: "To unsolicited work" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero -------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-[72px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="blueprint absolute inset-0 opacity-60" />
          <div
            className="absolute inset-x-0 top-0 h-[55vh]"
            style={{
              background:
                "radial-gradient(55% 55% at 50% 0%, rgba(223,174,95,0.13), transparent 70%)",
            }}
          />
        </div>

        <Container className="relative pt-16 pb-16 sm:pt-24 lg:pt-28 lg:pb-24">
          <Reveal y={14}>
            <SlateLabel>The group &mdash; Est. {company.founded}</SlateLabel>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display-xl mt-9 max-w-[15ch] text-[clamp(2.8rem,9vw,8rem)] text-bone">
              Built so a film never has to leave the{" "}
              <em className="text-crema italic">building</em>.
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-bone/10 pt-9 lg:grid-cols-12 lg:gap-8">
            <Reveal delay={0.14} className="lg:col-span-6">
              <p className="max-w-xl text-base leading-[1.8] text-bone-dim sm:text-[17px]">
                {company.positioning}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8">
              <p className="max-w-md text-base leading-[1.8] text-ash">
                Each company trades on its own account and takes outside work.
                The group only exists to make the whole chain available to a
                filmmaker who wants it &mdash; never to force them through it.
              </p>
              <ActionLink href="/contact" className="mt-8">
                Talk to us
              </ActionLink>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Structure --------------------------------------------------------- */}
      <Section id="structure" className="border-t border-bone/10 bg-roast-950">
        <SectionHeading
          label="Structure"
          title="One group,"
          emphasis="three companies"
          trail="."
          size="md"
          className="mb-16"
          lede={
            <>
              Caffeine Media is the parent. It does not make films itself; it
              owns and backs the three companies that do.
            </>
          }
        />
        <GroupStructure />
      </Section>

      {/* Story ------------------------------------------------------------- */}
      <Section id="story">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <SlateLabel>Why it exists</SlateLabel>
            <h2 className="display-md mt-7 text-[clamp(1.9rem,3.6vw,2.8rem)] text-bone">
              The structure was the problem.
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-base leading-[1.9] text-bone-dim sm:text-[17px]">
              <p className="text-lg leading-[1.75] text-bone sm:text-xl">
                An independent film changes hands at least three times before
                anyone sees it, and it loses something at every handover.
              </p>
              <p>
                A producer finishes a shoot and hands the rushes to a post house
                that has never read the script. The post house delivers a master
                built to a spec the eventual distributor does not use. The
                distributor inherits a film it had no say in positioning, six
                months after the moment it could have been positioned properly.
              </p>
              <p>
                None of those companies are doing anything wrong. They are each
                doing their job, in the order the industry hands it to them.
              </p>
              <p className="text-bone">
                So we changed the order. Caffeine Studios produces. Caffeine
                Post finishes. Caffeine Films releases. Separate companies,
                separate books, separate clients &mdash; but when a project does
                run the whole way through, it runs through people who share a
                corridor, a schedule and a delivery spec agreed on day one.
              </p>
              <p>
                That is the entire idea. Everything else here is detail.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <PipelineSection label="How it runs" className="bg-roast-950" />

      <PrinciplesSection label="Principles" />

      {/* Facts ------------------------------------------------------------- */}
      <div className="border-y border-bone/10 bg-roast-950">
        <Container>
          <FactStrip facts={facts} />
        </Container>
      </div>

      {/* FAQ --------------------------------------------------------------- */}
      <Section id="faq">
        <SectionHeading
          label="Questions"
          title="The things people"
          emphasis="actually ask"
          trail="."
          size="md"
          className="mb-14"
          lede={
            <>
              If yours is not here, ask it directly &mdash; the same person who
              reads the enquiry answers it.
            </>
          }
        />
        <FaqAccordion items={faq} />
      </Section>

      {/* CTA --------------------------------------------------------------- */}
      <Section pad="b">
        <Reveal>
          <div className="relative overflow-hidden border border-bone/12 px-6 py-14 sm:px-12 sm:py-18 lg:px-16 lg:py-24">
            <div aria-hidden className="blueprint absolute inset-0 opacity-50" />
            <CornerFrame className="m-4" />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-7">
                <SlateLabel>Next step</SlateLabel>
                <h2 className="display-md mt-6 text-[clamp(2.1rem,5.5vw,4rem)] text-bone">
                  Tell us where the film is.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-[1.8] text-bone-dim">
                  Script, shoot, edit, finished, or already released and stuck.
                  Every stage has a door.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <ActionLink href="/contact" variant="solid">
                  Start a project
                </ActionLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
