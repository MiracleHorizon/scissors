import {
  DEFAULT_LOWER_NORMALIZE,
  DEFAULT_UPPER_NORMALIZE,
  type ConvertSettings,
  type ModulateOptions
} from '@scissors/sharp'

import { useFormContext } from 'react-hook-form'
import type { ConvertFormFields } from './useConvertForm'
import { useMemo } from 'react'

interface ConvertSettingsList extends ConvertSettings {
  fileName: string
}

export const useConvertSettingsList = (): ConvertSettingsList => {
  const { getValues } = useFormContext<ConvertFormFields>()

  const values = getValues()

  const modulate = useMemo(() => {
    const { lightness, brightness, saturation, hue } = values

    const options: ModulateOptions = {
      lightness,
      brightness,
      saturation,
      hue
    }

    if (!options) {
      return null
    }

    // TODO: Унести на бэк
    /*
     * The enabled grayscale option overrides the other options for working
     * with image color.
     */
    if (values.grayscale) {
      return {
        ...options,
        hue: null
      }
    }

    return options
  }, [])
  const tint = useMemo(() => {
    /*
     * The enabled grayscale option overrides the other options for working
     * with image color.
     */
    if (values.grayscale) {
      return null
    }

    return values.tint
  }, [])

  return {
    ...values,
    negate: {
      value: values.negate,
      alpha: false
    },
    normalize: {
      lower: values?.normalize.lower ?? DEFAULT_LOWER_NORMALIZE,
      upper: values?.normalize.upper ?? DEFAULT_UPPER_NORMALIZE
    },
    rotate:
      values.rotationAngle !== null
        ? {
            angle: values.rotationAngle,
            background: values.rotationBackground
          }
        : null,
    modulate,
    blur: {
      value: Boolean(values?.blurSigma),
      sigma: values?.blurSigma ?? null
    },
    tint,
    // TODO: add output format
    outputFormat: 'jpeg'
  }
}
