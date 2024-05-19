import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import type { FC } from 'react'

export const AlertErrorDefault: FC<Props> = ({ open, onClose, title, description, closeText }) => (
  <AlertDialog.Root open={open} defaultOpen={false}>
    <AlertDialog.Content size='3' onEscapeKeyDown={onClose}>
      <AlertDialog.Title>{title ?? 'Something went wrong'}</AlertDialog.Title>

      <AlertDialog.Description>{description ?? 'Please try again later.'}</AlertDialog.Description>

      <Flex justify='end' mt='3'>
        <AlertDialog.Cancel onClick={onClose}>
          <Button color='gray' variant='soft' radius='large'>
            {closeText ?? 'Close'}
          </Button>
        </AlertDialog.Cancel>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Root>
)

interface Props {
  open: boolean
  onClose: VoidFunction
  title?: string
  description?: string
  closeText?: string
}
