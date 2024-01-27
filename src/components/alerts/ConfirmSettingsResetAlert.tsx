'use client'

import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

import { ConfirmAlert } from './ConfirmAlert'

export const ConfirmSettingsResetAlert: FC<Props> = ({
  children,
  onConfirm,
  onCancel,
  ...props
}) => (
  <ConfirmAlert
    {...props}
    title='Reset all settings'
    description='All settings will be reset to default values. Are you sure you want to proceed?'
    confirmLabel='Reset'
    onCancel={onCancel}
    onConfirm={onConfirm}
  >
    {children}
  </ConfirmAlert>
)

type AlertProps = Omit<
  ComponentPropsWithoutRef<typeof ConfirmAlert>,
  'title' | 'description' | 'children' | 'onCancel' | 'onConfirm'
>
type Props = PropsWithChildren<{
  onConfirm: VoidFunction
  onCancel?: VoidFunction
}> &
  AlertProps
