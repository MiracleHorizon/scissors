const MEDIA_QUERY_SELECTOR = '(prefers-reduced-motion: reduce)'

export function isPrefersReduceMotion(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia(MEDIA_QUERY_SELECTOR).matches
}
