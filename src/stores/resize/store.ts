import { create } from 'zustand'

import {
  DEFAULT_FAST_SHRINK,
  DEFAULT_RESIZE_BACKGROUND,
  DEFAULT_RESIZE_FIT,
  DEFAULT_RESIZE_KERNEL,
  DEFAULT_RESIZE_POSITION,
  DEFAULT_WITHOUT_ENLARGEMENT,
  DEFAULT_WITHOUT_REDUCTION,
  type ResizeExtraOptions,
  ResizeFit
} from '@libs/Sharp'
import type { State, Store } from './types'

const defaultState: State = {
  isAdded: false,
  width: null,
  height: null,
  extra: null
}
const defaultExtra: ResizeExtraOptions = {
  position: DEFAULT_RESIZE_POSITION,
  fit: DEFAULT_RESIZE_FIT,
  kernel: DEFAULT_RESIZE_KERNEL,
  background: null,
  withoutEnlargement: DEFAULT_WITHOUT_ENLARGEMENT,
  withoutReduction: DEFAULT_WITHOUT_REDUCTION,
  fastShrinkOnLoad: DEFAULT_FAST_SHRINK
}

export const useResizeStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getResizeOptions: () => ({
    width: get().width,
    height: get().height,
    extra: get().extra
  }),

  // Actions
  add: () => set({ isAdded: true }),
  remove: () => set({ ...defaultState }),

  setWidth: width => set({ width }),
  setHeight: height => set({ height }),

  resetWidth: () => set({ width: null }),
  resetHeight: () => set({ height: null }),

  addExtra: () => set({ extra: defaultExtra }),
  removeExtra: () => set({ extra: null }),

  setFit: fit =>
    set(state => {
      if (!state.extra) {
        return state
      }

      return {
        extra: {
          ...state.extra,
          fit,
          background: fit === ResizeFit.CONTAIN ? DEFAULT_RESIZE_BACKGROUND : null,
          position:
            fit === ResizeFit.COVER || fit === ResizeFit.CONTAIN ? DEFAULT_RESIZE_POSITION : null
        }
      }
    }),
  setBackground: background =>
    set(state => {
      if (!state.extra) {
        return state
      }

      return {
        extra: {
          ...state.extra,
          background
        }
      }
    }),
  setPosition: position =>
    set(state => {
      if (!state.extra) {
        return state
      }

      return {
        extra: {
          ...state.extra,
          position
        }
      }
    }),
  setKernel: kernel =>
    set(state => {
      if (!state.extra) {
        return state
      }

      return {
        extra: {
          ...state.extra,
          kernel
        }
      }
    }),

  toggleEnlargement: () =>
    set(state => {
      if (!state.extra) {
        return state
      }

      return {
        extra: {
          ...state.extra,
          withoutEnlargement: !state.extra.withoutEnlargement
        }
      }
    }),
  toggleReduction: () =>
    set(state => {
      if (!state.extra) {
        return state
      }

      return {
        extra: {
          ...state.extra,
          withoutReduction: !state.extra.withoutReduction
        }
      }
    }),
  toggleFastShrink: () =>
    set(state => {
      if (!state.extra) {
        return state
      }

      return {
        extra: {
          ...state.extra,
          fastShrinkOnLoad: !state.extra.fastShrinkOnLoad
        }
      }
    })
}))
