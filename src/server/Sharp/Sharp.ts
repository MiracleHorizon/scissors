import sharp, { type Color, type Stats } from 'sharp'
import isEmpty from 'lodash.isempty'

import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import {
  type BlurOptions,
  type ConvertSettings,
  type ExtendOptions,
  type GammaOptions,
  ImageFileFormat,
  type ModulateOptions,
  type NegateOptions,
  type NormaliseOptions,
  type ResizeOptions,
  type RotateOptions
} from '@server/Sharp'

export class Sharp {
  private readonly imageSharp: sharp.Sharp
  private stats: Stats | null = null

  constructor(imageBuffer: ArrayBuffer) {
    this.imageSharp = sharp(imageBuffer)
  }

  public async convert({
    flip,
    flop,
    grayscale,
    tint,
    negate,
    normalise,
    blur,
    rotate,
    gamma,
    resize,
    extend,
    modulate,
    outputFormat
  }: ConvertSettings): Promise<Buffer> {
    const stats = await this.getStatsOrNull()
    if (stats) this.stats = stats

    if (flip) {
      this.flip()
    }

    if (flop) {
      this.flop()
    }

    if (grayscale) {
      this.grayscale()
    }

    if (negate) {
      this.negate(negate)
    }

    if (tint) {
      this.tint(tint)
    }

    if (normalise) {
      this.normalise(normalise)
    }

    if (blur?.value) {
      this.blur(blur)
    }

    if (gamma?.value) {
      this.gamma(gamma)
    }

    if (resize) {
      this.resize(resize)
    }

    if (extend) {
      this.extend(extend)
    }

    if (rotate) {
      this.rotate(rotate)
    }

    if (modulate) {
      this.modulate(modulate)
    }

    if (outputFormat) {
      this.toFormat(outputFormat)
    }

    return this.toBuffer()
  }

  private async getStatsOrNull(): Promise<Stats | null> {
    try {
      return await this.imageSharp.stats()
    } catch {
      return null
    }
  }

  private flip(): void {
    this.imageSharp.flip()
  }

  private flop(): void {
    this.imageSharp.flop()
  }

  private grayscale(): void {
    this.imageSharp.grayscale()
  }

  private blur({ value, sigma }: BlurOptions): void {
    if (!value) return

    const isValid = YupSettingsValidator.isBlurValid({
      value,
      sigma
    })
    if (!isValid) {
      throw new Error('Invalid blur options')
    }

    try {
      this.imageSharp.blur(sigma ?? false)
    } catch (err) {
      throw new Error('Failed to blur the image', {
        cause: err
      })
    }
  }

  private negate({ value, alpha }: NegateOptions): void {
    if (!value) return

    const isValid = YupSettingsValidator.isNegateValid({
      value,
      alpha
    })
    if (!isValid) {
      throw new Error('Invalid negate options')
    }

    this.imageSharp.negate({
      alpha
    })
  }

  private normalise(options: NormaliseOptions): void {
    const isValid = YupSettingsValidator.isNormaliseValid(options)
    if (!isValid) {
      throw new Error('Invalid normalise options')
    }

    try {
      this.imageSharp.normalise(options)
    } catch (err) {
      throw new Error('Failed to normalise the image', {
        cause: err
      })
    }
  }

  private rotate({ angle, ...options }: RotateOptions): void {
    if (!angle) return

    const isValid = YupSettingsValidator.isRotateValid({
      angle,
      ...options
    })
    if (!isValid) {
      throw new Error('Invalid rotate options')
    }

    const background = this.getRotateBackground(options)

    try {
      this.imageSharp.rotate(angle, {
        background
      })
    } catch (err) {
      if (err instanceof Error && err.message.startsWith('Unable to parse color from string')) {
        throw new Error(`Failed to rotate the image with the background color: ${background}`, {
          cause: err
        })
      }

      throw new Error('Failed to rotate the image', {
        cause: err
      })
    }
  }

  private getRotateBackground({
    background,
    withDominantBackground
  }: Pick<RotateOptions, 'background' | 'withDominantBackground'>): Color {
    if (!this.stats && withDominantBackground) {
      throw new Error('Failed to rotate the image with the dominant background color')
    }

    if (!this.stats || !withDominantBackground) {
      return background
    }

    return this.stats.dominant
  }

  private tint(color: string): void {
    const isValid = YupSettingsValidator.isTintValid(color)
    if (!isValid) {
      throw new Error('Invalid tint color')
    }

    try {
      this.imageSharp.tint(color)
    } catch (err) {
      throw new Error('Failed to tint the image. Sure that the color is valid', {
        cause: err
      })
    }
  }

  private gamma({ value }: GammaOptions): void {
    const isValid = YupSettingsValidator.isGammaValid({
      value
    })
    if (!isValid) {
      throw new Error('Invalid gamma options')
    }

    try {
      this.imageSharp.gamma(value)
    } catch (err) {
      throw new Error(`Failed to gammaize the image with gamma value: ${value}`, {
        cause: err
      })
    }
  }

  private resize({ width, height, ...options }: ResizeOptions) {
    if (!width && !height) return

    const isValid = YupSettingsValidator.isResizeValid({
      width,
      height,
      ...options
    })
    if (!isValid) {
      throw new Error('Invalid resize options')
    }

    try {
      this.imageSharp.resize({
        width: width ?? undefined,
        height: height ?? undefined,
        fit: options.fit ?? undefined,
        background: options.background ?? undefined,
        position: options.position ?? undefined,
        kernel: options.kernel ?? undefined
      })
    } catch (err) {
      throw new Error('Failed to resize the image', {
        cause: err
      })
    }
  }

  private extend(options: ExtendOptions): void {
    const isValid = YupSettingsValidator.isExtendValid(options)
    if (!isValid) {
      throw new Error('Invalid extend options')
    }

    const { top, bottom, left, right } = options
    if (!top && !bottom && !left && !right) return

    try {
      this.imageSharp.extend({
        top: top ?? undefined,
        bottom: bottom ?? undefined,
        left: left ?? undefined,
        right: right ?? undefined,
        extendWith: options.extendWith ?? undefined,
        background: options.background ?? undefined
      })
    } catch (err) {
      throw new Error('Failed to extend the image', {
        cause: err
      })
    }
  }

  private modulate(modulateOptions: ModulateOptions): void {
    const isValid = YupSettingsValidator.isModulateValid(modulateOptions)
    if (!isValid) {
      throw new Error('Invalid modulate options')
    }

    if (isEmpty(modulateOptions)) return

    const options: Record<string, number> = {}
    for (const [key, value] of Object.entries(modulateOptions)) {
      if (value === null) continue

      options[key] = value
    }

    if (isEmpty(options)) return

    this.imageSharp.modulate(options)
  }

  private toFormat(format: ImageFileFormat): void {
    const isValid = YupSettingsValidator.isValidOutputFormat(format)
    if (!isValid) {
      throw new Error('Unsupported image format')
    }

    try {
      this.imageSharp.toFormat(format)
    } catch (err) {
      throw new Error(`Failed to convert the image to the .${format} format`, {
        cause: err
      })
    }
  }

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
