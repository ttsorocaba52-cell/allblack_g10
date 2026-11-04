# ALLBLACK G10 — Mídia Kit

Landing page / mídia kit de João Pedro (@allblack_g10), criador automotivo com o Civic G10.
Feito em **Next.js 16** (App Router) + React 19 + TypeScript.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

Na Vercel: importe o repositório e deixe as configurações padrão (Framework Preset: Next.js).

## Onde mexer

| O que | Arquivo |
| --- | --- |
| Números, textos, marcas, preços, links | `lib/data.ts` |
| Estado e lógica (abas, modal, menu, animações) | `components/useMediaKit.ts` |
| Cada seção da página | `components/sections/*.tsx` |
| Ordem das seções | `components/MediaKit.tsx` |
| Cores, fontes e estilos base | `app/globals.css` |
| Título, descrição e fontes | `app/layout.tsx` |
| Imagens | `public/assets/` |

Seções: Nav · Hero · About · Instagram · Stories · YouTube · Audience (TikTok & Facebook) · Campaigns · Projects · Formats · Contact · Modal.

Opções em `app/page.tsx`: `cinematicIntro` (barras pretas na abertura do hero) e `showDataTags` (etiquetas INSIGHTS / BRIEFING / ILUSTRATIVO).

Ícones: [Phosphor](https://phosphoricons.com) via `@phosphor-icons/web` (`<i className="ph ph-nome" />`).
