import { create, type StateCreator, type StoreApi, type UseBoundStore } from 'zustand'
import { persist as persistMiddleware } from 'zustand/middleware'

import { SITE_TITLE } from '@/shared/seo'

/* eslint no-unused-vars: 0 */
type ImageFile = File | null

interface State {
  originalFile: ImageFile
  previewFile: ImageFile
  downloadableFile: DownloadableFile | null
  keepChanges: boolean
}

interface Store extends State {
  getFileForProcessing: () => ImageFile
  setOriginalFile: (originalFile: ImageFile) => void
  removeOriginalFile: () => void
  toggleKeepChanges: () => void
  setDownloadableFile: (downloadableFile: DownloadableFile) => void
}

const defaultState: State = {
  originalFile: null,
  previewFile: null,
  downloadableFile: null,
  keepChanges: false
} as const

const imageStoreCreator: StateCreator<Store> = (set, get) => ({
  ...defaultState,

  getFileForProcessing: () => {
    const { originalFile, previewFile, keepChanges } = get()

    return keepChanges ? previewFile : originalFile
  },
  // eslint-disable-next-line arrow-body-style
  setOriginalFile: originalFile => {
    // TODO: Доделать
    // if (!originalFile) {
    //   outputFormat = null
    // } else {
    //   const fileType = cropImageFileType(file.type)

    //   if (fileType !== outputFormat) {
    //     outputFormat = fileType as ImageFileFormat
    //   }
    // }

    return set({
      originalFile,
      previewFile: originalFile,
      downloadableFile: null
    })
  },
  removeOriginalFile: () =>
    set({
      previewFile: null,
      originalFile: null,
      downloadableFile: null
      // outputFormat: null,
    }),
  toggleKeepChanges: () => set({ keepChanges: !get().keepChanges }),
  setDownloadableFile: downloadableFile =>
    set({
      previewFile: downloadableFile.file,
      downloadableFile
    })
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
