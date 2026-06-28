# Blooming

Consultora de growth y eventos para empresas tech. Ayudamos a founders a construir tracción real en San Francisco, LatAm y el ecosistema francés — a través de eventos, comunidad y go-to-market strategy.

**Website:** weareblooming.co  
**Email:** hello@weareblooming.co  
**Posicionamiento:** San Francisco · Santiago · Paris

## Stack
- **Framework:** Next.js 14 + TypeScript + Tailwind CSS
- **Email:** Resend (notificaciones de subscribers)
- **Leads:** Google Sheets webhook (captura emails del landing)
- **Deploy:** Vercel (auto-deploy en push a main)
- **Dominio:** Namecheap → Vercel

## Comandos
- `npm run dev` — desarrollo local
- `npm run build` — build de producción
- `git push` → Vercel auto-deploy

## Estructura
```
app/
  page.tsx          — Landing page principal (waitlist)
  layout.tsx        — Root layout, fuentes, metadata
  globals.css       — Variables de color, fuentes
  api/
    subscribe/      — POST /api/subscribe: captura email → Google Sheets + Resend
  dashboard/        — WIP (internal workspace)
components/         — Componentes compartidos (vacío por ahora)
data/               — Data files (vacío por ahora)
proposals/
  clients/
    moots/          — Propuesta Moots (pptx + html)
    plaud/          — Propuesta Plaud (html)
    tagcontrol/     — TAGcontrol (app de peajes Chile, Andrés es founder)
  templates/        — Templates base de propuestas
public/             — Assets estáticos
```

## Branding
- **Paleta:** Negro `#1a1a1a`, Bosque `#2D6A4F`, Tierra, Hongo, Cream `#FAF8F3`
- **Display:** Cormorant Garamond (300, 400) — elegante, editorial
- **Body:** Space Grotesk (300, 400, 500) — limpio, técnico
- **Tono:** sofisticado, directo, internacional

## Variables de entorno (Vercel)
- `GOOGLE_SHEET_WEBHOOK` — URL del webhook de Apps Script para Google Sheets
- `RESEND_API_KEY` — API key de Resend para emails

## Clientes activos
- **Moots** — `proposals/clients/moots/`
- **Plaud** — `proposals/clients/plaud/`
- **TAGcontrol** — App de peajes Chile. Andrés es founder. Código en `~/personal-projects/tag-control/`

## GitHub
- Repo: github.com/andres483/blooming-website (confirmar nombre exacto)
- Branch principal: main
- Deploy: automático en push a main vía Vercel

## Contexto importante
- Andrés Villagran es founder de Blooming
- TAGcontrol es un producto propio de Andrés, gestionado como cliente de Blooming
- Alison Granger es una colaboradora/portfolio case study
- El dashboard `/dashboard` está planificado pero no construido
