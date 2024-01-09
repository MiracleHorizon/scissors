import { boolean, number, object, string } from 'yup'

import {
  ExtendWith,
  ImageFileFormat,
  MAX_BLUR_SIGMA,
  MAX_BRIGHTNESS,
  MAX_EXTEND_DIRECTION_SIZE,
  MAX_GAMMA,
  MAX_HUE,
  MAX_LIGHTNESS,
  MAX_NORMALISE,
  MAX_RESIZE_HEIGHT,
  MAX_RESIZE_WIDTH,
  MAX_ROTATE_ANGLE,
  MAX_SATURATION,
  MIN_BLUR_SIGMA,
  MIN_BRIGHTNESS,
  MIN_EXTEND_DIRECTION_SIZE,
  MIN_GAMMA,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_NORMALISE,
  MIN_RESIZE_SIZE,
  MIN_ROTATE_ANGLE,
  MIN_SATURATION,
  ResizeFit,
  ResizeKernel,
  ResizePosition,
  ResizePositionGravity
} from '@server/Sharp'
import { hexValidationRegex } from '@helpers/colors'

const tintSchema = string()
  .matches(hexValidationRegex, {
    excludeEmptyString: true
  })
  .nullable()
  .defined()

const blurSchema = object({
  value: boolean().defined().required(),
  sigma: number().min(MIN_BLUR_SIGMA).max(MAX_BLUR_SIGMA).nullable().defined()
})
  .nullable()
  .defined()

const negateSchema = object({
  value: boolean().defined().required(),
  alpha: boolean().defined().required()
})
  .nullable()
  .defined()

const normaliseSchema = object({
  lower: number().min(MIN_NORMALISE).max(MAX_NORMALISE).required(),
  upper: number().min(MIN_NORMALISE).max(MAX_NORMALISE).required()
})
  .nullable()
  .defined()

const rotateSchema = object({
  angle: number().min(MIN_ROTATE_ANGLE).max(MAX_ROTATE_ANGLE).required(),
  background: string()
    .matches(hexValidationRegex, {
      excludeEmptyString: true
    })
    .required(),
  withDominantBackground: boolean().defined().required()
})
  .defined()
  .nullable()

const gammaSchema = object({
  value: number().min(MIN_GAMMA).max(MAX_GAMMA).required()
})
  .nullable()
  .defined()

const resizeSchema = object({
  width: number().min(MIN_RESIZE_SIZE).max(MAX_RESIZE_WIDTH).nullable().defined(),
  height: number().min(MIN_RESIZE_SIZE).max(MAX_RESIZE_HEIGHT).nullable().defined(),
  fit: string().oneOf(Object.values(ResizeFit)).nullable().defined(),
  background: string()
    .matches(hexValidationRegex, {
      excludeEmptyString: true
    })
    .nullable()
    .defined(),
  position: string()
    .oneOf([...Object.values(ResizePosition), ...Object.values(ResizePositionGravity)])
    .nullable()
    .defined(),
  kernel: string().oneOf(Object.values(ResizeKernel)).nullable().defined(),
  withoutEnlargement: boolean().defined(),
  withoutReduction: boolean().defined(),
  fastShrinkOnLoad: boolean().defined()
})
  .nullable()
  .defined()

const extendSchema = object({
  top: number().min(MIN_EXTEND_DIRECTION_SIZE).max(MAX_EXTEND_DIRECTION_SIZE).nullable().defined(),
  bottom: number()
    .min(MIN_EXTEND_DIRECTION_SIZE)
    .max(MAX_EXTEND_DIRECTION_SIZE)
    .nullable()
    .defined(),
  left: number().min(MIN_EXTEND_DIRECTION_SIZE).max(MAX_EXTEND_DIRECTION_SIZE).nullable().defined(),
  right: number()
    .min(MIN_EXTEND_DIRECTION_SIZE)
    .max(MAX_EXTEND_DIRECTION_SIZE)
    .nullable()
    .defined(),
  extendWith: string().oneOf(Object.values(ExtendWith)).defined(),
  background: string()
    .matches(hexValidationRegex, {
      excludeEmptyString: true
    })
    .defined()
})
  .nullable()
  .defined()

const modulateSchema = object({
  lightness: number().min(MIN_LIGHTNESS).max(MAX_LIGHTNESS).nullable().defined(),
  brightness: number().min(MIN_BRIGHTNESS).max(MAX_BRIGHTNESS).nullable().defined(),
  saturation: number().min(MIN_SATURATION).max(MAX_SATURATION).nullable().defined(),
  hue: number().min(MIN_HUE).max(MAX_HUE).nullable().defined()
})
  .nullable()
  .defined()

const outputFormatSchema = string().oneOf(Object.values(ImageFileFormat)).nullable().defined()

const booleanSchema = boolean().defined()

const settingsSchema = object({
  flip: booleanSchema,
  flop: booleanSchema,
  grayscale: booleanSchema,
  tint: tintSchema,
  negate: negateSchema,
  normalise: normaliseSchema,
  blur: blurSchema,
  rotate: rotateSchema,
  gamma: gammaSchema,
  modulate: modulateSchema,
  outputFormat: outputFormatSchema
})

// TODO: Queue validation
const resizeSettingsSchema = object({
  resize: resizeSchema,
  extend: extendSchema
})

// TODO: Абстракция
export class YupSettingsValidator {
  public static validateConvert(settings: unknown): boolean {
    return settingsSchema.isValidSync(settings)
  }

  public static validateResize(settings: unknown): boolean {
    return resizeSettingsSchema.isValidSync(settings)
  }

  public static isTintValid(tint: unknown): boolean {
    return tintSchema.isValidSync(tint)
  }

  public static isNegateValid(negate: unknown): boolean {
    return negateSchema.isValidSync(negate)
  }

  public static isNormaliseValid(normalise: unknown): boolean {
    return normaliseSchema.isValidSync(normalise)
  }

  public static isBlurValid(blur: unknown): boolean {
    return blurSchema.isValidSync(blur)
  }

  public static isGammaValid(gamma: unknown): boolean {
    return gammaSchema.isValidSync(gamma)
  }

  public static isRotateValid(rotate: unknown): boolean {
    return rotateSchema.isValidSync(rotate)
  }

  public static isResizeValid(resize: unknown): boolean {
    return resizeSchema.isValidSync(resize)
  }

  public static isExtendValid(extend: unknown): boolean {
    return extendSchema.isValidSync(extend)
  }

  public static isModulateValid(modulate: unknown): boolean {
    return modulateSchema.isValidSync(modulate)
  }

  public static isValidOutputFormat(outputFormat: unknown): boolean {
    return outputFormatSchema.isValidSync(outputFormat)
  }
}
