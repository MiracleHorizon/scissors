import { create } from 'zustand'

import { DEFAULT_TINT_COLOR } from '@server/sharp'
import type { State, Store } from './types'

const defaultState: State = {
  isAdded: false,
  color: null
}

export const useTintStore = create<Store>(set => ({
  // State
  ...defaultState,

  // Actions
  set: color => {
    const isAdded = color !== null

    set({ color, isAdded })
  },
  add: () =>
    set({
      isAdded: true,
      color: DEFAULT_TINT_COLOR
    }),

  remove: () => set({ isAdded: false, color: null }),
  setColor: color => set({ color }),
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        color: DEFAULT_TINT_COLOR
      }
    })
}))
