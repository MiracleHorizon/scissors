'use client'

import { useId } from 'react'
import { Flex, Select, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import capitalize from 'lodash.capitalize'

import type { Props } from './OptionSelect.types'
import styles from './OptionSelect.module.css'

export function OptionSelect({
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
}: Props) {
  const triggerId = useId()

  return (
    <Select.Root size={size} {...props}>
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

        <Select.Trigger
          id={triggerId}
          style={triggerStyle}
          className={clsx('w-full', triggerClassName)}
        />
      </Flex>

      <Select.Content
        position='popper'
        side='bottom'
        sideOffset={5}
        style={contentStyle}
        className={clsx(styles.content, contentClassName)}
      >
        {data.map(({ label: groupLabel, value }, index) => (
          <Select.Group key={index + value.slice(0, 3).join(', ')}>
            {groupLabel && <Select.Label>{groupLabel}</Select.Label>}

            {value.map(value => (
              <Select.Item key={value} value={value}>
                {valueCapitalize ? capitalize(value) : value}
              </Select.Item>
            ))}

            {index < data.length - 1 && <Select.Separator />}
          </Select.Group>
        ))}
      </Select.Content>
    </Select.Root>
  )
}
