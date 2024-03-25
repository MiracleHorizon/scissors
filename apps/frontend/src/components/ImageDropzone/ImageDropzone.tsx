'use client'

import { Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { FC } from 'react'
import type { PaddingProps } from '@radix-ui/themes/props'

import { ImageIcon } from '@ui/icons/ImageIcon'
import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'
import { MAX_FILE_SIZE_MB } from '@site/config'
import styles from './ImageDropzone.module.css'

const padding: PaddingProps = {
  py: '2',
  px: {
    initial: '4',
    xs: '6'
  }
} as const

const ImageDropzone: FC<ComponentProps> = ({
  children: fileInput,
  isDragOver,
  className,
  ...props
}) => (
  <Flex
    {...padding}
    {...props}
    title='File is not uploaded'
    align='center'
    justify='center'
    width='100%'
    gap='3'
    maxHeight='140px'
    className={clsx(
      styles.root,
      {
        [styles.dragOver]: isDragOver
      },
      className
    )}
  >
    <ImageIcon width='44px' height='44px' />

    <Flex asChild justify='center' direction='column' className={styles.article}>
      <article>
        <Text as='p' weight='medium' size='3' className={styles.title}>
          Drag image here or click to upload
        </Text>

        <Text as='p' weight='medium' size='3' className={styles.titleTouch}>
          Tap here for upload file
        </Text>

        <Text as='p' size='2' className={styles.maxFileSize}>
          The maximum file size per file is {MAX_FILE_SIZE_MB}mb
        </Text>
      </article>
    </Flex>

    {fileInput}
  </Flex>
)

const Dropzone = withFileUploader(ImageDropzone)

export { Dropzone as ImageDropzone }
