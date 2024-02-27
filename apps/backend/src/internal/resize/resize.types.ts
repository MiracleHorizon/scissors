import { RESIZE_OPERATION_NAME } from './resize.constants'
import type { File } from '@internal/types'
import type { ResizeSettingsDto } from './dto'

export interface ResizeServiceAbstraction {
  resize(resizeParams: ResizeParams): Promise<Buffer>
}

export interface ResizeParams {
  file: File
  settings: ResizeSettingsDto
}

export type ResizeQueue = ResizeQueueOperation[]

type ResizeQueueOperationName = (typeof RESIZE_OPERATION_NAME)[keyof typeof RESIZE_OPERATION_NAME]

interface ResizeQueueOperation {
  name: ResizeQueueOperationName
  queueIndex: number
}
