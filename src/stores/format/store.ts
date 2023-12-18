import { create } from 'zustand'

import type { State, Store } from './types'
import { ConvertFormat } from '@libs/Sharp'

const defaultState: State = {
  format: ConvertFormat.PNG
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
