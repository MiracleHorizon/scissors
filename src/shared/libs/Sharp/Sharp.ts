import sharp from 'sharp'
import isEmpty from 'lodash.isempty'

import {
  type BlurOptions,
  ConvertFormat,
  type ConvertSettings,
  type GammaOptions,
  MAX_BLUR_SIGMA,
  MAX_GAMMA,
  MIN_GAMMA,
  type ModulateOptions,
  type NegateOptions,
  type NormaliseOptions,
  type ResizeOptions,
  type RotateOptions
} from '@libs/Sharp'

export class Sharp {
  private readonly imageSharp: sharp.Sharp

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
    format
  }: ConvertSettings): Promise<Buffer> {
    if (format) {
      this.toFormat(format)
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

  private toFormat(format: ConvertFormat): void {
    const formats = Object.values(ConvertFormat)

    if (!formats.includes(format)) {
      throw new Error('Unsupported format')
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
        void Promise.reject('Invalid blur sigma value')
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

  private async rotate({
    angle,
    background: bg,
    withDominantBackground
  }: RotateOptions): Promise<void> {
    try {
      const stats = await this.imageSharp.stats()
      const background = withDominantBackground ? stats.dominant : bg

      this.imageSharp.rotate(angle, {
        background
      })
    } catch (err) {
      throw new Error('Failed to rotate the image', {
        cause: err
      })
    }
  }

  private tint(color: string): void {
    try {
      this.imageSharp.tint(color)
    } catch (err) {
      throw new Error('Failed to tint the image', {
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

  private resize({ width, height, extra }: ResizeOptions) {
    try {
      this.imageSharp.resize({
        width: width ?? undefined,
        height: height ?? undefined,
        ...extra,
        background: extra?.background ?? undefined,
        position: extra?.position ?? undefined,
        kernel: extra?.kernel ?? undefined
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
