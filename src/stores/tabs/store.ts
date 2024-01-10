import { create } from 'zustand'

import { type Store, ToolbarTab } from './types'

export const useTabsStore = create<Store>(set => ({
  // State
  selectedTab: ToolbarTab.DEFAULT,

  // Actions
  selectTab: tab => set({ selectedTab: tab })
}))
