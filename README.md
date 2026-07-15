# ReBubble — Website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS site for a fictional Vancouver
youth-led nonprofit that recycles used cooking oil into handmade soap.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Notes for customization

- All statistics, dates, team names, milestones, and prices are **placeholders** —
  search the codebase for `PLACEHOLDER` comments and replace with verified figures.
- Brand colors and fonts live in `tailwind.config.ts`.
- Page content and reusable lists (products, workshops, team, stories, events, milestones)
  live in the `data/` folder so they're easy to edit without touching component code.
- The cart, product variants, and contact form use local component state as a stand-in
  for a real backend/e-commerce integration.

## Project structure

- `app/` — one folder per route (App Router)
- `components/` — shared UI (Header, Footer, Button, Card, ContactForm, etc.)
- `data/` — editable content and site configuration
