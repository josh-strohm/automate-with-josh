const DEFAULT_WEBHOOK =
  'https://n8n.strohmpartners.com/webhook/4addc17d-268d-45b8-8eac-741918981620';

const ALLOWED_INTEREST = new Set([
  'missed-call-text-back',
  'ai-receptionist',
  'crm-follow-up',
  'conversational-booking',
  'custom-automation',
  'not-sure',
]);

export const onRequestPost: PagesFunction<{ N8N_WEBHOOK_URL?: string }> = async (context) => {
  try {
    const body = await context.request.json();

    if (!body?.name || !body?.email || !body?.interest || !body?.source || !body?.page || !body?.submittedAt) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
    }

    if (body.source !== 'strohm-partners-website' || !ALLOWED_INTEREST.has(body.interest)) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
    }

    const webhookUrl = context.env.N8N_WEBHOOK_URL ?? DEFAULT_WEBHOOK;

    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      console.error('n8n webhook error', upstream.status, text);
      return new Response(JSON.stringify({ error: 'Upstream failed' }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};
