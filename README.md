# Takeru Ota — Portfolio

Personal portfolio site for Takeru Ota, Software Engineer at Sony Honda Mobility.

**Live:** https://takeru-ota.vercel.app &nbsp;·&nbsp; **JA** `/` &nbsp;·&nbsp; **EN** `/en/`

---

## Features

- **Bilingual** — Japanese (`/`) and English (`/en/`) with auto-redirect based on `navigator.language`
- **Dark / Light mode** — follows OS `prefers-color-scheme`; manual toggle persists for the session
- **Infinite photo carousel** — dual-column CSS-only scroll animation in the Hero section
- **Particle background** — theme-aware particles.js, re-initialized on theme change
- **Scroll animations** — `IntersectionObserver`-based fade-in for section content
- **Responsive** — mobile hamburger menu with frosted-glass backdrop

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
├── public/                  # Static assets (photos, favicon)
├── src/
│   ├── components/
│   │   ├── sections/        # Hero, About, Skills, Works, Research, Footer
│   │   ├── Footer.astro
│   │   └── Navigation.astro
│   ├── i18n/
│   │   └── index.ts         # All UI strings (ja / en)
│   ├── layouts/
│   │   └── BaseLayout.astro # HTML shell, theme init, particles
│   ├── pages/
│   │   ├── index.astro      # JA route (/)
│   │   └── en/index.astro   # EN route (/en/)
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

Photos for the Hero carousel are declared in `src/components/sections/Hero.astro` and served from `public/`.
