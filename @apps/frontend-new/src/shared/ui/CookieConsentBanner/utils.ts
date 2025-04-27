import { isTourCompleted } from '@/features/tour'

export const COOKIE_CONSENT_LOCALSTORAGE_KEY = 'scissors-cookie-consent'

export const acceptCookies = () => localStorage.setItem(COOKIE_CONSENT_LOCALSTORAGE_KEY, 'true')
export const isCookiesAccepted = () => !!localStorage.getItem(COOKIE_CONSENT_LOCALSTORAGE_KEY)
export const isCookiesBannerVisible = (): boolean => {
  /*
   * Banner can be shown only once and only if user tour is completed
   * and cookies haven't been accepted yet.
   */
  return isTourCompleted() && !isCookiesAccepted()
}
