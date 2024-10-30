import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
   vite: {
      plugins: [tailwindcss()],
   },
   site: 'https://www.jakubstawicki.uk/',
   compressHTML: true,
   integrations: [sitemap()]
});