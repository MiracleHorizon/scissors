'use client'

import dynamic from 'next/dynamic'
import { Flex, type PaddingProps } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { ImageUploader } from '@components/ImageUploader'
import { UploadedFileLoading } from './UploadedFile/UploadedFileLoading'
import { useOutputStore } from '@stores/output'
import styles from './Preview.module.css'

const UploadedFile = dynamic(() => import('./UploadedFile').then(mod => mod.UploadedFile), {
  ssr: false,
  loading: () => <UploadedFileLoading />
})

const padding: PaddingProps = {
  px: {
    initial: '4',
    md: '0'
  }
}

export function Preview() {
  const file = useOutputStore(state => state.file)

  return (
    <Flex
      {...padding}
      direction='column'
      className={clsx(styles.root, file ? styles.withFile : styles.withoutFile)}
    >
      {file ? <UploadedFile file={file} /> : <ImageUploader />}
    </Flex>
  )
}
