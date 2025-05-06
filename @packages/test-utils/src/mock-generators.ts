import {
  type ConvertSettings,
  MAX_NORMALIZE,
  MAX_ROTATE_ANGLE,
  MIN_NORMALIZE,
  type ResizeSettings
} from '@scissors/sharp'

import { validConvertSettings, validResizeSettings } from './constants'

// TODO: REWORK
export const generateInvalidConvertSettings = (): ConvertSettings =>
  ({
    ...validConvertSettings,
    outputFormat: '.foo',
    normalize: {
      lower: MIN_NORMALIZE - 1,
      upper: MAX_NORMALIZE + 1
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
