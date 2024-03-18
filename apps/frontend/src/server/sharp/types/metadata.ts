export interface MetadataSettings {
  keepMetadata: boolean
  keepExif: boolean
  keepICCProfile: boolean
  ifd0: IFD0Options | null
  ifd2: IFD2Options | null
}

export interface IFD0Options {
  make: string | null
  model: string | null
  copyright: string | null
  software: string | null
  artist: string | null
  imageDescription: string | null
  dateTime: Date | null
}

export interface IFD2Options {
  lensMake: string | null
  lensModel: string | null
  lensSerialNumber: string | null
  bodySerialNumber: string | null
  cameraOwnerName: string | null
  subjectDistanceRange: 0 | 1 | 2 | 3 | null
  saturation: 0 | 1 | 2 | null
  sharpness: 0 | 1 | 2 | null
  gainControl: 0 | 1 | 2 | 3 | 4 | null
  whiteBalance: 0 | 1 | null
  offsetTimeOriginal: string | null
  offsetTime: string | null
  offsetTimeDigitized: string | null
  dateTimeOriginal: Date | null
  dateTimeDigitized: Date | null
  sceneCaptureType: 0 | 1 | 2 | 3 | 4 | null
  sensingMethod: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null
  exposureProgram: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null
  exposureMode: 0 | 1 | 2 | null
  customRendered: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null
  meteringMode: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 255 | null
  focalLength: number | null
  apertureValue: number | null
  flash: string | null
  contrast: 0 | 1 | 2 | null
  lightSource: string | null
}
