import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// URL pubblico del sito, usato per i meta Open Graph (anteprima su LinkedIn/WhatsApp).
// Si può sovrascrivere con la variabile VITE_SITE_URL (file .env o impostazioni di Vercel).
const DEFAULT_SITE_URL = 'https://cv-roberto-bonetti.vercel.app'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` || DEFAULT_SITE_URL).replace(/\/$/, '')
  return {
    base: './',
    plugins: [
      react(),
      {
        name: 'site-url',
        transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
      },
    ],
    server: { host: true, port: 5173 },
  }
})
