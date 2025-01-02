import { TOUR_LS_KEY } from './constants'

export const completeTour = () => {
  localStorage.setItem(TOUR_LS_KEY, 'true')
  /*
   * Trigger storage event to mark tour as completed.
   */
  const event = new StorageEvent('storage', {
    key: TOUR_LS_KEY,
    newValue: 'true'
  })
  window.dispatchEvent(event)
}

export const isTourCompleted = (): boolean => localStorage.getItem(TOUR_LS_KEY) !== null
