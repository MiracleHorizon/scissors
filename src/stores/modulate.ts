import { create } from 'zustand'

import type { ModulateOptions } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getModulateOptions: () => ModulateOptions | null

  set: (options: ModulateOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setLightness: (value: number | null) => void
  setBrightness: (value: number | null) => void
  setSaturation: (value: number | null) => void
  setHue: (value: number | null) => void
}

interface State extends ModulateOptions {
  isAdded: boolean
}

const defaultState: State = {
  isAdded: false,
  lightness: null,
  brightness: null,
  saturation: null,
  hue: null
}

export const useModulateStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getModulateOptions: () => {
    const { isAdded, lightness, brightness, saturation, hue } = get()

    if (!isAdded) {
      return null
    }

    const options: ModulateOptions = {
      lightness,
      brightness,
      saturation,
      hue
    }

    const isAllNullable = Object.values(options).every(value => value === null)
    if (isAllNullable) {
      return null
    }

    return options
  },

  // Actions
  set: options => {
    if (!options) {
      return set(defaultState)
    }

    /*
     * This method is only used for external import of settings. By default - the option is disabled.
     * Therefore, if the imported options are not equal to null, you need to set the 'isAdded' flag to true.
     */
    set({
      isAdded: true,
      ...options
    })
  },
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        ...defaultState,
        isAdded: true
      }
    }),

  add: () => set({ isAdded: true }),
  remove: () => set({ ...defaultState }),

  setLightness: value => set({ lightness: value }),
  setBrightness: value => set({ brightness: value }),
  setSaturation: value => set({ saturation: value }),
  setHue: value => set({ hue: value })
}))
