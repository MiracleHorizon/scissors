import { create } from 'zustand'

import { DEFAULT_TRIM_LINE_ART, DEFAULT_TRIM_THRESHOLD } from '@server/Sharp'
import type { State, Store } from './types'

const defaultState: State = {
  background: null,
  threshold: DEFAULT_TRIM_THRESHOLD,
  lineArt: DEFAULT_TRIM_LINE_ART
}

export const useTrimStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getTrimOptions: () => ({
    background: get().background,
    threshold: get().threshold,
    lineArt: get().lineArt
  }),

  // Actions
  setBackground: background => set({ background }),
  setThreshold: threshold => set({ threshold }),
  toggleLineArt: () => set(state => ({ lineArt: !state.lineArt })),

  reset: () => set(defaultState)
}))
