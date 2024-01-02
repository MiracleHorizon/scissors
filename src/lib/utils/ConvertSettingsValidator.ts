import {
  type BlurOptions,
  type ConvertSettings,
  type ExtendOptions,
  ExtendWith,
  type GammaOptions,
  ImageFileFormat,
  type ModulateOptions,
  type NegateOptions,
  type NormaliseOptions,
  ResizeFit,
  ResizeKernel,
  type ResizeOptions,
  type RotateOptions
} from '@server/Sharp'

// TODO: Try to refactor
export class ConvertSettingsValidator {
  public static validate(settings: any): settings is ConvertSettings {
    if (typeof settings !== 'object' || settings === null || Array.isArray(settings)) {
      return false
    }

    if (!this.isIncludeAllFields(settings)) {
      return false
    }

    const {
      flip,
      flop,
      grayscale,
      negate,
      normalise,
      blur,
      rotate,
      gamma,
      resize,
      extend,
      tint,
      modulate,
      outputFormat
    } = settings

    return !(
      typeof flip !== 'boolean' ||
      typeof flop !== 'boolean' ||
      typeof grayscale !== 'boolean' ||
      !this.isValidTintOptions(tint) ||
      !this.isValidBlurOptions(blur) ||
      !this.isValidRotateOptions(rotate) ||
      !this.isValidNormaliseOptions(normalise) ||
      !this.isValidNegateOptions(negate) ||
      !this.isValidGammaOptions(gamma) ||
      !this.isValidResizeOptions(resize) ||
      !this.isValidExtendOptions(extend) ||
      !this.isValidModulateOptions(modulate) ||
      !this.isValidOutputFormat(outputFormat)
    )
  }

  private static isIncludeAllFields(settings: any): boolean {
    return !(
      !('flip' in settings) ||
      !('flop' in settings) ||
      !('grayscale' in settings) ||
      !('negate' in settings) ||
      !('normalise' in settings) ||
      !('blur' in settings) ||
      !('rotate' in settings) ||
      !('gamma' in settings) ||
      !('resize' in settings) ||
      !('extend' in settings) ||
      !('tint' in settings) ||
      !('modulate' in settings) ||
      !('outputFormat' in settings)
    )
  }

  public static isValidTintOptions(tint: any): tint is string {
    if (tint === null) {
      return true
    }

    return typeof tint === 'string'
  }

  public static isValidBlurOptions(options: any): options is BlurOptions {
    if (options === null) {
      return true
    }

    if (typeof options !== 'object') {
      return false
    }

    if (typeof options.value !== 'boolean') {
      return false
    }

    return options.sigma === null || typeof options.sigma === 'number'
  }

  public static isValidRotateOptions(options: any): options is RotateOptions {
    if (options === null) {
      return true
    }

    if (typeof options !== 'object') {
      return false
    }

    return (
      typeof options.angle === 'number' &&
      typeof options.background === 'string' &&
      typeof options.withDominantBackground === 'boolean'
    )
  }

  public static isValidNormaliseOptions(options: any): options is NormaliseOptions {
    if (options === null) {
      return true
    }

    if (typeof options !== 'object') {
      return false
    }

    return typeof options.lower === 'number' && typeof options.upper === 'number'
  }

  public static isValidNegateOptions(options: any): options is NegateOptions {
    if (options === null) {
      return true
    }

    if (typeof options !== 'object') {
      return false
    }

    return typeof options.value === 'boolean' && typeof options.alpha === 'boolean'
  }

  public static isValidGammaOptions(options: any): options is GammaOptions {
    if (options === null) {
      return true
    }

    if (typeof options !== 'object') {
      return false
    }

    return typeof options.value === 'number'
  }

  public static isValidResizeOptions(options: any): options is ResizeOptions {
    if (options === null) {
      return true
    }

    if (typeof options !== 'object') {
      return false
    }

    if (Array.isArray(options)) {
      return false
    }

    if (!Object.values(ResizeFit).includes(options.fit)) {
      return false
    }

    if (options.background !== null && typeof options.background !== 'string') {
      return false
    }

    if (options.position !== null && typeof options.position !== 'string') {
      return false
    }

    if (options.kernel !== null && !Object.values(ResizeKernel).includes(options.kernel)) {
      return false
    }

    if (typeof options.withoutEnlargement !== 'boolean') {
      return false
    }

    if (typeof options.withoutReduction !== 'boolean') {
      return false
    }

    if (typeof options.fastShrinkOnLoad !== 'boolean') {
      return false
    }

    if (options.width !== null && typeof options.width !== 'number') {
      return false
    }

    return !(options.height !== null && typeof options.height !== 'number')
  }

  public static isValidExtendOptions(options: any): options is ExtendOptions {
    if (options === null) {
      return true
    }

    if (typeof options !== 'object') {
      return false
    }

    if (Array.isArray(options)) {
      return false
    }

    if (!Object.values(ExtendWith).includes(options.extendWith)) {
      return false
    }

    if (!(typeof options.background === 'string')) {
      return false
    }

    return (
      (options.top === null || typeof options.top === 'number') &&
      (options.bottom === null || typeof options.bottom === 'number') &&
      (options.right === null || typeof options.right === 'number') &&
      (options.left === null || typeof options.left === 'number')
    )
  }

  public static isValidModulateOptions(options: any): options is ModulateOptions {
    if (options === null) {
      return true
    }

    if (typeof options !== 'object') {
      return false
    }

    return (
      (typeof options.lightness === 'number' || options.lightness === null) &&
      (typeof options.brightness === 'number' || options.brightness === null) &&
      (typeof options.saturation === 'number' || options.saturation === null) &&
      (typeof options.hue === 'number' || options.hue === null)
    )
  }

  public static isValidOutputFormat(outputFormat: any): boolean {
    if (outputFormat === null) {
      return true
    }

    return Object.values(ImageFileFormat).includes(outputFormat)
  }
}
