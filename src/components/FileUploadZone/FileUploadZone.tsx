'use client'

import { Flex, Text } from '@radix-ui/themes'
import { ImageIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'
import { MAX_FILE_SIZE_MB } from '@helpers/isValidFileSize'
import { ImageFileFormat } from '@server/Sharp'
import type { TextSize } from '@lib/theme'
import styles from './FileUploadZone.module.css'

const uploadTextSize: TextSize = {
  xs: '4',
  md: '5'
}
const descriptionTextSize: TextSize = {
  initial: '2',
  xs: '3'
}

function FileUploadZone({ children, isDragOver, ...actions }: ComponentProps) {
  return (
    <Flex
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
      {...actions}
    >
      <Flex asChild align='center' gap='2'>
        <Text as='span' weight='medium' size={uploadTextSize} mb='2'>
          Upload file
          <ImageIcon width='24px' height='24px' />
        </Text>
      </Flex>
      <Text as='p' align='center' size={descriptionTextSize}>
        Available file extensions: {Object.values(ImageFileFormat).slice(0, 4).join(', ')}...
      </Text>
      <Text as='p' align='center' size={descriptionTextSize}>
        Maximum file size: {MAX_FILE_SIZE_MB} MB
      </Text>
      {children}
    </Flex>
  )
}

const Uploader = withFileUploader(FileUploadZone)

export { Uploader as FileUploadZone }
