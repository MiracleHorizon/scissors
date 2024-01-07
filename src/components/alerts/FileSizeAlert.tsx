'use client'

import { AlertDialog, Button, Flex } from '@radix-ui/themes'

import { TitleWithExclamation } from '@components/TitleWithExclamation'
import { MAX_FILE_SIZE_MB } from '@helpers/isValidFileSize'

export function FileSizeAlert({ isOpen, onClose }: Props) {
  return (
    <AlertDialog.Root open={isOpen} defaultOpen={false}>
      <AlertDialog.Content size='2' className='alert-content' onEscapeKeyDown={onClose}>
        <TitleWithExclamation mb='3'>
          <AlertDialog.Title mb='0'>Invalid File Size</AlertDialog.Title>
        </TitleWithExclamation>

        <AlertDialog.Description size='3'>
          The selected file is too large. Please select a file smaller than {MAX_FILE_SIZE_MB}
          MB.
        </AlertDialog.Description>

        <Flex gap='3' mt='3' justify='end'>
          <AlertDialog.Cancel onClick={onClose}>
            <Button color='gray' variant='soft' radius='large'>
              Okay
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

interface Props {
  isOpen: boolean
  onClose: VoidFunction
}
