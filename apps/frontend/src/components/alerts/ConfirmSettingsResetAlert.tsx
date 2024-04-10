'use client'

import { type ComponentPropsWithoutRef, type FC, type PropsWithChildren, useState } from 'react'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'

import { OptionCheckbox } from '@components/OptionCheckbox'

const contentActionsProps = {
  gap: {
    initial: '3',
    xs: '2'
  },
  mt: {
    initial: '4',
    xs: '5'
  }
} as const

export const ConfirmSettingsResetAlert: FC<Props> = ({ children, onConfirm, onCancel }) => {
  const [removeAll, setRemoveAll] = useState(false)

  const handleToggleRemoveAll = () => setRemoveAll(prev => !prev)

  const handleConfirm = () => onConfirm(removeAll)

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>

      <AlertDialog.Content size='3'>
        <Flex direction='column' width='100%'>
          <AlertDialog.Title>Reset all settings</AlertDialog.Title>
          <AlertDialog.Description>
            All settings will be reset to default values. Are you sure you want to proceed?
          </AlertDialog.Description>

          <Flex
            justify='between'
            align='center'
            wrap='wrap'
            {...(contentActionsProps as ComponentPropsWithoutRef<typeof Flex>)}
          >
            <OptionCheckbox
              label='Remove all'
              checked={removeAll}
              onClick={handleToggleRemoveAll}
            />

            <Flex align='center' justify='end' wrap='wrap-reverse' gap='3'>
              <AlertDialog.Cancel>
                <Button color='gray' variant='soft' radius='large' onClick={onCancel}>
                  Cancel
                </Button>
              </AlertDialog.Cancel>

              <AlertDialog.Action>
                <Button radius='large' onClick={handleConfirm}>
                  Reset
                </Button>
              </AlertDialog.Action>
            </Flex>
          </Flex>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

/* eslint no-unused-vars: 0 */
type Props = PropsWithChildren<{
  onConfirm: (removeAll: boolean) => void
  onCancel?: VoidFunction
}>
