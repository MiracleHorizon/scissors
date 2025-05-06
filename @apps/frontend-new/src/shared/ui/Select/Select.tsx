import { useId, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { Flex, Select as RadixSelect, Text } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'

import type { TextSize } from '@/shared/radix'
import styles from './Select.module.css'

export const Select = ({
  data,
  label,
  size = '2',
  labelSize = '2',
  valueCapitalize = true,
  DetailsComponent,
  ...props
}: {
  label: string
  data: {
    value: string[]
    label?: string
  }[]
  valueCapitalize?: boolean
  DetailsComponent?: ReactNode
  labelSize?: TextSize
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>) => {
  const triggerId = useId()

  return (
    <RadixSelect.Root size={size} {...props}>
      <Flex direction='column' align='start' width='100%'>
        <Flex align='center' gap='6px' width='100%' mb='1'>
          <Text as='label' color='gray' size={labelSize} htmlFor={triggerId}>
            {label}
          </Text>

          {DetailsComponent}
        </Flex>

        <RadixSelect.Trigger id={triggerId} radius='large' className={styles.trigger} />
      </Flex>

      <RadixSelect.Content
        position='popper'
        side='bottom'
        sideOffset={5}
        className={styles.content}
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
