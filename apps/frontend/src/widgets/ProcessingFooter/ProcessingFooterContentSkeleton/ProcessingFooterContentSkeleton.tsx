import { Flex, Separator, Skeleton } from '@radix-ui/themes'

import styles from './ProcessingFooterContentSkeleton.module.css'

export const ButtonDownloadImageSkeleton = () => (
  <Skeleton height='40px' className={styles.buttonDownload} />
)

export const ButtonRequestSkeleton = () => (
  <Skeleton height='40px' className={styles.buttonRequest} />
)

export const ProcessingFooterContentSkeleton = () => (
  <Flex align='center' justify='end' gap='3' height='100%' width='100%'>
    <ButtonDownloadImageSkeleton />
    <Separator orientation='vertical' size='2' />
    <ButtonRequestSkeleton />
  </Flex>
)
