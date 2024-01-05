import type { PropsWithChildren } from 'react'

export type Props = ActionProps &
  PropsWithChildren<{
    title: string
    description: string
    open?: boolean
    contentClassName?: string
    withTitleExclamation?: boolean
  }>

interface WithConfirm {
  onConfirm: VoidFunction
  confirmLabel?: string
  canselLabel?: never
  onCancel?: never
}

interface WithCansel {
  onCancel: VoidFunction
  canselLabel?: string
  confirmLabel?: never
  onConfirm?: never
}

interface WithBothActions {
  onConfirm: VoidFunction
  onCancel: VoidFunction
  confirmLabel?: string
  canselLabel?: string
}

type ActionProps = WithConfirm | WithCansel | WithBothActions
