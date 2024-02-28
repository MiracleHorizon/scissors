import { ImageSharp } from './ImageSharp'
import { SharpErrorsChecker } from './SharpErrorsChecker'
import { nullToUndefined } from '@helpers/nullToUndefined'
import type {
  BlurDto,
  ConvertSettingsDto,
  ModulateDto,
  NegateDto,
  NormaliseDto,
  RotateDto
} from '@internal/convert/dto'
import type { ImageFileFormat } from '@internal/types'

export class ImageConverter extends ImageSharp {
  constructor(buffer: ArrayBuffer) {
    super(buffer)
  }

  public async convert(settings: ConvertSettingsDto): Promise<Buffer> {
    if (this.isSettingsEmpty(settings)) {
      return this.toBuffer()
    }

    await this.initialiseInputStatistics()

    const {
      flip,
      flop,
      grayscale,
      tint,
      blur,
      negate,
      normalise,
      gamma,
      modulate,
      rotate,
      outputFormat
    } = settings

    if (flip) this.flip()
    if (flop) this.flop()
    if (grayscale) this.grayscale()
    if (tint) this.tint(tint)
    if (blur) this.blur(blur)
    if (negate) this.negate(negate)
    if (normalise) this.normalise(normalise)
    if (gamma) this.gammaize(gamma)
    if (modulate) this.modulate(modulate)
    if (rotate) this.rotate(rotate)
    if (outputFormat) this.toFormat(outputFormat)

    return this.toBuffer()
  }

  private isSettingsEmpty(settings: ConvertSettingsDto): boolean {
    // Check that all settings fields are falsy
    return Object.values(settings).every(value => value === false || value === null)
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

      throw new Error('Failed to tint the image')
    }
  }

  private blur({ value, sigma }: BlurDto): void {
    if (!value) return

    const sigmaValue: number | boolean = sigma ?? false

    try {
      this.sharp.blur(sigmaValue)
    } catch (err) {
      console.error(err)

      throw new Error('Failed to blur the image')
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

      throw new Error('Failed to gammaize the image')
    }
  }

  private modulate(modulate: ModulateDto): void {
    const entries = Object.entries(modulate)
    const isEmpty = entries.every(([, value]) => value === null)

    if (isEmpty) return

    const options = Object.fromEntries(entries.map(([key, value]) => [key, nullToUndefined(value)]))

    try {
      this.sharp.modulate(options)
    } catch (err) {
      console.error(err)

      throw new Error('Failed to modulate the image')
    }
  }

  private rotate({ angle, background: bg, withDominantBackground }: RotateDto): void {
    if (!angle) return

    // FIXME: Если бэкграунда нет в настройкe, то withDominantBackground всё равно может быть
    let background
    if (bg) {
      background = this.getBackground(bg, withDominantBackground)
    }

    try {
      this.sharp.rotate(angle, {
        background
      })
    } catch (err) {
      console.error(err)

      if (SharpErrorsChecker.isColorParsingError(err)) {
        throw new Error(`Failed to rotate the image with "${background}" background color`)
      }

      throw new Error('Failed to rotate the image')
    }
  }

  private toFormat(format: ImageFileFormat): void {
    try {
      this.sharp.toFormat(format)
    } catch (err) {
      console.error(err)

      throw new Error(`Failed to convert the image to the .${format} format`)
    }
  }
}
