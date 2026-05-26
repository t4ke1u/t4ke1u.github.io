# Takeru Ota — Portfolio

Personal portfolio site for Takeru Ota, Software Engineer at Sony Honda Mobility.

**Live:** https://uraket.com &nbsp;·&nbsp; **JA** `/` &nbsp;·&nbsp; **EN** `/en/`

---

## Features

- **Bilingual** — Japanese (`/`) and English (`/en/`) with auto-redirect based on `navigator.language`
- **Dark / Light mode** — follows OS `prefers-color-scheme`; manual toggle persists for the session
- **Infinite photo carousel** — dual-column CSS-only scroll animation in the Hero section
- **Particle background** — theme-aware particles.js, re-initialized on theme change
- **Scroll animations** — `IntersectionObserver`-based fade-in for section content
- **Responsive** — mobile hamburger menu with frosted-glass backdrop
- **Works modals** — detail modals for Works 01 and 03 with diagrams and feature lists; full detail pages at `/works/01`, `/works/03`, `/works/05`
- **Publications page** — full paper list at `/research/publications` (JA/EN)

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 6.x (SSG) |
| Styling | Scoped CSS + CSS custom properties |
| i18n | Hand-rolled `ui` object (`src/i18n/index.ts`) |
| Particles | [particles.js](https://vincentgarreau.com/particles.js/) |
| Fonts | Inter (Google Fonts) |
| Deployment | Vercel |

## Project Structure

```
/
├── public/                  # Static assets (favicon, CNAME)
├── src/
│   ├── assets/images/       # Hero carousel photos, works diagrams
│   ├── components/
│   │   ├── sections/        # Hero, About, Skills, Works, Research, Contact, Footer
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── PublicationsDetail.astro  # Full publications list page
│   │   └── WorkDetail.astro          # Works detail page layout
│   ├── i18n/
│   │   └── index.ts         # All UI strings (ja / en)
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, theme init, particles
│   ├── pages/
│   │   ├── index.astro      # JA route (/)
│   │   ├── en/index.astro   # EN route (/en/)
│   │   ├── works/           # /works/01, /works/03, /works/05
│   │   ├── en/works/        # /en/works/01, /en/works/03, /en/works/05
│   │   ├── research/        # /research/publications
│   │   └── en/research/     # /en/research/publications
│   └── styles/
│       └── global.css       # Design tokens, typography, animations
└── package.json
```

## Getting Started

```sh
npm install
npm run dev       # http://localhost:4321
```

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build locally |

## Adding Content

All text content lives in `src/i18n/index.ts`. Each top-level key (`hero`, `about`, `skills`, `works`, `research`) maps to a section component. Both `ja` and `en` objects must be kept in sync.

Photos for the Hero carousel are declared in `src/components/sections/Hero.astro` and stored in `src/assets/images/`. Astro's `<Image />` component optimizes them to WebP at build time.
