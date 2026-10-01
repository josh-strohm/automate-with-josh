import assert from 'node:assert/strict';
import test from 'node:test';
import { createLibraryHandler } from '../netlify/functions/_shared/library-api.js';

class MemoryBlobStore {
  records = new Map();

  async get(key) {
    return this.records.get(key) || null;
  }

  async setJSON(key, value) {
    this.records.set(key, value);
  }
}

const previewContext = { deploy: { context: 'deploy-preview' } };
const productionContext = { deploy: { context: 'production' } };
const adminToken = 'test-library-admin-token';

function request(method, body, authorization) {
  const headers = { 'content-type': 'application/json' };
  if (authorization) headers.authorization = authorization;

  return new Request('https://site.example/api/library', {
    method,
    headers,
    body: JSON.stringify(body),
  });
}

test('a normalized buyer receives their package and a different email receives none', async () => {
  const store = new MemoryBlobStore();
  const handler = createLibraryHandler({ store, adminToken });

  const saveResponse = await handler(request('PUT', {
    email: ' Buyer@Example.com ',
    entitlements: [{
      skill: { slug: 'meeting-notes', title: 'Meeting notes assistant' },
      packages: [{
        agentKey: 'claude',
        agentName: 'Claude',
        fileName: 'meeting-notes.zip',
        downloadUrl: 'https://downloads.example.test/meeting-notes.zip',
      }],
    }],
  }, `Bearer ${adminToken}`), previewContext);
  assert.equal(saveResponse.status, 200);

  const buyerResponse = await handler(request('POST', { email: '  BUYER@example.com  ' }), previewContext);
  assert.equal(buyerResponse.status, 200);
  assert.equal(buyerResponse.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await buyerResponse.json(), {
    entitlements: [{
      skill: { slug: 'meeting-notes', title: 'Meeting notes assistant' },
      packages: [{
        agentKey: 'claude',
        agentName: 'Claude',
        fileName: 'meeting-notes.zip',
        downloadUrl: 'https://downloads.example.test/meeting-notes.zip',
      }],
    }],
  });

  const otherBuyerResponse = await handler(request('POST', { email: 'someone-else@example.com' }), previewContext);
  assert.deepEqual(await otherBuyerResponse.json(), { entitlements: [] });

  const productionResponse = await handler(request('POST', { email: 'buyer@example.com' }), productionContext);
  assert.deepEqual(await productionResponse.json(), { entitlements: [] });
});

test('entitlement writes require the configured admin token and valid download URLs', async () => {
  const store = new MemoryBlobStore();
  const handler = createLibraryHandler({ store, adminToken });
  const withoutToken = await handler(request('PUT', { email: 'buyer@example.com', entitlements: [] }), previewContext);
  assert.equal(withoutToken.status, 401);

  const badPackage = await handler(request('PUT', {
    email: 'buyer@example.com',
    entitlements: [{ skill: { title: 'Unsafe package' }, packages: [{ fileName: 'file.zip', downloadUrl: 'javascript:alert(1)' }] }],
  }, `Bearer ${adminToken}`), previewContext);
  assert.equal(badPackage.status, 400);
});
