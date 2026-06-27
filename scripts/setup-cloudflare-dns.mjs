#!/usr/bin/env node
/**
 * Create Cloudflare DNS records for syncrobrain.com → Pages.
 * Requires CLOUDFLARE_API_TOKEN with Zone → DNS → Edit (syncrobrain.com zone).
 */
const token = process.env.CLOUDFLARE_API_TOKEN
const zoneId = process.env.CLOUDFLARE_ZONE_ID ?? '37dfc297de321d3d00e29e244fd783b2'
const pagesTarget = process.env.CLOUDFLARE_PAGES_TARGET ?? 'syncrobrain-website.pages.dev'

const records = [
  { type: 'CNAME', name: '@', content: pagesTarget, proxied: true },
  { type: 'CNAME', name: 'www', content: pagesTarget, proxied: true },
]

if (!token) {
  console.error('Missing CLOUDFLARE_API_TOKEN (needs Zone → DNS → Edit for syncrobrain.com).')
  console.error('Create one at: https://dash.cloudflare.com/profile/api-tokens')
  process.exit(1)
}

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
}

async function listRecords() {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records?per_page=100`,
    { headers },
  )
  const data = await res.json()
  if (!data.success) {
    throw new Error(data.errors?.map((e) => e.message).join('; ') ?? 'Failed to list DNS records')
  }
  return data.result
}

async function upsertRecord(spec) {
  const fqdn = spec.name === '@' ? 'syncrobrain.com' : `${spec.name}.syncrobrain.com`
  const existing = (await listRecords()).find((r) => r.type === spec.type && r.name === fqdn)

  const body = {
    type: spec.type,
    name: spec.name,
    content: spec.content,
    proxied: spec.proxied,
    ttl: 1,
  }

  if (existing && existing.content === spec.content && existing.proxied === spec.proxied) {
    console.log(`OK  ${spec.name || '@'} → ${spec.content} (unchanged)`)
    return existing
  }

  const url = existing
    ? `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records/${existing.id}`
    : `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`

  const res = await fetch(url, {
    method: existing ? 'PUT' : 'POST',
    headers,
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!data.success) {
    throw new Error(
      `${existing ? 'Update' : 'Create'} ${spec.name || '@'} failed: ${data.errors?.map((e) => e.message).join('; ')}`,
    )
  }
  console.log(`${existing ? 'Updated' : 'Created'} ${spec.name || '@'} → ${spec.content}`)
  return data.result
}

for (const spec of records) {
  await upsertRecord(spec)
}

console.log('\nDNS records configured. Custom domains should become active within a few minutes.')
