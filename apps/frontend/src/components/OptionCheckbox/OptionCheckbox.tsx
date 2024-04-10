'use client'

import { type FC, memo, useId } from 'react'
import { Checkbox, Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import styles from './OptionCheckbox.module.css'

export const rootTestId = 'option-checkbox-root'

export const OptionCheckbox: FC<Props> = memo(({ label, ...props }) => {
  const id = useId()

  return (
    <Text data-testid={rootTestId} as='div' size='2'>
      <Flex align='center' gap='2'>
        <Checkbox size='3' id={id} {...props} />

        {label && (
          <Text
            as='label'
            htmlFor={id}
            title={label}
            truncate
            className={clsx({
              [styles.textDisabled]: props?.disabled
            })}
          >
            {label}
          </Text>
        )}
      </Flex>
    </Text>
  )
})

OptionCheckbox.displayName = 'OptionCheckbox'

export interface Props {
  label?: string
  checked?: boolean
  onClick?: VoidFunction
  disabled?: boolean
}
