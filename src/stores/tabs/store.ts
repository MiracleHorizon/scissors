import { create } from 'zustand'

import type { Store } from './types'

export const TOOLBAR_TAB: Record<string, string> = {
  DEFAULT: 'default',
  RESIZE: 'resize'
} as const

export const useTabsStore = create<Store>(set => ({
  // State
  selectedTab: TOOLBAR_TAB.DEFAULT,

  // Actions
  selectTab: tab => set({ selectedTab: tab })
}))
