/**
 * Sunday School Registration endpoint.
 *
 * Receives the registration form POST, forwards it server-side to the
 * automation platform webhook, then redirects to /thank-you.
 *
 * The webhook URL lives ONLY in this server-side file. It is never
 * emitted to the browser, never in any client JS bundle, and cannot
 * be discovered via View Source or DevTools network inspection.
 */

export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();

    // Honeypot — silently accept bots so they don't know they were blocked.
    const honeypot = formData.get('_hp');
    if (honeypot && honeypot.toString().length > 0) {
      return redirect('/thank-you', 302);
    }

    // Collect all form fields, skipping internal underscore keys.
    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('_')) continue;
      payload[key] = value.toString();
    }

    // Metadata fields appended server-side.
    const enriched = {
      ...payload,
      source: 'fpcmontgomery.org',
      endpoint: '/api/sunday-school-register',
      formType: 'sunday-school-registration',
      submittedAt: new Date().toISOString(),
    };

    // Webhook URL — server-side only, never exposed to the browser.
    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/4aqSFaFFHXf5vD5GdZUj/webhook-trigger/sauHxcxxjfs6j0cbWO1T';

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enriched),
      });
    } catch (err) {
      // Log server-side but never block the user experience.
      console.error('Sunday School registration webhook failed — submission still processed', err);
    }

    return redirect('/thank-you', 302);
  } catch (err) {
    console.error('Sunday School registration error:', err);
    return new Response('Internal server error', { status: 500 });
  }
};
