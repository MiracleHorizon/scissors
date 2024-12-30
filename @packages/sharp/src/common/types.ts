import { IMAGE_FILE_FORMAT } from './constants'

export type ImageFileFormat = (typeof IMAGE_FILE_FORMAT)[keyof typeof IMAGE_FILE_FORMAT]
