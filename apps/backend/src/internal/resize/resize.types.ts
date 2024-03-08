import { RESIZE_OPERATION } from './resize.constants'
import type { File } from '@internal/types'
import type { ResizeSettingsDto } from './dto'

export interface ResizeServiceAbstraction {
  // eslint-disable-next-line no-unused-vars
  resize(resizeParams: ResizeParams): Promise<Buffer>
}

export interface ResizeParams {
  file: File
  settings: ResizeSettingsDto
}

export type ResizeQueue = ResizeQueueOperation[]

interface ResizeQueueOperation {
  name: (typeof RESIZE_OPERATION)[keyof typeof RESIZE_OPERATION]
  queueIndex: number
}
