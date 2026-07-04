/**
 * Production entry point for FPC Montgomery.
 *
 * Astro's standalone entry auto-starts on port 4321 when imported and also
 * exports a `handler` function that handles every request (static + SSR).
 * We create our own HTTP server on PORT (5000) using that same handler,
 * injecting security headers into every response before it leaves.
 *
 * Result: port 4321 runs headlessly (Replit doesn't expose it),
 * port 5000 is what the world sees — with all security headers present.
 * No HSTS in Express; Replit's edge layer provides it.
 */

import http from 'node:http';

const HOST = process.env.HOST ?? '0.0.0.0';
const PORT = parseInt(process.env.PORT ?? '5000', 10);

const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self' mailto:",
  "img-src 'self' data: https://i.ytimg.com https://img.youtube.com",
  "font-src 'self' https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  "upgrade-insecure-requests",
].join('; ');

// Boot Astro standalone (auto-starts on 4321, exports handler)
const { handler } = await import('./dist/server/entry.mjs');

http.createServer((req, res) => {
  res.setHeader('Content-Security-Policy', CSP);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  handler(req, res);
}).listen(PORT, HOST, () => {
  console.log(`[@fpcmontgomery] Server listening on http://${HOST}:${PORT}`);
});
