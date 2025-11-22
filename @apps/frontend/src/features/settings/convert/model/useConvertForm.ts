import {
  DEFAULT_FLIP,
  DEFAULT_FLOP,
  DEFAULT_GRAYSCALE,
  DEFAULT_NEGATE_VALUE,
  MAX_NORMALIZE,
  MIN_NORMALIZE,
  type GammaValue,
  type ModulateOptions,
  type NormalizeOptions
} from '@scissors/sharp'
import { useForm } from 'react-hook-form'

export interface ConvertFormFields extends ModulateOptions {
  fileName: string
  flip: boolean
  flop: boolean
  grayscale: boolean
  negate: boolean
  gamma: GammaValue
  tint: string | null
  blurSigma: number | null
  normalize: NormalizeOptions
  rotationAngle: number | null
  rotationBackground: string | null
}

const DEFAULT_VALUES: ConvertFormFields = {
  fileName: '',
  flip: DEFAULT_FLIP,
  flop: DEFAULT_FLOP,
  grayscale: DEFAULT_GRAYSCALE,
  negate: DEFAULT_NEGATE_VALUE,
  lightness: null,
  brightness: null,
  saturation: null,
  hue: null,
  gamma: null,
  tint: null,
  blurSigma: null,
  normalize: {
    lower: MIN_NORMALIZE,
    upper: MAX_NORMALIZE
  },
  rotationAngle: null,
  rotationBackground: null
} as const

export const useConvertForm = () =>
  useForm<ConvertFormFields>({
    defaultValues: DEFAULT_VALUES
  })
