import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { defaultSettings, MAX_OPERATIONS } from './constants'
import { SITE_TITLE } from '@site/config'
import { isSettingsValid } from './utility'
import type { Label, Setting } from './types'

/* eslint no-unused-vars: 0 */
interface Store {
  settings: Setting[]

  isMaxOperations: () => boolean
  getTotalChecked: () => number
  getCheckedSettings: () => Setting[]

  toggleSettingChecked: (label: Label) => void
}

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
      name: `${SITE_TITLE.toLowerCase()}-randomize-settings`,
      merge: mergeState
    }
  )
)

// eslint-disable-next-line func-style
export function mergeState<State>(persistedState: unknown, currentState: State): State {
  if (!persistedState) {
    return currentState
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (!('settings' in persistedState)) {
    return currentState
  }

  const settings = persistedState.settings

  const isValid = isSettingsValid(settings)
  if (!isValid) {
    return {
      ...currentState,
      settings: defaultSettings
    }
  }

  const totalChecked = (settings as Setting[]).filter(s => s.checked).length
  if (totalChecked <= MAX_OPERATIONS) {
    return {
      ...currentState,
      settings
    }
  }

  return {
    ...currentState,
    settings: defaultSettings
  }
}
