// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://fpcmontgomery.org',
  output: 'hybrid',
  trailingSlash: 'never',
  adapter: node({ mode: 'middleware' }),
  vite: {
    server: {
      // Required for Replit preview iframe
      allowedHosts: true,
    },
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  redirects: {
    // Single-hop 301s only — NEVER chain, NEVER catch-all.
    // Add slug-to-slug redirects here as the site evolves.
  },
});
