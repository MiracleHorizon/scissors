export function getMetadataBase(): URL {
  const METADATA_BASE_FALLBACK = 'http://localhost:3000'
  return new URL(process.env.METADATA_BASE || METADATA_BASE_FALLBACK)
}
