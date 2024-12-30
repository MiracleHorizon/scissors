import { create, type StateCreator } from 'zustand'

import type { ExtractRegion } from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getExtractRegion: () => ExtractRegion

  setRegion: (region: ExtractRegion) => void
  setPreviewFile: (file: File | null) => void
  setPreviewAspectRatio: (aspectRatio: number) => void
  setCropperAspectRatio: (aspectRatio: number) => void
  reset: VoidFunction
}

interface State extends ExtractRegion {
  previewFile: File | null
  previewAspectRatio: number
  cropperAspectRatio: number
}

export const defaultRegion: ExtractRegion = {
  left: 1,
  top: 1,
  width: 100,
  height: 100
} as const
export const defaultState: State = {
  previewFile: null,
  previewAspectRatio: -1,
  cropperAspectRatio: -1,

  ...defaultRegion
} as const

const extractStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  getExtractRegion: () => {
    const { left, top, width, height } = get()
    return {
      left,
      top,
      width,
      height
    }
  },

  // Actions
  setRegion: region => set({ ...region }),
  setPreviewFile: previewFile => set({ previewFile }),
  setPreviewAspectRatio: previewAspectRatio => set({ previewAspectRatio }),
  setCropperAspectRatio: cropperAspectRatio => set({ cropperAspectRatio }),
  reset: () => set(defaultState)
})

export const createExtractStore = () => create<Store>()(extractStoreCreator)

export const useExtractStore = createExtractStore()
