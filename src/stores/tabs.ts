import { create } from 'zustand'

/* eslint-disable no-unused-vars */
interface Store {
  selectedTab: ToolbarTab

  selectTab: (tab: ToolbarTab) => void
}

export const TOOLBAR_TAB = {
  DEFAULT: 'default',
  RESIZE: 'resize'
} as const
type ToolbarTab = (typeof TOOLBAR_TAB)[keyof typeof TOOLBAR_TAB]

export const useTabsStore = create<Store>(set => ({
  // State
  selectedTab: TOOLBAR_TAB.DEFAULT,

  // Actions
  selectTab: tab => set({ selectedTab: tab })
}))
