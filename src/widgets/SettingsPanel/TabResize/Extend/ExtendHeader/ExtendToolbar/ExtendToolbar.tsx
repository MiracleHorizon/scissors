'use client'

import { useCallback } from 'react'
import { Flex, Separator } from '@radix-ui/themes'
import { AllSidesIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

import { ButtonExtendReset } from './ButtonExtendReset'
import { ExtendToolbarButton } from './ExtendToolbarButton'
import { InputMode, useExtendStore } from '@stores/extend'
import styles from './ExtendToolbar.module.css'

export function ExtendToolbar() {
  const inputMode = useExtendStore(state => state.inputMode)
  const setInputMode = useExtendStore(state => state.setInputMode)

  const setInputModeNumber = useCallback(() => setInputMode(InputMode.NUMBER), [setInputMode])
  const setInputModeAxis = useCallback(() => setInputMode(InputMode.AXIS), [setInputMode])
  const setInputModeSeparated = useCallback(() => setInputMode(InputMode.SEPARATED), [setInputMode])

  return (
    <Flex width='100%'>
      <Flex align='center' justify='end' gap='1' width='100%' className={styles.content}>
        {inputMode !== InputMode.NUMBER && (
          <ExtendToolbarButton
            onClick={inputMode === InputMode.AXIS ? setInputModeSeparated : setInputModeAxis}
          >
            <AllSidesIcon width='17px' height='17px' />
          </ExtendToolbarButton>
        )}

        <ExtendToolbarButton
          onClick={inputMode !== InputMode.NUMBER ? setInputModeNumber : setInputModeAxis}
        >
          {inputMode !== InputMode.NUMBER ? (
            <ChevronUpIcon width='20px' height='20px' />
          ) : (
            <ChevronDownIcon width='20px' height='20px' />
          )}
        </ExtendToolbarButton>

        <Separator mx='1' orientation='vertical' />

        <ButtonExtendReset className={styles.buttonReset} />
      </Flex>
    </Flex>
  )
}
