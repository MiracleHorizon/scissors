import { useCallback } from 'react'

import { useSettingsSetters } from './useSettingsSetters'
import { ConvertSettingsRandomizer, type Operation } from '@utility/ConvertSettingsRandomizer'

export function useRandomizeSettings() {
  const { setters } = useSettingsSetters()

  const handleRandomize = useCallback(
    (operations: Operation[]) => {
      const settingsRandomizer = new ConvertSettingsRandomizer(operations)
      const randomSettings = settingsRandomizer.randomize()

      for (const [key, value] of Object.entries(randomSettings)) {
        if (!(key in setters)) continue

        // eslint-disable-next-line
        // @ts-expect-error
        setters[key](value)
      }
    },
    [setters]
  )

  return { handleRandomize }
}
