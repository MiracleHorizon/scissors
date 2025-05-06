import { create, type StateCreator } from 'zustand'

import { DEFAULT_NORMALIZE, type NormalizeOptions } from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getNormaliseOptions: () => NormalizeOptions | null

  set: (options: NormalizeOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setLower: (lower: number) => void
  setUpper: (upper: number) => void
}

interface State extends NormalizeOptions {
  isAdded: boolean
}

export const defaultState: State = {
  isAdded: false,
  ...DEFAULT_NORMALIZE
} as const

const normaliseStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

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
    if (!options) {
      return set(defaultState)
    }

    set({
      ...options,
      isAdded: true
    })
  },
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return DEFAULT_NORMALIZE
    }),

  add: () => set({ isAdded: true }),
  remove: () => set(defaultState),

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
})

export const createNormaliseStore = () => create<Store>()(normaliseStoreCreator)

export const useNormaliseStore = createNormaliseStore()
