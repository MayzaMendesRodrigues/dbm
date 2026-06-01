# CLAUDE.md

Guidance for working in this repo.

## Project

`dbm-fe` — marketing/catalog site for **DBM Motos**, a used & 0km motorcycle dealership in Liniers, Buenos Aires (Argentina). Single-page React app deployed to GitHub Pages at `https://dbmmotos.com.ar`.

All user-facing copy is **Spanish (es-AR)**. Keep new UI strings in Spanish.

## Stack

- React 19 + TypeScript 4.9, bootstrapped with **Create React App** (`react-scripts` 5).
- **MUI v7** (`@mui/material`) + Emotion for components/theming; plain CSS files per component for the rest.
- `react-router-dom` v7 (`createBrowserRouter`).
- `lucide-react` icons.
- **No backend in this repo.** Content (catalog + reviews) is fetched at runtime from `https://api.dbmmotos.com.ar/dbm_content.json`.

## Commands

```bash
npm start          # dev server at localhost:3000
npm test           # react-scripts test (Jest + Testing Library, watch mode)
npm run build      # production build to build/
npm run deploy     # predeploy build + gh-pages push (publishes the site)
```

Tests are colocated as `*.test.tsx`. `npm test -- --watchAll=false` for a single run.

## Architecture

- **Entry**: `src/index.tsx` → `src/App.tsx`. `App` wires `ThemeProvider` (`src/themes/theme.ts`) → `DataProvider` → `RouterProvider`.
- **Routing**: routes defined inline in `App.tsx`; a `Layout` renders the page `<Outlet />` plus persistent `NavBar`, `StickyWhatsappButton`, `Footer`. Route URLs/labels live in `src/constants/constants.ts` (`Pages`).
- **Pages** (`src/pages/`): `HomePage` (composed of section components under `HomePage/components/`), `CatalogPage`, `SellMyBike`.
- **Components** split into `components/feature/` (domain: Catalog, Footer, etc.) and `components/ui/` (generic: Button, InputField, Header, NavBar, Slider). Each component is a folder with `Component.tsx` + `Component.css` (or `.module.css`).
- **Data**: `src/context/DataContext.tsx` exposes `useData()` → `{ reviews, catalog, isLoading, error }`. Fetches the remote JSON once, caches it in `localStorage` for 12h (`page-content-key`).
- **Types**: `src/types/index.ts` (`Product`, `Review`, `Image`, `Bike`; also augments `Window` with `goatcounter`).
- **Analytics**: `src/analytics/analytics.ts` — call `pushEvent(EventAnalytics.X)`. Events map to GoatCounter via `eventMap` (category/type/Spanish label). Add a new `EventAnalytics` enum member **and** an `eventMap` entry together. GoatCounter script is loaded in `public/index.html`.

## Conventions

- Component folder pattern: `Name/Name.tsx` + `Name/Name.css`. Match it for new components.
- Default-export React components; co-locate styles.
- Domain constants (phone, brands, pages, social links) belong in `src/constants/constants.ts`, not inline.
- Commits follow **Conventional Commits** (`feat:`, `fix:`).
- SEO matters here: `public/index.html` holds meta tags + JSON-LD; `robots.txt`, `404.html` (SPA redirect for gh-pages), and `CNAME` are deploy-critical — don't remove.

## Constraints

- `tsconfig` is `strict`. Keep types sound.
- Contact phone number is hardcoded in `constants.ts` (`Contact.PhoneNumber`); WhatsApp links derive from it.
