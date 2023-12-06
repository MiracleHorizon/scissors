/* eslint no-unused-vars: 0 */

export interface ConvertSettings {
  flip: boolean
  flop: boolean
  grayscale: boolean
  negate: NegateOptions | null
  normalise: NormaliseOptions | null
  blur: BlurOptions | null
  rotate: RotateOptions | null
  gamma: GammaOptions | null
  resize: ResizeOptions | null
  tint: string | null
  modulate: ModulateOptions | null
  format: ConvertFormat | null
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
  background: string
  withDominantBackground: boolean
}

export interface NegateOptions {
  value: boolean
  alpha: boolean
}

export interface GammaOptions {
  value: number
}

export interface NormaliseOptions {
  lower: number
  upper: number
}

export type ResizeOptions = ResizeSizes & {
  extra: ResizeExtraOptions | null
}

type ResizeSizes =
  | ResizeWithWidth
  | ResizeWithHeight
  | ResizeWithWidthAndHeight
  | ResizeWithoutWidthAndHeight

interface ResizeWithWidth {
  width: number
  height: null
}

interface ResizeWithHeight {
  height: number
  width: null
}

interface ResizeWithWidthAndHeight {
  width: number
  height: number
}

interface ResizeWithoutWidthAndHeight {
  width: null
  height: null
}

export interface ResizeExtraOptions {
  fit: ResizeFit
  background: string | null
  position: ResizePosition | ResizePositionGravity | null
  kernel: ResizeKernel | null
  withoutEnlargement: boolean
  withoutReduction: boolean
  fastShrinkOnLoad: boolean
}

export enum ResizeKernel {
  LANCZOS3 = 'lanczos3',
  LANCZOS2 = 'lanczos2',
  NEAREST = 'nearest',
  CUBIC = 'cubic',
  MITCHELL = 'mitchell'
}

export enum ResizeFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

export enum ResizePosition {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
  RIGHT_TOP = 'right top',
  RIGHT_BOTTOM = 'right bottom',
  LEFT_TOP = 'left top',
  LEFT_BOTTOM = 'left bottom'
}

export enum ResizePositionGravity {
  NORTH = 'north',
  SOUTH = 'south',
  EAST = 'east',
  WEST = 'west',
  NORTH_EAST = 'northeast',
  SOUTH_EAST = 'southeast',
  SOUTH_WEST = 'southwest',
  NORTH_WEST = 'northwest'
}

export enum ConvertFormat {
  JPEG = 'jpeg',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}
