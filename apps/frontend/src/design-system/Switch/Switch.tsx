'use client'

import { type FC, memo } from 'react'
import { Flex, Switch as RadixSwitch, Text } from '@radix-ui/themes'

import type { Size } from '@lib/theme'

const width: Size = {
  initial: '100%',
  xs: 'auto',
  md: '100%'
} as const

export const labelTestId = 'switch-label'

export interface Props {
  title: string
  checked: boolean | undefined
  onClick: VoidFunction
  disabled?: boolean
}

export const Switch: FC<Props> = memo(({ title, ...switchProps }) => (
  <Flex asChild justify='between' gap='2' width={width}>
    <Text data-testid={labelTestId} as='label'>
      <Text title={title} truncate>
        {title}
      </Text>
      <RadixSwitch size='3' {...switchProps} />
    </Text>
  </Flex>
))

Switch.displayName = 'Switch'
