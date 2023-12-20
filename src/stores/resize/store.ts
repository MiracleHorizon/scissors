import { create } from 'zustand'

import {
  DEFAULT_FAST_SHRINK,
  DEFAULT_RESIZE_BACKGROUND,
  DEFAULT_RESIZE_FIT,
  DEFAULT_RESIZE_KERNEL,
  DEFAULT_RESIZE_POSITION,
  DEFAULT_WITHOUT_ENLARGEMENT,
  DEFAULT_WITHOUT_REDUCTION,
  ResizeFit
} from '@libs/Sharp'
import type { Store } from './types'

export const defaultState = {
  width: null,
  height: null,

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
  getResizeOptions: () => {
    const { width, height } = get()

    if (width === null && height === null) {
      return null
    }

    return {
      width: get().width,
      height: get().height,
      background: get()?.background,
      fit: get()?.fit,
      position: get()?.position,
      kernel: get()?.kernel,
      fastShrinkOnLoad: get()?.fastShrinkOnLoad,
      withoutEnlargement: get()?.withoutEnlargement,
      withoutReduction: get()?.withoutReduction
    }
  },

  // Actions
  reset: () => set(defaultState),

  setWidth: width => set({ width }),
  setHeight: height => set({ height }),

  resetWidth: () => set({ width: null }),
  resetHeight: () => set({ height: null }),

  setFit: fit => {
    const isCover = fit === ResizeFit.COVER
    const isContain = fit === ResizeFit.CONTAIN

    const background = isContain ? DEFAULT_RESIZE_BACKGROUND : null
    const position = isCover || isContain ? DEFAULT_RESIZE_POSITION : null

    set({
      fit,
      background,
      position
    })
  },
  setBackground: background => set({ background }),
  setPosition: position => set({ position }),
  setKernel: kernel => set({ kernel }),

  toggleEnlargement: () => set({ withoutEnlargement: !get().withoutEnlargement }),
  toggleReduction: () => set({ withoutReduction: !get().withoutReduction }),
  toggleFastShrink: () => set({ fastShrinkOnLoad: !get().fastShrinkOnLoad })
}))
