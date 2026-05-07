# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server (auto-picks free port starting at 4321)
npm run build    # static build → dist/
npm run preview  # preview built output
```

## Architecture

Single-page Astro site — fully static, no framework islands (no JS hydration needed). All content lives in `src/data/content.ts` and is consumed at build time.

**Data flow:** `src/data/content.ts` → imported by each `.astro` component → rendered to static HTML.

**Page composition** (`src/pages/index.astro`): imports and sequences five section components — `Nav → Hero → About → Services → Gallery → Contact` — wrapped in `src/layouts/Layout.astro` (font imports, global reset, meta tags).

**Icons** (`src/components/Icons.astro`): inline SVG, thin-line style, selected by `name` prop. Each service in `content.ts` has an `icon` field that maps to one of: `candle | leaf | drop | hands | drops | lotus | branch`.

**Assets** live in `public/assets/` (served as-is, no processing):
- `logo.png` — used in Nav with `mix-blend-mode: multiply` on cream background
- `gallery/01-room.jpeg` … `07-chairs.jpeg` — referenced by path in `content.ts → GALLERY` array and directly in `Hero.astro`

## Design tokens

All colours are hardcoded (no CSS variables). Key values:
- bg `#faf6ee`, bgAlt `#f4ede0`
- ink `#2a2a26`, inkSoft `#5a5a52`
- sage `#6b7d5c`, sageDark `#4a5a3a`
- line `#d8cfb8`

Font: **Cormorant Garamond** (Google Fonts, loaded in Layout). Fraunces is imported but not actively used — can be applied via `font-family: 'Fraunces', serif`.

## Deployment

Cloudflare Pages: build command `npm run build`, output directory `dist`.
