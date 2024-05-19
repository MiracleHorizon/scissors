import { type FC, useCallback } from 'react'
import { Card, Flex, Spinner, Text } from '@radix-ui/themes'
import MediaQuery from 'react-responsive'

import { FileImageIcon } from '@scissors/react-icons/FileImageIcon'

import { UploadedFileProperties } from './uploaded-file-properties'
import { ImageUploadDialog } from '@components/image-upload-dialog'
import { AlertConfirm } from '@components/alerts/alert-confirm'
import { ButtonDelete } from '@ui/button-delete'
import { useOutputStore } from '@stores/output'
import { useRequestStore } from '@stores/request'
import styles from './uploaded-file-card.module.css'

export const UploadedFileCard: FC<Props> = ({ file }) => {
  const isRequestLoading = useRequestStore(state => state.isLoading)

  const removeFile = useOutputStore(state => state.removeFile)

  const handleRemoveFile = useCallback(() => removeFile(), [removeFile])

  return (
    <Card size='2' className={styles.card}>
      <Flex align='center' height='100%' width='100%' className={styles.root}>
        <MediaQuery minWidth={601}>
          <Flex
            align='center'
            justify='center'
            flexShrink='0'
            height='100%'
            className={styles.cardInset}
          >
            <FileImageIcon width='28px' height='28px' />
          </Flex>
        </MediaQuery>

        <Flex width='100%' direction='column' gap='1' mr='auto' className={styles.content}>
          <Text title={file.name} truncate className={styles.fileName}>
            {file.name}
          </Text>
          <UploadedFileProperties file={file} />
        </Flex>

        {isRequestLoading ? (
          <Spinner mr='4' className={styles.spinner} />
        ) : (
          <Flex
            direction='column'
            justify='center'
            align='end'
            flexShrink='0'
            gap='1'
            pr='4'
            className={styles.buttonsContainer}
          >
            <ImageUploadDialog />
            <AlertConfirm
              title='Confirm deletion'
              description='Are you sure you want to continue?'
              confirmLabel='Delete'
              onConfirm={handleRemoveFile}
            >
              <ButtonDelete tooltipContent='Delete File' />
            </AlertConfirm>
          </Flex>
        )}
      </Flex>
    </Card>
  )
}

interface Props {
  file: File
}
