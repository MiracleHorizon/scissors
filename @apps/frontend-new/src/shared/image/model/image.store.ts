import { create, type StateCreator, type StoreApi, type UseBoundStore } from 'zustand'
import { persist as persistMiddleware } from 'zustand/middleware'

import { SITE_TITLE } from '@/shared/seo'

/* eslint no-unused-vars: 0 */
type ImageFile = File | null

interface State {
  originalImage: ImageFile
  processedImage: ImageFile
  keepChanges: boolean
}

interface Store extends State {
  getFileForProcessing: () => ImageFile
  setOriginalImage: (originalImage: ImageFile) => void
  setProcessedImage: (processedImage: ImageFile) => void
  toggleKeepChanges: VoidFunction
}

const defaultState: State = {
  originalImage: null,
  processedImage: null,
  keepChanges: false
} as const

const imageStoreCreator: StateCreator<Store> = (set, get) => ({
  ...defaultState,

  getFileForProcessing: () => {
    const { originalImage, processedImage, keepChanges } = get()

    return keepChanges ? processedImage : originalImage
  },
  setOriginalImage: originalImage => set({ originalImage }),
  setProcessedImage: processedImage => set({ processedImage }),
  toggleKeepChanges: () => set({ keepChanges: !get().keepChanges })
})

const PERSIST_NAME = `${SITE_TITLE.toLowerCase()}-image-store`
export const createImageStore = ({
  persist
}: {
  persist: boolean
}): UseBoundStore<StoreApi<Store>> => {
  if (!persist) {
    return create<Store>()(imageStoreCreator)
  }

  return create(
    persistMiddleware<Store>(imageStoreCreator, {
      name: PERSIST_NAME,
      merge: <State>(persistedState: unknown, currentState: State): State => {
        if (
          !persistedState ||
          typeof persistedState !== 'object' ||
          Array.isArray(persistedState)
        ) {
          return currentState
        }

        if ('keepChanges' in persistedState && typeof persistedState.keepChanges === 'boolean') {
          return {
            ...currentState,
            keepChanges: persistedState.keepChanges
          }
        }

        return currentState
      }
    })
  )
}
export const useImageStore = createImageStore({
  persist: true
})
