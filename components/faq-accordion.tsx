"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-bone/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-bone/10">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-start gap-6 py-7 text-left"
              >
                <span className="slate mt-2 shrink-0 text-ash-deep transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-xl leading-snug text-bone transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="relative mt-2.5 block size-3.5 shrink-0 text-accent"
                >
                  <span className="absolute top-1/2 left-0 block h-px w-full -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute top-0 left-1/2 block h-full w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-[var(--ease-out-expo)] ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-8 pl-[calc(2rem+1.5rem)] text-[15px] leading-[1.8] text-bone-dim sm:text-base">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
