import { isAllObjectValuesEmptyOrFalse } from '@scissors/utility'
import type { ImageFileFormat } from '@scissors/sharp'

import { ImageSharp } from './ImageSharp'
import { SharpErrorsChecker } from './SharpErrorsChecker'
import type {
  BlurDto,
  ConvertSettingsDto,
  ModulateDto,
  NegateDto,
  NormaliseDto,
  RotateDto
} from '@internal/convert/dto'

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
  }: ConvertSettingsDto): Promise<Buffer> {
    await this.initialiseInputStatistics()
    this.sharp.keepMetadata()

    if (flip) this.flip()
    if (flop) this.flop()
    if (grayscale) this.grayscale()
    if (tint) this.tint(tint)
    if (negate) this.negate(negate)
    if (normalise) this.normalise(normalise)
    if (blur) this.blur(blur)
    if (rotate) this.rotate(rotate)
    if (gamma) this.gammaize(gamma)
    if (modulate) this.modulate(modulate)
    if (outputFormat) this.toFormat(outputFormat)

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

  private tint(color: string): void {
    try {
      this.sharp.tint(color)
    } catch (err) {
      console.error(err)

      if (SharpErrorsChecker.isColorParsingError(err)) {
        throw new Error(`Failed to tint the image with "${color}" color`)
      }

      throw new Error('Failed to tint the image', {
        cause: err
      })
    }
  }

  private blur({ value, sigma }: BlurDto): void {
    if (!value) return

    try {
      this.sharp.blur(sigma ?? false)
    } catch (err) {
      console.error(err)

      throw new Error('Failed to blur the image', {
        cause: err
      })
    }
  }

  private negate({ value, alpha }: NegateDto): void {
    if (!value) return

    this.sharp.negate({
      alpha
    })
  }

  private normalise({ lower, upper }: NormaliseDto): void {
    try {
      this.sharp.normalise({
        lower,
        upper
      })
    } catch (err) {
      console.error(err)

      throw new Error('Failed to normalise the image')
    }
  }

  private gammaize(value: number): void {
    try {
      this.sharp.gamma(value)
    } catch (err) {
      console.error(err)

      throw new Error(`Failed to gammaize the image with gamma: ${value}`, {
        cause: err
      })
    }
  }

  private modulate(modulateOptions: ModulateDto): void {
    if (isAllObjectValuesEmptyOrFalse(modulateOptions)) return

    const options: Record<string, number> = {}
    for (const [key, value] of Object.entries(modulateOptions)) {
      if (value === null) continue

      options[key] = value
    }

    if (isAllObjectValuesEmptyOrFalse(options)) return

    this.sharp.modulate(options)
  }

  private rotate({ angle, ...options }: RotateDto): void {
    if (!angle) return

    const background = this.getBackground({
      background: options.background ?? '#000000',
      withDominantBackground: options.withDominantBackground
    })

    try {
      this.sharp.rotate(angle, {
        background
      })
    } catch (err) {
      console.error(err)

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

  private toFormat(format: ImageFileFormat): void {
    try {
      this.sharp.toFormat(format)
    } catch (err) {
      console.error(err)

      throw new Error(`Failed to convert the image to the .${format} format`, {
        cause: err
      })
    }
  }
}
