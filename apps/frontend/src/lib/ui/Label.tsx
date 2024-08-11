import { Flex, type FlexProps, Text } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

type Props = FlexProps &
  PropsWithChildren<{
    label: string
  }>

export const Label = ({ children, label, ...props }: Props) => (
  <Flex width='100%' align='start' direction='column' gapY='6px' {...props}>
    <Text size='2' color='gray'>
      {label}
    </Text>

    {children}
  </Flex>
)
