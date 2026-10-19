// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.strohmpartners.com',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api/contact': {
          target: 'https://n8n.strohmpartners.com',
          changeOrigin: true,
          rewrite: () =>
            '/webhook/4addc17d-268d-45b8-8eac-741918981620',
        },
      },
    },
  },
});
