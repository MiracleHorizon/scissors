import randomNumber from 'lodash.random'
import capitalize from 'lodash.capitalize'

import { getRandomHexColor } from '@helpers/colors'
import {
  type BlurOptions,
  type ConvertSettings,
  type GammaValue,
  MAX_BLUR_SIGMA,
  MAX_BRIGHTNESS,
  MAX_GAMMA,
  MAX_HUE,
  MAX_LIGHTNESS,
  MAX_NORMALISE,
  MAX_ROTATE_ANGLE,
  MAX_SATURATION,
  MIN_BLUR_SIGMA,
  MIN_BRIGHTNESS,
  MIN_GAMMA,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_NORMALISE,
  MIN_ROTATE_ANGLE,
  MIN_SATURATION,
  type ModulateOptions,
  type NegateOptions,
  type NormaliseOptions,
  type RotateOptions
} from '@scissors/sharp'

/*
 * All methods name must start with "getRandom".
 */
interface Randomizer {
  getRandomFlip: () => boolean
  getRandomFlop: () => boolean
  getRandomGrayscale: () => boolean
  getRandomNegate: () => NegateOptions
  getRandomBlur: () => BlurOptions
  getRandomRotate: () => RotateOptions
  getRandomModulate: () => ModulateOptions
  getRandomGamma: () => GammaValue
  getRandomTint: () => string
  getRandomNormalise: () => NormaliseOptions
}

export type Operation = keyof ConvertSettings

// TODO: Try to refactor :)
export class ConvertSettingsRandomizer implements Randomizer {
  // eslint-disable-next-line
  constructor(private readonly operations: Operation[]) {}

  public randomize(): Partial<ConvertSettings> {
    const randomSettings: Partial<ConvertSettings> = {}

    for (const operation of this.operations) {
      const methodName = 'getRandom' + capitalize(operation)
      // eslint-disable-next-line
      // @ts-expect-error
      randomSettings[operation] = this[methodName]()
    }

    return randomSettings
  }

  private getRandomNumber(min: number, max: number, precision?: number): number | null {
    const withFloat = typeof precision === 'number'
    let randomValue = randomNumber(min, max, withFloat)

    if (withFloat) {
      randomValue = parseFloat(randomValue.toPrecision(precision!))
    }
    if (isNaN(randomValue)) {
      return null
    }

    return randomValue
  }

  private getRandomBoolean(): boolean {
    return Math.random() < 0.5
  }

  private getRandomHexColor(): string {
    return getRandomHexColor()
  }

  getRandomFlip(): boolean {
    return this.getRandomBoolean()
  }

  getRandomFlop(): boolean {
    return this.getRandomBoolean()
  }

  getRandomGrayscale(): boolean {
    return this.getRandomBoolean()
  }

  getRandomNegate(): NegateOptions {
    const value = this.getRandomBoolean()

    if (!value) {
      return {
        value,
        alpha: false
      }
    }

    return {
      value,
      alpha: this.getRandomBoolean()
    }
  }

  getRandomBlur(): BlurOptions {
    const value = this.getRandomBoolean()

    if (!value) {
      return {
        value,
        sigma: null
      }
    }

    const sigma = this.getRandomNumber(MIN_BLUR_SIGMA, MAX_BLUR_SIGMA, 2)

    return {
      value,
      sigma
    }
  }

  getRandomRotate(): RotateOptions {
    const angle = this.getRandomNumber(MIN_ROTATE_ANGLE, MAX_ROTATE_ANGLE)!
    const background = this.getRandomHexColor()
    const withDominantBackground = this.getRandomBoolean()

    return {
      angle,
      background,
      withDominantBackground
    }
  }

  getRandomModulate(): ModulateOptions {
    const lightness = this.getRandomNumber(MIN_LIGHTNESS, MAX_LIGHTNESS, 2)
    const brightness = this.getRandomNumber(MIN_BRIGHTNESS, MAX_BRIGHTNESS, 2)
    const saturation = this.getRandomNumber(MIN_SATURATION, MAX_SATURATION, 2)
    const hue = this.getRandomNumber(MIN_HUE, MAX_HUE)

    return {
      lightness,
      brightness,
      saturation,
      hue
    }
  }

  getRandomGamma(): GammaValue {
    return this.getRandomNumber(MIN_GAMMA, MAX_GAMMA, 2)
  }

  getRandomTint(): string {
    return this.getRandomHexColor()
  }

  getRandomNormalise(): NormaliseOptions {
    let lower = this.getRandomNumber(MIN_NORMALISE, MAX_NORMALISE)!
    let upper = this.getRandomNumber(MIN_NORMALISE, MAX_NORMALISE)!

    const isUpperGreater = upper > lower
    if (!isUpperGreater) [lower, upper] = [upper, lower]

    const isValuesEqual = lower === upper
    if (isValuesEqual) {
      lower -= 1

      if (lower < MIN_NORMALISE) {
        lower = MIN_NORMALISE
      }
    }

    return {
      lower,
      upper
    }
  }
}
