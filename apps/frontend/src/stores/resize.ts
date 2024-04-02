import { create, type StateCreator } from 'zustand'

import {
  DEFAULT_FAST_SHRINK,
  DEFAULT_RESIZE_BACKGROUND,
  DEFAULT_RESIZE_FIT,
  DEFAULT_RESIZE_KERNEL,
  DEFAULT_RESIZE_POSITION,
  DEFAULT_WITHOUT_ENLARGEMENT,
  DEFAULT_WITHOUT_REDUCTION,
  RESIZE_FIT,
  type ResizeFit,
  type ResizeKernel,
  type ResizeOptions,
  type ResizePosition
} from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
export type Store = ResizeOptions & {
  getResizeOptions: () => ResizeOptions | null

  set: (options: ResizeOptions | null) => void
  reset: VoidFunction
  setWidth: (width: number | null) => void
  setHeight: (height: number | null) => void
  setFit: (fit: ResizeFit) => void
  setBackground: (background: string) => void
  setPosition: (position: ResizePosition) => void
  setKernel: (kernel: ResizeKernel) => void
  toggleEnlargement: VoidFunction
  toggleReduction: VoidFunction
  toggleFastShrink: VoidFunction
  toggleDominantBackground: VoidFunction
}

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
} as const

const resizeStoreCreator: StateCreator<Store> = (set, get) => ({
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
  set: options => {
    if (!options) {
      return set(defaultState)
    }

    set(options)
  },
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
})

export const createResizeStore = () => create<Store>()(resizeStoreCreator)

export const useResizeStore = createResizeStore()
