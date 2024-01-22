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
}

export const useTintStore = create<Store>(set => ({
  // State
  ...defaultState,

  // Actions
  set: color => {
    const isAdded = color !== null

    set({ color, isAdded })
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
