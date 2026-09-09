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

## Contact form

The form on `/contact` posts to [Formspree](https://formspree.io). Create a free
form there (or at [Web3Forms](https://web3forms.com)) and replace `FORMSPREE_ID`
near the top of [`src/pages/contact.astro`](src/pages/contact.astro).

## Images

All imagery lives in [`public/images/`](public/images/) as compressed AVIF:

| File                          | Used on                        |
| ----------------------------- | ------------------------------ |
| `shawn-absher-hero.avif`      | Home hero                      |
| `shawn-absher-standing.avif`  | Home "why Shawn" section       |
| `shawn-absher-portrait.avif`  | About hero                     |
| `shawn-absher-office.avif`    | About sidebar, Contact card    |

## Deploy

Static output — deploy `dist/` to Netlify, Vercel, Cloudflare Pages, or any static
host. Set the site's custom domain to `investlifetoday.com`.

## Disclaimer

Shawn Absher is an independent agent authorized to offer Colonial Life & Accident
Insurance Company products. This site is informational and is not a contract;
product availability, benefits, and terms vary by state.
