import { defineConfig } from 'astro/config';

// Sitio estático. Vercel sirve dist/ + las funciones de /api (serverless).
export default defineConfig({
  site: 'https://santiagocreide.vercel.app',
  build: {
    inlineStylesheets: 'auto',
  },
});
