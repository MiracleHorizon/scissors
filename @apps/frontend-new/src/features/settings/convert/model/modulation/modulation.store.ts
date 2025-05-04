import { create, type StateCreator } from 'zustand'

import type { ModulateOptions } from '@scissors/sharp'

type State = ModulateOptions

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getModulation: () => ModulateOptions | null
  reset: () => void
  set: (options: ModulateOptions) => void
  setLightness: (value: ModulateOptions['lightness']) => void
  setBrightness: (value: ModulateOptions['brightness']) => void
  setSaturation: (value: ModulateOptions['saturation']) => void
  setHue: (value: ModulateOptions['hue']) => void
}

const defaultState: State = {
  lightness: null,
  brightness: null,
  saturation: null,
  hue: null
} as const

const modulationStoreCreator: StateCreator<Store> = (set, get) => ({
  ...defaultState,

  getModulation: () => {
    const { lightness, brightness, saturation, hue } = get()

    const options: ModulateOptions = {
      lightness,
      brightness,
      saturation,
      hue
    }

    if (Object.values(options).every(value => value === null)) {
      return null
    }

    return options
  },
  set: options => set(options),
  reset: () => set(defaultState),
  setLightness: value => set({ lightness: value }),
  setBrightness: value => set({ brightness: value }),
  setSaturation: value => set({ saturation: value }),
  setHue: value => set({ hue: value })
})

export const createModulationStore = () => create<Store>()(modulationStoreCreator)
export const useModulationStore = createModulationStore()
