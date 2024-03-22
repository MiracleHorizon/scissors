'use client'

import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef, CSSProperties, FC } from 'react'

import { TitleWithExclamation } from '@ui/TitleWithExclamation'

const contentStyle: CSSProperties = {
  padding: '22px',
  maxWidth: 370
}

// TODO: Унифицировать
export const FileTypeAlert: FC<Props> = ({ open, onClose, onOpenChange }) => (
  <AlertDialog.Root open={open} defaultOpen={false} onOpenChange={onOpenChange}>
    <AlertDialog.Content style={contentStyle} size='3' onEscapeKeyDown={onClose}>
      <TitleWithExclamation mb='3'>
        <AlertDialog.Title mb='0'>Invalid file type</AlertDialog.Title>
      </TitleWithExclamation>

      <AlertDialog.Description>The selected file type is not supported</AlertDialog.Description>

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

interface Props extends Pick<ComponentPropsWithoutRef<typeof AlertDialog.Root>, 'onOpenChange'> {
  open: boolean
  onClose: VoidFunction
}
