'use client'

import { type CSSProperties, type ReactNode, useId } from 'react'
import { Flex, Select, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import capitalize from 'lodash.capitalize'

import type { TextSize } from '@lib/theme'
import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './OptionSelect.module.css'

export function OptionSelect<T extends string>({
  data,
  label,
  labelClassName,
  labelStyle,
  triggerLabelSize = '2',
  triggerClassName,
  triggerStyle,
  contentClassName,
  contentStyle,
  withItemValueCapitalize = true,
  DetailsComponent,
  ...props
}: Props<T>) {
  const triggerId = useId()

  return (
    <Select.Root size='2' {...props}>
      <Flex direction='column' align='start' width='100%'>
        <Flex
          align='center'
          gap='1'
          width='100%'
          mb='1'
          style={labelStyle}
          className={labelClassName}
        >
          {DetailsComponent}
          <Text as='label' size={triggerLabelSize} mr='2' htmlFor={triggerId}>
            {label}
          </Text>
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
        {data.map(({ label, value }, index) => (
          <Select.Group key={index + value.slice(0, 3).join(', ')}>
            {label && <Select.Label>{label}</Select.Label>}
            {value.map(value => (
              <Select.Item key={value} value={value}>
                {withItemValueCapitalize ? capitalize(value) : value}
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
interface Props<T extends string> extends StylesProps {
  label: string
  value: string
  data: Value[]
  onValueChange: (value: T) => void
  defaultValue?: string
  withItemValueCapitalize?: boolean
  DetailsComponent?: ReactNode
}

interface StylesProps extends ClassNameProps, StyleProps {
  triggerLabelSize?: TextSize
  triggerClassName?: string
  triggerStyle?: CSSProperties
  labelClassName?: string
  labelStyle?: CSSProperties
  contentClassName?: string
  contentStyle?: CSSProperties
}

interface Value {
  value: string[]
  label?: string
}

export type OptionSelectData<T extends string> = Props<T>['data']
