import { Flex, Separator } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import styles from './AppFooterContentSkeleton.module.css'

export const ButtonDownloadSkeleton = () => (
  <Skeleton height={40} className={styles.buttonDownload} />
)

export const ButtonRequestSkeleton = () => <Skeleton height={40} className={styles.buttonRequest} />

export const AppFooterContentSkeleton = () => (
  <Flex align='center' justify='end' gap='3' height='100%' width='100%'>
    <ButtonDownloadSkeleton />
    <Separator orientation='vertical' size='2' />
    <ButtonRequestSkeleton />
  </Flex>
)
