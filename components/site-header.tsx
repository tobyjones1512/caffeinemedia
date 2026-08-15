"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";

import { Wordmark } from "@/components/logo";
import { company, divisionList, divisions } from "@/lib/content";
import { cn } from "@/lib/utils";

const links = [
  { label: "Group", href: "/about", accent: "var(--color-bone)" },
  { label: "Studios", href: divisions.studios.href, accent: divisions.studios.accentVar },
  { label: "Post", href: divisions.post.href, accent: divisions.post.accentVar },
  { label: "Films", href: divisions.films.href, accent: divisions.films.accentVar },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the route changes, adjusted during render rather than
  // in an effect so the overlay never paints for a frame on the new page.
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-100 transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled || open
            ? "border-b border-bone/10 bg-roast-950/85 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-crema/70"
        />

        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group -m-2 p-2 text-bone transition-opacity hover:opacity-80"
            aria-label={`${company.name} — home`}
          >
            <Wordmark sub="Media Group" />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "slate group relative py-2 text-bone-dim transition-colors duration-300",
                    active && "text-bone",
                  )}
                  style={{ ["--accent" as string]: link.accent }}
                >
                  <span className="transition-colors duration-300 group-hover:text-accent">
                    {link.label}
                  </span>
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:origin-left group-hover:scale-x-100",
                      active && "origin-left scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="slate hidden items-center gap-2.5 border border-bone/25 px-5 py-3 text-bone transition-colors duration-400 hover:border-crema hover:bg-crema hover:text-roast-950 sm:inline-flex"
            >
              Start a project
              <span aria-hidden className="text-[13px] leading-none">
                &rarr;
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 flex size-11 items-center justify-center lg:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-full bg-bone transition-all duration-400 ease-[var(--ease-out-expo)]",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px bg-bone transition-all duration-400 ease-[var(--ease-out-expo)]",
                    open ? "top-1.5 w-full -rotate-45" : "top-3 w-2/3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-99 flex flex-col bg-roast-950 pt-[72px] lg:hidden"
          >
            <nav
              className="flex flex-1 flex-col justify-center gap-1 px-5 sm:px-8"
              aria-label="Mobile"
            >
              <MobileLink href="/about" index="00" label="Group" note="Who we are" />
              {divisionList.map((d) => (
                <MobileLink
                  key={d.key}
                  href={d.href}
                  index={d.index}
                  label={d.shortName}
                  note={d.discipline}
                  accent={d.accentVar}
                />
              ))}
              <MobileLink href="/contact" index="04" label="Contact" note="Start here" />
            </nav>

            <div className="flex flex-col gap-2 border-t border-bone/10 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <a href={`mailto:${company.email}`} className="slate text-[10px] text-ash">
                {company.email}
              </a>
              <span className="slate text-[10px] text-ash-deep">
                {company.address.city} &middot; Est. {company.founded}
              </span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function MobileLink({
  href,
  index,
  label,
  note,
  accent = "var(--color-crema)",
}: {
  href: string;
  index: string;
  label: string;
  note: string;
  accent?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08 + Number(index) * 0.05 }}
      style={{ ["--accent" as string]: accent }}
    >
      <Link
        href={href}
        className="group flex items-baseline gap-4 border-b border-bone/10 py-5"
      >
        <span className="slate w-8 shrink-0 text-ash-deep transition-colors group-hover:text-accent">
          {index}
        </span>
        <span className="display-md text-[clamp(2.25rem,10vw,4rem)] transition-colors duration-300 group-hover:text-accent">
          {label}
        </span>
        <span className="slate ml-auto shrink-0 pl-4 text-[9px] whitespace-nowrap text-ash">
          {note}
        </span>
      </Link>
    </motion.div>
  );
}
