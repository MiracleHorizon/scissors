import type { DownloadPayload } from '@app-types/DownloadPayload'

export type Store = State & Computed & Actions

export interface State {
  file: File | null
  outputFileName: string
  downloadPayload: DownloadPayload | null
}

interface Computed {
  isFileUploaded: () => boolean
  isValidOutputFileName: () => boolean
}

/* eslint no-unused-vars: 0 */
interface Actions {
  setFile: (file: File | null) => void
  removeFile: VoidFunction

  setOutputFileName: (outputFileName: string) => void
  resetOutputFileName: VoidFunction

  setDownloadPayload: (downloadPayload: DownloadPayload) => void
}
