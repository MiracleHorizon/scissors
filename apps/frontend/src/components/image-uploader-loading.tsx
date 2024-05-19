import { Skeleton } from '@radix-ui/themes'

import styles from './image-uploader-loading.module.css'

export const ImageUploaderLoading = () => (
  <Skeleton
    height='130px'
    width='100%'
    maxWidth={{
      initial: '100%',
      xs: '80dvw',
      sm: '470px'
    }}
    m='auto'
    className={styles.root}
  />
)
