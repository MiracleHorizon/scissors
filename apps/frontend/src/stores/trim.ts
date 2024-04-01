import { create, type StateCreator } from 'zustand'

import { DEFAULT_TRIM_LINE_ART, DEFAULT_TRIM_THRESHOLD, type TrimOptions } from '@scissors/sharp'

/* eslint-disable no-unused-vars */
interface Store extends TrimOptions {
  getTrimOptions: () => TrimOptions | null

  set: (options: TrimOptions | null) => void
  reset: VoidFunction
  setBackground: (background: string | null) => void
  setThreshold: (threshold: number | null) => void
  toggleLineArt: VoidFunction
}

export const defaultState: TrimOptions = {
  background: null,
  threshold: DEFAULT_TRIM_THRESHOLD,
  lineArt: DEFAULT_TRIM_LINE_ART
} as const

const trimStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  getTrimOptions: () => ({
    background: get().background,
    threshold: get().threshold,
    lineArt: get().lineArt
  }),

  // Actions
  set: options => {
    if (!options) {
      return set(defaultState)
    }

    set(options)
  },
  reset: () => set(defaultState),

  setBackground: background => set({ background }),
  setThreshold: threshold => set({ threshold }),
  toggleLineArt: () => set(state => ({ lineArt: !state.lineArt }))
})

export const createTrimStore = () => create<Store>()(trimStoreCreator)

export const useTrimStore = createTrimStore()
