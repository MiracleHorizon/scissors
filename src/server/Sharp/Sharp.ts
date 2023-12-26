import sharp, { type RGBA, type Stats } from 'sharp'
import isEmpty from 'lodash.isempty'

import {
  type BlurOptions,
  type ConvertSettings,
  type GammaOptions,
  ImageFileFormat,
  MAX_BLUR_SIGMA,
  MAX_GAMMA,
  MIN_GAMMA,
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
    modulate,
    outputFormat
  }: ConvertSettings): Promise<Buffer> {
    const stats = await this.getStatsOrNull()

    if (stats) this.stats = stats

    if (outputFormat) {
      this.toFormat(outputFormat)
    }

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
      await this.blur(blur)
    }

    if (gamma?.value) {
      this.gamma({ value: gamma?.value })
    }

    if (resize) {
      this.resize(resize)
    }

    if (rotate) {
      await this.rotate(rotate)
    }

    if (modulate) {
      this.modulate(modulate)
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

  private toFormat(format: ImageFileFormat): void {
    const formats = Object.values(ImageFileFormat)

    if (!formats.includes(format)) {
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

  private flip(): void {
    this.imageSharp.flip()
  }

  private flop(): void {
    this.imageSharp.flop()
  }

  private grayscale(): void {
    this.imageSharp.grayscale()
  }

  private negate({ value, alpha }: NegateOptions): void {
    if (!value) return

    this.imageSharp.negate({ alpha })
  }

  private async blur({ sigma }: Pick<BlurOptions, 'sigma'>): Promise<void> {
    try {
      if (sigma && sigma > MAX_BLUR_SIGMA) {
        return Promise.reject(new Error('Invalid blur sigma'))
      }

      void this.imageSharp.blur(sigma ?? false)
    } catch (err) {
      throw new Error('Failed to blur the image', {
        cause: err
      })
    }
  }

  private normalise(options: NormaliseOptions): void {
    try {
      this.imageSharp.normalise(options)
    } catch (err) {
      throw new Error('Failed to normalise the image', {
        cause: err
      })
    }
  }

  private async rotate({ angle, ...options }: RotateOptions): Promise<void> {
    const background = this.getRotateBackground(options)

    try {
      this.imageSharp.rotate(angle, { background })
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
  }: Pick<RotateOptions, 'background' | 'withDominantBackground'>): string | RGBA {
    if (!this.stats && withDominantBackground) {
      throw new Error('Failed to rotate the image with the dominant background color')
    }

    if (!this.stats || !withDominantBackground) {
      return background
    }

    return this.stats.dominant
  }

  private tint(color: string): void {
    try {
      this.imageSharp.tint(color)
    } catch (err) {
      throw new Error('Failed to tint the image. Sure that the color is valid', {
        cause: err
      })
    }
  }

  private gamma({ value }: GammaOptions): void {
    try {
      if (value < MIN_GAMMA) {
        this.imageSharp.gamma(MIN_GAMMA)
      } else if (value > MAX_GAMMA) {
        this.imageSharp.gamma(MAX_GAMMA)
      } else {
        this.imageSharp.gamma(value)
      }
    } catch (err) {
      throw new Error(`Failed to gammaize the image with gamma value: ${value}`, {
        cause: err
      })
    }
  }

  private resize({ width, height, ...options }: ResizeOptions) {
    if (!width && !height) return

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

  private modulate(modulateOptions: ModulateOptions) {
    if (isEmpty(modulateOptions)) return

    const options: Record<string, number> = {}

    for (const [key, value] of Object.entries(modulateOptions)) {
      if (!this.isValidModulateValue(value)) continue

      options[key] = value
    }

    if (isEmpty(options)) return

    try {
      this.imageSharp.modulate(options)
    } catch (err) {
      throw new Error('Failed to modulate the image', {
        cause: err
      })
    }
  }

  private isValidModulateValue(value: ModulateOptions[keyof ModulateOptions]): boolean {
    return typeof value === 'number' && !isNaN(value) && value > 0
  }

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
