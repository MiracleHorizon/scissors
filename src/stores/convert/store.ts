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

    // Computed
    getConvertSettings: () => ({
      flip: get().flip,
      flop: get().flop
    }),

    // Actions
    setFile: file => set({ file }),
    removeFile: () => set({ file: null }),

    setDownloadPayload: downloadPayload => set({ downloadPayload }),
    removeDownloadPayload: () => set({ downloadPayload: null }),

    toggleFlip: () => set(state => ({ flip: !state.flip })),
    toggleFlop: () => set(state => ({ flop: !state.flop }))
  }))
)
