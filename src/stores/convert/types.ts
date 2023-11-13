import type { DownloadPayload } from '@app-types/DownloadPayload'

export type Store = State & Actions

interface State {
  file: File | null
  downloadPayload: DownloadPayload | null
  // Settings
  flip: boolean
  flop: boolean
}

/* eslint no-unused-vars: 0 */
interface Actions {
  setFile: (file: File | null) => void
  removeFile: VoidFunction
  setDownloadPayload: (downloadPayload: DownloadPayload) => void
  removeDownloadPayload: VoidFunction
  toggleFlip: VoidFunction
  toggleFlop: VoidFunction
}
