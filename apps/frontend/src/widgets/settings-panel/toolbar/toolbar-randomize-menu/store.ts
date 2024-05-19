import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { array, boolean, object, string } from 'yup'

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

export const defaultSettings: Setting[] = [
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
  },
  {
    label: 'normalise',
    checked: false
  }
] as const

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
      name: 'scissors-randomize-settings',
      merge: mergeState
    }
  )
)

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

export function isSettingsValid(settings: unknown): boolean {
  const optionSchema = object({
    label: string()
      .oneOf(defaultSettings.map(s => s.label))
      .defined()
      .required(),
    checked: boolean().defined().required()
  })
  const settingsSchema = array(optionSchema).length(defaultSettings.length).defined().required()

  return settingsSchema.isValidSync(settings)
}
