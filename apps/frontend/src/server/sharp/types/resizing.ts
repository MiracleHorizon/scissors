import type {
  EXTEND_WITH,
  RESIZE_FIT,
  RESIZE_GRAVITY,
  RESIZE_KERNEL,
  RESIZE_OPERATION,
  RESIZE_POSITION
} from '../constants'

export interface ResizeSettings {
  queue: ResizeQueue
  resize: ResizeOptions | null
  extend: ExtendOptions | null
  trim: TrimOptions | null
}

export type ResizeQueue = ResizeQueueOperation[]
export type ResizeOperation = (typeof RESIZE_OPERATION)[keyof typeof RESIZE_OPERATION]

interface ResizeQueueOperation {
  name: ResizeOperation
  queueIndex: number
}

// Resize
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
  position: ResizePosition | ResizeGravity | null
  kernel: ResizeKernel | null
  withoutEnlargement: boolean
  withoutReduction: boolean
  fastShrinkOnLoad: boolean
  withDominantBackground: boolean
}

export type ResizeKernel = (typeof RESIZE_KERNEL)[keyof typeof RESIZE_KERNEL]
export type ResizeFit = (typeof RESIZE_FIT)[keyof typeof RESIZE_FIT]
export type ResizePosition = (typeof RESIZE_POSITION)[keyof typeof RESIZE_POSITION]
export type ResizeGravity = (typeof RESIZE_GRAVITY)[keyof typeof RESIZE_GRAVITY]

// Extend
export type ExtendWith = (typeof EXTEND_WITH)[keyof typeof EXTEND_WITH]

export interface ExtendOptions {
  top: number | null
  bottom: number | null
  right: number | null
  left: number | null
  extendWith: ExtendWith | null
  background: string | null
  withDominantBackground: boolean
}

// Trim
export interface TrimOptions {
  background: string | null
  threshold: number | null
  // sharp v0.33.2
  // lineArt: boolean
}
