import { create } from 'zustand'

import type { RotateOptions } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getRotateOptions: () => RotateOptions | null

  set: (options: RotateOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setAngle: (angle: number | null) => void
  setBackground: (background: string) => void
  toggleDominantBackground: VoidFunction
}

interface State {
  isAdded: boolean
  angle: number | null
  background: string | null
  withDominantBackground: boolean
}

const defaultRotation: Omit<State, 'isAdded'> = {
  angle: null,
  background: null,
  withDominantBackground: false
} as const
const defaultState: State = {
  isAdded: false,
  ...defaultRotation
} as const

export const useRotateStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getRotateOptions: () => {
    const { isAdded, angle, background, withDominantBackground } = get()

    /*
     * Falsy angle value (null or 0) is not available.
     */
    if (!isAdded || !angle) {
      return null
    }

    return {
      angle,
      background,
      withDominantBackground
    }
  },

  // Actions
  set: options => {
    if (!options) {
      return set(defaultState)
    }

    /*
     * This method is only used for external import of settings. By default - the option is disabled.
     * Therefore, if the imported options are not equal to null, you need to set the 'isAdded' flag to true
     */
    set({
      ...options,
      isAdded: true
    })
  },
  reset: () => {
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        ...defaultRotation,
        isAdded: true
      }
    })
  },

  add: () =>
    set({
      ...defaultRotation,
      isAdded: true
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
