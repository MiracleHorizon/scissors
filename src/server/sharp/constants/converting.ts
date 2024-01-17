import type { FormatEnum } from 'sharp'

import type {
  BlurOptions,
  GammaOptions,
  NegateOptions,
  NormaliseOptions,
  RotateOptions
} from '../types'

export const IMAGE_FILE_FORMAT: Record<string, keyof FormatEnum> = {
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
  WEBP: 'webp'
}
export const ALLOWED_IMAGE_FORMATS = Object.values(IMAGE_FILE_FORMAT)
  .map(format => `image/${format}`)
  .join(', ')

export const DEFAULT_FLIP = false
export const DEFAULT_FLOP = false
export const DEFAULT_GRAYSCALE = false
export const DEFAULT_TINT_COLOR = '#000000'

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

// Gamma
export const MIN_GAMMA = 1
export const MAX_GAMMA = 3
export const DEFAULT_GAMMA: GammaOptions = {
  value: 2.2
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

// Modulate
export const MIN_LIGHTNESS = 0
export const MAX_LIGHTNESS = 100

export const MIN_BRIGHTNESS = 0
export const MAX_BRIGHTNESS = 1

export const MIN_SATURATION = 0
export const MAX_SATURATION = 10

export const MIN_HUE = 0
export const MAX_HUE = 360
