/**
 * Generic form submission endpoint.
 *
 * Per doctrine: the CRM platform is NEVER named by brand in client output.
 * Refer to it as "CRM" or "automation platform" only.
 *
 * Handles:
 *   - /api/subscribe (Get Notified band)
 *   - /api/contact   (Contact page form)
 *   - /api/im-new    (I'm New page form)
 *
 * Set CRM_WEBHOOK_URL in environment to enable forwarding.
 */

export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect, url }) => {
  try {
    const formData = await request.formData();

    // Honeypot
    const honeypot = formData.get('_hp');
    if (honeypot && honeypot.toString().length > 0) {
      return redirect('/thank-you', 302);
    }

    // Collect everything — different forms have different shapes.
    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('_')) continue;
      payload[key] = value.toString();
    }

    // Minimal validation: require either email or phone.
    if (!payload.email && !payload.phone) {
      return new Response('Missing email or phone', { status: 400 });
    }

    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/4aqSFaFFHXf5vD5GdZUj/webhook-trigger/fewQCn1OY9rf0aNxhBjC';
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          source: 'fpcmontgomery.org',
          endpoint: url.pathname,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error('CRM webhook failed — form still processed', err);
    }

    return redirect('/thank-you', 302);
  } catch (err) {
    console.error('Form submission error:', err);
    return new Response('Internal server error', { status: 500 });
  }
};
