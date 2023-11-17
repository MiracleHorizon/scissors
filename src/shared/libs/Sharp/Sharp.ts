import sharp from 'sharp'

import {
  type BlurOptions,
  type ConvertSettings,
  MAX_BLUR_SIGMA,
  type NegateOptions,
  type NormaliseOptions
} from '@libs/Sharp'

export class Sharp {
  private readonly imageSharp: sharp.Sharp

  constructor(imageBuffer: ArrayBuffer) {
    this.imageSharp = sharp(imageBuffer)
  }

  public convert({ flip, flop, negate, normalise, blur }: ConvertSettings): Promise<Buffer> {
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
      this.blur(blur)
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

  private async toBuffer(): Promise<Buffer> {
    return this.imageSharp.toBuffer()
  }
}
