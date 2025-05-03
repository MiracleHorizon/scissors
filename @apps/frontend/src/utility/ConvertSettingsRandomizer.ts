import capitalize from 'lodash.capitalize'

import {
  type BlurOptions,
  type ConvertSettings,
  type GammaValue,
  MAX_BLUR_SIGMA,
  MAX_BRIGHTNESS,
  MAX_GAMMA,
  MAX_HUE,
  MAX_LIGHTNESS,
  MAX_NORMALIZE,
  MAX_ROTATE_ANGLE,
  MAX_SATURATION,
  MIN_BLUR_SIGMA,
  MIN_BRIGHTNESS,
  MIN_GAMMA,
  MIN_HUE,
  MIN_LIGHTNESS,
  MIN_NORMALIZE,
  MIN_ROTATE_ANGLE,
  MIN_SATURATION,
  type ModulateOptions,
  type NegateOptions,
  type NormalizeOptions,
  type RotateOptions
} from '@scissors/sharp'

import { getRandomHexColor } from '@helpers/colors'
import { getRandomNumber } from '@helpers/getRandomNumber'
import { getRandomBoolean } from '@helpers/getRandomBoolean'

/*
 * All methods name must start with "getRandom" prefix.
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
  getRandomNormalise: () => NormalizeOptions
}

export type Operation = keyof ConvertSettings

export class ConvertSettingsRandomizer implements Randomizer {
  // eslint-disable-next-line
  constructor(private readonly operations: Operation[]) {}

  public randomize(): Partial<ConvertSettings> {
    const randomSettings: Partial<ConvertSettings> = {}

    for (const operation of this.operations) {
      const methodPrefix = 'getRandom'
      const methodName = methodPrefix + capitalize(operation)
      // eslint-disable-next-line
      // @ts-expect-error
      randomSettings[operation] = this[methodName]()
    }

    return randomSettings
  }

  private getRandomNumber(...args: Parameters<typeof getRandomNumber>): number {
    return getRandomNumber(...args)
  }

  private getRandomBoolean(): boolean {
    return getRandomBoolean()
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

    const sigma = this.getRandomNumber(MIN_BLUR_SIGMA, MAX_BLUR_SIGMA, 1)

    return {
      value,
      sigma
    }
  }

  getRandomRotate(): RotateOptions {
    const angle = this.getRandomNumber(MIN_ROTATE_ANGLE, MAX_ROTATE_ANGLE)
    const background = this.getRandomHexColor()

    return {
      angle,
      background
    }
  }

  getRandomModulate(): ModulateOptions {
    const lightness = this.getRandomNumber(MIN_LIGHTNESS, MAX_LIGHTNESS)
    const brightness = this.getRandomNumber(MIN_BRIGHTNESS, MAX_BRIGHTNESS, 1)
    const saturation = this.getRandomNumber(MIN_SATURATION, MAX_SATURATION, 1)
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

  getRandomNormalise(): NormalizeOptions {
    let lower = this.getRandomNumber(MIN_NORMALIZE, MAX_NORMALIZE)
    let upper = this.getRandomNumber(MIN_NORMALIZE, MAX_NORMALIZE)

    const isUpperGreater = upper > lower
    if (!isUpperGreater) [lower, upper] = [upper, lower]

    const isValuesEqual = lower === upper
    if (isValuesEqual) {
      lower -= 1

      if (lower < MIN_NORMALIZE) {
        lower = MIN_NORMALIZE
      }
    }

    return {
      lower,
      upper
    }
  }
}
