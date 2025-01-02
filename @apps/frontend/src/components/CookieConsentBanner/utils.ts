import { isTourCompleted as isTourCompletedCheck } from '@lib/tour'

export const COOKIE_CONSENT_LS_KEY = 'scissors-cookie-consent'

export const acceptCookies = () =>
  localStorage.setItem(
    COOKIE_CONSENT_LS_KEY,
    JSON.stringify({
      accepted: true
    })
  )

export const isAccepted = () => !!localStorage.getItem(COOKIE_CONSENT_LS_KEY)

export const isVisibleCheck = (): boolean => {
  /*
   * Check if already accepted.
   */
  if (isAccepted()) {
    return false
  }

  /*
   * Banner can be shown only once and only if user tour is completed.
   */
  const isTourCompleted = isTourCompletedCheck()
  if (!isTourCompleted) {
    return false
  }

  return isTourCompleted && !isAccepted()
}
