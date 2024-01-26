'use client'

import { useCallback, useLayoutEffect, useState } from 'react'

type OpenResult = Promise<EyeDropperSelectionResult | null>

export function useEyeDropper() {
  const [isSupported, setIsSupported] = useState(false)

  const openEyeDropper = useCallback(
    (options?: EyeDropperSelectionOptions): OpenResult => {
      if (!isSupported) {
        return Promise.resolve(null)
      }

      const eyeDropper = new EyeDropper()
      return eyeDropper.open(options)
    },
    [isSupported]
  )

  useLayoutEffect(() => {
    setIsSupported(!!window.EyeDropper)
  }, [])

  return { isSupported, openEyeDropper }
}
