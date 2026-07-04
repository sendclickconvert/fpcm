/**
 * Production server — FPC Montgomery
 *
 * Adapter is in middleware mode: dist/server/entry.mjs exports a handler
 * with NO auto-start. This file is the single server on PORT (5000).
 *
 * Security headers are set by Express middleware on every response —
 * static pages, SSR pages, and API routes alike.
 * No HSTS: Replit's edge layer provides it.
 */

import express from 'express';
import { handler as astroHandler } from './dist/server/entry.mjs';

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
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://maps.google.com",
  "upgrade-insecure-requests",
].join('; ');

const app = express();

// 1. Security headers on every response
app.use((_req, res, next) => {
  res.setHeader('Content-Security-Policy', CSP);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  next();
});

// 2. Serve prerendered static assets (CSS, JS, images, prerendered HTML)
app.use(express.static('dist/client/'));

// 3. Astro handler for SSR routes and API endpoints
app.use(astroHandler);

app.listen(PORT, HOST, () => {
  console.log(`[@fpcmontgomery] Server listening on http://${HOST}:${PORT}`);
});
