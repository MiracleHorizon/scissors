import type { DragEvent, HTMLAttributes, PropsWithChildren } from 'react'

/* eslint no-unused-vars: 0 */
// These types were originally for the HOC.
// They might need adjustment or removal if not used by the new component's consumers.
// Keeping them for reference for now.
export interface Props {
  // This might correspond partially to FileUploaderProps now
  accept: string
  setFile: (file: File | null) => void
  tooltipContent?: string
  htmlAttributes?: ComponentHTMLAttributes
  onUpload?: VoidFunction
}

export type ComponentProps = PropsWithChildren<
  // These were the props injected by the HOC
  {
    isDragOver: boolean
    onClick: VoidFunction
    onDrop: (ev: DragEvent<any>) => void
    onDragOver: (ev: DragEvent<any>) => void
    onDragLeave: VoidFunction

    // Prevent html tag warning
    tooltipcontent?: string
  } & ComponentHTMLAttributes
>

type ComponentHTMLAttributes = Omit<HTMLAttributes<any>, 'onClick'>
