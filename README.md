# Shawn Absher Insurance

Marketing site for **Shawn Absher**, an independent Colonial Life benefits
counselor serving Las Vegas and nationwide. Built with [Astro](https://astro.build)
and [Tailwind CSS](https://tailwindcss.com).

**Live domain:** https://investlifetoday.com
**Contact:** shawn@investlifetoday.com

## Pages

| Route        | Purpose                                                             |
| ------------ | ------------------------------------------------------------------- |
| `/`          | Hero, trust stats, why Shawn, coverage grid, process, testimonials |
| `/coverage`  | Plain-English guide to all seven Colonial Life product lines        |
| `/about`     | Shawn's background and approach                                     |
| `/contact`   | Contact form + direct details                                       |

Coverage content is data-driven from [`src/data/products.ts`](src/data/products.ts) —
edit that one file to change product copy everywhere it appears.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # serve the production build
```

## Contact

No form — the site drives everyone to email **shawn@investlifetoday.com**
(`mailto:` links on the CTA band and the `/contact` page).

## Images

All imagery lives in [`public/images/`](public/images/) as compressed AVIF:

| File                          | Used on                        |
| ----------------------------- | ------------------------------ |
| `shawn-absher-hero.avif`      | Home hero                      |
| `shawn-absher-standing.avif`  | Home "why Shawn" section       |
| `shawn-absher-portrait.avif`  | About hero                     |
| `shawn-absher-office.avif`    | About sidebar, Contact card    |

## Deploy — Cloudflare Pages

Static output. [`wrangler.jsonc`](wrangler.jsonc) sets `pages_build_output_dir` to
`./dist`, and [`public/_headers`](public/_headers) adds caching + security headers.

**Option A — Git integration (recommended):**
Cloudflare dashboard → Workers & Pages → Create → Pages → connect
`github.com/rsa10825/insurance`, then:

| Setting              | Value           |
| -------------------- | --------------- |
| Build command        | `npm run build` |
| Build output directory | `dist`        |
| Framework preset     | Astro           |

Every push to `main` deploys automatically.

**Option B — CLI:**

```bash
npm run deploy        # astro build + wrangler pages deploy ./dist
```

(`npx wrangler login` once first. Wrangler is not a project dependency — it runs
via `npx` to keep `npm audit` clean.)

**Custom domain:** in the Pages project → Custom domains → add
`investlifetoday.com` (and `www`). Cloudflare provisions the certificate.

## Disclaimer

Shawn Absher is an independent agent authorized to offer Colonial Life & Accident
Insurance Company products. This site is informational and is not a contract;
product availability, benefits, and terms vary by state.
