import type { BlurOptions, ConvertSettings, NegateOptions, NormaliseOptions } from './types'

export const DEFAULT_FLIP = false
export const DEFAULT_FLOP = false
export const DEFAULT_GRAYSCALE = false
export const DEFAULT_TINT_COLOR = '#000000'

// Normalise
export const MIN_NORMALISE = 0
export const MAX_NORMALISE = 100
export const DEFAULT_LOWER_NORMALISE = 1
export const DEFAULT_UPPER_NORMALISE = 99
export const DEFAULT_NORMALISE: NormaliseOptions = {
  lower: DEFAULT_LOWER_NORMALISE,
  upper: DEFAULT_UPPER_NORMALISE
} as const

// Blur
export const MIN_BLUR_SIGMA = 0.3
export const MAX_BLUR_SIGMA = 10
export const BLUR_SIGMA_STEP = 0.1
export const DEFAULT_BLUR: BlurOptions = {
  value: false,
  sigma: null
} as const

// Negate
export const DEFAULT_NEGATE_VALUE = false
export const DEFAULT_NEGATE_ALPHA = false
export const DEFAULT_NEGATE: NegateOptions = {
  value: DEFAULT_NEGATE_VALUE,
  alpha: DEFAULT_NEGATE_ALPHA
} as const

// Gamma
export const MIN_GAMMA = 1
export const MAX_GAMMA = 3
export const DEFAULT_GAMMA = 2.2
export const GAMMA_STEP = 0.1

// Rotate
export const MIN_ROTATE_ANGLE = -360
export const MAX_ROTATE_ANGLE = 360
export const DEFAULT_ROTATE_ANGLE = 0
export const DEFAULT_ROTATE_BACKGROUND = '#000000'

// Modulate
export const MIN_LIGHTNESS = 0
export const MAX_LIGHTNESS = 100

export const MIN_BRIGHTNESS = 0
export const MAX_BRIGHTNESS = 1
export const BRIGHTNESS_STEP = 0.1

export const MIN_SATURATION = 0
export const MAX_SATURATION = 10
export const SATURATION_STEP = 0.1

export const MIN_HUE = 0
export const MAX_HUE = 360

export const NULL_CONVERT_SETTINGS: ConvertSettings = {
  flip: false,
  flop: false,
  grayscale: false,
  tint: null,
  negate: null,
  normalise: null,
  blur: null,
  rotate: null,
  gamma: null,
  modulate: null,
  outputFormat: null
} as const
