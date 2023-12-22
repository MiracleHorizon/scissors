import type { DownloadPayload } from '@app-types/DownloadPayload'
import type { ConvertFormat } from '@libs/Sharp'

export type Store = State & Computed & Actions

export interface State {
  file: File | null
  outputFileName: string
  outputFormat: ConvertFormat | null
  downloadPayload: DownloadPayload | null
}

interface Computed {
  getOutputFormat: () => ConvertFormat | null
  getFullFileName: () => string
  isFileUploaded: () => boolean
  isValidOutputFileName: () => boolean
}

/* eslint no-unused-vars: 0 */
interface Actions {
  setFile: (file: File | null) => void
  removeFile: VoidFunction

  setOutputFileName: (outputFileName: string) => void
  resetOutputFileName: VoidFunction

  setOutputFormat: (outputFormat: ConvertFormat | null) => void

  setDownloadPayload: (downloadPayload: DownloadPayload) => void
}
