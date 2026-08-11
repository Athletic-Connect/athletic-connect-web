# Athletic Connect — Marketing Website

The public marketing site for **Athletic Connect** — one platform for running
clubs, tournaments, and teams. _Less admin. More game._

Built with [Astro](https://astro.build/) (static output) and deployed on
Netlify. This repo is intentionally separate from the product app so marketing
can ship on its own cadence.

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
```

Other scripts:

```bash
npm run build      # production build to ./dist
npm run preview    # serve the built site locally
npm run check      # Astro type + template checks
```

Requires **Node 20+** (Netlify builds on Node 22).

## Project structure

```
public/
  brand/           logo-wide.png, logo-stacked.png, og-image.png
  favicon.png      AC monogram
src/
  styles/
    tokens.css     ← brand tokens (orange / ink / spacing) — the source of truth
    global.css     reset, base elements, shared primitives (buttons, eyebrows)
  data/
    site.ts        name, nav links, contact email
    features.ts    feature copy, grouped (toolbox / essentials / commerce)
    pricing.ts     pricing points and plan cards
  components/      Nav, Footer, Hero, Consolidation, FeatureCard, FeaturesHome,
                   FeatureGroup, ValueBand, PricingTeaser, DemoCTA
  layouts/
    Base.astro     <head>, SEO/OG meta, Nav + Footer wrapper
  pages/
    index.astro    Home
    features.astro  Features (Coach's Toolbox leads; team store is supporting)
    pricing.astro   Pricing
```

### Changing the brand look

All color, type, and spacing live in `src/styles/tokens.css`. Change a value
there (for example `--orange`) and it updates across every page and component.

### Editing content

Copy for features and pricing lives in `src/data/*.ts`, not inside the
components — edit those files to change wording without touching layout.

## Deploying to Netlify

`netlify.toml` is already configured (build: `npm run build`, publish: `dist`).

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
   Netlify reads `netlify.toml`, so no manual build settings are needed.
3. Point your domain at the Netlify site and set the production URL in
   `astro.config.mjs` (`site:`) if it differs from
   `https://www.athleticconnectapp.com`.

The demo form uses **Netlify Forms** (`data-netlify="true"`) and starts
collecting submissions automatically once deployed — no backend required.
