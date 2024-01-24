import type { IMAGE_FILE_FORMAT } from '../constants'

export interface ConvertSettings {
  flip: boolean
  flop: boolean
  grayscale: boolean
  tint: string | null
  negate: NegateOptions | null
  normalise: NormaliseOptions | null
  blur: BlurOptions | null
  rotate: RotateOptions | null
  gamma: GammaValue
  modulate: ModulateOptions | null
  outputFormat: ImageFileFormat | null
}

export interface ModulateOptions {
  lightness: number | null
  brightness: number | null
  saturation: number | null
  hue: number | null
}

export interface BlurOptions {
  value: boolean
  sigma: number | null
}

export interface RotateOptions {
  angle: number
  background: string | null
  withDominantBackground: boolean
}

export type GammaValue = number | null

export interface NegateOptions {
  value: boolean
  alpha: boolean
}

export interface NormaliseOptions {
  lower: number
  upper: number
}

export type ImageFileFormat = (typeof IMAGE_FILE_FORMAT)[keyof typeof IMAGE_FILE_FORMAT]
