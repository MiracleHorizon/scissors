import {
  MAX_BLUR_SIGMA,
  MAX_BRIGHTNESS,
  MAX_LIGHTNESS,
  MAX_SATURATION,
  MIN_BLUR_SIGMA,
  MIN_BRIGHTNESS,
  MIN_LIGHTNESS,
  MIN_SATURATION
} from '@scissors/sharp'

const brightness = `brightness:${MIN_BRIGHTNESS}-${MAX_BRIGHTNESS}`
const lightness = `lightness:${MIN_LIGHTNESS}-${MAX_LIGHTNESS}`
const hueAngle = 'hue:deg'
const saturation = `saturation:${MIN_SATURATION}-${MAX_SATURATION}`
const rotate = 'rotate:deg'
const flip = 'flip(y mirror):bool'
const flop = 'flop(x mirror):bool'
const grayscale = 'grayscale:bool'
const blur = `blur:${MIN_BLUR_SIGMA}-${MAX_BLUR_SIGMA}`

const options: string[] = [
  brightness,
  lightness,
  hueAngle,
  saturation,
  rotate,
  flip,
  flop,
  grayscale,
  blur
] as const

const context = `You are a helpful assistant for image editing. Options:${options.join(',')}`
const validation = 'Invalid/non-image/non-options input → reply: "INVALID"'

// TODO: Language
export const getContextForPrompt = (prompt: string): string =>
  `${context}.Description of the changes you need to make:"${prompt}".${validation}`
