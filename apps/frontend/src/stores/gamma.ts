import { create } from 'zustand'

import { DEFAULT_GAMMA, type GammaValue, MIN_GAMMA } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getGammaOptions: () => GammaValue

  set: (options: GammaValue) => void
  reset: VoidFunction
  add: VoidFunction
  remove: VoidFunction
  setValue: (value: GammaValue) => void
}

interface State {
  isAdded: boolean
  gamma: number | null
}

const defaultState: State = {
  isAdded: false,
  gamma: null
}

export const useGammaStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getGammaOptions: () => {
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
    if (!gamma) return

    /*
     * This method is only used for external import of settings. By default - the option is disabled.
     * Therefore, if the imported options are not equal to null, you need to set the 'isAdded' flag to true.
     */
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
}))
