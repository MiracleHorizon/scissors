import { create } from 'zustand'

import { DEFAULT_NORMALISE, type NormaliseOptions } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getNormaliseOptions: () => NormaliseOptions | null

  set: (options: NormaliseOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setLower: (lower: number) => void
  setUpper: (upper: number) => void
}

interface State extends NormaliseOptions {
  isAdded: boolean
}

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
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        ...DEFAULT_NORMALISE
      }
    }),

  add: () => set({ isAdded: true }),
  remove: () => set({ isAdded: false, ...DEFAULT_NORMALISE }),

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
