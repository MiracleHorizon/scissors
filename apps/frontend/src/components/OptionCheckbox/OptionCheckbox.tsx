'use client'

import { type FC, memo } from 'react'
import { Checkbox, Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import styles from './OptionCheckbox.module.css'

export const labelTestId = 'option-checkbox-label'

export const OptionCheckbox: FC<Props> = memo(({ title, ...props }) => (
  <Text data-testid={labelTestId} as='label' size='2' title={title}>
    <Flex align='center' gap='2'>
      <Checkbox size='3' {...props} />
      <Text
        title={title}
        truncate
        className={clsx({
          [styles.textDisabled]: props?.disabled
        })}
      >
        {title}
      </Text>
    </Flex>
  </Text>
))

OptionCheckbox.displayName = 'OptionCheckbox'

export interface Props {
  title: string
  checked: boolean | undefined
  onClick: VoidFunction
  disabled?: boolean
}
