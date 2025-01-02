import { create, type StateCreator } from 'zustand'

import { DEFAULT_NEGATE, type NegateOptions } from '@scissors/sharp'

/* eslint-disable no-unused-vars */
interface Store extends NegateOptions {
  getNegateOptions: () => NegateOptions | null

  set: (options: NegateOptions | null) => void
  reset: VoidFunction
  toggleValue: VoidFunction
  toggleAlpha: VoidFunction
}

export const defaultState = DEFAULT_NEGATE

const negateStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  getNegateOptions: () => {
    if (!get().value) {
      return null
    }

    return {
      value: get().value,
      alpha: get().alpha
    }
  },

  // Actions
  set: options => {
    if (!options) {
      return set(defaultState)
    }

    set(options)
  },
  reset: () => set(defaultState),

  toggleValue: () =>
    set(state => {
      const updatedValue = !state.value

      // Reset alpha if value is false
      if (!updatedValue) {
        return {
          value: updatedValue,
          alpha: defaultState.alpha
        }
      }

      return {
        value: updatedValue
      }
    }),
  toggleAlpha: () =>
    set(state => {
      if (!state.value) {
        return state
      }

      return {
        alpha: !state.alpha
      }
    })
})

export const createNegateStore = () => create<Store>()(negateStoreCreator)

export const useNegateStore = createNegateStore()
