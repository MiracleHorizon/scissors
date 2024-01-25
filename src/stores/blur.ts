import { create } from 'zustand'

import { type BlurOptions, DEFAULT_BLUR, MIN_BLUR_SIGMA } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getBlurOptions: () => BlurOptions | null

  set: (options: BlurOptions | null) => void
  reset: VoidFunction
  toggle: VoidFunction
  addSigma: VoidFunction
  removeSigma: VoidFunction
  setSigma: (sigma: number | null) => void
}

interface State extends BlurOptions {
  isSigmaAdded: boolean
}

const defaultState: State = {
  ...DEFAULT_BLUR,
  isSigmaAdded: false
}

export const useBlurStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getBlurOptions: () => {
    const { value, sigma, isSigmaAdded } = get()

    if (!value) {
      return null
    }

    const getSigma = () => {
      if (!isSigmaAdded) {
        return null
      }

      if (isSigmaAdded && sigma === null) {
        return MIN_BLUR_SIGMA
      }

      return sigma
    }

    return {
      value,
      /*
       * The user can add a blur sigma option and reset it to null in the input field (so the value here will be null).
       * So, if the value is null and 'isSigmaAdded' flag is set to true, we return the min sigma value.
       */
      sigma: getSigma()
    }
  },

  // Actions
  set: options => {
    if (!options) return

    const { value, sigma } = options

    if (!value) {
      return set({
        value,
        isSigmaAdded: false,
        sigma: null
      })
    }

    set({
      value,
      isSigmaAdded: sigma !== null,
      sigma
    })
  },
  reset: () => set({ ...defaultState }),

  toggle: () =>
    set(state => ({
      value: !state.value
    })),
  addSigma: () =>
    set(state => {
      if (!state.value) {
        return state
      }

      return {
        isSigmaAdded: true,
        sigma: MIN_BLUR_SIGMA
      }
    }),
  removeSigma: () =>
    set({
      isSigmaAdded: false,
      sigma: null
    }),
  setSigma: sigma =>
    set(state => {
      if (!state.value || !state.isSigmaAdded) {
        return state
      }

      return {
        sigma
      }
    })
}))
