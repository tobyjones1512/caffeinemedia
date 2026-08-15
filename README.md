# Caffeine Media

Corporate website for **Caffeine Media** and its three operating companies:

| Company              | Discipline       | Route      |
| -------------------- | ---------------- | ---------- |
| **Caffeine Studios** | Production       | `/studios` |
| **Caffeine Post**    | Post-production  | `/post`    |
| **Caffeine Films**   | Distribution     | `/films`   |

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion.
Every page is statically prerendered.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Editing the content

Almost all copy lives in **`lib/content.ts`** — you should rarely need to open a
component to change wording.

- `company` — name, founding year, email addresses, phone, postal address.
- `divisions` — everything about the three companies: headline, intro, six
  services, four process steps, the facts rail and the call to action. Each
  division also carries its accent colour, which re-themes its whole page.
- `pipeline`, `principles`, `capabilities`, `faq` — the shared homepage and
  group sections.
- `navigation` — nav labels and destinations.

Changing a division's `accentHex` / `accentVar` re-colours its page, its rows on
the homepage, its dot in the footer and its chip in the contact form.

## Design system

Tokens are defined in `app/globals.css` under `@theme`.

- **Colour** — a warm-black "roast" canvas (`#0c0a09`), bone paper text, and one
  accent per company: crema gold `#dfae5f` (house + Films), ember `#d4553a`
  (Studios), scope teal `#4fb3ae` (Post). Sections set `--accent`, and utilities
  like `text-accent` / `bg-accent` inherit it, so one wrapper re-themes a subtree.
- **Type** — Bodoni Moda for display, Archivo for body, IBM Plex Mono for the
  small uppercase "slate" metadata labels.
- **Texture** — a fixed 35mm grain plate and vignette (`components/grain-overlay.tsx`),
  a fine blueprint grid behind heroes, film sprocket holes above the footer, and
  a live 24fps timecode in the homepage header.

Motion is deliberately restrained: headline words rise out of clipped lines on
load, sections fade up once as they enter the viewport, and everything collapses
to a plain fade under `prefers-reduced-motion`.

## Contact form

`components/contact-form.tsx` validates client-side and then hands a formatted
message to the visitor's mail client, so the site works on a static host with no
backend. The chosen company decides the destination address and the form's
accent colour. To collect submissions server-side instead, POST the `payload`
string to your endpoint inside `handleSubmit` and drop the `mailto:` hand-off.

## Before launch

- Replace the placeholder address, phone number and email addresses in
  `lib/content.ts`.
- Point `metadataBase` in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`
  at the real domain.
- Add an Open Graph image (`app/opengraph-image.png`) once brand artwork exists.
