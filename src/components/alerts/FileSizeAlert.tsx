import { AlertDialog, Button, Flex } from '@radix-ui/themes'

import { ExclamationTriangleIcon } from '@ui/icons/ExclamationTriangleIcon'
import { MAX_FILE_SIZE_MB } from '@helpers/isValidFileSize'

export function FileSizeAlert({ isOpen, onClose }: Props) {
  return (
    <AlertDialog.Root open={isOpen} defaultOpen={false}>
      <AlertDialog.Content size='2' className='alert-content' onEscapeKeyDown={onClose}>
        <Flex align='center' pt='1' mb='3'>
          <ExclamationTriangleIcon color='tomato' width='18px' height='18px' />
          <AlertDialog.Title ml='2' mb='0' trim='start'>
            Invalid file size
          </AlertDialog.Title>
        </Flex>

        <AlertDialog.Description size='3'>
          The selected file is too large. Please select a file smaller than {MAX_FILE_SIZE_MB}
          MB.
        </AlertDialog.Description>

        <Flex gap='3' mt='3' justify='end'>
          <AlertDialog.Cancel onClick={onClose}>
            <Button color='gray'>Okay</Button>
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
