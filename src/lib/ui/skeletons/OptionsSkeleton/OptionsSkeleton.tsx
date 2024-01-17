import { Flex, type PaddingProps, Separator } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import { clsx } from 'clsx'

import styles from './OptionsSkeleton.module.css'

const SwitchSkeleton = () => (
  <Flex align='center' width='100%'>
    <Skeleton inline count={1} height={24} containerClassName='w-full' />
    <Skeleton inline count={1} height={24} width={42} className={styles.switch} />
  </Flex>
)

const ButtonSkeleton = () => <Skeleton inline count={1} height={32} width='145px' />

const padding: PaddingProps = {
  px: '3',
  pb: '2',
  pt: '4'
}

export const OptionsSkeleton = () => (
  <Flex direction='column' width='100%' {...padding} gap='2'>
    <Skeleton inline count={1} height={30} containerClassName={clsx(styles.input, 'w-full')} />
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
    <ButtonSkeleton />
    <Separator my='1' size='4' />
    <ButtonSkeleton />
    <Separator my='1' size='4' />
    <ButtonSkeleton />
    <Separator my='1' size='4' />
    <ButtonSkeleton />
    <Separator my='1' size='4' />
    <ButtonSkeleton />
    <Separator my='1' size='4' />
    <ButtonSkeleton />
  </Flex>
)
