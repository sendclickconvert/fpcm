import { defineMiddleware } from 'astro:middleware';

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

export const onRequest = defineMiddleware((_ctx, next) => {
  return next().then((response) => {
    // Enforcing CSP
    response.headers.set('Content-Security-Policy', CSP);

    // Safe hardening headers — no HSTS (let the edge handle it)
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set(
      'Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    );

    return response;
  });
});
