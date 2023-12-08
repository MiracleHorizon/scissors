import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import type { AxiosError } from 'axios'

import { handleConvertError } from '@helpers/handleConvertError'

export function RequestErrorAlert({ open, error, reset, retry }: Props) {
  const message = handleConvertError(error)

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Content size='2' className='alertContent'>
        <AlertDialog.Title>Error</AlertDialog.Title>
        <AlertDialog.Description size='3'>{message}</AlertDialog.Description>

        <Flex gap='3' mt='4' justify='end'>
          <AlertDialog.Action>
            <Button onClick={retry}>Retry</Button>
          </AlertDialog.Action>
          <AlertDialog.Cancel>
            <Button color='gray' onClick={reset}>
              Okay
            </Button>
          </AlertDialog.Cancel>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

interface Props {
  open: boolean
  error: AxiosError
  reset: VoidFunction
  retry: VoidFunction
}
