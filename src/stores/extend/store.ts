import { create } from 'zustand'

import { DEFAULT_EXTEND_BACKGROUND, DEFAULT_EXTEND_WITH, type ExtendOptions } from '@server/Sharp'
import type { Store } from './types'

const defaultState: ExtendOptions = {
  left: null,
  top: null,
  right: null,
  bottom: null,
  extendWith: DEFAULT_EXTEND_WITH,
  background: DEFAULT_EXTEND_BACKGROUND
}

export const useExtendStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  isEmpty: () => {
    const { left, top, right, bottom } = get()

    return left === null && top === null && right === null && bottom === null
  },
  getExtendOptions: () => {
    const isEmpty = get().isEmpty()

    if (isEmpty) {
      return null
    }

    return {
      left: get().left,
      top: get().top,
      right: get().right,
      bottom: get().bottom,
      background: get().background,
      extendWith: get().extendWith
    }
  },

  // Actions
  setLeft: left => set({ left }),
  setTop: top => set({ top }),
  setRight: right => set({ right }),
  setBottom: bottom => set({ bottom }),
  setBackground: background => set({ background }),
  setExtendWith: extendWith => set({ extendWith }),

  reset: () => set(defaultState),
  resetLeft: () => set({ left: defaultState.left }),
  resetRight: () => set({ right: defaultState.right }),
  resetTop: () => set({ top: defaultState.top }),
  resetBottom: () => set({ bottom: defaultState.bottom })
}))
