import type { DownloadPayload } from '@app-types/DownloadPayload'
import type { ImageFileFormat } from '@server/sharp'

export type Store = State & Computed & Actions

export interface State {
  file: File | null
  outputFileName: string
  outputFormat: ImageFileFormat | null
  downloadPayload: DownloadPayload | null
}

interface Computed {
  getOutputFormat: () => ImageFileFormat | null
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

  setOutputFormat: (outputFormat: ImageFileFormat | null) => void

  setDownloadPayload: (downloadPayload: DownloadPayload) => void
}
