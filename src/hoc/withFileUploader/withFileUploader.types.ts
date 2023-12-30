import type { DragEvent, PropsWithChildren } from 'react'

/* eslint no-unused-vars: 0 */
export interface Props {
  accept: string
  setFile: (file: File | null) => void
  tooltipContent?: string
}

export type ComponentProps = PropsWithChildren<{
  isDragOver: boolean
  onClick: VoidFunction
  onDrop: (ev: DragEvent<HTMLDivElement>) => void
  onDragOver: (ev: DragEvent<HTMLDivElement>) => void
  onDragLeave: VoidFunction
  // Prevent html tag warning
  tooltipcontent?: string
}>
