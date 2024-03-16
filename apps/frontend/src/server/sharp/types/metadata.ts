export interface MetadataSettings {
  keepMetadata: boolean
  keepExif: boolean
  keepICCProfile: boolean

  ifd0: IFD0Options
  ifd2: any
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
