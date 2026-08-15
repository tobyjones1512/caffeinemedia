"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { ActionLink } from "@/components/link-arrow";
import { RiseWords } from "@/components/reveal";
import { Timecode } from "@/components/timecode";
import { company, divisionList } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-[72px]">
      {/* Projector wash + fine grid. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blueprint absolute inset-0 opacity-70" />
        <div
          className="absolute inset-x-0 top-0 h-[70vh]"
          style={{
            background:
              "radial-gradient(70% 60% at 50% -10%, rgba(223,174,95,0.14), transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-roast-900 to-transparent" />
      </div>

      {/* Top slate row */}
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 pt-10 sm:px-8 lg:px-12">
        <motion.p {...fadeUp(0.15)} className="slate flex items-center gap-3 text-ash">
          <span aria-hidden className="size-1.5 animate-blink bg-crema" />
          {company.name} &mdash; Est. {company.founded}
        </motion.p>
        <motion.p {...fadeUp(0.22)} className="slate hidden text-ash sm:block">
          <Timecode /> &middot; {company.address.city}
        </motion.p>
      </div>

      {/* Headline */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <h1 className="display-xl max-w-[19ch] text-[clamp(3.1rem,11.5vw,10.5rem)] text-bone">
          <RiseWords text="Films made," delay={0.3} />{" "}
          <RiseWords text="finished, and" delay={0.42} />{" "}
          <RiseWords
            text="found."
            delay={0.6}
            wordClassName="italic text-crema"
          />
        </h1>

        <div className="mt-12 grid gap-10 border-t border-bone/10 pt-9 lg:grid-cols-12 lg:gap-8">
          <motion.p
            {...fadeUp(0.8)}
            className="max-w-xl text-base leading-[1.75] text-bone-dim sm:text-[17px] lg:col-span-6"
          >
            {company.name} is a three-company group for independent film.{" "}
            <strong className="font-normal text-bone">Caffeine Studios</strong>{" "}
            produces it.{" "}
            <strong className="font-normal text-bone">Caffeine Post</strong>{" "}
            finishes it.{" "}
            <strong className="font-normal text-bone">Caffeine Films</strong>{" "}
            gets it in front of an audience.
          </motion.p>

          <motion.div
            {...fadeUp(0.92)}
            className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:col-start-8 lg:justify-end"
          >
            <ActionLink href="/contact" variant="solid">
              Start a project
            </ActionLink>
            <ActionLink href="/about">The group</ActionLink>
          </motion.div>
        </div>
      </div>

      {/* Bottom division rail */}
      <motion.div
        {...fadeUp(1.05)}
        className="relative mx-auto w-full max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-px border-t border-bone/10 sm:grid-cols-3">
          {divisionList.map((d) => (
            <Link
              key={d.key}
              href={d.href}
              style={{ ["--accent" as string]: d.accentVar }}
              className="group flex items-center gap-4 border-b border-bone/10 py-5 sm:border-b-0 sm:py-6"
            >
              <span className="slate text-ash-deep transition-colors group-hover:text-accent">
                {d.index}
              </span>
              <span className="text-sm text-bone-dim transition-colors group-hover:text-bone">
                {d.name}
              </span>
              <span className="slate ml-auto text-ash-deep transition-colors group-hover:text-accent sm:ml-0">
                {d.discipline}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
