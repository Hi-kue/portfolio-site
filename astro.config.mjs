import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), svelte(), sitemap({
    base: 'https://hikue.dev',
    routes: [{
      path: '/',
      changefreq: 'daily',
      priority: 1.0
    }, {
      path: '/about',
      changefreq: 'monthly',
      priority: 0.7
    }, {
      path: '/contact',
      changefreq: 'monthly',
      priority: 0.7
    }, {
      path: '/projects',
      changefreq: 'monthly',
      priority: 0.7
    }]
  })]
});