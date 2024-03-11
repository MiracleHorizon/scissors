import { create } from 'zustand'

import { isValidFileName } from '@helpers/file/isValidFileName'
import { cropFileName } from '@helpers/file/cropFileName'
import { cropImageFileType } from '@helpers/file/cropImageFileType'
import type { DownloadPayload } from '@app-types/DownloadPayload'
import type { ImageFileFormat } from '@server/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
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
}

interface State {
  file: File | null
  outputFileName: string
  outputFormat: ImageFileFormat | null
  downloadPayload: DownloadPayload | null
}

const defaultState: State = {
  file: null,
  outputFileName: '',
  outputFormat: null,
  downloadPayload: null
} as const

export const useOutputStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  getFullFileName: () => {
    const file = get().file

    if (!file) {
      return ''
    }

    const type = get().outputFormat ?? cropImageFileType(file.type)
    const name = !get().isValidOutputFileName() ? cropFileName(file.name) : get().outputFileName

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
      outputFormat,
      downloadPayload: null
    })
  },
  removeFile: () =>
    set({
      file: null,
      outputFormat: null,
      downloadPayload: null
    }),

  setOutputFileName: (outputFileName: string) => set({ outputFileName }),
  resetOutputFileName: () => set({ outputFileName: defaultState.outputFileName }),

  setOutputFormat: outputFormat => set({ outputFormat }),
  setDownloadPayload: downloadPayload => set({ downloadPayload })
}))
