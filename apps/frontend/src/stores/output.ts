import { create, type StateCreator, type StoreApi, type UseBoundStore } from 'zustand'
import { persist } from 'zustand/middleware'

import type { ImageFileFormat } from '@scissors/sharp'

import { isValidFileName } from '@helpers/file/isValidFileName'
import { cropFileName } from '@helpers/file/cropFileName'
import { cropImageFileType } from '@helpers/file/cropImageFileType'
import { SITE_TITLE } from '@site/config'

export interface DownloadPayload {
  link: string
  fileName: string
  file: File
}

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getFileForProcessing: () => File | null
  getOutputFormat: () => ImageFileFormat | null
  getFullFileName: () => string
  isFileUploaded: () => boolean
  isValidOutputFileName: () => boolean

  setFile: (file: File | null) => void
  removeFile: VoidFunction
  setOutputFileName: (outputFileName: string) => void
  resetOutputFileName: VoidFunction
  setOutputFormat: (outputFormat: ImageFileFormat | null) => void
  setDownloadPayload: (downloadPayload: DownloadPayload) => void
  toggleKeepChanges: VoidFunction
}

interface State {
  file: File | null
  originalFile: File | null
  outputFileName: string
  outputFormat: ImageFileFormat | null
  downloadPayload: Omit<DownloadPayload, 'file'> | null
  keepChanges: boolean
}

export const defaultState: State = {
  file: null,
  originalFile: null,
  outputFileName: '',
  outputFormat: null,
  downloadPayload: null,
  keepChanges: false
} as const

const outputStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  getFileForProcessing: () => {
    const { file, originalFile, keepChanges } = get()

    return keepChanges ? file : originalFile
  },
  getFullFileName: () => {
    const file = get().file

    if (!file) {
      return ''
    }

    const name = !get().isValidOutputFileName() ? cropFileName(file.name) : get().outputFileName
    const type = get().outputFormat ?? cropImageFileType(file.type)

    return `${name}.${type}`
  },
  getOutputFormat: () => {
    const file = get().file
    if (!file) {
      return null
    }

    const outputFormat = get().outputFormat
    if (!outputFormat) {
      return null
    }

    const fileType = cropImageFileType(file.type)
    if (outputFormat === fileType) {
      return null
    }

    return outputFormat
  },
  isFileUploaded: () => get().file !== null,
  isValidOutputFileName: () => {
    const outputFileName = get().outputFileName

    if (outputFileName.length === 0) {
      return false
    }

    return isValidFileName(outputFileName)
  },

  // Actions
  setFile: file => {
    let outputFormat = get().outputFormat

    if (!file) {
      outputFormat = null
    } else {
      const fileType = cropImageFileType(file.type)

      if (fileType !== outputFormat) {
        outputFormat = fileType as ImageFileFormat
      }
    }

    set({
      file,
      originalFile: file,
      outputFormat,
      downloadPayload: null
    })
  },
  removeFile: () =>
    set({
      file: null,
      originalFile: null,
      outputFormat: null,
      downloadPayload: null
    }),

  setOutputFileName: outputFileName =>
    set({
      outputFileName
    }),
  resetOutputFileName: () =>
    set({
      outputFileName: defaultState.outputFileName
    }),

  setOutputFormat: outputFormat => set({ outputFormat }),
  setDownloadPayload: ({ file, ...downloadPayload }) =>
    set({
      file,
      downloadPayload
    }),

  toggleKeepChanges: () =>
    set({
      keepChanges: !get().keepChanges
    })
})

export const createOutputStore = ({
  withPersist = true
}: CreateStoreParams | undefined = {}): UseBoundStore<StoreApi<Store>> => {
  if (withPersist) {
    return create(
      persist<Store>(outputStoreCreator, {
        name: `${SITE_TITLE}-output-store`,
        merge: <State>(persistedState: unknown, currentState: State): State => {
          if (!persistedState || typeof persistedState !== 'object') {
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

  return create<Store>()(outputStoreCreator)
}

interface CreateStoreParams {
  withPersist?: boolean
}

export const useOutputStore = createOutputStore()
