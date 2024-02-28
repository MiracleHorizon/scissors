import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import styles from './ImageUploader.module.css'

export const ImageUploaderLoading = () => (
  <Flex direction='column' gap='3' m='auto' width='100%' className={styles.root}>
    <Skeleton height={104} width='100%' />
  </Flex>
)
