import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { DEFAULT_FLIP, DEFAULT_FLOP, DEFAULT_GRAYSCALE } from '@libs/Sharp'
import type { Settings, Store } from './types'

const defaultSettingsState: Settings = {
  flip: DEFAULT_FLIP,
  flop: DEFAULT_FLOP,
  grayscale: DEFAULT_GRAYSCALE
}

export const useConvertStore = create(
  devtools<Store>((set, get) => ({
    // State
    file: null,
    downloadPayload: null,
    ...defaultSettingsState,

    // Computed
    getConvertSettings: () => ({
      flip: get().flip,
      flop: get().flop,
      grayscale: get().grayscale
    }),

    // Actions
    resetSettings: () => set(defaultSettingsState),

    setFile: file => set({ file }),
    removeFile: () => set({ file: null }),

    setDownloadPayload: downloadPayload => set({ downloadPayload }),
    removeDownloadPayload: () => set({ downloadPayload: null }),

    toggleFlip: () => set(state => ({ flip: !state.flip })),
    toggleFlop: () => set(state => ({ flop: !state.flop })),
    toggleGrayscale: () => set(state => ({ grayscale: !state.grayscale }))
  }))
)
