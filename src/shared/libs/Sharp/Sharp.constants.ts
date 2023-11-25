import { ConvertFormat, ResizeFit, ResizeKernel, ResizePosition } from './Sharp.types'

export const DEFAULT_CONVERT_FORMAT = ConvertFormat.JPEG

// Normalise
export const MIN_NORMALISE = 1
export const MAX_NORMALISE = 99

// Blur
export const MIN_BLUR_SIGMA = 0.3
export const MAX_BLUR_SIGMA = 10

// Rotate
export const MIN_ROTATE_ANGLE = -360
export const MAX_ROTATE_ANGLE = 360
export const DEFAULT_ROTATE_ANGLE = 0
export const DEFAULT_ROTATE_BACKGROUND = '#000000'

// Gamma
export const MIN_GAMMA = 1
export const MAX_GAMMA = 3

// Resize
export const RESIZE_SIZE_STEP = 100
export const MIN_RESIZE_SIZE = 1
export const MAX_RESIZE_WIDTH = 1920
export const MAX_RESIZE_HEIGHT = 1080
export const DEFAULT_RESIZE_FIT = ResizeFit.COVER
export const DEFAULT_RESIZE_POSITION = ResizePosition.CENTER
export const DEFAULT_RESIZE_KERNEL = ResizeKernel.LANCZOS3
export const DEFAULT_RESIZE_BACKGROUND = '#000000'
export const DEFAULT_WITHOUT_ENLARGEMENT = false
export const DEFAULT_WITHOUT_REDUCTION = false
export const DEFAULT_FAST_SHRINK = true

// Modulate
export const MIN_LIGHTNESS = 0
export const MAX_LIGHTNESS = 100

export const MIN_BRIGHTNESS = 0
export const MAX_BRIGHTNESS = 1

export const MIN_SATURATION = 0
export const MAX_SATURATION = 10

export const MIN_HUE = 0
export const MAX_HUE = 360
