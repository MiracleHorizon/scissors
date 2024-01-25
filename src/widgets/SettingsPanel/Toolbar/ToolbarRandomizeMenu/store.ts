import { create } from 'zustand'

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

const settings: Setting[] = [
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

export const useRandomizeStore = create<Store>((set, get) => ({
  settings,

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
}))
