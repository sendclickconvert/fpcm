export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect, url }) => {
  try {
    const formData = await request.formData();

    const honeypot = formData.get('_hp');
    if (honeypot && honeypot.toString().length > 0) {
      return redirect('/thank-you', 302);
    }

    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('_')) continue;
      payload[key] = value.toString();
    }

    if (!payload.email && !payload.phone) {
      return new Response('Missing email or phone', { status: 400 });
    }

    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/4aqSFaFFHXf5vD5GdZUj/webhook-trigger/6ef6a556-1807-4f86-8c67-5323a29e1443';
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
      console.error('Newsletter webhook failed — form still processed', err);
    }

    return redirect('/thank-you', 302);
  } catch (err) {
    console.error('Subscribe form error:', err);
    return new Response('Internal server error', { status: 500 });
  }
};
