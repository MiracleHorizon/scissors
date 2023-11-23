'use client'

import { memo } from 'react'
import { Flex, Switch, Text } from '@radix-ui/themes'

export const OptionSwitch = memo(({ title, ...switchProps }: Props) => (
  <Text as='label' size='3'>
    <Flex gap='2'>
      <Switch radius='none' size='3' {...switchProps} />
      <Text as='span'>{title}</Text>
    </Flex>
  </Text>
))

OptionSwitch.displayName = 'OptionSwitch'

interface Props {
  title: string
  onClick: VoidFunction
  checked: boolean | undefined
  disabled?: boolean
}
