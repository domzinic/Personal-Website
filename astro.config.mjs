// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  adapter: vercel(),
  integrations: [mdx(), sitemap()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Atkinson Hyperlegible',
      cssVariable: '--font-atkinson',
      fallbacks: ['sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});