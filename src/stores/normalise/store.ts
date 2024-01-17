import { create } from 'zustand'

import { DEFAULT_NORMALISE } from '@server/sharp'
import type { Store } from './types'

export const useNormaliseStore = create<Store>((set, get) => ({
  // State
  isAdded: false,
  ...DEFAULT_NORMALISE,

  // Computed
  getNormaliseOptions: () => {
    if (!get().isAdded) {
      return null
    }

    return {
      lower: get().lower,
      upper: get().upper
    }
  },

  // Actions
  set: options => {
    const isAdded = options !== null

    set({ ...options, isAdded })
  },
  add: () => set({ isAdded: true }),
  remove: () => set({ isAdded: false, ...DEFAULT_NORMALISE }),
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        ...DEFAULT_NORMALISE
      }
    }),
  setLower: lower =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        lower
      }
    }),
  setUpper: upper =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        upper
      }
    })
}))
