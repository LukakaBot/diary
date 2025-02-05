export function joinUrl(path?: string) {
  const baseUrl = import.meta.env.PUBLIC_SITE_BASE_URL
  return path ? `${baseUrl}${path}` : baseUrl
}
