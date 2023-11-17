export interface ConvertSettings {
  flip: boolean
  flop: boolean
  negate: NegateOptions | null
  normalise: NormaliseOptions | null
  blur: BlurOptions | null
}

export interface BlurOptions {
  value: boolean
  sigma: number | null
}

export interface NegateOptions {
  value: boolean
  alpha: boolean
}

export interface NormaliseOptions {
  lower: number
  upper: number
}

/* eslint no-unused-vars: 0 */
export enum ConvertFormat {
  JPEG = 'jpeg',
  JPG = 'jpg',
  PNG = 'png'
}
