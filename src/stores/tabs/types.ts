export type Store = State & Actions

export interface State {
  selectedTab: ToolbarTab
}

/* eslint-disable no-unused-vars */
interface Actions {
  selectTab: (tab: ToolbarTab) => void
}

export const enum ToolbarTab {
  DEFAULT = 'default',
  RESIZE = 'resize'
}
