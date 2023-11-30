'use client'

import { useCallback } from 'react'
import { Flex, Text } from '@radix-ui/themes'
import { FileIcon } from '@radix-ui/react-icons'
import cn from 'classnames'

import { ButtonDelete } from '@ui/ButtonDelete.tsx'
import { LoadingSpinner } from '@ui/LoadingSpinner'
import { useConvertStore } from '@stores/convert'
import styles from './UploadedFile.module.css'

export function UploadedFile({ file, isLoading }: Props) {
  const removeFile = useConvertStore(state => state.removeFile)

  const handleRemoveFile = useCallback(() => removeFile(), [removeFile])

  return (
    <Flex align='center' justify='start' height='9' p='2' className={styles.root}>
      <FileIcon width='20px' height='20px' />
      <Text as='span' ml='1' title={file.name} className={cn(styles.text, 'truncate')}>
        {file.name}
      </Text>
      {isLoading ? (
        <LoadingSpinner ml='auto' />
      ) : (
        <ButtonDelete ml='auto' onClick={handleRemoveFile} />
      )}
    </Flex>
  )
}

interface Props {
  file: File
  isLoading: boolean
}
