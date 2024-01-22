import { create } from 'zustand'

import type { ModulateOptions } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getModulateOptions: () => ModulateOptions | null

  set: (options: ModulateOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setLightness: (value: number) => void
  setBrightness: (value: number) => void
  setSaturation: (value: number) => void
  setHue: (value: number) => void
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
    if (!get().isAdded) {
      return null
    }

    const options = {
      lightness: get().lightness,
      brightness: get().brightness,
      saturation: get().saturation,
      hue: get().hue
    }

    if (Object.values(options).every(value => value === null)) {
      return null
    }

    return options
  },

  // Actions
  set: options => {
    const isAdded = options !== null

    set({ ...options, isAdded })
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
