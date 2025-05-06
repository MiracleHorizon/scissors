import { create, type StateCreator } from 'zustand'

import type { RotateOptions } from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getRotateOptions: () => RotateOptions | null

  set: (options: RotateOptions | null) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setAngle: (angle: number | null) => void
  setBackground: (background: string) => void
}

interface State {
  isAdded: boolean
  angle: number | null
  background: string | null
}

export const defaultRotation: Omit<State, 'isAdded'> = {
  angle: null,
  background: null
} as const
export const defaultState: State = {
  isAdded: false,
  ...defaultRotation
} as const

const rotateStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  getRotateOptions: () => {
    const { isAdded, angle, background } = get()

    /*
     * Falsy angle value (null or 0) is not available.
     */
    if (!isAdded || !angle) {
      return null
    }

    return {
      angle,
      background
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
    })
})

export const createRotateStore = () => create<Store>()(rotateStoreCreator)

export const useRotateStore = createRotateStore()
