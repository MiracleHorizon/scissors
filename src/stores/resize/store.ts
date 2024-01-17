import { create } from 'zustand'

import {
  DEFAULT_FAST_SHRINK,
  DEFAULT_RESIZE_BACKGROUND,
  DEFAULT_RESIZE_FIT,
  DEFAULT_RESIZE_KERNEL,
  DEFAULT_RESIZE_POSITION,
  DEFAULT_WITHOUT_ENLARGEMENT,
  DEFAULT_WITHOUT_REDUCTION,
  RESIZE_FIT,
  type ResizeOptions
} from '@server/sharp'
import type { Store } from './types'

export const defaultState: ResizeOptions = {
  width: null,
  height: null,

  position: DEFAULT_RESIZE_POSITION,
  fit: DEFAULT_RESIZE_FIT,
  kernel: DEFAULT_RESIZE_KERNEL,
  background: null,
  withoutEnlargement: DEFAULT_WITHOUT_ENLARGEMENT,
  withoutReduction: DEFAULT_WITHOUT_REDUCTION,
  fastShrinkOnLoad: DEFAULT_FAST_SHRINK,
  withDominantBackground: false
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
      background: get().background,
      fit: get().fit,
      position: get().position,
      kernel: get().kernel,
      fastShrinkOnLoad: get().fastShrinkOnLoad,
      withoutEnlargement: get().withoutEnlargement,
      withoutReduction: get().withoutReduction,
      withDominantBackground: get().withDominantBackground
    }
  },

  // Actions
  set: options => set({ ...defaultState, ...options }),
  reset: () => set(defaultState),

  setWidth: width => {
    if (width === null) {
      return set({ width: null })
    }

    set({ width })
  },
  setHeight: height => {
    if (height === null) {
      return set({ height: null })
    }

    set({ height })
  },

  setFit: fit => {
    const isCover = fit === RESIZE_FIT.COVER
    const isContain = fit === RESIZE_FIT.CONTAIN

    const position = isCover || isContain ? DEFAULT_RESIZE_POSITION : null
    const background = isContain ? DEFAULT_RESIZE_BACKGROUND : null

    set({
      fit,
      position,
      background,
      withDominantBackground: defaultState.withDominantBackground
    })
  },
  setBackground: background => set({ background }),
  setPosition: position => set({ position }),
  setKernel: kernel => set({ kernel }),

  toggleEnlargement: () => set({ withoutEnlargement: !get().withoutEnlargement }),
  toggleReduction: () => set({ withoutReduction: !get().withoutReduction }),
  toggleFastShrink: () => set({ fastShrinkOnLoad: !get().fastShrinkOnLoad }),
  toggleDominantBackground: () => set({ withDominantBackground: !get().withDominantBackground })
}))
