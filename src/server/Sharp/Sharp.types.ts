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
  tint: string | null
  modulate: ModulateOptions | null
  outputFormat: ImageFileFormat | null
}

export interface ResizeSettings {
  queue: ResizeQueue
  resize: ResizeOptions | null
  extend: ExtendOptions | null
}

export type ResizeQueue = ResizeQueueOperation[]

interface ResizeQueueOperation {
  operationName: ResizeOperationName
  index: number
}

export const enum ResizeOperationName {
  RESIZE = 'resize',
  EXTEND = 'extend'
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

export interface ExtendOptions {
  top: number | null
  bottom: number | null
  right: number | null
  left: number | null
  extendWith: ExtendWith | null
  background: string | null
  withDominantBackground: boolean
}

export enum ExtendWith {
  BACKGROUND = 'background',
  COPY = 'copy',
  REPEAT = 'repeat',
  MIRROR = 'mirror'
}

export type ResizeOptions = ResizeSizes & ResizeExtraOptions

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
  fit: ResizeFit | null
  background: string | null
  position: ResizePosition | ResizePositionGravity | null
  kernel: ResizeKernel | null
  withoutEnlargement: boolean
  withoutReduction: boolean
  fastShrinkOnLoad: boolean
  withDominantBackground: boolean
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

export enum ImageFileFormat {
  JPEG = 'jpeg',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}
