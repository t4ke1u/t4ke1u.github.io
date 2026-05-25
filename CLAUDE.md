# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → ./dist/
npm run preview   # preview the production build locally
```

No test runner or linter is configured beyond Astro's built-in TypeScript checking.

## Architecture

### Routing and i18n

Two static routes are generated at build time:
- `/` → `src/pages/index.astro` (Japanese)
- `/en/` → `src/pages/en/index.astro` (English)

**All UI strings live in `src/i18n/index.ts`** as a single `ui` object typed `as const`. Every component receives a `lang: Lang` prop and resolves its text with `ui[lang].sectionName`. When editing content, both `ja` and `en` keys must be kept in sync.

i18n strings in `about.body`, `research.body`, and `works[].description` are rendered with Astro's `set:html` directive, so HTML tags are valid inside those strings: `<em>`, `<strong>`, `<span class="highlight">`, `<br>`.

### Theme system

- `:root` in `global.css` defines dark-mode tokens (the default).
- `[data-theme="light"]` overrides with light-mode tokens.
- `@media (prefers-color-scheme: light) :root:not([data-theme="dark"])` provides a pure-CSS fallback before JS runs.
- An inline `<script is:inline>` in `BaseLayout.astro` sets `data-theme` on `<html>` before the body renders (FOUC prevention). It checks `sessionStorage.getItem('theme')` first, then falls back to `window.matchMedia('(prefers-color-scheme: dark)')`.
- The manual toggle in `Navigation.astro` saves to **sessionStorage** (not localStorage), so the override resets on a new tab/visit.
- On toggle, a `theme-change` CustomEvent is dispatched on `window`; particles.js listens to this to reinitialize with the correct color.

### Language auto-redirect

`BaseLayout.astro` contains an inline script that runs once per session (`sessionStorage` key `lang-redirected`). It checks `navigator.language` and redirects Japanese users to `/` and all others to `/en/`. Once the flag is set, manual language switching via the nav link is not overridden.

### Skills icons

Icons are loaded from `https://cdn.simpleicons.org/{slug}`. The slug map is defined in `src/components/sections/Skills.astro` as `const ICONS`. Not all skill names have a matching icon (e.g. AWS has no Simple Icons entry and is intentionally omitted from the map). Dark-mode filter: `grayscale(1) invert(1) opacity(0.65)` — the `invert` is required to make dark-colored SVGs visible on the dark background. Light-mode filter: `grayscale(1) opacity(0.55)`.

### Hero photo carousel

`col1` and `col2` arrays in `Hero.astro` are each duplicated (`[...arr, ...arr]`) and rendered in two columns. CSS `@keyframes` animates `translateY(0 ↔ -50%)`, which equals exactly one full set of images — producing a seamless loop. **`align-items: start` on `.hero-photos` is critical**: without it, CSS Grid stretches the columns to the container height, breaking the -50% calculation.

### Scoped vs global styles

Astro scopes `<style>` blocks to the component by default. Use `<style is:global>` when:
- Styles must target elements injected via `set:html` (e.g. `.highlight` in Research)
- Styles must apply across component boundaries (e.g. `.skill-icon` filter, pill CSS variables)

The `[data-theme="light"]` selector does **not** work reliably inside scoped styles — always put theme-variant overrides in `<style is:global>` or `global.css`.
