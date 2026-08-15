# Caffeine Media

Corporate website for **Caffeine Media** and its three operating companies:

| Company              | Discipline       | Route      |
| -------------------- | ---------------- | ---------- |
| **Caffeine Studios** | Production       | `/studios` |
| **Caffeine Post**    | Post-production  | `/post`    |
| **Caffeine Films**   | Distribution     | `/films`   |

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion.

## Fully static

`next.config.ts` sets `output: "export"`, so `npm run build` writes plain
HTML/CSS/JS to **`out/`**. There is no Node server, no API routes, no server
actions and no image optimiser — upload `out/` to any static host (Netlify,
Cloudflare Pages, GitHub Pages, S3, nginx) and it works.

`trailingSlash: true` is deliberate: it emits `out/about/index.html` rather than
`out/about.html`. Without it, the React payload directory (`out/about/`) shadows
the HTML file and any host that resolves directories before extensions returns a
404 for `/about`.

Interactivity is all client-side, so nothing is lost in the export: navigation,
the mobile menu, the FAQ accordion, the contact form and its validation, and the
running timecode were each verified against a plain static file server.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # writes the static site to out/
npm run preview  # serve out/ exactly as a host would
npm run lint
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
push to `main`, at **thecaffeinemediacompany.com**. Pull requests run the same
lint + build + export check but do not deploy.

Two files in `public/` exist purely for Pages and are copied into `out/` by the
build:

- `CNAME` — the custom domain. It has to ship inside the published artifact, so
  it lives in `public/`, not at the repo root.
- `.nojekyll` — stops Pages running Jekyll, which strips directories beginning
  with an underscore. Without it, all of `_next/` disappears and the site loads
  with no CSS or JavaScript.

**One-time setup:** in the repository, go to Settings → Pages and set *Source*
to **GitHub Actions**. The workflow cannot do this itself, and until it is set
the deploy job will fail.

To host somewhere else instead, point the provider at build command
`npm run build` and publish directory `out`.

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
message to the visitor's mail client, so the site needs no backend. The chosen
company decides the destination address and the form's accent colour.

To collect submissions properly, POST the `payload` string from `handleSubmit`
to a form endpoint (Formspree, Basin, Netlify Forms, a Cloudflare Worker) and
drop the `mailto:` hand-off. A third-party endpoint keeps the site static; a
Next.js route handler or server action would not — those require dropping
`output: "export"` and hosting on a Node runtime.

## Before launch

- Replace the placeholder address, phone number and email addresses in
  `lib/content.ts`. The addresses currently read `hello@`, `post@` and
  `submissions@thecaffeinemediacompany.com` — they match the domain but no
  mailbox exists behind them yet.
- Add an Open Graph image (`app/opengraph-image.png`) once brand artwork exists.

`company.url` in `lib/content.ts` is the single source for the canonical origin;
`metadataBase`, the sitemap and robots.txt all read from it.
