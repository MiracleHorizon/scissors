import { create } from 'zustand'

/* eslint-disable no-unused-vars */
interface Store {
  selectedTab: ToolbarTab

  selectTab: (tab: ToolbarTab) => void
}

export const TOOLBAR_TAB = {
  CONVERT: 'convert',
  RESIZE: 'resize',
  METADATA: 'metadata'
} as const
export type ToolbarTab = (typeof TOOLBAR_TAB)[keyof typeof TOOLBAR_TAB]

export const useTabsStore = create<Store>(set => ({
  // State
  selectedTab: TOOLBAR_TAB.CONVERT,

  // Actions
  selectTab: tab => set({ selectedTab: tab })
}))
