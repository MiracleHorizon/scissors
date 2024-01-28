'use client'

import { Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { FC } from 'react'

import { ImageIcon } from '@ui/icons/ImageIcon'
import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'
import { MAX_FILE_SIZE_MB } from '@helpers/isValidFileSize'
import { IMAGE_FILE_FORMAT } from '@server/sharp'
import styles from './FileUploadZone.module.css'

const extensions = Object.values(IMAGE_FILE_FORMAT).slice(0, 4).join(', ')
const FileUploadZone: FC<ComponentProps> = ({ children: FileInput, isDragOver, ...props }) => (
  <Flex
    {...props}
    title='File is not uploaded'
    align='center'
    justify='center'
    direction='column'
    width='100%'
    p='2'
    m='auto'
    className={clsx(styles.root, {
      [styles.dragOver]: isDragOver
    })}
  >
    <Flex asChild align='center' gap='2'>
      <Text as='span' weight='medium' size='5' mb='2' className={styles.uploadText}>
        Upload file
        <ImageIcon width='24px' height='24px' />
      </Text>
    </Flex>
    <Text as='p' align='center' size='3'>
      Available file extensions: {extensions}...
    </Text>
    <Text as='p' align='center' size='3'>
      Maximum file size: {MAX_FILE_SIZE_MB} MB
    </Text>
    {FileInput}
  </Flex>
)

const Uploader = withFileUploader(FileUploadZone)

export { Uploader as FileUploadZone }
