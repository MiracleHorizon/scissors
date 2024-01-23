import { create } from 'zustand'

import { DEFAULT_ROTATE, type RotateOptions } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getRotateOptions: () => RotateOptions | null

  set: (options: RotateOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setAngle: (angle: number) => void
  setBackground: (background: string) => void
  toggleDominantBackground: VoidFunction
}

interface State {
  isAdded: boolean
  angle: number | null
  background: string | null
  withDominantBackground: boolean
}

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

    const angle = get().angle
    if (!angle) {
      return null
    }

    return {
      angle,
      background: get().background,
      withDominantBackground: get().withDominantBackground
    }
  },

  // Actions
  set: options => {
    const isAdded = options !== null

    set({ ...options, isAdded })
  },
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

  add: () =>
    set({
      isAdded: true,
      ...DEFAULT_ROTATE
    }),
  remove: () => set(defaultState),

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
