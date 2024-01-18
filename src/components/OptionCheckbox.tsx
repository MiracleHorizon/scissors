'use client'

import { type FC, memo } from 'react'
import { Checkbox, Flex, Text } from '@radix-ui/themes'

export const OptionCheckbox: FC<Props> = memo(({ title, ...props }) => (
  <Text as='label' size='2' title={title}>
    <Flex align='center' gap='2'>
      <Checkbox size='3' {...props} />
      <Text as='span' className='truncate'>
        {title}
      </Text>
    </Flex>
  </Text>
))

OptionCheckbox.displayName = 'OptionCheckbox'

export interface Props {
  title: string
  onClick: VoidFunction
  checked: boolean | undefined
  disabled?: boolean
}
