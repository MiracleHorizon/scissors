import { Flex, Separator, Skeleton } from '@radix-ui/themes'

import styles from './TabConvertSkeleton.module.css'

const SwitchSkeleton = ({ label }: { label?: string }) => (
  <Flex align='center' justify='between' width='100%'>
    <Skeleton height='24px'>{label}</Skeleton>
    <Skeleton height='24px' width='42px' ml='2' className={styles.switch} />
  </Flex>
)

const ButtonSkeleton = () => <Skeleton height='32px' width='140px' />

const OptionsSkeleton = () => (
  <>
    <Skeleton height='32px' width='100%' />

    <Separator mt='8px' mb='1' size='4' />

    <Flex direction='column' gap='2' width='100%'>
      <SwitchSkeleton label='Flip Flip Flip' />
      <SwitchSkeleton label='Flop Flop Flop' />
      <SwitchSkeleton label='Grayscale Grayscale' />
    </Flex>

    <Separator my='1' size='4' />

    <Flex direction='column' gap='2' width='100%'>
      <SwitchSkeleton label='Negate Negate' />
      <SwitchSkeleton label='Negate Alpha Negate' />
    </Flex>

    <Separator my='1' size='4' />

    <SwitchSkeleton label='Blur Blur Blur' />
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
  </>
)

export const TabConvertSkeleton = () => (
  <Flex direction='column' width='100%' gap='2'>
    <OptionsSkeleton />
  </Flex>
)
