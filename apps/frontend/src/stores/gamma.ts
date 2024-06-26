import { create, type StateCreator } from 'zustand'

import { DEFAULT_GAMMA, type GammaValue, MIN_GAMMA } from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getGammaValue: () => GammaValue

  set: (gamma: GammaValue) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setValue: (value: GammaValue) => void
}

interface State {
  isAdded: boolean
  gamma: number | null
}

export const defaultState: State = {
  isAdded: false,
  gamma: null
} as const

const gammaStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  getGammaValue: () => {
    const { gamma, isAdded } = get()

    if (!isAdded) {
      return null
    }

    /*
     * The user can add a gamma option and reset it to null in the input field (so the value here will be null).
     * So, if the value is null and 'isAdded' flag is set to true, we return the default value.
     */
    return gamma ?? MIN_GAMMA
  },

  // Actions
  set: gamma => {
    /*
     * This method is only used for external import of settings. By default - the option is disabled.
     * Therefore, if the imported options are not equal to null, you need to set the 'isAdded' flag to true.
     */

    if (gamma === null) {
      return set({
        isAdded: false,
        gamma: null
      })
    }

    set({
      isAdded: true,
      gamma
    })
  },
  reset: () =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        gamma: DEFAULT_GAMMA
      }
    }),

  add: () =>
    set({
      isAdded: true,
      gamma: DEFAULT_GAMMA
    }),
  remove: () =>
    set({
      isAdded: false,
      gamma: null
    }),

  setValue: gamma =>
    set(state => {
      if (!state.isAdded) {
        return state
      }

      return {
        gamma
      }
    })
})

export const createGammaStore = () => create<Store>()(gammaStoreCreator)

export const useGammaStore = createGammaStore()
