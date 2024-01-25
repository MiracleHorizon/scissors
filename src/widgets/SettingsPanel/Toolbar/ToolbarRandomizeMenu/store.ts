import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { MAX_OPERATIONS } from './constants'
import type { Label, Setting } from './types'

/* eslint no-unused-vars: 0 */
interface Store {
  settings: Setting[]

  isMaxOperations: () => boolean
  getTotalChecked: () => number
  getCheckedSettings: () => Setting[]

  toggleSettingChecked: (label: Label) => void
}

const defaultSettings: Setting[] = [
  {
    label: 'flip',
    checked: true
  },
  {
    label: 'flop',
    checked: false
  },
  {
    label: 'grayscale',
    checked: false
  },
  {
    label: 'negate',
    checked: false
  },
  {
    label: 'blur',
    checked: true
  },
  {
    label: 'rotate',
    checked: true
  },
  {
    label: 'modulate',
    checked: false
  },
  {
    label: 'gamma',
    checked: true
  },
  {
    label: 'tint',
    checked: false
  }
]

// TODO: Rehydrate with DOM event: https://docs.pmnd.rs/zustand/integrations/persisting-store-data#how-can-i-rehydrate-on-storage-event
export const useRandomizeStore = create(
  persist<Store>(
    (set, get) => ({
      settings: defaultSettings,

      isMaxOperations: () => get().getTotalChecked() >= MAX_OPERATIONS,
      getTotalChecked: () => get().getCheckedSettings().length,
      getCheckedSettings: () => get().settings.filter(s => s.checked),

      toggleSettingChecked: label =>
        set(state => {
          const totalChecked = state.getTotalChecked()

          const settings = state.settings.map(setting => {
            if (setting.label !== label) {
              return setting
            }

            const updatedValue = !setting.checked

            if (totalChecked === MAX_OPERATIONS && updatedValue) {
              return setting
            }

            /*
             * At least one option must always be checked.
             */
            if (totalChecked === 1 && !updatedValue) {
              return setting
            }

            return {
              ...setting,
              checked: updatedValue
            }
          })

          return {
            settings
          }
        })
    }),
    {
      name: 'scissors-randomize-settings'
    }
  )
)
