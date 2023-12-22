import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { DEFAULT_FLIP, DEFAULT_FLOP, DEFAULT_GRAYSCALE } from '@server/Sharp'
import type { Settings, Store } from './types'

const defaultState: Settings = {
  flip: DEFAULT_FLIP,
  flop: DEFAULT_FLOP,
  grayscale: DEFAULT_GRAYSCALE
}

export const useConvertStore = create(
  devtools<Store>((set, get) => ({
    // State
    ...defaultState,

    // Computed
    getConvertSettings: () => ({
      flip: get().flip,
      flop: get().flop,
      grayscale: get().grayscale
    }),

    // Actions
    reset: () => set(defaultState),

    toggleFlip: () => set(state => ({ flip: !state.flip })),
    toggleFlop: () => set(state => ({ flop: !state.flop })),
    toggleGrayscale: () => set(state => ({ grayscale: !state.grayscale }))
  }))
)
