import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Container, Section, SlateLabel } from "@/components/section";
import { company, divisionList } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Caffeine Media, Caffeine Studios, Caffeine Post or Caffeine Films. Submissions are open and every enquiry gets an answer within two weeks.",
};

const desks = [
  {
    label: "General & group",
    email: company.email,
    note: "Anything that is not obviously for one of the three companies.",
  },
  {
    label: "Submissions",
    email: company.submissionsEmail,
    note: "Scripts for Caffeine Studios and finished films for Caffeine Films.",
  },
  {
    label: "Post & quotes",
    email: company.postEmail,
    note: "Editorial, grade, sound, mastering, conversion and delivery jobs.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[72px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="blueprint absolute inset-0 opacity-60" />
          <div
            className="absolute inset-x-0 top-0 h-[50vh]"
            style={{
              background:
                "radial-gradient(50% 55% at 20% 0%, rgba(223,174,95,0.12), transparent 70%)",
            }}
          />
        </div>

        <Container className="relative pt-16 pb-14 sm:pt-24 lg:pt-28">
          <Reveal y={14}>
            <SlateLabel>Contact &mdash; {company.address.city}</SlateLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display-xl mt-9 max-w-[14ch] text-[clamp(2.8rem,9vw,7.5rem)] text-bone">
              Tell us where the film{" "}
              <em className="text-crema italic">is</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-xl border-t border-bone/10 pt-8 text-base leading-[1.8] text-bone-dim sm:text-[17px]">
              One form, three companies. Point it at whichever one you think you
              need &mdash; if you pick wrong, we will pass it along ourselves
              rather than send you back to the start.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section pad="b" className="pt-6 sm:pt-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10">
              <div>
                <h2 className="slate text-ash">Direct</h2>
                <ul className="mt-6 space-y-7">
                  {desks.map((desk) => (
                    <li key={desk.email} className="border-t border-bone/10 pt-5">
                      <p className="slate text-ash">{desk.label}</p>
                      <a
                        href={`mailto:${desk.email}`}
                        className="link-wipe mt-3 inline-block text-[15px] text-bone transition-colors hover:text-crema"
                      >
                        {desk.email}
                      </a>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-ash-deep">
                        {desk.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="slate text-ash">Studio</h2>
                <address className="mt-6 space-y-1 border-t border-bone/10 pt-5 text-[15px] not-italic text-bone-dim">
                  <p className="text-bone">{company.address.line1}</p>
                  <p>{company.address.line2}</p>
                  <p>
                    {company.address.city} {company.address.postcode}
                  </p>
                  <p className="text-ash">{company.address.country}</p>
                  <p className="pt-3 text-ash">{company.phone}</p>
                </address>
              </div>

              <div>
                <h2 className="slate text-ash">The companies</h2>
                <ul className="mt-6 space-y-3.5 border-t border-bone/10 pt-5">
                  {divisionList.map((d) => (
                    <li
                      key={d.key}
                      style={{ ["--accent" as string]: d.accentVar }}
                      className="flex items-center gap-3 text-[15px] text-bone-dim"
                    >
                      <span aria-hidden className="size-1.5 shrink-0 bg-accent" />
                      {d.name}
                      <span className="slate ml-auto text-ash-deep">
                        {d.discipline}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
