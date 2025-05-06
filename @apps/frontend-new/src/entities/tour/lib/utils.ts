import { TOUR_LOCALSTORAGE_KEY } from './constants'

export const completeTour = () => {
  localStorage.setItem(TOUR_LOCALSTORAGE_KEY, 'true')
  /*
   * Trigger storage event to mark tour as completed.
   */
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: TOUR_LOCALSTORAGE_KEY,
      newValue: 'true'
    })
  )
}

export const isTourCompleted = (): boolean => localStorage.getItem(TOUR_LOCALSTORAGE_KEY) !== null
