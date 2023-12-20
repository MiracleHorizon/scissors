import { create } from 'zustand'

import { isValidFileName } from '@helpers/isValidFileName'
import type { State, Store } from './types'

const defaultState: State = {
  file: null,
  outputFileName: '',
  downloadPayload: null
}

export const useOutputStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  isFileUploaded: () => get().file !== null,
  isValidOutputFileName: () => {
    const outputFileName = get().outputFileName

    if (outputFileName.length === 0) {
      return false
    }

    return isValidFileName(outputFileName)
  },

  // Actions
  setFile: file => set({ file, downloadPayload: null }),
  removeFile: () => set({ file: null, downloadPayload: null }),

  setOutputFileName: (outputFileName: string) => set({ outputFileName }),
  resetOutputFileName: () => set({ outputFileName: defaultState.outputFileName }),

  setDownloadPayload: downloadPayload => set({ downloadPayload })
}))
