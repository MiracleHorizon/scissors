'use client'

import { memo, useId } from 'react'
import { Checkbox as RadixCheckbox, Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import styles from './Checkbox.module.css'
import type { JustifyContent } from '@lib/theme'

export const rootTestId = 'checkbox-root'

export interface Props {
  label?: string
  checked?: boolean
  onClick?: VoidFunction
  disabled?: boolean
  direction?: 'row' | 'row-reverse'
  justify?: JustifyContent
}

export const Checkbox = memo(({ label, direction = 'row', justify, ...props }: Props) => {
  const id = useId()

  return (
    <Text data-testid={rootTestId} as='div' size='2'>
      <Flex align='center' direction={direction} justify={justify} gap='2'>
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
