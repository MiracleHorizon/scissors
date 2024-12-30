import { Flex, Text } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

export const labelTestId = 'number-input-label'

export type LabelProps = PropsWithChildren<{
  id: string
  label: string
}>

export const NumberInputLabel = ({ children, id, label }: LabelProps) => (
  <Flex data-testid={labelTestId} direction='column' gap='1' width='100%'>
    <Text as='label' size='2' color='gray' htmlFor={id}>
      {label}
    </Text>
    {children}
  </Flex>
)
