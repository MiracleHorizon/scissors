'use client'

import { AlertDialog, Button, Flex, Text } from '@radix-ui/themes'
import type { CSSProperties, FC } from 'react'

import { TitleWithExclamation } from '@components/TitleWithExclamation'
import { MAX_FILE_SIZE_MB } from '@site/config'

const contentStyle: CSSProperties = {
  padding: '22px',
  maxWidth: 370
}
const maxFileSizeTextStyle: CSSProperties = {
  fontWeight: '600'
}

// TODO: Унифицировать
export const FileSizeAlert: FC<Props> = ({ open, onClose }) => (
  <AlertDialog.Root open={open} defaultOpen={false}>
    <AlertDialog.Content size='3' style={contentStyle} onEscapeKeyDown={onClose}>
      <TitleWithExclamation mb='3'>
        <AlertDialog.Title mb='0'>Invalid file size</AlertDialog.Title>
      </TitleWithExclamation>

      <AlertDialog.Description>
        The selected file is too large. The maximum file size is{' '}
        <Text style={maxFileSizeTextStyle}>{MAX_FILE_SIZE_MB}</Text> mb.
      </AlertDialog.Description>

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

interface Props {
  open: boolean
  onClose: VoidFunction
}
