import { getStore } from '@netlify/blobs';
import { createLibraryHandler } from './_shared/library-api.js';

export default async function library(request, context) {
  const store = getStore({ name: 'library-entitlements', consistency: 'strong' });
  const adminToken = globalThis.Netlify?.env?.get('LIBRARY_ADMIN_TOKEN');
  return createLibraryHandler({ store, adminToken })(request, context);
}

export const config = {
  path: '/api/library',
  method: ['POST', 'PUT'],
};
