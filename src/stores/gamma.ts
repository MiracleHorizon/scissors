import { create } from 'zustand'

import { DEFAULT_GAMMA, type GammaOptions } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store {
  isAdded: boolean
  gamma: GammaOptions | null

  set: (options: GammaOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setValue: (value: number) => void
}

export const useGammaStore = create<Store>(set => ({
  // State
  isAdded: false,
  gamma: null,

  // Actions
  set: options => {
    const isAdded = options !== null

    set({ gamma: options, isAdded })
  },
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        gamma: DEFAULT_GAMMA
      }
    }),

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
