import { create } from 'zustand'

import type { State, Store } from './types'

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
  getModulateOptions: () => ({
    lightness: get().lightness,
    brightness: get().brightness,
    saturation: get().saturation,
    hue: get().hue
  }),

  // Actions
  add: () => set({ isAdded: true }),
  remove: () => set({ ...defaultState }),

  setLightness: value => set({ lightness: value }),
  setBrightness: value => set({ brightness: value }),
  setSaturation: value => set({ saturation: value }),
  setHue: value => set({ hue: value }),

  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        ...defaultState,
        isAdded: true
      }
    })
}))
