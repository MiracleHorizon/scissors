import { useCallback } from 'react'
import { Box, Card, Flex, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { ConfirmAlert } from '@components/alerts/ConfirmAlert'
import { FileIcon } from '@ui/icons/FileIcon'
import { LoadingSpinner } from '@ui/LoadingSpinner'
import { ButtonDelete } from '@ui/ButtonDelete'
import { ButtonImport } from '@ui/ButtonImport'
import { useOutputStore } from '@stores/output'
import { ALLOWED_IMAGE_FORMATS } from '@server/sharp'
import styles from './UploadedFileCard.module.css'

export function UploadedFileCard({ file, isLoading }: Props) {
  const setFile = useOutputStore(state => state.setFile)
  const removeFile = useOutputStore(state => state.removeFile)

  const handleRemoveFile = useCallback(() => removeFile(), [removeFile])

  return (
    <Box asChild width='100%'>
      <Card size='2'>
        <Flex align='center' justify='start'>
          <FileIcon width='22px' height='22px' />
          <Text as='span' ml='2' title={file.name} className={clsx(styles.fileName, 'truncate')}>
            {file.name}
          </Text>
          {isLoading ? (
            <LoadingSpinner ml='auto' />
          ) : (
            <Flex ml='auto' align='center' gap='1'>
              <ButtonImport
                accept={ALLOWED_IMAGE_FORMATS}
                setFile={setFile}
                tooltipContent='Upload New File'
              />
              <ConfirmAlert
                title='Confirm Deletion'
                description='Are you sure you want to continue?'
                onConfirm={handleRemoveFile}
              >
                <ButtonDelete tooltipDelay={600} tooltipContent='Delete File' />
              </ConfirmAlert>
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
