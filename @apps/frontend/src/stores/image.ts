import { create, type StateCreator } from 'zustand'

import { calcAspectRatio } from '@helpers/image/calcAspectRatio'
import type { ImageAspectRatio, ImageDimension } from '@app-types/image'

/* eslint no-unused-vars: 0 */
interface State {
  image: HTMLImageElement | null
}

interface Store extends State {
  getDimension: () => ImageDimension | null
  getAspectRatio: () => ImageAspectRatio
  setImage: (image: HTMLImageElement | null) => void
}

const defaultState: State = {
  image: null
} as const

const imageStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  getDimension: () => {
    const image = get().image
    if (!image) {
      return null
    }

    const { width, height } = image
    return {
      width,
      height
    }
  },
  getAspectRatio: () => {
    const dimension = get().getDimension()
    if (!dimension) {
      return [0, 0]
    }

    return calcAspectRatio(dimension.width, dimension.height)
  },

  // Actions
  setImage: image => set({ image })
})

export const createImageStore = () => create<Store>()(imageStoreCreator)

export const useImageStore = createImageStore()
