import sharp from 'sharp'

import {
  type BlurOptions,
  type ConvertSettings,
  type GammaOptions,
  MAX_BLUR_SIGMA,
  MAX_GAMMA,
  MIN_GAMMA,
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
    negate,
    normalise,
    blur,
    rotate,
    gamma,
    resize
  }: ConvertSettings): Promise<Buffer> {
    if (flip) {
      this.flip()
    }

    if (flop) {
      this.flop()
    }

    if (negate) {
      this.negate(negate)
    }

    if (normalise) {
      this.normalise(normalise)
    }

    if (blur?.value) {
      await this.blur(blur)
    }

    if (gamma?.value) {
      this.gamma({ value: 4 })
    }

    if (resize) {
      this.resize(resize)
    }

    if (rotate) {
      this.rotate(rotate)
    }

    return this.toBuffer()
  }

  private flip(): void {
    this.imageSharp.flip()
  }

  private flop(): void {
    this.imageSharp.flop()
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

  private rotate({ angle, background }: RotateOptions): void {
    try {
      this.imageSharp.rotate(angle, {
        background
      })
    } catch (err) {
      throw new Error('Failed to rotate the image', {
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

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
