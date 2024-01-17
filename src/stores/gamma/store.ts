import { create } from 'zustand'

import { DEFAULT_GAMMA } from '@server/sharp'
import type { Store } from './types'

export const useGammaStore = create<Store>(set => ({
  // State
  isAdded: false,
  gamma: null,

  // Actions
  set: options => {
    const isAdded = options !== null

    set({ gamma: options, isAdded })
  },
  add: () =>
    set({
      isAdded: true,
      gamma: DEFAULT_GAMMA
    }),
  remove: () =>
    set({
      isAdded: false,
      gamma: null
    }),
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        gamma: DEFAULT_GAMMA
      }
    }),
  setValue: gamma =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        gamma: {
          value: gamma
        }
      }
    })
}))
