import isEmpty from 'lodash.isempty'
import type { FormatEnum } from 'sharp'

import { ImageSharp } from './ImageSharp'
import { DEFAULT_ROTATE_BACKGROUND } from './constants'
import { YupSettingsValidator } from '@utils/YupSettingsValidator'
import type {
  BlurOptions,
  ConvertSettings,
  ImageFileFormat,
  ModulateOptions,
  NegateOptions,
  NormaliseOptions,
  RotateOptions
} from './types'

export class ImageConverter extends ImageSharp {
  constructor(buffer: ArrayBuffer) {
    super(buffer)
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
    modulate,
    outputFormat
  }: ConvertSettings): Promise<Buffer> {
    await this.initialiseInputStatistics()

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

    if (gamma) {
      this.gamma(gamma)
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

  private flip(): void {
    this.sharp.flip()
  }

  private flop(): void {
    this.sharp.flop()
  }

  private grayscale(): void {
    this.sharp.grayscale()
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
      this.sharp.blur(sigma ?? false)
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

    this.sharp.negate({
      alpha
    })
  }

  private normalise(options: NormaliseOptions): void {
    const isValid = YupSettingsValidator.isNormaliseValid(options)
    if (!isValid) {
      throw new Error('Invalid normalise options')
    }

    try {
      this.sharp.normalise(options)
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

    const background = this.getBackground({
      background: options.background ?? DEFAULT_ROTATE_BACKGROUND,
      withDominantBackground: options.withDominantBackground
    })

    try {
      this.sharp.rotate(angle, {
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

  private tint(color: string): void {
    const isValid = YupSettingsValidator.isTintValid(color)
    if (!isValid) {
      throw new Error('Invalid tint color')
    }

    try {
      this.sharp.tint(color)
    } catch (err) {
      throw new Error('Failed to tint the image. Sure that the color is valid', {
        cause: err
      })
    }
  }

  private gamma(gamma: number): void {
    const isValid = YupSettingsValidator.isGammaValid(gamma)
    if (!isValid) {
      throw new Error('Invalid gamma options')
    }

    try {
      this.sharp.gamma(gamma)
    } catch (err) {
      throw new Error(`Failed to gammaize the image with gamma: ${gamma}`, {
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

    this.sharp.modulate(options)
  }

  private toFormat(format: ImageFileFormat): void {
    const isValid = YupSettingsValidator.isValidOutputFormat(format)
    if (!isValid) {
      throw new Error('Unsupported image format')
    }

    try {
      this.sharp.toFormat(format as keyof FormatEnum)
    } catch (err) {
      throw new Error(`Failed to convert the image to the .${format} format`, {
        cause: err
      })
    }
  }
}
