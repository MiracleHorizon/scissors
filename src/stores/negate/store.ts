import { create } from 'zustand'

import { DEFAULT_NEGATE } from '@libs/Sharp'
import type { Store } from './types'

export const useNegateStore = create<Store>((set, get) => ({
  // State
  ...DEFAULT_NEGATE,

  // Computed
  getNegateOptions: () => {
    if (!get().value) {
      return null
    }

    return {
      value: get().value,
      alpha: get().alpha
    }
  },

  // Actions
  reset: () => set(DEFAULT_NEGATE),
  toggleValue: () =>
    set(state => {
      const updatedValue = !state.value

      // Reset alpha if value is false
      if (!updatedValue) {
        return {
          value: updatedValue,
          alpha: DEFAULT_NEGATE.alpha
        }
      }

      return {
        value: updatedValue
      }
    }),
  toggleAlpha: () =>
    set(state => {
      if (!state.value) {
        return state
      }

      return {
        alpha: !state.alpha
      }
    })
}))
