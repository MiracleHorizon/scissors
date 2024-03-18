import type { IFD0Options, IFD2Options } from '@server/sharp'

export const DEFAULT_IFD0_OPTIONS: IFD0Options = {
  make: null,
  model: null,
  copyright: null,
  software: null,
  artist: null,
  imageDescription: null,
  dateTime: null
} as const

export const DEFAULT_IFD2_OPTIONS: IFD2Options = {
  lensMake: null,
  lensModel: null,
  lensSerialNumber: null,
  bodySerialNumber: null,
  cameraOwnerName: null,
  subjectDistanceRange: null,
  saturation: null,
  sharpness: null,
  gainControl: null,
  whiteBalance: null,
  offsetTimeOriginal: null,
  offsetTime: null,
  offsetTimeDigitized: null,
  dateTimeDigitized: null,
  dateTimeOriginal: null,
  sceneCaptureType: null,
  sensingMethod: null,
  exposureProgram: null,
  exposureMode: null,
  customRendered: null,
  apertureValue: null,
  flash: null,
  contrast: null,
  lightSource: null,
  focalLength: null,
  meteringMode: null
} as const

export const SATURATION_FIELD = [
  {
    label: 'None',
    value: null
  },
  {
    label: 'Normal',
    value: 0
  },
  {
    label: 'Low',
    value: 1
  },
  {
    label: 'High',
    value: 2
  }
] as const
export const SHARPNESS_FIELD = [
  {
    label: 'None',
    value: null
  },
  {
    label: 'Normal',
    value: 0
  },
  {
    label: 'Low',
    value: 1
  },
  {
    label: 'High',
    value: 2
  }
] as const
