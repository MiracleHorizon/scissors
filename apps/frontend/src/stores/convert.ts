import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import {
  type ConvertSettings,
  DEFAULT_FLIP,
  DEFAULT_FLOP,
  DEFAULT_GRAYSCALE
} from '@scissors/sharp'

type Settings = Pick<ConvertSettings, 'flip' | 'flop' | 'grayscale'>

/* eslint no-unused-vars: 0 */
interface Store extends Settings {
  getConvertSettings: () => Settings

  reset: VoidFunction
  setFlip: (flip: boolean) => void
  setFlop: (flop: boolean) => void
  setGrayscale: (grayscale: boolean) => void
  toggleFlip: VoidFunction
  toggleFlop: VoidFunction
  toggleGrayscale: VoidFunction
}

const defaultState: Settings = {
  flip: DEFAULT_FLIP,
  flop: DEFAULT_FLOP,
  grayscale: DEFAULT_GRAYSCALE
} as const

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

    setFlip: flip => set({ flip }),
    setFlop: flop => set({ flop }),
    setGrayscale: grayscale => set({ grayscale }),

    toggleFlip: () => set(state => ({ flip: !state.flip })),
    toggleFlop: () => set(state => ({ flop: !state.flop })),
    toggleGrayscale: () => set(state => ({ grayscale: !state.grayscale }))
  }))
)
