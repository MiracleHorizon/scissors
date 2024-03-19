import { array, boolean, number, object, string } from 'yup'

import {
  EXTEND_WITH,
  IMAGE_FILE_FORMAT,
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
  MAX_TRIM_THRESHOLD,
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
  MIN_TRIM_THRESHOLD,
  RESIZE_FIT,
  RESIZE_GRAVITY,
  RESIZE_KERNEL,
  RESIZE_OPERATION,
  RESIZE_POSITION
} from '@scissors/sharp'
import { hexValidationRegex } from '@helpers/colors'

export const booleanSchema = boolean().defined()

// Convert settings

export const tintSchema = string().matches(hexValidationRegex).nullable().defined()

export const blurSchema = object({
  value: boolean().defined().required(),
  sigma: number().min(MIN_BLUR_SIGMA).max(MAX_BLUR_SIGMA).nullable().defined()
})
  .nullable()
  .defined()

export const negateSchema = object({
  value: boolean().defined().required(),
  alpha: boolean().defined().required()
})
  .nullable()
  .defined()

export const normaliseSchema = object({
  lower: number().min(MIN_NORMALISE).max(MAX_NORMALISE).required(),
  upper: number().min(MIN_NORMALISE).max(MAX_NORMALISE).required()
})
  .nullable()
  .defined()

export const rotateSchema = object({
  angle: number().min(MIN_ROTATE_ANGLE).max(MAX_ROTATE_ANGLE).required(),
  background: string().matches(hexValidationRegex).nullable().defined(),
  withDominantBackground: boolean().defined().required()
})
  .nullable()
  .defined()

export const gammaSchema = number().min(MIN_GAMMA).max(MAX_GAMMA).nullable().defined()

export const modulateSchema = object({
  lightness: number().min(MIN_LIGHTNESS).max(MAX_LIGHTNESS).nullable().defined(),
  brightness: number().min(MIN_BRIGHTNESS).max(MAX_BRIGHTNESS).nullable().defined(),
  saturation: number().min(MIN_SATURATION).max(MAX_SATURATION).nullable().defined(),
  hue: number().integer().min(MIN_HUE).max(MAX_HUE).nullable().defined()
})
  .nullable()
  .defined()

export const outputFormatSchema = string()
  .oneOf(Object.values(IMAGE_FILE_FORMAT))
  .nullable()
  .defined()

export const convertSettingsSchema = object({
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

// Resize settings
export const resizeSchema = object({
  width: number().min(MIN_RESIZE_SIZE).max(MAX_RESIZE_WIDTH).nullable().defined(),
  height: number().min(MIN_RESIZE_SIZE).max(MAX_RESIZE_HEIGHT).nullable().defined(),
  fit: string().oneOf(Object.values(RESIZE_FIT)).nullable().defined(),
  background: string().matches(hexValidationRegex).nullable().defined(),
  position: string()
    .oneOf([...Object.values(RESIZE_POSITION), ...Object.values(RESIZE_GRAVITY)])
    .nullable()
    .defined(),
  kernel: string().oneOf(Object.values(RESIZE_KERNEL)).nullable().defined(),
  withoutEnlargement: booleanSchema,
  withoutReduction: booleanSchema,
  fastShrinkOnLoad: booleanSchema,
  withDominantBackground: booleanSchema
})
  .nullable()
  .defined()

export const extendSchema = object({
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
  extendWith: string().oneOf(Object.values(EXTEND_WITH)).defined(),
  background: string().matches(hexValidationRegex).defined()
})
  .nullable()
  .defined()

export const trimSchema = object({
  background: string().matches(hexValidationRegex).nullable().defined(),
  threshold: number()
    .positive()
    .min(MIN_TRIM_THRESHOLD)
    .max(MAX_TRIM_THRESHOLD)
    .nullable()
    .defined(),
  lineArt: booleanSchema
})
  .nullable()
  .defined()

const resizeOperations = Object.values(RESIZE_OPERATION)
const resizeQueueItemSchema = object({
  name: string().oneOf(resizeOperations),
  queueIndex: number()
    .integer()
    .min(0)
    .max(resizeOperations.length - 1)
})
export const resizeSettingsSchema = object({
  resize: resizeSchema,
  extend: extendSchema,
  trim: trimSchema,
  queue: array().of(resizeQueueItemSchema).max(resizeOperations.length).defined().required()
})
