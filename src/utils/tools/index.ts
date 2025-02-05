export function joinUrl(path?: string) {
  const baseUrl = import.meta.env.VITE_PUBLIC_SITE_BASE_URL
  console.error(path ? `${baseUrl}${path}` : baseUrl)
  return path ? `${baseUrl}${path}` : baseUrl
}
