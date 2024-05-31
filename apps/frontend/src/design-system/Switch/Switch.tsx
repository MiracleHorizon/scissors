'use client'

import { type HTMLAttributes, memo } from 'react'
import { Flex, Switch as RadixSwitch, Text } from '@radix-ui/themes'

import type { Size } from '@lib/theme'

const width: Size = {
  initial: '100%',
  xs: 'auto',
  md: '100%'
} as const

export const labelTestId = 'switch-label'

export interface SwitchExternalProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {
  label: string
  checked?: boolean
  disabled?: boolean
}

export const Switch = memo(({ label, ...switchProps }: SwitchExternalProps) => (
  <Flex asChild justify='between' gap='2' width={width}>
    <Text data-testid={labelTestId} as='label'>
      <Text title={label} truncate>
        {label}
      </Text>

      <RadixSwitch size='3' data-cy={`switch-${label}`} {...switchProps} />
    </Text>
  </Flex>
))

Switch.displayName = 'Switch'
