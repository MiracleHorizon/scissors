import {
  type ConvertSettings,
  DEFAULT_GAMMA,
  EXTEND_WITH,
  IMAGE_FILE_FORMAT,
  MAX_NORMALIZE,
  MIN_BRIGHTNESS,
  MIN_EXTEND_DIRECTION_SIZE,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_NORMALIZE,
  MIN_RESIZE_SIZE,
  MIN_SATURATION,
  MIN_TRIM_THRESHOLD,
  RESIZE_FIT,
  RESIZE_KERNEL,
  RESIZE_POSITION,
  type ResizeSettings
} from '@scissors/sharp'

const VALID_CONVERT_SETTINGS: ConvertSettings = {
  flip: true,
  flop: false,
  grayscale: true,
  negate: {
    value: true,
    alpha: false
  },
  normalize: {
    lower: MIN_NORMALIZE,
    upper: MAX_NORMALIZE
  },
  blur: {
    value: true,
    sigma: 1
  },
  rotate: {
    angle: 90,
    background: '#FFFFFF'
  },
  gamma: DEFAULT_GAMMA,
  tint: '#FF0004',
  modulate: {
    lightness: MIN_LIGHTNESS,
    brightness: MIN_BRIGHTNESS,
    saturation: MIN_SATURATION,
    hue: MIN_HUE
  },
  outputFormat: IMAGE_FILE_FORMAT.PNG
} as const
const VALID_RESIZE_SETTINGS: ResizeSettings = {
  queue: [
    {
      name: 'resize',
      queueIndex: 0
    },
    {
      name: 'trim',
      queueIndex: 1
    }
  ],
  resize: {
    width: MIN_RESIZE_SIZE,
    height: MIN_RESIZE_SIZE,
    fit: RESIZE_FIT.CONTAIN,
    background: '#000000',
    position: RESIZE_POSITION.CENTER,
    kernel: RESIZE_KERNEL.LANCZOS3,
    withoutEnlargement: true,
    withoutReduction: false,
    fastShrinkOnLoad: true,
    withDominantBackground: false
  },
  extend: {
    top: MIN_EXTEND_DIRECTION_SIZE,
    bottom: MIN_EXTEND_DIRECTION_SIZE,
    right: MIN_EXTEND_DIRECTION_SIZE,
    left: MIN_EXTEND_DIRECTION_SIZE,
    extendWith: EXTEND_WITH.BACKGROUND,
    background: '#FFFFFF',
    withDominantBackground: false
  },
  trim: {
    background: '#000000',
    threshold: MIN_TRIM_THRESHOLD,
    lineArt: false
  },
  extract: {
    left: 10,
    top: 10,
    width: 100,
    height: 100
  },
  outputFormat: null
} as const

export {
  VALID_CONVERT_SETTINGS as validConvertSettings,
  VALID_RESIZE_SETTINGS as validResizeSettings
}
