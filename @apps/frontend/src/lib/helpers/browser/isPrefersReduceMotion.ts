import { isServer } from '@helpers/isServer'

const MEDIA_QUERY_SELECTOR = '(prefers-reduced-motion: reduce)'

export const isPrefersReduceMotion = (): boolean => {
  if (isServer()) {
    return false
  }

  return window.matchMedia(MEDIA_QUERY_SELECTOR).matches
}
