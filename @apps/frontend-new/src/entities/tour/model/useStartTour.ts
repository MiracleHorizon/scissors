import { useEffect } from 'react'

import { isTourCompleted } from '../lib/utils'
// import { createTour } from './createTour'
// import '@lib/tour/tour.css'

// TODO: Доделать
export const useStartTour = () => {
  useEffect(() => {
    if (isTourCompleted()) return

    /*
     * Start user tour.
     */
    // createTour().then(driver => {
    //   void driver.drive()
    // })
  }, [])
}
