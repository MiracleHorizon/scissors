import type { DragEvent, PropsWithChildren } from 'react'

import type { Actions as ConvertActions } from '@stores/convert'

export interface Props extends Pick<ConvertActions, 'setFile'> {
  accept: string
}

/* eslint no-unused-vars: 0 */
export type ComponentProps = PropsWithChildren<{
  isDragOver: boolean
  onClick: VoidFunction
  onDrop: (ev: DragEvent<HTMLDivElement>) => void
  onDragOver: (ev: DragEvent<HTMLDivElement>) => void
  onDragLeave: VoidFunction
}>
