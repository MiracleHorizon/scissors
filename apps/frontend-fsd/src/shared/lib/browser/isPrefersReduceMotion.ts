const MEDIA_QUERY_SELECTOR = '(prefers-reduced-motion: reduce)'

export const isPrefersReduceMotion = (): boolean => window.matchMedia(MEDIA_QUERY_SELECTOR).matches
