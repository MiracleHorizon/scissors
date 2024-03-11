import type { ExtendWith, FitEnum, KernelEnum } from 'sharp'

export const RESIZE_OPERATION = {
  RESIZE: 'resize',
  EXTEND: 'extend',
  EXTRACT: 'extract',
  TRIM: 'trim'
} as const

// Resize
export const RESIZE_FIT: Record<string, keyof FitEnum> = {
  COVER: 'cover',
  CONTAIN: 'contain',
  FILL: 'fill',
  INSIDE: 'inside',
  OUTSIDE: 'outside'
} as const

export const RESIZE_KERNEL: Record<string, keyof KernelEnum> = {
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

// Extend
export const EXTEND_WITH: Record<string, ExtendWith> = {
  BACKGROUND: 'background',
  COPY: 'copy',
  REPEAT: 'repeat',
  MIRROR: 'mirror'
} as const
