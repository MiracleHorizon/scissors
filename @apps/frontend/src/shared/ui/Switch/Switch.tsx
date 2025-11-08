import { useId } from 'react'
import { Flex, Switch as RadixSwitch, Text, type SwitchProps } from '@radix-ui/themes'

import type { Size } from '@/shared/radix'

const width: Size = {
  initial: '100%',
  xs: 'auto',
  md: '100%'
} as const

export const Switch = ({ label, ...switchProps }: SwitchProps & { label: string }) => {
  const id = useId()

  return (
    <Flex asChild justify='between' gap='2' width={width}>
      <Text as='label' htmlFor={id}>
        <Text title={label} truncate>
          {label}
        </Text>

        <RadixSwitch size='3' id={id} {...switchProps} />
      </Text>
    </Flex>
  )
}
