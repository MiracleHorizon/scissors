import { Flex, Skeleton } from '@radix-ui/themes'

import styles from './ImageUploader.module.css'

export const ImageUploaderLoading = () => (
  <Flex direction='column' gap='3' m='auto' width='100%' className={styles.root}>
    <Skeleton height='104px' width='100%' />
  </Flex>
)
