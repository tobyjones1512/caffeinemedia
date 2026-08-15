import Link from "next/link";

import { Monogram } from "@/components/logo";
import { company, divisionList } from "@/lib/content";

const groupLinks = [
  { label: "The group", href: "/about" },
  { label: "How we work", href: "/about#pipeline" },
  { label: "Principles", href: "/about#principles" },
  { label: "Questions", href: "/about#faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-bone/10 bg-roast-950">
      <div className="sprockets h-3 w-full opacity-40" aria-hidden />

      <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-10 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-bone/10 pb-14 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-8">
          <div>
            <Monogram className="size-8 text-crema" />
            <p className="mt-6 max-w-xs font-display text-2xl leading-[1.15] text-bone">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
              Three companies under one roof: production, post and distribution
              for independent film.
            </p>
          </div>

          <nav aria-label="Companies">
            <h2 className="slate text-ash">Companies</h2>
            <ul className="mt-6 space-y-3.5">
              {divisionList.map((d) => (
                <li key={d.key} style={{ ["--accent" as string]: d.accentVar }}>
                  <Link
                    href={d.href}
                    className="group flex items-center gap-2.5 text-sm text-bone-dim transition-colors hover:text-bone"
                  >
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 bg-accent opacity-70 transition-opacity group-hover:opacity-100"
                    />
                    <span className="link-wipe">{d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Group">
            <h2 className="slate text-ash">Group</h2>
            <ul className="mt-6 space-y-3.5">
              {groupLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone-dim transition-colors hover:text-bone"
                  >
                    <span className="link-wipe">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="slate text-ash">Studio</h2>
            <address className="mt-6 space-y-1 text-sm not-italic text-bone-dim">
              <p>{company.address.line2}</p>
              <p>
                {company.address.city} {company.address.postcode}
              </p>
              <p className="text-ash">{company.address.country}</p>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="link-wipe text-bone transition-colors hover:text-crema"
                >
                  {company.email}
                </a>
              </p>
              <p className="text-ash">{company.phone}</p>
            </div>
          </div>
        </div>

        {/* Oversized wordmark, cropped by the viewport like a title card. */}
        <div className="pointer-events-none select-none py-10" aria-hidden>
          <p className="display-xl w-full text-center text-[clamp(3.2rem,15.5vw,15rem)] leading-[0.8] text-bone/8">
            CAFFEINE MEDIA
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-bone/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="slate text-ash-deep">
            &copy; {company.founded} {company.address.line1} &middot; All rights
            reserved
          </p>
          <p className="slate text-ash-deep">
            {company.address.city} &middot; Est. {company.founded} &middot; 24 fps
          </p>
        </div>
      </div>
    </footer>
  );
}
