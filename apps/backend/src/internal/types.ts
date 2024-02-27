import { OUTPUT_FORMATS } from './constants'

export type File = Express.Multer.File
export type ImageFileFormat = (typeof OUTPUT_FORMATS)[keyof typeof OUTPUT_FORMATS]
