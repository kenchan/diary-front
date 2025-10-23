# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal Japanese blog ("けんちゃんくんさんのWeb日記") built with **Astro v5** and **Tailwind CSS**. Contains 500+ diary entries from 2011-2023, deployed on Vercel at https://diary.shu-cream.net/.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run astro -- [command]  # Run Astro CLI commands
```

## Architecture

### Rendering Strategy
- **Hybrid mode**: `output: 'server'` in astro.config.mjs with per-page `prerender: true`
- All pages use `prerender: true` for static generation despite serverless adapter
- Enables incremental static regeneration on Vercel

### Content Collection
- **Location**: `src/content/article/` (500+ markdown files)
- **Schema**: Defined in `src/content/article/config.ts` using Zod
  - `title`: string (article title)
  - `slug`: string (URL slug, usually same as filename)
  - `publishedOn`: date (display date for sorting)
  - `createdAt`: date (original creation timestamp)
  - `updatedAt`: date (last modification timestamp)
- **Sorting**: Articles sorted by `publishedOn` descending throughout site

### Page Structure
- `src/pages/index.astro` - Latest 10 articles
- `src/pages/[slug].astro` - Individual article pages (dynamic route with `getStaticPaths`)
- `src/pages/page/[page].astro` - Pagination (10 articles/page, uses custom `chunk` function)
- `src/pages/rss.xml.ts` & `src/pages/atom.xml.astro` - RSS/Atom feeds
- All use `getCollection('article')` to fetch content

### Components & Layout
- `src/layouts/Layout.astro` - Base layout with:
  - Japanese `lang="ja"` attribute
  - OpenGraph meta tags (title, type, url, image)
  - Hatena Star integration (Japanese social bookmarking)
  - Green header (`bg-green-900`) with site title
  - Footer with Mastodon, Twitter, GitHub links (FontAwesome icons)
- `src/components/ArticleCard.astro` - Article rendering component:
  - Renders markdown content via `await article.render()`
  - Optional Hatena Star container (`showHS` prop)
  - Shows publishedOn, createdAt, updatedAt timestamps
  - Contains global article styles (h2 borders, link colors, code blocks, etc.)

### Styling Approach
- **Tailwind v3** with `@apply` directives in scoped/global `<style>` blocks
- **Global article styles**: Defined in both `index.astro`, `[page].astro`, and `ArticleCard.astro`
- **Color scheme**: Green header (`bg-green-900`), gray background (`bg-gray-200`), gray cards (`bg-gray-100`)
- **Typography**: Japanese-optimized with `text-lg leading-8` for readability
- **Responsive**: `max-w-3xl` container, FontAwesome icons

### Markdown Processing
- **Syntax highlighting**: Shiki with `github-light` theme (astro.config.mjs)
- **Dependencies**: `marked`, `highlight.js`, `isomorphic-dompurify` for additional processing if needed
- Content rendered via Astro's built-in markdown engine

## Deployment

- **Platform**: Vercel with `@astrojs/vercel/serverless` adapter
- **Node.js**: v22.x (specified in package.json engines)
- **Caching** (vercel.json):
  - Pages: `s-maxage=300` (5 minutes)
  - RSS: `s-maxage=3600` (1 hour)
- **Analytics**: Enabled via adapter config
- **Domain**: https://diary.shu-cream.net/

## Key Implementation Details

- **Pagination logic**: Custom `chunk()` function in `src/pages/page/[page].astro` splits articles into pages of 10
- **Hatena Star**: Configured to target `h1 a` for URI and `div.hatenaStar` for container
- **Static paths**: Both `[slug].astro` and `[page].astro` use `getStaticPaths()` with `prerender: true`
- **Content sorting**: Consistent `publishedOn` descending sort across all pages
