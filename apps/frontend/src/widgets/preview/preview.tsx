'use client'

import dynamic from 'next/dynamic'
import { clsx } from 'clsx'
import { Flex } from '@radix-ui/themes'

import { UploadedFileLoading } from './uploaded-file/uploaded-file-loading'
import { ImageUploaderLoading } from '@components/image-uploader-loading'
import { BackgroundGrid } from '@ui/background-grid'
import { useOutputStore } from '@stores/output'
import styles from './preview.module.css'

const ImageUploader = dynamic(
  () => import('@components/image-uploader').then(mod => mod.ImageUploader),
  {
    ssr: false,
    loading: () => <ImageUploaderLoading />
  }
)
const UploadedFile = dynamic(() => import('./uploaded-file').then(mod => mod.UploadedFile), {
  ssr: false,
  loading: () => <UploadedFileLoading />
})

export function Preview() {
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
