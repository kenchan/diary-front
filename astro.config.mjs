import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel({
    analytics: true
  }),
  site: "https://diary.shu-cream.net/",
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});