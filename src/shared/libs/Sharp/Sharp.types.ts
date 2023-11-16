export interface ConvertSettings {
  flip: boolean
  flop: boolean
  negate: NegateOptions | null
  normalise: NormaliseOptions | null
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
