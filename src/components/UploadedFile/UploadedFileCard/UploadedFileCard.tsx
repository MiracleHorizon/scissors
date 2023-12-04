import { useCallback } from 'react'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import { FileIcon } from '@radix-ui/react-icons'
import cn from 'classnames'

import { LoadingSpinner } from '@ui/LoadingSpinner'
import { ButtonDelete } from '@ui/ButtonDelete'
import { ButtonFileUpload } from '@components/ButtonFileUpload'
import { useConvertStore } from '@stores/convert'
import { ALLOWED_IMAGE_FORMATS } from '@libs/Sharp'
import styles from './UploadedFileCard.module.css'

export function UploadedFileCard({ file, isLoading }: Props) {
  const setFile = useConvertStore(state => state.setFile)
  const removeFile = useConvertStore(state => state.removeFile)

  const handleRemoveFile = useCallback(() => removeFile(), [removeFile])

  return (
    <Box asChild width='100%'>
      <Card size='2'>
        <Flex align='center' justify='start'>
          <FileIcon width='20px' height='20px' />
          <Text as='span' ml='1' title={file.name} className={cn(styles.fileName, 'truncate')}>
            {file.name}
          </Text>
          {isLoading ? (
            <LoadingSpinner ml='auto' />
          ) : (
            <Flex ml='auto' align='center' gap='1'>
              <ButtonFileUpload accept={ALLOWED_IMAGE_FORMATS} setFile={setFile} />
              <ButtonDelete onClick={handleRemoveFile} />
            </Flex>
          )}
        </Flex>
      </Card>
    </Box>
  )
}

interface Props {
  file: File
  isLoading: boolean
}
