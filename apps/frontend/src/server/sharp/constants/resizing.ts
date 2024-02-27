export const RESIZE_OPERATION_NAME = {
  RESIZE: 'resize',
  EXTEND: 'extend',
  TRIM: 'trim'
} as const

// Resize
export const RESIZE_FIT = {
  COVER: 'cover',
  CONTAIN: 'contain',
  FILL: 'fill',
  INSIDE: 'inside',
  OUTSIDE: 'outside'
} as const
export const RESIZE_KERNEL = {
  LANCZOS3: 'lanczos3',
  LANCZOS2: 'lanczos2',
  NEAREST: 'nearest',
  CUBIC: 'cubic',
  MITCHELL: 'mitchell'
} as const
export const RESIZE_POSITION = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
  RIGHT_TOP: 'right top',
  RIGHT_BOTTOM: 'right bottom',
  LEFT_TOP: 'left top',
  LEFT_BOTTOM: 'left bottom'
} as const
export const RESIZE_GRAVITY = {
  NORTH: 'north',
  SOUTH: 'south',
  EAST: 'east',
  WEST: 'west',
  NORTH_EAST: 'northeast',
  SOUTH_EAST: 'southeast',
  SOUTH_WEST: 'southwest',
  NORTH_WEST: 'northwest'
} as const

export const RESIZE_SIZE_STEP = 100
export const MIN_RESIZE_SIZE = 1
export const MAX_RESIZE_WIDTH = 1920
export const MAX_RESIZE_HEIGHT = 1440
export const DEFAULT_RESIZE_FIT = RESIZE_FIT.COVER
export const DEFAULT_RESIZE_POSITION = RESIZE_POSITION.CENTER
export const DEFAULT_RESIZE_KERNEL = RESIZE_KERNEL.LANCZOS3
export const DEFAULT_RESIZE_BACKGROUND = '#000000'
export const DEFAULT_WITHOUT_ENLARGEMENT = false
export const DEFAULT_WITHOUT_REDUCTION = false
export const DEFAULT_FAST_SHRINK = true

// Extend
export const EXTEND_WITH = {
  BACKGROUND: 'background',
  COPY: 'copy',
  REPEAT: 'repeat',
  MIRROR: 'mirror'
} as const

export const EXTEND_DIRECTION_SIZE_STEP = 50
export const MIN_EXTEND_DIRECTION_SIZE = 1
export const MAX_EXTEND_DIRECTION_SIZE = 800
export const DEFAULT_EXTEND_BACKGROUND = '#000000'
export const DEFAULT_EXTEND_WITH = EXTEND_WITH.BACKGROUND
export const DEFAULT_EXTEND_INPUT_PROPS = {
  min: MIN_EXTEND_DIRECTION_SIZE,
  max: MAX_EXTEND_DIRECTION_SIZE,
  step: EXTEND_DIRECTION_SIZE_STEP
} as const

// Trim
export const DEFAULT_TRIM_BACKGROUND = '#000000'
export const DEFAULT_TRIM_THRESHOLD = 10
export const MIN_TRIM_THRESHOLD = 0
export const MAX_TRIM_THRESHOLD = 255 // RGB max
// sharp v0.33.2
// export const DEFAULT_TRIM_LINE_ART = false
