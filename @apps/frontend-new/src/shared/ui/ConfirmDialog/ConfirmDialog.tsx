import { AlertDialog, Button, Flex, Tooltip } from '@radix-ui/themes'
import type { ReactNode } from 'react'

import styles from './ConfirmDialog.module.css'

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
  onConfirm?: VoidFunction
  onCancel?: VoidFunction
  confirmLabel?: string
  canselLabel?: string
}

export const ConfirmDialog = ({
  open,
  title,
  trigger,
  triggerTooltip,
  description,
  confirmLabel,
  canselLabel,
  onConfirm,
  onCancel
}: {
  title: string
  description: string
  trigger: ReactNode
  /**
   * To display a tooltip, you need to wrap the AlertDialog.Trigger component, not the trigger itself
   */
  triggerTooltip?: string
  open?: boolean
} & (WithConfirm | WithCansel | WithBothActions)) => (
  <AlertDialog.Root open={open}>
    {typeof open !== 'boolean' &&
      (triggerTooltip ? (
        <Tooltip content={triggerTooltip}>
          <AlertDialog.Trigger>{trigger}</AlertDialog.Trigger>
        </Tooltip>
      ) : (
        <AlertDialog.Trigger>{trigger}</AlertDialog.Trigger>
      ))}

    <AlertDialog.Content size='3' className={styles.content}>
      <Flex direction='column'>
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description>{description}</AlertDialog.Description>

        <Flex gap='3' justify='end' mt='5'>
          <AlertDialog.Cancel>
            <Button color='gray' variant='soft' radius='large' onClick={onCancel}>
              {canselLabel || 'Cancel'}
            </Button>
          </AlertDialog.Cancel>

          {onConfirm && (
            <AlertDialog.Action>
              <Button radius='large' onClick={onConfirm}>
                {confirmLabel || 'Confirm'}
              </Button>
            </AlertDialog.Action>
          )}
        </Flex>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Root>
)
