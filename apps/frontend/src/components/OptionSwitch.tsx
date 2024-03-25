'use client'

import { type FC, memo } from 'react'
import { Flex, Switch, Text } from '@radix-ui/themes'

import type { Size } from '@lib/theme'

const width: Size = {
  initial: '100%',
  xs: 'auto',
  md: '100%'
} as const

export const labelTestId = 'option-switch-label'

export const OptionSwitch: FC<Props> = memo(({ title, ...switchProps }) => (
  <Flex asChild justify='between' gap='2' width={width}>
    <Text data-testid={labelTestId} as='label' size='3'>
      <Text title={title} as='span' className='truncate'>
        {title}
      </Text>
      <Switch size='3' {...switchProps} />
    </Text>
  </Flex>
))

OptionSwitch.displayName = 'OptionSwitch'

export interface Props {
  title: string
  checked: boolean | undefined
  onClick: VoidFunction
  disabled?: boolean
}
