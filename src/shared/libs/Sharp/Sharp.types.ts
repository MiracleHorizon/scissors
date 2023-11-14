export interface ConvertSettings {
  flip: boolean
  flop: boolean
  negate: NegateOptions | null
}

export interface NegateOptions {
  value: boolean
  alpha: boolean
}

/* eslint no-unused-vars: 0 */
export enum ConvertFormat {
  JPEG = 'jpeg',
  JPG = 'jpg',
  PNG = 'png'
}
