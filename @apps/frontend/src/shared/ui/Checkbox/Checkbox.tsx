import { type HTMLAttributes, useId } from 'react'
import { Checkbox as RadixCheckbox, Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import type { JustifyContent } from '@/shared/radix'
import styles from './Checkbox.module.css'

export const Checkbox = ({
  label,
  direction = 'row',
  justify,
  ...props
}: Omit<HTMLAttributes<HTMLButtonElement>, 'color'> & {
  label?: string
  checked?: boolean
  disabled?: boolean
  direction?: 'row' | 'row-reverse'
  justify?: JustifyContent
}) => {
  const id = useId()

  return (
    <Text as='div' size='2'>
      <Flex align='center' direction={direction} justify={justify} gap='2'>
        <RadixCheckbox id={id} size='3' {...props} />

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
}
