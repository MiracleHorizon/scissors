import { create } from 'zustand'

import type { Store } from './types'

export const useTintStore = create<Store>(set => ({
  // State
  isAdded: false,
  color: null,

  // Actions
  add: () => set({ isAdded: true, color: '#000000' }),
  remove: () => set({ isAdded: false, color: null }),
  setColor: color => set({ color })
}))
