'use client'

import { AlertDialog, Button, Flex } from '@radix-ui/themes'

import { ExclamationTitle } from '@ui/ExclamationTitle'
import { handleRequestError } from '@api/helpers/handleRequestError'

export function RequestErrorAlert({ open, error, reset, retry }: Props) {
  const message = handleRequestError(error)
  const isMessageEmpty = message.length === 0

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Content size='3' maxWidth='390px'>
        <ExclamationTitle mb='3'>
          <AlertDialog.Title mb='0'>
            {isMessageEmpty ? 'Something went wrong' : 'Error'}
          </AlertDialog.Title>
        </ExclamationTitle>

        <AlertDialog.Description size='3'>
          {isMessageEmpty ? 'Please try again later' : message}
        </AlertDialog.Description>

        <Flex gap='3' mt='5' justify={isMessageEmpty ? 'center' : 'end'}>
          <AlertDialog.Cancel>
            <Button color='gray' variant='soft' radius='large' onClick={reset}>
              Okay
            </Button>
          </AlertDialog.Cancel>

          {retry && (
            <AlertDialog.Action>
              <Button radius='large' onClick={retry}>
                Retry
              </Button>
            </AlertDialog.Action>
          )}
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
