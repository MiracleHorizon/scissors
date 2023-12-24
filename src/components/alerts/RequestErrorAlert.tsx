import { AlertDialog, Button, Flex } from '@radix-ui/themes'

import { handleConvertError } from '@helpers/handleConvertError'

export function RequestErrorAlert({ open, error, reset, retry }: Props) {
  const message = handleConvertError(error)
  const isMessageEmpty = message.length === 0

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Content size='2' className='alert-content'>
        <AlertDialog.Title align={isMessageEmpty ? 'center' : 'left'}>
          {isMessageEmpty ? 'Something went wrong' : 'Error'}
        </AlertDialog.Title>

        {!isMessageEmpty && <AlertDialog.Description size='3'>{message}</AlertDialog.Description>}

        <Flex gap='3' mt='4' justify={isMessageEmpty ? 'center' : 'end'}>
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
  error: Error
  reset: VoidFunction
  retry: VoidFunction
}
