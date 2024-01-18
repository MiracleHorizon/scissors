'use client'

import dynamic from 'next/dynamic'
import { Flex, type PaddingProps } from '@radix-ui/themes'

import { FileUploadZone } from '@components/FileUploadZone'
import { UploadedFileLoading } from './UploadedFile/UploadedFileLoading'
import { ALLOWED_IMAGE_FORMATS } from '@server/sharp'
import { useOutputStore } from '@stores/output'
import styles from './Preview.module.css'

const UploadedFile = dynamic(() => import('./UploadedFile').then(mod => mod.UploadedFile), {
  ssr: false,
  loading: () => <UploadedFileLoading />
})

const padding: PaddingProps = {
  pt: '5',
  px: {
    initial: '4',
    md: '0'
  }
}

export function Preview() {
  const file = useOutputStore(state => state.file)
  const setFile = useOutputStore(state => state.setFile)

  return (
    <Flex {...padding} direction='column' className={styles.root}>
      {file ? (
        <UploadedFile file={file} />
      ) : (
        <FileUploadZone accept={ALLOWED_IMAGE_FORMATS} setFile={setFile} />
      )}
    </Flex>
  )
}
