import { Flex, Text } from '@radix-ui/themes'
import type { ReactNode } from 'react'

import styles from './PropertyItem.module.css'

interface Props {
  label: string
  value: string
  icon: ReactNode
}

export const PropertyItem = ({ label, icon, value }: Props) => (
  <Flex align='center' gap='3' title={`${label}: ${value}`} className={styles.root}>
    <Flex asChild align='center' wrap='nowrap' gap='1'>
      <Text>
        {icon}
        {label}
      </Text>
    </Flex>
    <Text as='span' weight='medium'>
      {value}
    </Text>
  </Flex>
)
