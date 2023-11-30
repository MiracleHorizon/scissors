import { create } from 'zustand'

import type { State, Store } from './types'

const defaultState: State = {
  format: null
}

export const useFormatStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getFormatOptions: () => get().format,

  // Actions
  setFormat: format => set({ format }),
  reset: () => set({ ...defaultState })
}))
