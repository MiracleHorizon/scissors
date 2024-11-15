import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { ExclamationTitle } from '@/shared/ui'

type Props = Pick<ComponentPropsWithoutRef<typeof AlertDialog.Root>, 'onOpenChange'> & {
  open: boolean
  title: string | ReactNode
  description: string | ReactNode
  onClose: VoidFunction
}

export type FileValidationAlertExternalProps = Pick<Props, 'open' | 'onClose' | 'onOpenChange'>

export const FileValidationAlert = ({ open, title, description, onClose, onOpenChange }: Props) => (
  <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
    <AlertDialog.Content size='3' onEscapeKeyDown={onClose}>
      <ExclamationTitle mb='3'>
        <AlertDialog.Title mb='0'>{title}</AlertDialog.Title>
      </ExclamationTitle>

      <AlertDialog.Description>{description}</AlertDialog.Description>

      <Flex justify='end' mt='3'>
        <AlertDialog.Cancel onClick={onClose}>
          <Button color='gray' variant='soft' radius='large'>
            Close
          </Button>
        </AlertDialog.Cancel>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Root>
)
