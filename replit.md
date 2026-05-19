# First Presbyterian Church of Montgomery

Astro 4 + Tailwind 3 website using the @astrojs/node adapter (hybrid output).

## Running
- Dev: `npm run dev` (serves on 0.0.0.0:5000 via the "Start application" workflow)
- Build: `npm run build`
- Production: `npm run start` (serves `dist/server/entry.mjs`)

## Deployment
Configured as Replit Autoscale: build = `npm run build`, run = `npm run start`.

## Notes
- `astro.config.mjs` sets `vite.server.allowedHosts: true` so the Replit preview iframe can load the dev server.
- Frontend host is `0.0.0.0`, port `5000`.

## User preferences
(none recorded yet)
