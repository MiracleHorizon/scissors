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
const flip = 'flip(ymirror):bool'
const flop = 'flop(xmirror):bool'
const grayscale = 'grayscale:bool'
const blur = `blur:${MIN_BLUR_SIGMA}-${MAX_BLUR_SIGMA}`
const negate = 'negate:bool'

const options: string[] = [
  brightness,
  lightness,
  hueAngle,
  saturation,
  rotate,
  flip,
  flop,
  grayscale,
  blur,
  negate
] as const

const context = `You are a helpful assistant for image editing. Your options:${options.join(',')}`
const validation = 'PROMPT VALIDATION:If the input is not an option, reply: "INVALID"'

// TODO: Language
export const getContextForPrompt = (prompt: string): string =>
  `${context}. ${validation}. Description of the changes you need to make:"${prompt}".List the values separated by ;`
