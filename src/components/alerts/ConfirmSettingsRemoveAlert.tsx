'use client'

import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

import { ConfirmAlert } from './ConfirmAlert'

export const ConfirmSettingsRemoveAlert: FC<Props> = ({
  children,
  onConfirm,
  onCancel,
  ...props
}) => (
  <ConfirmAlert
    {...props}
    maxWidth={400}
    title='Remove all settings'
    description='Any settings you have added will be removed. Are you sure you want to proceed?'
    confirmLabel='Remove'
    onCancel={onCancel}
    onConfirm={onConfirm}
  >
    {children}
  </ConfirmAlert>
)

type AlertProps = Omit<
  ComponentPropsWithoutRef<typeof ConfirmAlert>,
  'children' | 'title' | 'description' | 'maxWidth' | 'onConfirm'
>

type Props = PropsWithChildren<
  AlertProps & {
    onConfirm: VoidFunction
  }
>
