import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { ExclamationTitle } from '@/shared/ui'

export type Props = PropsWithChildren<{
  title: string
  description: string
  open?: boolean
  contentClassName?: string
  withTitleExclamation?: boolean
  maxWidth?: string
}> &
  (WithConfirm | WithCansel | WithBothActions)

type WithConfirm = {
  onConfirm: VoidFunction
  confirmLabel?: string
  canselLabel?: never
  onCancel?: never
}

type WithCansel = {
  onCancel: VoidFunction
  canselLabel?: string
  confirmLabel?: never
  onConfirm?: never
}

type WithBothActions = {
  onConfirm?: VoidFunction
  onCancel?: VoidFunction
  confirmLabel?: string
  canselLabel?: string
}

export const ConfirmAlert = ({
  children,
  title,
  description,
  open,
  onConfirm,
  onCancel,
  confirmLabel = 'Confirm',
  canselLabel = 'Cancel',
  contentClassName,
  withTitleExclamation,
  maxWidth
}: Props) => (
  <AlertDialog.Root open={open}>
    {typeof open !== 'boolean' && <AlertDialog.Trigger>{children}</AlertDialog.Trigger>}

    <AlertDialog.Content size='3' maxWidth={maxWidth} className={contentClassName}>
      <Flex direction='column'>
        {withTitleExclamation ? (
          <ExclamationTitle mb='3'>
            <AlertDialog.Title mb='0'>{title}</AlertDialog.Title>
          </ExclamationTitle>
        ) : (
          <AlertDialog.Title>{title}</AlertDialog.Title>
        )}

        <AlertDialog.Description>{description}</AlertDialog.Description>

        <Flex gap='3' justify='end' mt='5'>
          <AlertDialog.Cancel>
            <Button color='gray' variant='soft' radius='large' onClick={onCancel}>
              {canselLabel}
            </Button>
          </AlertDialog.Cancel>

          {onConfirm && (
            <AlertDialog.Action>
              <Button radius='large' onClick={onConfirm}>
                {confirmLabel}
              </Button>
            </AlertDialog.Action>
          )}
        </Flex>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Root>
)
