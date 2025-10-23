import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'static',
  site: process.env.SITE_URL || "https://diary.shu-cream.net/",
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});