import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  preview: {
    port: 4173,
  }
})

function spaFallback() {
  return {
    name: 'spa-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        // Skip requests for assets (files with extensions)
        if (url.match(/\.[a-z0-9]+(\?.*)?$/i)) {
          return next();
        }
        // Serve index.html for all other requests (SPA routing)
        req.url = '/index.html';
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        if (url.match(/\.[a-z0-9]+(\?.*)?$/i)) {
          return next();
        }
        req.url = '/index.html';
        next();
      });
    }
  };
}
