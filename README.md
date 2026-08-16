# Caffeine Media

Website for **Caffeine Media** and its three operating companies:

| Company              | Discipline      | Page           |
| -------------------- | --------------- | -------------- |
| **Caffeine Studios** | Production      | `studios.html` |
| **Caffeine Post**    | Post-production | `post.html`    |
| **Caffeine Films**   | Distribution    | `films.html`   |

## It is just files

No framework, no build step, no npm, no server. The repository *is* the
website — what you see here is exactly what gets served.

```
index.html          Home
about.html          The group
studios.html        Caffeine Studios
post.html           Caffeine Post
films.html          Caffeine Films
contact.html        Contact + enquiry form
404.html            Not found

css/fonts.css       @font-face rules
css/styles.css      Every style on the site
js/main.js          Every behaviour on the site
fonts/*.woff2       The three typefaces, self-hosted
favicon.svg         Tab icon
sitemap.xml         For search engines
robots.txt          For search engines
CNAME               Custom domain for GitHub Pages
.nojekyll           Stops Pages running Jekyll over the files
```

Nothing is loaded from anywhere else — no CDN, no Google Fonts, no analytics,
no trackers. The site makes zero external requests, so it works offline and
behind a firewall.

### Editing it

Open any `.html` file in a text editor and change the words. Open it in a
browser to see the result — double-clicking the file works, no server needed.

- **Wording** lives in the `.html` file for that page.
- **Colours, type, spacing** live at the top of `css/styles.css`, under
  `:root`. Changing `--crema`, `--ember` or `--scope` re-colours a whole
  company across every page.
- **Behaviour** (menu, accordion, form, timecode) lives in `js/main.js`.

The header and footer are repeated in each `.html` file. That is the trade-off
for having no build step: changing a nav link means changing it in all seven
files.

### Previewing a folder

Opening the files directly is fine. If you would rather serve them over `http`
(closer to how the live site behaves), any static server will do:

```bash
python3 -m http.server 8000    # then open http://localhost:8000
```

## Design

- **Colour** — a warm-black "roast" canvas (`#0c0a09`), bone paper text, and one
  accent per company: crema gold `#dfae5f` (house + Films), ember `#d4553a`
  (Studios), scope teal `#4fb3ae` (Post). Sections set `--accent` and everything
  inside inherits it, so one class re-themes a whole page.
- **Type** — Bodoni Moda for display, Archivo for body, IBM Plex Mono for the
  small uppercase "slate" labels.
- **Texture** — a fixed 35mm grain plate and vignette, a fine blueprint grid
  behind the heroes, film sprocket holes above the footer, and a live 24fps
  timecode on the homepage.
- **Motion** — headline words rise out of clipped lines on load, sections fade
  up once as they scroll into view. All of it is disabled under
  `prefers-reduced-motion`, and the page is fully readable with JavaScript off.

## Contact form

`contact.html` validates in the browser and then opens the visitor's mail
client with the message pre-filled, so it needs no backend. Which company you
pick decides the destination address and the form's accent colour.

To collect submissions instead, point the form at a form endpoint (Formspree,
Basin, a Cloudflare Worker) — see the submit handler at the bottom of
`js/main.js`.

## Deployment

`.github/workflows/deploy.yml` copies the files to GitHub Pages on every push
to `main`, at **thecaffeinemediacompany.com**. There is no build — it checks the
pages are all present and publishes them as-is.

Pages must be set to the **GitHub Actions** source under Settings → Pages.

## Before launch

- Replace the placeholder address and phone number, and set up mailboxes for
  `hello@`, `post@` and `submissions@thecaffeinemediacompany.com` — the
  addresses appear across the site but nothing is behind them yet.
- Add a social preview image and reference it with an `og:image` tag.
