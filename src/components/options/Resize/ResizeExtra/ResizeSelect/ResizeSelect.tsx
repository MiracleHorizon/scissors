'use client'

import { Fragment } from 'react'
import { Select } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import styles from './ResizeSelect.module.css'

export function ResizeSelect<T extends string>({ data, ...props }: Props<T>) {
  return (
    <Select.Root size='2' {...props}>
      <Select.Trigger className={styles.trigger} />

      <Select.Group>
        <Select.Content position='popper' side='bottom' sideOffset={5}>
          {data.map(({ label, value }, index) => (
            <Fragment key={label}>
              <Select.Label>{label}</Select.Label>
              {value.map(value => (
                <Select.Item key={value} value={value}>
                  {capitalize(value)}
                </Select.Item>
              ))}
              {index < data.length - 1 && <Select.Separator />}
            </Fragment>
          ))}
        </Select.Content>
      </Select.Group>
    </Select.Root>
  )
}

/* eslint no-unused-vars: 0 */
interface Props<T extends string> {
  value: string
  defaultValue: string
  data: Value[]
  onValueChange: (value: T) => void
}

interface Value {
  label: string
  value: string[]
}
