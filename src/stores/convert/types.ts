import type { ConvertSettings } from '@libs/Sharp'
import type { DownloadPayload } from '@app-types/DownloadPayload'

export type Store = State & Computed & Actions

export type Settings = Pick<ConvertSettings, 'flip' | 'flop' | 'grayscale'>

interface State extends Settings {
  file: File | null
  downloadPayload: DownloadPayload | null
}

interface Computed {
  getConvertSettings: () => Settings
}

/* eslint no-unused-vars: 0 */
export interface Actions {
  resetSettings: VoidFunction

  setFile: (file: File | null) => void
  removeFile: VoidFunction

  setDownloadPayload: (downloadPayload: DownloadPayload) => void
  removeDownloadPayload: VoidFunction

  toggleFlip: VoidFunction
  toggleFlop: VoidFunction
  toggleGrayscale: VoidFunction
}
