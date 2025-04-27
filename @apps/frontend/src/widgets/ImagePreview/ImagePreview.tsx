import { clsx } from 'clsx'
import { Flex } from '@radix-ui/themes'

import { BackgroundGrid } from '@ui/BackgroundGrid'
import { useOutputStore } from '@stores/output'
import { ImageUploader } from '@components/ImageUploader'
import { UploadedFile } from './UploadedFile'
import styles from './ImagePreview.module.css'

export const ImagePreview = () => {
  const file = useOutputStore(state => state.file)

  return (
    <Flex direction='column' className={clsx(styles.root, file && styles.withFile)}>
      <BackgroundGrid className={styles.backgroundGrid} />

      <Flex px='4' width='100%' height='100%' className={styles.content}>
        {file ? <UploadedFile file={file} /> : <ImageUploader />}
      </Flex>
    </Flex>
  )
}
