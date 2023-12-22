import { create } from 'zustand'

import { cropImageFileType } from '@helpers/cropImageFileType'
import { cropFileName } from '@helpers/cropFileName'
import { isValidFileName } from '@helpers/isValidFileName'
import type { ConvertFormat } from '@server/Sharp'
import type { State, Store } from './types'

const defaultState: State = {
  file: null,
  outputFileName: '',
  outputFormat: null,
  downloadPayload: null
}

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
  getOutputFormat: () => get().outputFormat,
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
      if (fileType === outputFormat) return

      outputFormat = fileType as ConvertFormat
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
