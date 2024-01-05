import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { TitleWithExclamation } from '@components/TitleWithExclamation'
import type { Props } from './ConfirmAlert.types'
import styles from './ConfirmAlert.module.css'

export function ConfirmAlert({
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
}: Props) {
  return (
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
                <Button color='gray' variant='soft' className={styles.button} onClick={onCancel}>
                  {canselLabel}
                </Button>
              </AlertDialog.Cancel>
            )}

            {onConfirm && (
              <AlertDialog.Action>
                <Button className={styles.button} onClick={onConfirm}>
                  {confirmLabel}
                </Button>
              </AlertDialog.Action>
            )}
          </Flex>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
