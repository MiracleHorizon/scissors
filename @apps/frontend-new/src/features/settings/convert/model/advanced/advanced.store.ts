import { create, type StateCreator } from 'zustand'

import { DEFAULT_NORMALIZE, DEFAULT_BLUR_SIGMA, type NormalizeOptions } from '@scissors/sharp'

interface State {
  blurSigma: number | null
  normalize: NormalizeOptions
}

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getAdvanced: () => State | null
  getBlurSigma: () => number | null
  getNormalize: () => NormalizeOptions
  reset: () => void
  setBlurSigma: (blurSigma: number | null) => void
  setLowerNormalize: (lower: number) => void
  setUpperNormalize: (upper: number) => void
}

const defaultState: State = {
  blurSigma: DEFAULT_BLUR_SIGMA,
  normalize: DEFAULT_NORMALIZE
} as const

const advancedStoreCreator: StateCreator<Store> = (set, get) => ({
  ...defaultState,

  getAdvanced: () => ({
    blurSigma: get().blurSigma,
    normalize: {
      lower: get().normalize.lower,
      upper: get().normalize.upper
    }
  }),
  getBlurSigma: () => get().blurSigma,
  getNormalize: () => get().normalize,
  reset: () => set(defaultState),
  setBlurSigma: blurSigma => set({ blurSigma }),
  setLowerNormalize: lower => set({ normalize: { ...get().normalize, lower } }),
  setUpperNormalize: upper => set({ normalize: { ...get().normalize, upper } })
})

export const createAdvancedStore = () => create<Store>()(advancedStoreCreator)
export const useAdvancedStore = createAdvancedStore()
