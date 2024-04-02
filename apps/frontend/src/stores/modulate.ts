import { create, type StateCreator } from 'zustand'

import type { ModulateOptions } from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getModulateOptions: () => ModulateOptions | null

  set: (options: ModulateOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setLightness: (value: ModulateOptions['lightness']) => void
  setBrightness: (value: ModulateOptions['brightness']) => void
  setSaturation: (value: ModulateOptions['saturation']) => void
  setHue: (value: ModulateOptions['hue']) => void
}

interface State extends ModulateOptions {
  isAdded: boolean
}

export const defaultState: State = {
  isAdded: false,
  lightness: null,
  brightness: null,
  saturation: null,
  hue: null
} as const

const modulateStoreCreator: StateCreator<Store> = (set, get) => ({
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
  remove: () => set(defaultState),

  setLightness: value => set({ lightness: value }),
  setBrightness: value => set({ brightness: value }),
  setSaturation: value => set({ saturation: value }),
  setHue: value => set({ hue: value })
})

export const createModulateStore = () => create<Store>()(modulateStoreCreator)

export const useModulateStore = createModulateStore()
