import { create } from 'zustand'

import { DEFAULT_BLUR, MIN_BLUR_SIGMA } from '@server/Sharp'
import type { Store } from './types'

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
  toggle: () =>
    set(state => ({
      value: !state.value
    })),
  reset: () => set({ ...DEFAULT_BLUR }),
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
