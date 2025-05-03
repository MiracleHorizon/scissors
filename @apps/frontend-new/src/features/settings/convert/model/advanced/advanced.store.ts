import { create, type StateCreator } from 'zustand'

import { MAX_NORMALIZE, MIN_NORMALIZE, type NormalizeOptions } from '@scissors/sharp'

interface State {
  blurSigma: number | null
  normalize: NormalizeOptions
}

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getAdvanced: () => State | null
  reset: () => void
  setBlurSigma: (blurSigma: number | null) => void
  setLowerNormalize: (lower: number) => void
  setUpperNormalize: (upper: number) => void
}

const defaultState: State = {
  blurSigma: null,
  normalize: {
    lower: MIN_NORMALIZE,
    upper: MAX_NORMALIZE
  }
} as const

const advancedStoreCreator: StateCreator<Store> = (set, get) => ({
  ...defaultState,

  getAdvanced: () => {
    const { blurSigma, normalize } = get()

    return {
      blurSigma,
      normalize
    }
  },
  reset: () => set(defaultState),
  setBlurSigma: blurSigma => set({ blurSigma }),
  setLowerNormalize: lower => set({ normalize: { ...get().normalize, lower } }),
  setUpperNormalize: upper => set({ normalize: { ...get().normalize, upper } })
})

export const createAdvancedStore = () => create<Store>()(advancedStoreCreator)
export const useAdvancedStore = createAdvancedStore()
