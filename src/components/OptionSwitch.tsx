'use client'

import { type FC, memo } from 'react'
import { Flex, Switch, Text } from '@radix-ui/themes'

import type { Size } from '@lib/theme'

const width: Size = {
  initial: '100%',
  xs: 'auto',
  md: '100%'
}

export const OptionSwitch: FC<Props> = memo(({ title, ...switchProps }) => (
  <Flex asChild justify='between' gap='2' width={width}>
    <Text as='label' size='3'>
      <Text title={title} as='span' className='truncate'>
        {title}
      </Text>
      <Switch size='3' {...switchProps} />
    </Text>
  </Flex>
))

OptionSwitch.displayName = 'OptionSwitch'

interface Props {
  title: string
  onClick: VoidFunction
  checked: boolean | undefined
  disabled?: boolean
}
