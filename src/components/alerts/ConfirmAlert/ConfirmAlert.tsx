'use client'

import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { FC } from 'react'

import { TitleWithExclamation } from '@components/TitleWithExclamation'
import type { Props } from './ConfirmAlert.types'
import styles from './ConfirmAlert.module.css'

export const ConfirmAlert: FC<Props> = ({
  children,
  title,
  description,
  open,
  onConfirm,
  onCancel,
  confirmLabel = 'Confirm',
  canselLabel = 'Cancel',
  contentClassName,
  withTitleExclamation
}) => (
  <AlertDialog.Root open={open}>
    <AlertDialog.Trigger>{children}</AlertDialog.Trigger>

    <AlertDialog.Content size='1' className={clsx(styles.content, contentClassName)}>
      <Flex direction='column'>
        {withTitleExclamation ? (
          <TitleWithExclamation mb='3'>
            <AlertDialog.Title mb='0'>{title}</AlertDialog.Title>
          </TitleWithExclamation>
        ) : (
          <AlertDialog.Title>{title}</AlertDialog.Title>
        )}

        <AlertDialog.Description>{description}</AlertDialog.Description>

        <Flex gap='3' justify='end' mt='5'>
          {onCancel && (
            <AlertDialog.Cancel>
              <Button color='gray' variant='soft' radius='large' onClick={onCancel}>
                {canselLabel}
              </Button>
            </AlertDialog.Cancel>
          )}

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
