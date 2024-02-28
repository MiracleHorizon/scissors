import type { DragEvent, HTMLAttributes, PropsWithChildren } from 'react'

/* eslint no-unused-vars: 0 */
export interface Props {
  accept: string
  setFile: (file: File | null) => void
  tooltipContent?: string
  htmlAttributes?: ComponentHTMLAttributes
}

export type ComponentProps = PropsWithChildren<
  {
    isDragOver: boolean
    onClick: VoidFunction
    onDrop: (ev: DragEvent<HTMLDivElement>) => void
    onDragOver: (ev: DragEvent<HTMLDivElement>) => void
    onDragLeave: VoidFunction
    // Prevent html tag warning
    tooltipcontent?: string
  } & ComponentHTMLAttributes
>

type ComponentHTMLAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>
