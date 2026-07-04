import { defineMiddleware } from 'astro:middleware';

// Security headers are applied by server.mjs (Express layer) in production,
// which covers static + SSR + API routes alike.
// This middleware is a no-op pass-through kept in place for future use.
export const onRequest = defineMiddleware((_ctx, next) => next());
