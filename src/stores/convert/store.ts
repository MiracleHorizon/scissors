import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import {
  DEFAULT_ROTATE_ANGLE,
  DEFAULT_ROTATE_BACKGROUND,
  MAX_NORMALISE,
  MIN_BLUR_SIGMA,
  MIN_GAMMA,
  MIN_NORMALISE
} from '@libs/Sharp'
import type { Store } from './types'

export const useConvertStore = create(
  devtools<Store>((set, get) => ({
    // State
    file: null,
    downloadPayload: null,

    flip: false,
    flop: false,
    grayscale: false,
    negate: null,
    normalise: null,
    blur: null,
    rotate: null,
    gamma: null,

    // Computed
    getConvertSettings: () => ({
      flip: get().flip,
      flop: get().flop,
      grayscale: get().grayscale,
      negate: get().negate,
      normalise: get().normalise,
      blur: get().blur,
      rotate: get().rotate,
      gamma: get().gamma
    }),

    // Actions
    setFile: file => set({ file }),
    removeFile: () => set({ file: null }),

    setDownloadPayload: downloadPayload => set({ downloadPayload }),
    removeDownloadPayload: () => set({ downloadPayload: null }),

    toggleFlip: () => set(state => ({ flip: !state.flip })),
    toggleFlop: () => set(state => ({ flop: !state.flop })),
    toggleGrayscale: () => set(state => ({ grayscale: !state.grayscale })),

    /* Negate */
    toggleNegate: () =>
      set(state => {
        if (!state.negate) {
          return {
            negate: {
              value: true,
              alpha: true
            }
          }
        }

        const alpha = state.negate.alpha
        const updatedValue = !state.negate.value

        if (!updatedValue && alpha) {
          return {
            negate: {
              value: updatedValue,
              alpha: false
            }
          }
        }

        return {
          negate: {
            value: updatedValue,
            alpha
          }
        }
      }),
    toggleNegateAlpha: () =>
      set(state => {
        if (!state.negate || !state.negate.value) {
          return {
            negate: {
              value: true,
              alpha: true
            }
          }
        }

        return {
          negate: {
            value: state.negate.value,
            alpha: !state.negate.alpha
          }
        }
      }),

    /* Normalise */
    addNormalise: () =>
      set({
        normalise: {
          lower: MIN_NORMALISE,
          upper: MAX_NORMALISE
        }
      }),
    removeNormalise: () => set({ normalise: null }),
    setLowerNormalise: lower =>
      set(state => ({
        normalise: {
          lower,
          upper: state.normalise?.upper ?? MAX_NORMALISE
        }
      })),
    setUpperNormalise: upper =>
      set(state => ({
        normalise: {
          upper,
          lower: state.normalise?.lower ?? MIN_NORMALISE
        }
      })),

    /* Blur */
    toggleBlur: () =>
      set(state => {
        const blur = state.blur

        if (!blur) {
          return {
            blur: {
              value: true,
              sigma: null
            }
          }
        }

        return {
          blur: {
            ...blur,
            value: !blur.value
          }
        }
      }),
    addBlurSigma: () =>
      set(state => {
        const blur = state.blur

        if (!blur || !blur.value) {
          return state
        }

        return {
          blur: {
            value: true,
            sigma: MIN_BLUR_SIGMA
          }
        }
      }),
    removeBlurSigma: () => {
      set(state => {
        const blur = state.blur

        if (!blur) {
          return state
        }

        return {
          blur: {
            ...blur,
            sigma: null
          }
        }
      })
    },
    setBlurSigma: sigma =>
      set(state => {
        const blur = state.blur

        if (!blur || !blur.value) {
          return state
        }

        return {
          blur: {
            ...blur,
            sigma
          }
        }
      }),

    /* Rotate */
    addRotate: () =>
      set({
        rotate: {
          angle: DEFAULT_ROTATE_ANGLE,
          background: DEFAULT_ROTATE_BACKGROUND
        }
      }),
    removeRotate: () =>
      set({
        rotate: null
      }),
    setRotateAngle: angle =>
      set(state => {
        const rotate = state.rotate

        if (!rotate) {
          return {
            rotate: {
              angle,
              background: DEFAULT_ROTATE_BACKGROUND
            }
          }
        }

        return {
          rotate: {
            angle,
            background: rotate.background
          }
        }
      }),
    setRotateBackground: background =>
      set(state => {
        const rotate = state.rotate

        if (!rotate) {
          return state
        }

        return {
          rotate: {
            ...rotate,
            background
          }
        }
      }),

    /* Gamma */
    addGamma: () => set({ gamma: { value: MIN_GAMMA } }),
    removeGamma: () => set({ gamma: null }),
    setGamma: gamma => set({ gamma: { value: gamma } })
  }))
)
