import { create } from 'zustand'

import type { ExtractRegion, ExtractOptions } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getExtractRegion: () => ExtractRegion
  getExtractOptions: () => ExtractOptions

  setRegion: (region: ExtractRegion) => void
  setPreviewFile: (file: File | null) => void
  setPreviewAspectRatio: (aspectRatio: number) => void
  setCropperAspectRatio: (aspectRatio: number) => void
  reset: VoidFunction
}

interface State extends ExtractOptions {
  previewFile: File | null
  previewAspectRatio: number
  cropperAspectRatio: number
}

const defaultState: State = {
  previewFile: null,
  previewAspectRatio: -1,
  cropperAspectRatio: -1,

  left: 0,
  top: 0,
  width: 100,
  height: 100
} as const

export const useExtractStore = create<Store>((set, get) => ({
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
  getExtractOptions: () => get().getExtractRegion(),

  // Actions
  setRegion: region => set({ ...region }),
  setPreviewFile: file => set({ previewFile: file }),
  setPreviewAspectRatio: aspectRatio => set({ previewAspectRatio: aspectRatio }),
  setCropperAspectRatio: aspectRatio => set({ cropperAspectRatio: aspectRatio }),
  reset: () => set(defaultState)
}))