import { Buffer } from 'node:buffer';
import { createHash, timingSafeEqual } from 'node:crypto';

const MAX_BODY_LENGTH = 256 * 1024;
const MAX_ENTITLEMENTS = 100;
const MAX_PACKAGES_PER_SKILL = 30;
const JSON_HEADERS = {
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json; charset=utf-8',
};

export function normalizeEmail(value) {
  if (typeof value !== 'string') return null;

  const email = value.trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return email;
}

function emailDigest(email) {
  return createHash('sha256').update(email).digest('hex');
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

async function readJson(request) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_LENGTH) return { error: 'Request body is too large.', status: 413 };

  const text = await request.text();
  if (Buffer.byteLength(text, 'utf8') > MAX_BODY_LENGTH) {
    return { error: 'Request body is too large.', status: 413 };
  }

  try {
    return { value: JSON.parse(text) };
  } catch {
    return { error: 'Request body must be valid JSON.', status: 400 };
  }
}

function safeDownloadUrl(value) {
  if (typeof value !== 'string' || value.length > 2048) return null;
  if (value.startsWith('/') && !value.startsWith('//')) return value;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

function shortText(value, maxLength) {
  return typeof value === 'string' && value.trim()
    ? value.trim().slice(0, maxLength)
    : undefined;
}

function normalizeEntitlements(value) {
  if (!Array.isArray(value) || value.length > MAX_ENTITLEMENTS) {
    return { error: `Entitlements must be an array with no more than ${MAX_ENTITLEMENTS} items.` };
  }

  const entitlements = [];
  for (const entitlement of value) {
    if (!entitlement || typeof entitlement !== 'object' || Array.isArray(entitlement)) {
      return { error: 'Each entitlement must be an object.' };
    }

    const skillData = entitlement.skill && typeof entitlement.skill === 'object'
      ? entitlement.skill
      : entitlement;
    const title = shortText(skillData.title || skillData.name, 200);
    if (!title) return { error: 'Each entitlement must include a skill title.' };

    const packages = entitlement.packages;
    if (!Array.isArray(packages) || packages.length === 0 || packages.length > MAX_PACKAGES_PER_SKILL) {
      return { error: `Each entitlement must include between 1 and ${MAX_PACKAGES_PER_SKILL} packages.` };
    }

    const normalizedPackages = [];
    for (const packageFile of packages) {
      if (!packageFile || typeof packageFile !== 'object' || Array.isArray(packageFile)) {
        return { error: 'Each package must be an object.' };
      }

      const fileName = shortText(packageFile.fileName || packageFile.filename, 200);
      const downloadUrl = safeDownloadUrl(packageFile.downloadUrl || packageFile.fileUrl);
      if (!fileName || !downloadUrl) {
        return { error: 'Each package needs a filename and a valid HTTPS or same-site download URL.' };
      }

      normalizedPackages.push({
        id: shortText(packageFile.id, 120),
        agentKey: shortText(packageFile.agentKey, 120),
        agentName: shortText(packageFile.agentName, 160),
        fileName,
        version: shortText(packageFile.version, 80),
        downloadUrl,
      });
    }

    const skill = {
      id: shortText(skillData.id, 120),
      slug: shortText(skillData.slug, 120),
      title,
      description: shortText(skillData.description, 2000),
    };
    entitlements.push({ skill, packages: normalizedPackages });
  }

  return { entitlements };
}

function sameToken(candidate, expected) {
  if (typeof candidate !== 'string' || typeof expected !== 'string' || !expected) return false;
  const candidateBytes = Buffer.from(candidate);
  const expectedBytes = Buffer.from(expected);
  return candidateBytes.length === expectedBytes.length && timingSafeEqual(candidateBytes, expectedBytes);
}

function deployNamespace(context) {
  const deployContext = context?.deploy?.context;
  return typeof deployContext === 'string' && /^[a-z-]{1,40}$/.test(deployContext)
    ? deployContext
    : 'local';
}

function storageKey(email, context) {
  return `library/v1/${deployNamespace(context)}/${emailDigest(email)}`;
}

export function createLibraryHandler({ store, adminToken }) {
  return async (request, context) => {
    if (request.method === 'POST') {
      const body = await readJson(request);
      if (body.error) return jsonResponse({ error: body.error }, body.status);

      const email = normalizeEmail(body.value?.email);
      if (!email) return jsonResponse({ error: 'Enter a valid email address.' }, 400);

      const record = await store.get(storageKey(email, context), { type: 'json' });
      if (!record || record.emailDigest !== emailDigest(email) || !Array.isArray(record.entitlements)) {
        return jsonResponse({ entitlements: [] });
      }

      const entitlements = normalizeEntitlements(record.entitlements);
      return jsonResponse({ entitlements: entitlements.entitlements || [] });
    }

    if (request.method === 'PUT') {
      const authorization = request.headers.get('authorization') || '';
      const tokenMatch = authorization.match(/^Bearer (.+)$/i);
      if (!sameToken(tokenMatch?.[1], adminToken)) {
        return jsonResponse({ error: adminToken ? 'Unauthorized.' : 'Library management is not configured.' }, adminToken ? 401 : 503);
      }

      const body = await readJson(request);
      if (body.error) return jsonResponse({ error: body.error }, body.status);

      const email = normalizeEmail(body.value?.email);
      if (!email) return jsonResponse({ error: 'Enter a valid email address.' }, 400);

      const normalized = normalizeEntitlements(body.value?.entitlements);
      if (normalized.error) return jsonResponse({ error: normalized.error }, 400);

      await store.setJSON(storageKey(email, context), {
        emailDigest: emailDigest(email),
        entitlements: normalized.entitlements,
      });
      return jsonResponse({ saved: true }, 200);
    }

    return jsonResponse({ error: 'Method not allowed.' }, 405);
  };
}
