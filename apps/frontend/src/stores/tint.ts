import { create } from 'zustand'

import { DEFAULT_TINT_COLOR } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  set: (color: string | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setColor: (color: string) => void
}

interface State {
  isAdded: boolean
  color: string | null
}

const defaultState: State = {
  isAdded: false,
  color: null
} as const

export const useTintStore = create<Store>(set => ({
  // State
  ...defaultState,

  // Actions
  set: color => {
    if (!color) {
      return set(defaultState)
    }

    set({ color, isAdded: true })
  },
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        color: DEFAULT_TINT_COLOR
      }
    }),

  add: () =>
    set({
      isAdded: true,
      color: DEFAULT_TINT_COLOR
    }),
  remove: () => set({ isAdded: false, color: null }),

  setColor: color => set({ color })
}))
