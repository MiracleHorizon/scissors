'use client'

import { Flex } from '@radix-ui/themes'
import type { HTMLAttributes } from 'react'

import { ImageDropzone } from '../ImageDropzone'
import { ImageUploadPopover } from '../ImageUploadPopover/ImageUploadPopover'
import { useOutputStore } from '@stores/output'
import { ALLOWED_IMAGE_FORMATS } from '@server/sharp'
import { TOUR_STEP } from '@lib/tour'
import styles from './ImageUploader.module.css'
import { ButtonImport } from '@ui/ButtonImport'

const fileUploadZoneHTMLAttributes = {
  'data-tourstep': TOUR_STEP.FILE_UPLOAD
} as HTMLAttributes<HTMLDivElement>

export function ImageUploader() {
  const setFile = useOutputStore(state => state.setFile)

  return (
    <Flex gap='2' width='100%' m='auto' className={styles.root}>
      <ImageDropzone
        accept={ALLOWED_IMAGE_FORMATS}
        setFile={setFile}
        htmlAttributes={fileUploadZoneHTMLAttributes}
      />

      <Flex direction='column' className={styles.buttons}>
        <ButtonImport
          accept={ALLOWED_IMAGE_FORMATS}
          setFile={setFile}
          tooltipContent='Upload an image from device'
        />
        <ImageUploadPopover />
      </Flex>
    </Flex>
  )
}
