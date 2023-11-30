import { create } from 'zustand'

import { DEFAULT_GAMMA } from '@libs/Sharp'
import type { Store } from './types'

export const useGammaStore = create<Store>(set => ({
  // State
  isAdded: false,
  gamma: null,

  // Actions
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
