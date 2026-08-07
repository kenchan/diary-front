import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  output: 'static',
  site: process.env.SITE_URL || "https://diary.shu-cream.net/",
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
