# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **personal Japanese blog** ("けんちゃんくんさんのWeb日記") built with **Astro v5** and **Tailwind CSS**. The site contains 500+ diary entries spanning from 2011-2023, deployed on Vercel at https://diary.shu-cream.net/.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:3000 by default)
npm run dev
# or 
npm start

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- [command]
```

## Architecture

### Content Management
- **Content Collection**: Markdown files stored in `src/content/article/`
- **500+ entries**: Personal diary entries from 2011-2023 in Japanese
- **File naming**: Mix of date-based (2023-01-01.md) and descriptive titles
- **No frontmatter schema**: Articles rely on filename and content structure

### Site Structure
- **Homepage**: `src/pages/index.astro` - displays latest 10 articles
- **Article pages**: `src/pages/[slug].astro` - individual diary entries
- **Pagination**: `src/pages/page/[page].astro` - 10 articles per page
- **Feeds**: RSS (`src/pages/rss.xml.ts`) and Atom (`src/pages/atom.xml.astro`)
- **SEO**: Sitemap, robots.txt, OpenGraph meta tags

### Styling & UI
- **Tailwind CSS v3**: Utility-first styling
- **Japanese typography**: Custom font stacks optimized for Japanese text
- **Responsive design**: Mobile-first approach with `max-w-3xl` container
- **Color scheme**: Green header (`bg-green-900`), gray background (`bg-gray-200`)
- **Icons**: FontAwesome for social media links

### Special Features
- **Hatena Star integration**: Japanese social bookmarking service
- **Social links**: Mastodon, Twitter, GitHub in footer
- **Markdown processing**: Uses `marked` library with syntax highlighting via `highlight.js`
- **HTML sanitization**: `isomorphic-dompurify` for security

## Deployment Configuration

- **Platform**: Vercel with serverless adapter
- **Node.js**: Fixed to v22.x
- **Caching**: Aggressive caching (5min pages, 1hr RSS) via `vercel.json`
- **Analytics**: Vercel Analytics enabled
- **Domain**: https://diary.shu-cream.net/

## Key Files

- `astro.config.mjs`: Main configuration with Vercel adapter, Tailwind, sitemap
- `src/layouts/Layout.astro`: Main page layout with Japanese SEO optimization
- `src/components/ArticleCard.astro`: Article listing component
- `vercel.json`: Deployment and caching configuration
- `src/content/article/`: All diary entries (500+ markdown files)

## Content Patterns

- **Personal diary**: Daily life, work experiences, technical notes
- **Japanese language**: All content in Japanese
- **Chronological**: Entries span 12+ years (2011-2023)
- **Mixed topics**: Programming, work, family, hobbies, book reviews
- **No categories/tags**: Simple chronological organization

## Development Notes

- **Static generation**: All pages pre-rendered at build time
- **No database**: File-based content management
- **Markdown-centric**: All content authored in Markdown
- **SEO optimized**: Japanese-specific meta tags and social sharing
- **Performance focused**: Static generation with CDN caching