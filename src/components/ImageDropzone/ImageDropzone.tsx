'use client'

import { Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { FC } from 'react'

import { ImageIcon } from '@ui/icons/ImageIcon'
import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'
import { MAX_FILE_SIZE_MB } from '@site/config'
import styles from './ImageDropzone.module.css'

const ImageDropzone: FC<ComponentProps> = ({ children: fileInput, isDragOver, ...props }) => (
  <Flex
    {...props}
    title='File is not uploaded'
    align='center'
    justify='center'
    width='100%'
    py='2'
    px='6'
    gap='3'
    m='auto'
    className={clsx(styles.root, {
      [styles.dragOver]: isDragOver
    })}
  >
    <ImageIcon width='44px' height='44px' />

    <Flex asChild justify='center' direction='column' className={styles.article}>
      <article>
        <Text as='p' weight='medium' size='3'>
          Drag image here or click to upload
        </Text>

        <Text as='p' size='2' className={styles.maxFileSize}>
          Maximum file size: {MAX_FILE_SIZE_MB}mb
        </Text>
      </article>
    </Flex>

    {fileInput}
  </Flex>
)

const Dropzone = withFileUploader(ImageDropzone)

export { Dropzone as ImageDropzone }
