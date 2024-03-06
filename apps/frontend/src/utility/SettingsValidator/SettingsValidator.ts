import {
  blurSchema,
  extendSchema,
  gammaSchema,
  modulateSchema,
  negateSchema,
  normaliseSchema,
  outputFormatSchema,
  resizeSchema,
  resizeSettingsSchema,
  rotateSchema,
  convertSettingsSchema,
  tintSchema,
  trimSchema
} from './SettingsValidator.schemas'

export class SettingsValidator {
  public static validateConvert(settings: unknown): boolean {
    return convertSettingsSchema.isValidSync(settings)
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

  public static isTrimValid(trim: unknown): boolean {
    return trimSchema.isValidSync(trim)
  }

  public static isModulateValid(modulate: unknown): boolean {
    return modulateSchema.isValidSync(modulate)
  }

  public static isValidOutputFormat(outputFormat: unknown): boolean {
    return outputFormatSchema.isValidSync(outputFormat)
  }
}
