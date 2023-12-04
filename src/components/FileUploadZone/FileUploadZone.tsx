'use client'

import { Flex, Text } from '@radix-ui/themes'
import { ImageIcon } from '@radix-ui/react-icons'
import cn from 'classnames'

import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'
import { ConvertFormat } from '@libs/Sharp'
import type { TextSize } from '@libs/radix'
import styles from './FileUploadZone.module.css'

const uploadTextSize: TextSize = {
  initial: '3',
  sm: '4',
  md: '5'
}
const descriptionTextSize: TextSize = {
  initial: '2',
  xs: '3'
}

function FileUploadZone({ children, isDragOver, ...actions }: ComponentProps) {
  return (
    <Flex
      align='center'
      justify='center'
      direction='column'
      width='100%'
      p='2'
      m='auto'
      className={cn(styles.root, {
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
        Available file extensions: {Object.values(ConvertFormat).slice(0, 4).join(', ')}...
      </Text>
      {children}
    </Flex>
  )
}

const Uploader = withFileUploader(FileUploadZone)

export { Uploader as FileUploadZone }
