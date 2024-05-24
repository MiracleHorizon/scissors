'use client'

import { useId } from 'react'
import { Flex, Select as RadixSelect, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import capitalize from 'lodash.capitalize'

import type { Props } from './types'
import styles from './Select.module.css'

export const Select = ({
  data,
  label,
  size = '2',
  labelSize = '2',
  labelClassName,
  labelStyle,
  triggerClassName,
  triggerStyle,
  contentClassName,
  contentStyle,
  valueCapitalize = true,
  DetailsComponent,
  ...props
}: Props) => {
  const triggerId = useId()

  return (
    <RadixSelect.Root size={size} {...props}>
      <Flex direction='column' align='start' width='100%'>
        <Flex
          align='center'
          gap='6px'
          width='100%'
          mb='1'
          style={labelStyle}
          className={labelClassName}
        >
          <Text as='label' color='gray' size={labelSize} htmlFor={triggerId}>
            {label}
          </Text>

          {DetailsComponent}
        </Flex>

        <RadixSelect.Trigger
          id={triggerId}
          style={triggerStyle}
          className={clsx('w-full', triggerClassName)}
        />
      </Flex>

      <RadixSelect.Content
        position='popper'
        side='bottom'
        sideOffset={5}
        style={contentStyle}
        className={clsx(styles.content, contentClassName)}
      >
        {data.map(({ label: groupLabel, value }, index) => (
          <RadixSelect.Group key={index + value.slice(0, 3).join(', ')}>
            {groupLabel && <RadixSelect.Label>{groupLabel}</RadixSelect.Label>}

            {value.map(value => (
              <RadixSelect.Item key={value} value={value}>
                {valueCapitalize ? capitalize(value) : value}
              </RadixSelect.Item>
            ))}

            {index < data.length - 1 && <RadixSelect.Separator />}
          </RadixSelect.Group>
        ))}
      </RadixSelect.Content>
    </RadixSelect.Root>
  )
}
