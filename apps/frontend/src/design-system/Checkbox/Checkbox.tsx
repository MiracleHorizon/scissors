'use client'

import { type FC, memo, useId } from 'react'
import { Checkbox as RadixCheckbox, Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import styles from './Checkbox.module.css'

export const rootTestId = 'checkbox-root'

export const Checkbox: FC<Props> = memo(({ label, ...props }) => {
  const id = useId()

  return (
    <Text data-testid={rootTestId} as='div' size='2'>
      <Flex align='center' gap='2'>
        <RadixCheckbox size='3' id={id} {...props} />

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

Checkbox.displayName = 'Checkbox'

export interface Props {
  label?: string
  checked?: boolean
  onClick?: VoidFunction
  disabled?: boolean
}
