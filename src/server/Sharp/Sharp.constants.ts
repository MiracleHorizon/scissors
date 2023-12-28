import type { Color } from 'sharp'

import {
  type BlurOptions,
  ExtendWith,
  type GammaOptions,
  ImageFileFormat,
  type NegateOptions,
  type NormaliseOptions,
  ResizeFit,
  ResizeKernel,
  ResizePosition,
  type RotateOptions
} from './Sharp.types'

export const ALLOWED_IMAGE_FORMATS = Object.values(ImageFileFormat)
  .map(format => `image/${format}`)
  .join(', ')

// Basic
export const DEFAULT_FLIP = false
export const DEFAULT_FLOP = false
export const DEFAULT_GRAYSCALE = false

// Normalise
export const MIN_NORMALISE = 1
export const MAX_NORMALISE = 99
export const DEFAULT_NORMALISE: NormaliseOptions = {
  lower: MIN_NORMALISE,
  upper: MAX_NORMALISE
}

// Blur
export const MIN_BLUR_SIGMA = 0.3
export const MAX_BLUR_SIGMA = 10
export const DEFAULT_BLUR: BlurOptions = {
  value: false,
  sigma: null
}

// Negate
export const DEFAULT_NEGATE_VALUE = false
export const DEFAULT_NEGATE_ALPHA = false
export const DEFAULT_NEGATE: NegateOptions = {
  value: DEFAULT_NEGATE_VALUE,
  alpha: DEFAULT_NEGATE_ALPHA
}

// Rotate
export const MIN_ROTATE_ANGLE = -360
export const MAX_ROTATE_ANGLE = 360
export const DEFAULT_ROTATE_ANGLE = 0
export const DEFAULT_ROTATE_BACKGROUND = '#000000'
export const DEFAULT_ROTATE_WITH_DOMINANT_BACKGROUND = false
export const DEFAULT_ROTATE: RotateOptions = {
  angle: DEFAULT_ROTATE_ANGLE,
  background: DEFAULT_ROTATE_BACKGROUND,
  withDominantBackground: DEFAULT_ROTATE_WITH_DOMINANT_BACKGROUND
}

// Gamma
export const MIN_GAMMA = 1
export const MAX_GAMMA = 3
export const DEFAULT_GAMMA: GammaOptions = {
  value: 2.2
}

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

// Extend
export const EXTEND_DIRECTION_SIZE_STEP = 50
export const MIN_EXTEND_DIRECTION_SIZE = 1
export const MAX_EXTEND_DIRECTION_SIZE = 800
export const DEFAULT_EXTEND_BACKGROUND: Color = '#000000'
export const DEFAULT_EXTEND_WITH: ExtendWith = ExtendWith.BACKGROUND
export const DEFAULT_EXTEND_INPUT_PROPS = {
  min: MIN_EXTEND_DIRECTION_SIZE,
  max: MAX_EXTEND_DIRECTION_SIZE,
  step: EXTEND_DIRECTION_SIZE_STEP
}

// Modulate
export const MIN_LIGHTNESS = 0
export const MAX_LIGHTNESS = 100

export const MIN_BRIGHTNESS = 0
export const MAX_BRIGHTNESS = 1

export const MIN_SATURATION = 0
export const MAX_SATURATION = 10

export const MIN_HUE = 0
export const MAX_HUE = 360

// Other
export const DEFAULT_TINT_COLOR = '#000000'
