import { AlertDialog, Button, Flex, type Responsive } from '@radix-ui/themes'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { MAX_FILE_SIZE_MB } from '@helpers/isValidFileSize'
import styles from './FileSizeAlert.module.css'

const contentSize: Responsive<'1' | '2' | '3' | '4'> = {
  initial: '2',
  sm: '3'
}

export function FileSizeAlert({ isOpen, onClose }: Props) {
  return (
    <AlertDialog.Root open={isOpen} defaultOpen={false}>
      <AlertDialog.Content size={contentSize} className={styles.content} onEscapeKeyDown={onClose}>
        <Flex align='center' mb='3'>
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
