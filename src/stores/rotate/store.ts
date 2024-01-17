import { create } from 'zustand'

import { DEFAULT_ROTATE, DEFAULT_ROTATE_ANGLE, DEFAULT_ROTATE_BACKGROUND } from '@server/sharp'
import type { State, Store } from './types'

const defaultState: State = {
  isAdded: false,
  ...DEFAULT_ROTATE
}

export const useRotateStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getRotateOptions: () => {
    if (!get().isAdded) {
      return null
    }

    return {
      angle: get().angle ?? DEFAULT_ROTATE_ANGLE,
      background: get().background ?? DEFAULT_ROTATE_BACKGROUND,
      withDominantBackground: get().withDominantBackground
    }
  },

  // Actions
  set: options => {
    const isAdded = options !== null

    set({ ...options, isAdded })
  },
  add: () =>
    set({
      isAdded: true,
      ...DEFAULT_ROTATE
    }),
  remove: () => set(defaultState),
  reset: () => {
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        ...DEFAULT_ROTATE,
        isAdded: true
      }
    })
  },
  setAngle: angle =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        angle
      }
    }),
  setBackground: background =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        background
      }
    }),
  toggleDominantBackground: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        withDominantBackground: !state.withDominantBackground
      }
    })
}))
