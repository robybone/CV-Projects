# CV interattivo — Roberto Bonetti

Sito one-page (React + Vite + TypeScript + Tailwind CSS + Framer Motion).

## Avvio in locale
Serve Node.js 18 o superiore (https://nodejs.org).

```bash
npm install
npm run dev
```
Apri http://localhost:5173. Le modifiche ai file si vedono subito nel browser.

Versione di produzione:
```bash
npm run build
npm run preview
```

## Dove modificare
- Tutti i testi (IT/EN): `src/content/cv.ts`
- Foto: `public/roberto-bonetti.jpg`
- Loghi: `public/logos/`
- Icona del sito: `public/favicon.png`, `public/apple-touch-icon.png`, marchio header `public/rb-mark.png`
- URL pubblico per l'anteprima social (Open Graph): `.env` → `VITE_SITE_URL`

## Deploy su Vercel
1. Su vercel.com: **Add New → Project** e importa questo repository.
2. Vercel riconosce Vite da solo (build `npm run build`, output `dist`).
3. Dopo il primo deploy aggiorna `VITE_SITE_URL` in `.env` (o nelle Environment Variables di Vercel) con il dominio definitivo.
