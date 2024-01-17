import type { TOOLBAR_TAB } from './store'

export type Store = State & Actions

type ToolbarTab = keyof typeof TOOLBAR_TAB

export interface State {
  selectedTab: ToolbarTab
}

/* eslint-disable no-unused-vars */
interface Actions {
  selectTab: (tab: ToolbarTab) => void
}
