'use client'

import { type ReactNode, useId } from 'react'
import { Flex, Select, Text } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

export function OptionSelect<T extends string>({
  label,
  data,
  DetailsComponent,
  ...props
}: Props<T>) {
  const triggerId = useId()

  return (
    <Select.Root size='2' {...props}>
      <Flex direction='column' align='start' width='100%'>
        <Flex align='center' gap='1' width='100%' mb='1'>
          {DetailsComponent}
          <Text as='label' size='2' mr='2' htmlFor={triggerId}>
            {label}
          </Text>
        </Flex>
        <Select.Trigger id={triggerId} className='w-full' />
      </Flex>

      <Select.Content position='popper' side='bottom' sideOffset={5}>
        {data.map(({ label, value }, index) => (
          <Select.Group key={index + value.slice(0, 3).join(', ')}>
            {label && <Select.Label>{label}</Select.Label>}
            {value.map(value => (
              <Select.Item key={value} value={value}>
                {capitalize(value)}
              </Select.Item>
            ))}
            {index < data.length - 1 && <Select.Separator />}
          </Select.Group>
        ))}
      </Select.Content>
    </Select.Root>
  )
}

/* eslint no-unused-vars: 0 */
interface Props<T extends string> {
  label: string
  value: string
  data: Value[]
  onValueChange: (value: T) => void
  defaultValue?: string
  DetailsComponent?: ReactNode
}

interface Value {
  value: string[]
  label?: string
}
