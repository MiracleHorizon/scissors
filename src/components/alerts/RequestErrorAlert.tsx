'use client'

import { AlertDialog, Button, Flex } from '@radix-ui/themes'

import { TitleWithExclamation } from '@components/TitleWithExclamation'
import { handleRequestError } from '@api/helpers/handleRequestError'

export function RequestErrorAlert({ open, error, reset, retry }: Props) {
  const message = handleRequestError(error)
  const isMessageEmpty = message.length === 0

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Content size='2' className='alert-content'>
        <TitleWithExclamation mb='3'>
          <AlertDialog.Title mb='0'>
            {isMessageEmpty ? 'Something went wrong' : 'Error'}
          </AlertDialog.Title>
        </TitleWithExclamation>

        <AlertDialog.Description size='3'>
          {isMessageEmpty ? 'Please try again later' : message}
        </AlertDialog.Description>

        <Flex gap='3' mt='3' justify={isMessageEmpty ? 'center' : 'end'}>
          {retry && (
            <AlertDialog.Action>
              <Button variant='soft' radius='large' onClick={retry}>
                Retry
              </Button>
            </AlertDialog.Action>
          )}

          <AlertDialog.Cancel>
            <Button color='gray' radius='large' onClick={reset}>
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
  retry?: VoidFunction
}
