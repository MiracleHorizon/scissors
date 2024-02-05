import { create } from 'zustand'

import { DEFAULT_NEGATE, type NegateOptions } from '@server/sharp'

/* eslint-disable no-unused-vars */
interface Store extends NegateOptions {
  getNegateOptions: () => NegateOptions | null

  set: (options: NegateOptions | null) => void
  reset: VoidFunction
  toggleValue: VoidFunction
  toggleAlpha: VoidFunction
}

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
  set: options => {
    if (!options) {
      return get().reset()
    }

    set(options)
  },
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
