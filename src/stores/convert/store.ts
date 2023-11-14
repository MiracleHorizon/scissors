import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import type { Store } from './types'

export const useConvertStore = create(
  devtools<Store>((set, get) => ({
    // State
    file: null,
    downloadPayload: null,

    flip: false,
    flop: false,
    negate: null,

    // Computed
    getConvertSettings: () => ({
      flip: get().flip,
      flop: get().flop,
      negate: get().negate
    }),

    // Actions
    setFile: file => set({ file }),
    removeFile: () => set({ file: null }),

    setDownloadPayload: downloadPayload => set({ downloadPayload }),
    removeDownloadPayload: () => set({ downloadPayload: null }),

    toggleFlip: () => set(state => ({ flip: !state.flip })),
    toggleFlop: () => set(state => ({ flop: !state.flop })),
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
      })
  }))
)
