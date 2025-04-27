

import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

type OpenResult = Promise<EyeDropperSelectionResult | null>

export const useEyeDropper = () => {
  const [isSupported, setIsSupported] = useState(false)

  const openEyeDropper = useCallback(
    (options?: EyeDropperSelectionOptions): OpenResult => {
      if (!isSupported) {
        return Promise.resolve(null)
      }

      /*
       * WARNING: don't forget to use document.body.classList.remove('eye-dropper-active')
       */
      document.body.classList.add('eye-dropper-active')

      const eyeDropper = new EyeDropper()
      return eyeDropper.open(options)
    },
    [isSupported]
  )

  useLayoutEffect(() => {
    setIsSupported(!!window.EyeDropper)
  }, [])

  useEffect(() => () => document.body.classList.remove('eye-dropper-active'), [])

  return { isSupported, openEyeDropper }
}
