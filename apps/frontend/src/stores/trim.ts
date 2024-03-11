import { create } from 'zustand'

import { DEFAULT_TRIM_THRESHOLD, type TrimOptions } from '@server/sharp'

/* eslint-disable no-unused-vars */
interface Store extends TrimOptions {
  getTrimOptions: () => TrimOptions | null

  set: (options: TrimOptions | null) => void
  reset: VoidFunction
  setBackground: (background: string | null) => void
  setThreshold: (threshold: number | null) => void
  // sharp v0.33.2
  // toggleLineArt: VoidFunction
}

const defaultState: TrimOptions = {
  background: null,
  threshold: DEFAULT_TRIM_THRESHOLD
  // sharp v0.33.2
  // lineArt: DEFAULT_TRIM_LINE_ART
} as const

export const useTrimStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getTrimOptions: () => ({
    background: get().background,
    threshold: get().threshold
    // sharp v0.33.2
    // lineArt: get().lineArt
  }),

  // Actions
  set: options => {
    if (!options) return

    set(options)
  },
  reset: () => set(defaultState),

  setBackground: background => set({ background }),
  setThreshold: threshold => set({ threshold })
  // sharp v0.33.2
  // toggleLineArt: () => set(state => ({ lineArt: !state.lineArt })),
}))
