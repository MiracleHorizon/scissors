import { create } from 'zustand'

import { type BlurOptions, DEFAULT_BLUR, MIN_BLUR_SIGMA } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends BlurOptions {
  getBlurOptions: () => BlurOptions | null

  set: (options: BlurOptions | null) => void
  reset: VoidFunction
  toggle: VoidFunction
  addSigma: VoidFunction
  removeSigma: VoidFunction
  setSigma: (sigma: number) => void
}

export const useBlurStore = create<Store>((set, get) => ({
  // State
  ...DEFAULT_BLUR,

  // Computed
  getBlurOptions: () => {
    if (!get().value) {
      return null
    }

    return {
      value: get().value,
      sigma: get().sigma
    }
  },

  // Actions
  set: options => set({ ...(options ?? DEFAULT_BLUR) }),
  reset: () => set({ ...DEFAULT_BLUR }),

  toggle: () =>
    set(state => ({
      value: !state.value
    })),
  addSigma: () =>
    set(state => {
      if (!state.value) {
        return state
      }

      return {
        sigma: MIN_BLUR_SIGMA
      }
    }),
  removeSigma: () => set({ sigma: null }),
  setSigma: sigma =>
    set(state => {
      if (!state.value) {
        return state
      }

      return {
        sigma
      }
    })
}))
