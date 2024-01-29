'use client'

import { AlertDialog, Button, Flex, Text } from '@radix-ui/themes'
import type { CSSProperties, FC } from 'react'

import { TitleWithExclamation } from '@components/TitleWithExclamation'
import { MAX_FILE_SIZE_MB } from '@helpers/file/constants'

const contentStyle: CSSProperties = {
  padding: '22px',
  maxWidth: 370
}
const maxFileSizeTextStyle: CSSProperties = {
  fontWeight: '600'
}

export const FileSizeAlert: FC<Props> = ({ isOpen, onClose }) => (
  <AlertDialog.Root open={isOpen} defaultOpen={false}>
    <AlertDialog.Content size='3' style={contentStyle} onEscapeKeyDown={onClose}>
      <TitleWithExclamation mb='3'>
        <AlertDialog.Title mb='0'>Invalid file size</AlertDialog.Title>
      </TitleWithExclamation>

      <AlertDialog.Description>
        The selected file is too large. The maximum file size is{' '}
        <Text style={maxFileSizeTextStyle}>{MAX_FILE_SIZE_MB}</Text> mb.
      </AlertDialog.Description>

      <Flex gap='3' mt='3' justify='end'>
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
  isOpen: boolean
  onClose: VoidFunction
}
