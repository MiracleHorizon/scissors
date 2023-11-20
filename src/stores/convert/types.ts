import type { ConvertSettings } from '@libs/Sharp'
import type { DownloadPayload } from '@app-types/DownloadPayload'

export type Store = State & Computed & Actions

interface State extends ConvertSettings {
  file: File | null
  downloadPayload: DownloadPayload | null
}

interface Computed {
  getConvertSettings: () => ConvertSettings
}

/* eslint no-unused-vars: 0 */
interface Actions {
  setFile: (file: File | null) => void
  removeFile: VoidFunction

  setDownloadPayload: (downloadPayload: DownloadPayload) => void
  removeDownloadPayload: VoidFunction

  toggleFlip: VoidFunction
  toggleFlop: VoidFunction

  toggleNegate: VoidFunction
  toggleNegateAlpha: VoidFunction

  setLowerNormalise: (lower: number) => void
  setUpperNormalise: (lower: number) => void

  toggleBlur: VoidFunction
  addBlurSigma: VoidFunction
  removeBlurSigma: VoidFunction
  setBlurSigma: (sigma: number) => void

  addRotate: VoidFunction
  removeRotate: VoidFunction
  setRotateAngle: (angle: number) => void
  setRotateBackground: (background: string) => void

  addGamma: VoidFunction
  removeGamma: VoidFunction
  setGamma: (value: number) => void
}
