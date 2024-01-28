'use client'

import dynamic from 'next/dynamic'
import { Flex, type PaddingProps } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

import { FileUploadZone } from '@components/FileUploadZone'
import { UploadedFileLoading } from './UploadedFile/UploadedFileLoading'
import { ALLOWED_IMAGE_FORMATS } from '@server/sharp'
import { useOutputStore } from '@stores/output'
import { TOUR_STEP } from '@lib/tour'
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

const fileUploadZoneHTMLAttributes = {
  'data-tourstep': TOUR_STEP.FILE_UPLOAD
} as HTMLAttributes<HTMLDivElement>

export function Preview() {
  const file = useOutputStore(state => state.file)
  const setFile = useOutputStore(state => state.setFile)

  return (
    <Flex
      {...padding}
      direction='column'
      className={clsx(styles.root, file ? styles.withFile : styles.withoutFile)}
    >
      {file ? (
        <UploadedFile file={file} />
      ) : (
        <FileUploadZone
          accept={ALLOWED_IMAGE_FORMATS}
          setFile={setFile}
          htmlAttributes={fileUploadZoneHTMLAttributes}
        />
      )}
    </Flex>
  )
}
