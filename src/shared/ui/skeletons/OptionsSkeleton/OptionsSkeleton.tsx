import { Flex, Separator } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import styles from './OptionsSkeleton.module.css'

function SwitchSkeleton() {
  return (
    <Flex align='center' width='100%'>
      <Skeleton inline count={1} height={24} containerClassName={styles.widthFull} />
      <Skeleton inline count={1} height={24} width={42} className={styles.switch} />
    </Flex>
  )
}

export function OptionsSkeleton() {
  return (
    <Flex direction='column' width='100%' pt='4' px='5' gap='2'>
      <Flex direction='column' gap='2'>
        <SwitchSkeleton />
        <SwitchSkeleton />
        <SwitchSkeleton />
      </Flex>
      <Separator my='1' size='4' />
      <Flex direction='column' gap='2'>
        <SwitchSkeleton />
        <SwitchSkeleton />
      </Flex>
      <Separator my='1' size='4' />
      <SwitchSkeleton />
      <Skeleton inline count={1} height={32} width='145px' />
      <Separator my='1' size='4' />
      <Skeleton inline count={1} height={32} width='145px' />
      <Separator my='1' size='4' />
      <Skeleton inline count={1} height={32} width='145px' />
      <Separator my='1' size='4' />
      <Skeleton inline count={1} height={32} width='145px' />
      <Separator my='1' size='4' />
      <Skeleton inline count={1} height={32} width='145px' />
      <Separator my='1' size='4' />
      <Skeleton inline count={1} height={32} width='145px' />
      <Separator my='1' size='4' />
      <Skeleton inline count={1} height={32} width='145px' />
    </Flex>
  )
}
