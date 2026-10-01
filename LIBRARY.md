# Buyer library records

The `/api/library` Netlify Function stores records in the site wide `library-entitlements` Netlify Blobs store. Each record is keyed by a SHA-256 digest of the normalized email. Deploy previews, branch deploys, local development, and production use separate key namespaces.

Set `LIBRARY_ADMIN_TOKEN` as a Netlify environment variable for the deploy contexts where records will be managed. The token is only read by the function. To add or replace a buyer's records, send an authenticated `PUT /api/library` request:

```sh
curl --request PUT "$SITE_URL/api/library" \
  --header "Authorization: Bearer $LIBRARY_ADMIN_TOKEN" \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "buyer@example.com",
    "entitlements": [{
      "skill": {
        "slug": "meeting-notes",
        "title": "Meeting notes assistant",
        "description": "A guided workflow for summarizing meetings."
      },
      "packages": [{
        "agentKey": "claude",
        "agentName": "Claude",
        "fileName": "meeting-notes.zip",
        "downloadUrl": "https://downloads.example.com/meeting-notes.zip"
      }]
    }]
  }'
```

The URL must be HTTPS or a path on the same site. Each entitlement needs at least one package URL. Send an empty `entitlements` array to clear that buyer's record. `POST /api/library` accepts `{ "email": "buyer@example.com" }` and returns only that normalized email's entitlements. Responses disable caching.

Entitlement records and package files are managed separately: package files must already be hosted at the supplied URLs. No checkout provider or purchase records are configured in this repository.
