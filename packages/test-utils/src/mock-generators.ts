import {
  type ConvertSettings,
  MAX_NORMALISE,
  MAX_ROTATE_ANGLE,
  MIN_NORMALISE,
  type ResizeSettings
} from '@scissors/sharp'

import { validConvertSettings, validResizeSettings } from './constants'

// TODO: REWORK
export const generateInvalidConvertSettings = (): ConvertSettings =>
  ({
    ...validConvertSettings,
    outputFormat: '.foo',
    normalise: {
      lower: MIN_NORMALISE - 1,
      upper: MAX_NORMALISE + 1
    },
    rotate: {
      ...validConvertSettings.rotate,
      angle: MAX_ROTATE_ANGLE + 1
    }
  }) as unknown as ConvertSettings

export const generateInvalidResizeSettings = (): ResizeSettings =>
  ({
    ...validResizeSettings,
    extend: {
      ...validResizeSettings.extend!,
      right: -1
    },
    resize: {
      ...validResizeSettings.resize!,
      background: {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      }
    }
  }) as unknown as ResizeSettings
