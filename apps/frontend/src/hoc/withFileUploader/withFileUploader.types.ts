import type { DragEvent, HTMLAttributes } from 'react'

/* eslint no-unused-vars: 0 */
type ComponentHTMLAttributes = Omit<HTMLAttributes<any>, 'onClick'>

export interface Props {
  accept: string
  setFile: (file: File | null) => void
  tooltipContent?: string
  htmlAttributes?: ComponentHTMLAttributes
  onUpload?: VoidFunction
}

export type ComponentProps = ComponentHTMLAttributes & {
  isDragOver: boolean
  onClick: VoidFunction
  onDrop: (ev: DragEvent<any>) => void
  onDragOver: (ev: DragEvent<any>) => void
  onDragLeave: VoidFunction

  // Lowercase for preventing conflict with HTML attributes
  tooltipcontent?: string
}
